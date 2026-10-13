/** Pièces communes aux calculateurs : libellés bilingues, pays, carats, badge du cours, lignes de résultat. */
import type { ReactNode } from 'react';
import SelectField from '../ui/SelectField';
import { COUNTRIES, KARATS, P, type Country } from '../../lib/engine/params';
import { displayStamp, formatNumber } from '../../lib/format';
import type { Spot } from '../../lib/live';

export type L = 'ar' | 'en';
export const T = (l: L, ar: string, en: string) => (l === 'ar' ? ar : en);

export const COUNTRY_NAME: Record<Country, { ar: string; en: string }> = {
  SA: { ar: 'السعودية', en: 'Saudi Arabia' },
  AE: { ar: 'الإمارات', en: 'UAE' },
  KW: { ar: 'الكويت', en: 'Kuwait' },
  QA: { ar: 'قطر', en: 'Qatar' },
  BH: { ar: 'البحرين', en: 'Bahrain' },
  OM: { ar: 'عُمان', en: 'Oman' },
};
export const cur = (c: Country) => P.countries[c].currency;

export function CountrySelect({ id, lang, value, onChange, help }: { id: string; lang: L; value: Country; onChange: (c: Country) => void; help?: string }) {
  return <SelectField id={id} label={T(lang, 'البلد', 'Country')} value={value} onChange={(v) => onChange(v as Country)} help={help}
    options={COUNTRIES.map((c) => ({ value: c, label: `${COUNTRY_NAME[c][lang]} (${cur(c)})` }))} />;
}
export function KaratSelect({ id, lang, value, onChange, label }: { id: string; lang: L; value: number; onChange: (k: number) => void; label?: string }) {
  return <SelectField id={id} label={label ?? T(lang, 'العيار', 'Karat')} value={String(value)} onChange={(v) => onChange(Number(v))}
    options={KARATS.map((k) => ({ value: String(k), label: T(lang, `عيار ${k}`, `${k}K`) }))} />;
}

/** Ligne d'état du cours : relevé du build, puis cours du moment. */
export function SpotLine({ spot, lang, country }: { spot: Spot; lang: L; country?: Country }) {
  const floating = country === 'KW' || country === 'QA';
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-2 text-xs text-navy-600" data-chrome>
      <span className={`live-dot ${spot.live ? '' : 'off'}`} aria-hidden="true" />
      <span>{spot.live ? T(lang, 'سعر الأونصة الآن', 'Ounce price now') : T(lang, 'آخر سعر مسجّل للأونصة', 'Last recorded ounce price')}: <bdi dir="ltr" className="tabular-nums">{formatNumber(spot.usdPerOz, 2, lang)} USD</bdi></span>
      <span>· {displayStamp(spot.at, lang)}</span>
      <span>· gold-api.com</span>
      {floating && country && <span>· {T(lang, 'سعر الدولار', 'Dollar rate')}: <bdi dir="ltr" className="tabular-nums">{formatNumber(spot.fx[country], 4, lang)} {cur(country)}</bdi> ({spot.fxLive ? T(lang, 'سعر اليوم، ExchangeRate-API', 'today, ExchangeRate-API') : T(lang, 'آخر رقم مسجّل', 'last recorded rate')})</span>}
      {spot.failed && <span className="text-amber-800">· {T(lang, 'تعذّر تحديث السعر، المعروض آخر سعر مسجّل', 'Live update failed, showing the last recorded price')}</span>}
    </p>
  );
}

export function Row({ label, value, strong = false, bar }: { label: ReactNode; value: ReactNode; strong?: boolean; bar?: number }) {
  return (
    <tr>
      <td className={`py-1.5 pe-3 ${strong ? 'font-semibold text-navy-900' : 'text-navy-700'}`}>{label}{bar !== undefined && <span className="mt-1 block h-1 rounded bg-accent-500" style={{ width: `${Math.max(2, Math.min(100, bar * 100))}%` }} />}</td>
      <td className={`tabular-nums py-1.5 text-end ${strong ? 'font-semibold text-navy-900' : 'text-navy-900'}`}>{value}</td>
    </tr>
  );
}

/** Cadre d'un calculateur : champs à gauche (droite en arabe), résultat à côté (`data-resultat`). */
export function Frame({ title, fields, result, foot, mini = false }: { title?: string; fields: ReactNode; result: ReactNode; foot?: ReactNode; mini?: boolean }) {
  return (
    <div className={`not-prose rechner rounded-lg border border-accent-300 bg-white p-4 sm:p-5 ${mini ? 'my-6' : ''}`} data-chrome>
      {title && <p className="mb-3 text-base font-semibold text-navy-900">{title}</p>}
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <form className="grid content-start gap-4" onSubmit={(e) => e.preventDefault()} {...(mini ? { 'data-simulateur-secondaire': '' } : {})}>{fields}</form>
        <div data-resultat aria-live="polite" className="rounded-lg bg-accent-50 p-4">{result}</div>
      </div>
      {foot}
    </div>
  );
}

export function Big({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (<>
    <p className="text-sm font-medium text-navy-700">{label}</p>
    <p className="price-hero mt-1 text-[2.2rem] font-bold leading-tight text-navy-900"><bdi>{value}</bdi></p>
    {sub && <p className="mt-1 text-sm text-navy-700">{sub}</p>}
  </>);
}
