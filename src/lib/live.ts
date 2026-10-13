/**
 * Cours du moment, lu par le navigateur APRÈS le premier rendu (RECETTE §17.5) :
 *  - premier rendu = relevé du build (spot-snapshot.json), identique au HTML servi ;
 *  - puis useEffect → https://api.gold-api.com/price/XAU (CORS ouvert, usage commercial permis,
 *    conditions §9) et, pour KWD et QAR, https://open.er-api.com/v6/latest/USD (attribution affichée).
 * Une seule requête par page et par source, mise en commun entre les îles ; rafraîchie toutes les
 * 5 minutes tant que l'onglet est visible (bien en deçà de « plusieurs requêtes par seconde », §4 des
 * conditions gold-api). Aucune donnée du visiteur n'est envoyée : ce sont de simples GET publics.
 */
import { useEffect, useState } from 'react';
import { SNAPSHOT, buildFx, type Country } from './engine/params';

export interface Spot { usdPerOz: number; at: string; live: boolean; fx: Record<Country, number>; fxLive: boolean; failed: boolean }

const initial: Spot = { usdPerOz: SNAPSHOT.usdPerOz, at: SNAPSHOT.at, live: false, fx: buildFx(), fxLive: false, failed: false };
let current: Spot = initial;
const subs = new Set<(s: Spot) => void>();
let started = false;

async function refresh() {
  try {
    const r = await fetch('https://api.gold-api.com/price/XAU', { cache: 'no-store' });
    const g = await r.json();
    if (!(g.price > 100 && g.price < 100000)) throw new Error('bornes');
    const fx = { ...current.fx }; let fxLive = current.fxLive;
    try {
      const e = await (await fetch('https://open.er-api.com/v6/latest/USD')).json();
      if (e?.rates?.KWD > 0.2 && e.rates.KWD < 0.5) fx.KW = e.rates.KWD;
      if (e?.rates?.QAR > 3 && e.rates.QAR < 4.5) fx.QA = e.rates.QAR;
      fxLive = !!(e?.rates?.KWD && e?.rates?.QAR);
    } catch { /* on garde le taux du build */ }
    current = { usdPerOz: g.price, at: g.updatedAt ?? new Date().toISOString(), live: true, fx, fxLive, failed: false };
  } catch {
    current = { ...current, failed: true };
  }
  subs.forEach((f) => f(current));
}

export function useSpot(): Spot {
  const [s, setS] = useState<Spot>(initial);
  useEffect(() => {
    subs.add(setS);
    if (!started) {
      started = true;
      refresh();
      setInterval(() => { if (document.visibilityState === 'visible') refresh(); }, 5 * 60 * 1000);
    } else setS(current);
    return () => { subs.delete(setS); };
  }, []);
  return s;
}
