/**
 * Moteur du site : fonctions pures, testées (tests/gold.test.ts). Aucune valeur en dur : les
 * constantes viennent de params-2026.json, le cours vient de l'appelant.
 *
 * Convention du marché du Golfe : le prix d'un gramme de k carats = prix du gramme de 24 × k / 24.
 * Le prix du gramme de 24 = cours de l'once (USD) ÷ grammes par once troy × taux de la devise.
 */
import { P, type Karat, type Country } from './params';

export const OZ = P.units.troyOunceGrams;

/** Prix d'un gramme de 24 carats dans la devise (perUsd = unités de devise pour 1 USD). */
export function gram24(usdPerOz: number, perUsd: number): number {
  return (usdPerOz / OZ) * perUsd;
}

/** Prix d'un gramme d'un carat donné, convention k/24. */
export function gramKarat(usdPerOz: number, perUsd: number, k: number): number {
  return gram24(usdPerOz, perUsd) * (k / 24);
}

/** Tableau des carats publiés par le site (24, 22, 21, 18) pour une devise. */
export function karatTable(usdPerOz: number, perUsd: number): Array<{ k: Karat; gram: number }> {
  return P.karats.map(({ k }) => ({ k, gram: gramKarat(usdPerOz, perUsd, k) }));
}

/** Pureté en millièmes du site (999, 916, 875, 750) : sert au métal fin (zakat). */
export function purity(k: number): number {
  const row = P.karats.find((x) => x.k === k);
  return row ? row.purity : k / 24;
}

export type MakingMode = 'perGram' | 'percent' | 'fixed';

export interface JewelInput {
  grams: number;
  k: number;
  /** Prix du gramme de 24 retenu (cours du site ou prix affiché par le bijoutier). */
  price24: number;
  makingMode: MakingMode;
  /** Façon : montant par gramme, pourcentage (0,08 = 8 %) ou montant fixe pour la pièce. */
  making: number;
  vatRate: number;
  /** Remise négociée sur la façon seulement (0,2 = 20 %). */
  makingDiscount?: number;
}

export interface JewelOut { goldValue: number; making: number; subtotal: number; vat: number; total: number; perGram: number; makingShare: number }

/** Prix d'un bijou : valeur du métal au carat + façon (après remise) + TVA sur le tout. */
export function jewelleryPrice(i: JewelInput): JewelOut {
  const g = Math.max(0, i.grams);
  const goldValue = g * i.price24 * (i.k / 24);
  let making = i.makingMode === 'perGram' ? g * i.making : i.makingMode === 'percent' ? goldValue * i.making : i.making;
  making = Math.max(0, making * (1 - Math.min(1, Math.max(0, i.makingDiscount ?? 0))));
  const subtotal = goldValue + making;
  const vat = subtotal * Math.max(0, i.vatRate);
  const total = subtotal + vat;
  return { goldValue, making, subtotal, vat, total, perGram: g > 0 ? total / g : 0, makingShare: subtotal > 0 ? making / subtotal : 0 };
}

/** Taux de TVA applicable à une pièce dans un pays : bijou au taux normal ; lingot ou pièce
 *  d'investissement (≥ 99 %) au taux zéro selon la règle du pays. `firstSupply` : le vendeur est le
 *  producteur ou l'affineur (seul cas zéro en Arabie saoudite et à Oman). */
export function vatFor(country: Country, kind: 'jewel' | 'bar', firstSupply = false): number {
  const c = P.countries[country];
  if (kind === 'jewel') return c.vat;
  if (c.investmentZero === 'all') return 0;
  if (c.investmentZero === 'first-supply') return firstSupply ? 0 : c.vat;
  return c.vat;
}

/** Revente d'or usagé : valeur au cours du carat, moins la décote du commerçant. */
export function buyback(grams: number, k: number, price24: number, deductionRate: number): { metal: number; deduction: number; payout: number } {
  const metal = Math.max(0, grams) * price24 * (k / 24);
  const deduction = metal * Math.min(1, Math.max(0, deductionRate));
  return { metal, deduction, payout: metal - deduction };
}

/** Écart achat / revente sur une même pièce, en devise et en %. */
export function roundTrip(buyTotal: number, sellPayout: number): { loss: number; lossRate: number } {
  const loss = buyTotal - sellPayout;
  return { loss, lossRate: buyTotal > 0 ? loss / buyTotal : 0 };
}

/** Zakat de l'or : métal fin (24 équivalent) comparé au nisab ; 2,5 % de la valeur si atteint. */
export function zakat(holdings: Array<{ grams: number; k: number }>, price24: number, nisabGrams: number): { fine: number; reached: boolean; value: number; due: number; dueGrams: number } {
  const fine = holdings.reduce((s, h) => s + Math.max(0, h.grams) * (h.k / 24), 0);
  const reached = fine >= nisabGrams && nisabGrams > 0;
  const value = fine * price24;
  const due = reached ? value * P.zakat.rate : 0;
  return { fine, reached, value, due, dueGrams: reached ? fine * P.zakat.rate : 0 };
}

/** Remboursement de TVA aux touristes aux EAU (décision FTA n° 2 de 2018 modifiée) :
 *  13 % de la TVA retenus + 4,8 AED par demande, achat TTC d'au moins 250 AED chez le même vendeur. */
export function touristRefund(priceInclVatAed: number, claims = 1): { vat: number; fee: number; refund: number; eligible: boolean; cashCapped: boolean } {
  const r = P.uaeTouristRefund;
  const vatRate = P.countries.AE.vat;
  const vat = priceInclVatAed - priceInclVatAed / (1 + vatRate);
  const eligible = priceInclVatAed >= r.minPurchaseAed;
  const fee = eligible ? vat * r.adminFeeRate + r.fixedFeeAed * Math.max(1, claims) : 0;
  const refund = eligible ? Math.max(0, vat - fee) : 0;
  return { vat, fee, refund, eligible, cashCapped: refund > r.cashCapAed };
}

/** Conversion d'unités de masse vers le gramme. */
export function toGrams(value: number, unit: 'g' | 'oz' | 'kg' | 'tola'): number {
  if (unit === 'oz') return value * OZ;
  if (unit === 'kg') return value * 1000;
  if (unit === 'tola') return value * P.units.tolaGrains * P.units.grainGrams;
  return value;
}

/** Équivalence entre carats : grammes de 24 contenus dans une pièce, ou grammes d'un autre carat
 *  pour la même quantité d'or (convention k/24). */
export function karatSwap(grams: number, fromK: number, toK: number): number {
  return toK > 0 ? (grams * fromK) / toK : 0;
}

/** Écart du prix affiché par un bijoutier par rapport à la valeur du métal calculée par le site. */
export function boardPremium(boardPrice: number, metalPrice: number): number {
  return metalPrice > 0 ? boardPrice / metalPrice - 1 : 0;
}
