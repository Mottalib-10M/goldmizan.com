/** Outils d'écriture (`Helpers`) passés au corps de chaque page. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { P, type SourceKey } from './engine/params';
import type { Helpers } from './page-types';
import { formatNumber, formatDecimal, formatPercent, money, displayDate } from './format';

const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');

export function helpers(lang: Locale): Helpers {
  return {
    lang, P,
    a: (id, text) => {
      if (!ROUTES.some((r) => r.id === id)) throw new Error(`lien interne inconnu : ${id}`);
      return `<a href="${route(id, lang)}">${text}</a>`;
    },
    num: (n, d = 0) => formatNumber(n, d, lang),
    dec: (n, m = 4) => formatDecimal(n, m, lang),
    pct: (x, d = 1) => formatPercent(x, d, lang),
    money: (n, cur, d) => money(n, cur, lang, d),
    date: (iso) => displayDate(iso, lang),
    src: (key: SourceKey, text?: string) => { const s = P.sources[key]; return `<a href="${s.url}" target="_blank" rel="nofollow noopener noreferrer">${text ?? s.label[lang]}</a>`; },
    table: (headers, rows, caption) => `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-start text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h) => `<th scope="col" class="px-3 py-2 text-start font-semibold text-navy-900">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr class="border-b border-navy-100">${r.map((c) => `<td class="tabular-nums px-3 py-2 text-start text-navy-800">${typeof c === 'number' ? esc(formatNumber(c, 0, lang)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
  };
}

/** Jetons des textes statiques (titre, description, bloc citable, FAQ) remplacés par la valeur du
 *  fichier de paramètres, au format de la langue : une valeur réglementaire ne s'écrit jamais en dur
 *  (RECETTE §17.4, point 7). Ex. « {vat.SA} » → « 15% », « {peg.AE} » → « 3.6725 ». */
export function fill(s: string, lang: Locale): string {
  const c = P.countries;
  const R = P.uaeTouristRefund;
  const map: Record<string, string> = {
    'vat.SA': formatPercent(c.SA.vat, 0, lang), 'vat.AE': formatPercent(c.AE.vat, 0, lang), 'vat.BH': formatPercent(c.BH.vat, 0, lang), 'vat.OM': formatPercent(c.OM.vat, 0, lang),
    'peg.SA': formatDecimal(c.SA.perUsd, 4, lang), 'peg.AE': formatDecimal(c.AE.perUsd, 4, lang), 'peg.BH': formatDecimal(c.BH.perUsd, 4, lang), 'peg.OMusd': formatDecimal(2.6008, 4, lang),
    'peg.KW': formatDecimal(c.KW.perUsd, 4, lang), 'peg.QA': formatDecimal(c.QA.perUsd, 4, lang),
    'oz': formatDecimal(P.units.troyOunceGrams, 7, lang), 'oz2': formatDecimal(P.units.troyOunceGrams, 2, lang),
    'tola': formatDecimal(P.units.tolaGrains * P.units.grainGrams, 4, lang), 'grain': formatDecimal(P.units.grainGrams, 8, lang),
    'zakat.rate': formatPercent(P.zakat.rate, 1, lang), 'nisab': formatNumber(P.zakat.nisabGramsCommon, 0, lang), 'mithqal': formatNumber(P.zakat.nisabMithqal, 0, lang),
    'tourist.fee': formatPercent(R.adminFeeRate, 0, lang), 'tourist.fixed': formatDecimal(R.fixedFeeAed, 1, lang), 'tourist.min': formatNumber(R.minPurchaseAed, 0, lang), 'tourist.days': formatNumber(R.exportDays, 0, lang), 'tourist.cap': formatNumber(R.cashCapAed, 0, lang),
    'year': String(P.year),
  };
  return s.replace(/\{([a-zA-Z.0-9]+)\}/g, (m, k) => { if (!(k in map)) throw new Error(`jeton inconnu ${m}`); return map[k]; });
}
