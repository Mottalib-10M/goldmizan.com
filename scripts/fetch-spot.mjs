#!/usr/bin/env node
/**
 * Relevé du cours au build (RECETTE §4, brief 2026-10-12 « données en direct »).
 * - Or : https://api.gold-api.com/price/XAU (gold-api.com, conditions §9 : usage commercial permis,
 *   y compris sur un site web ; CORS ouvert). Relu le 2026-10-13.
 * - Change KWD et QAR : https://open.er-api.com/v6/latest/USD (ExchangeRate-API, accès ouvert :
 *   usage commercial permis, attribution obligatoire, revente du flux interdite). Relu le 2026-10-13.
 * Le fichier écrit (src/data/spot-snapshot.json) donne le premier rendu de chaque page ; le navigateur
 * le remplace ensuite par le cours du moment. En cas d'échec réseau, le fichier existant est gardé tel
 * quel : la page affiche alors honnêtement la date du dernier relevé.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const F = new URL('../src/data/spot-snapshot.json', import.meta.url);
const old = existsSync(F) ? JSON.parse(readFileSync(F, 'utf8')) : null;
async function j(u) { const r = await fetch(u, { signal: AbortSignal.timeout(15000) }); if (!r.ok) throw new Error(`${u} ${r.status}`); return r.json(); }
try {
  const g = await j('https://api.gold-api.com/price/XAU');
  if (!(g.price > 100 && g.price < 100000)) throw new Error('cours hors bornes');
  let fx = old?.fx ?? null, fxAt = old?.fxAt ?? null;
  try {
    const e = await j('https://open.er-api.com/v6/latest/USD');
    if (e.result === 'success' && e.rates.KWD && e.rates.QAR) { fx = { KWD: e.rates.KWD, QAR: e.rates.QAR }; fxAt = new Date(e.time_last_update_unix * 1000).toISOString(); }
  } catch (err) { console.warn('change non relevé :', err.message); }
  const snap = { usdPerOz: Math.round(g.price * 100) / 100, at: g.updatedAt ?? new Date().toISOString(), source: 'gold-api.com', fx, fxAt };
  writeFileSync(F, JSON.stringify(snap, null, 1) + '\n');
  console.log(`cours relevé : ${snap.usdPerOz} USD/oz à ${snap.at}`);
} catch (err) {
  if (!old) { console.error('aucun relevé et aucun fichier existant :', err.message); process.exit(1); }
  console.warn(`relevé impossible (${err.message}) : on garde celui du ${old.at}`);
}
