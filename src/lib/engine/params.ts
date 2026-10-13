/** Paramètres 2026 (RECETTE §4) : toute valeur réglementaire se lit ici, jamais en dur dans une page. */
import raw from '../../data/params-2026.json';
import snapRaw from '../../data/spot-snapshot.json';

export type Country = 'SA' | 'AE' | 'KW' | 'QA' | 'BH' | 'OM';
export const COUNTRIES: Country[] = ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'];
export type Karat = 24 | 22 | 21 | 18;
export const KARATS: Karat[] = [24, 22, 21, 18];

export interface CountryParams {
  currency: string;
  perUsd: number;
  fx: 'peg' | 'live';
  vat: number;
  /** Taux zéro du métal d'investissement (≥ 99 %) : 'all' (EAU, toute vente), 'first-supply' (premier
   *  fournisseur seulement : producteur ou affineur), 'unverified', 'none' (pas de TVA). */
  investmentZero: 'all' | 'first-supply' | 'unverified' | 'none';
  source: string;
  vatSource: string;
}

export interface Source { url: string; label: { ar: string; en: string } }

export interface Params {
  year: number;
  retrieved_at: string;
  units: { troyOunceGrams: number; grainGrams: number; tolaGrains: number };
  karats: Array<{ k: Karat; purity: number; fineness: string }>;
  countries: Record<Country, CountryParams>;
  uaeTouristRefund: { adminFeeRate: number; fixedFeeAed: number; minPurchaseAed: number; cashCapAed: number; exportDays: number };
  zakat: { rate: number; nisabMithqal: number; nisabGramsCommon: number };
  sources: Record<string, Source>;
}

export const P = raw as unknown as Params;
export type SourceKey = keyof typeof raw.sources;

export interface Snapshot { usdPerOz: number; at: string; source: string; fx: { KWD: number; QAR: number } | null; fxAt: string | null }
export const SNAPSHOT = snapRaw as Snapshot;

/** Taux de change du build : ancrage officiel (SA, AE, BH, OM) ou relevé du build (KW, QA). */
export function buildFx(): Record<Country, number> {
  const out = {} as Record<Country, number>;
  for (const c of COUNTRIES) out[c] = P.countries[c].perUsd;
  if (SNAPSHOT.fx) { out.KW = SNAPSHOT.fx.KWD; out.QA = SNAPSHOT.fx.QAR; }
  return out;
}
