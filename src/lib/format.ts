/** Formatage localisé (RECETTE §4, §4.1) : la langue de la page choisit les séparateurs.
 *  Arabe : chiffres latins (ar-u-nu-latn), comme les tableaux des bijoutiers du Golfe. */
import { NUMBER_LOCALES } from '../data/site-config';

export type Lang = 'ar' | 'en';
const cache = new Map<string, Intl.NumberFormat>();
function nf(lang: string, opts: Intl.NumberFormatOptions): Intl.NumberFormat {
  const tag = NUMBER_LOCALES[lang] ?? 'en-AE';
  const k = tag + JSON.stringify(opts);
  if (!cache.has(k)) cache.set(k, new Intl.NumberFormat(tag, opts));
  return cache.get(k)!;
}
export function formatNumber(value: number, decimals = 0, lang: string = 'ar'): string {
  return nf(lang, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}
/** Nombre cité depuis les paramètres : décimales utiles seulement (3.6725, 0.376). */
export function formatDecimal(value: number, max = 4, lang: string = 'ar'): string {
  return nf(lang, { maximumFractionDigits: max }).format(value);
}
/** Pourcentage depuis une fraction : « 15% » en arabe comme en anglais, insécable avant % (§10.3). */
export function formatPercent(value: number, decimals = 1, lang: string = 'ar'): string {
  const n = nf(lang, { maximumFractionDigits: decimals }).format(value * 100);
  return lang === 'ar' ? `${n}%` : `${n}%`;
}

/** Nom court des devises, dans la langue de la page. */
export const CUR: Record<string, { ar: string; en: string; dec: number }> = {
  SAR: { ar: 'ريال', en: 'SAR', dec: 2 },
  AED: { ar: 'درهم', en: 'AED', dec: 2 },
  KWD: { ar: 'دينار', en: 'KWD', dec: 3 },
  QAR: { ar: 'ريال قطري', en: 'QAR', dec: 2 },
  BHD: { ar: 'دينار بحريني', en: 'BHD', dec: 3 },
  OMR: { ar: 'ريال عماني', en: 'OMR', dec: 3 },
  USD: { ar: 'دولار', en: 'USD', dec: 2 },
};

/** Montant avec sa devise. `decimals` par défaut : 0 pour un total (RECETTE §4.1), sauf devises à
 *  trois décimales (KWD, BHD, OMR) où le gramme se lit au fils près : on garde alors 2 décimales. */
export function money(value: number, cur: string, lang: string = 'ar', decimals?: number): string {
  const c = CUR[cur] ?? { ar: cur, en: cur, dec: 2 };
  const d = decimals ?? 0;
  const n = formatNumber(value, d, lang);
  return lang === 'ar' ? `${n} ${c.ar}` : `${c.en} ${n}`;
}
/** Prix d'un gramme : deux décimales (3 pour KWD, BHD, OMR), c'est la façon dont les bijoutiers affichent. */
export function gramMoney(value: number, cur: string, lang: string = 'ar'): string {
  const dec = (CUR[cur]?.dec ?? 2);
  return money(value, cur, lang, dec);
}
/** Unité de devise seule (suffixe d'un champ). */
export const curLabel = (cur: string, lang: string) => (CUR[cur]?.[lang as Lang] ?? cur);

export function parseLocaleNumber(input: string): number {
  const cleaned = input.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/٫/g, '.').replace(/٬/g, ',').replace(/[^\d.,-]/g, '');
  const lastComma = cleaned.lastIndexOf(','), lastDot = cleaned.lastIndexOf('.');
  let s = cleaned;
  if (lastComma > lastDot && !/^-?\d{1,3}(,\d{3})+$/.test(cleaned)) s = cleaned.replace(/\./g, '').replace(',', '.');
  else s = cleaned.replace(/,/g, '');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

/** Date écrite dans la langue de la page, fuseau UTC (registre 2026-09-21). */
export function displayDate(iso: string, lang: string): string {
  const tag = lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB';
  return new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString(tag, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
/** Date et heure UTC d'un relevé de cours (« 13 أكتوبر 2026، 01:49 بتوقيت غرينتش »). */
export function displayStamp(iso: string, lang: string): string {
  const d = new Date(iso);
  const hh = String(d.getUTCHours()).padStart(2, '0'), mm = String(d.getUTCMinutes()).padStart(2, '0');
  return lang === 'ar' ? `${displayDate(iso, lang)}، ${hh}:${mm} بتوقيت غرينتش` : `${displayDate(iso, lang)}, ${hh}:${mm} GMT`;
}
