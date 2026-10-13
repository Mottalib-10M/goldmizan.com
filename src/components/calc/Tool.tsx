/**
 * Tous les calculateurs du site, choisis par `tool`. Chacun appelle le moteur (lib/engine/gold.ts) et
 * lit le cours par useSpot() : premier rendu = relevé du build (HTML servi), puis cours du moment
 * (RECETTE §17.5). L'état ne s'écrit dans l'adresse qu'après une action (url-state.ts, §18.1).
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { useSpot } from '../../lib/live';
import { gram24, gramKarat, karatTable, jewelleryPrice, vatFor, buyback, zakat, touristRefund, toGrams, karatSwap, roundTrip, type MakingMode } from '../../lib/engine/gold';
import { P, COUNTRIES, KARATS, type Country } from '../../lib/engine/params';
import { money, gramMoney, formatNumber, formatPercent, curLabel } from '../../lib/format';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import history from '../../data/history-monthly.json';
import { T, COUNTRY_NAME, cur, CountrySelect, KaratSelect, SpotLine, Row, Frame, Big, type L } from './common';

export interface ToolArgs { tool: string; lang: L; country?: Country; karat?: number; mini?: boolean; methodHref?: string }

const isCountry = (s: string): s is Country => (COUNTRIES as string[]).includes(s);

/** Prix du gramme de 24 : cours du site, ou prix saisi par le visiteur (tableau de son bijoutier). */
function usePrice24(country: Country, own: number) {
  const spot = useSpot();
  const site = gram24(spot.usdPerOz, spot.fx[country]);
  return { spot, site, price24: own > 0 ? own : site };
}

function Price24Field({ id, lang, country, site, own, setOwn }: { id: string; lang: L; country: Country; site: number; own: number; setOwn: (v: number) => void }) {
  return <NumberField id={id} lang={lang} label={T(lang, 'سعر غرام عيار 24 المعتمد', '24K gram price used')} value={own > 0 ? own : Math.round(site * 100) / 100} onChange={setOwn} decimals={2} unit={curLabel(cur(country), lang)} max={100000}
    help={T(lang, 'يُملأ تلقائيًا من سعر الأونصة؛ اكتب سعر لوحة محلك إن أردت', 'Filled from the ounce price; type your shop board price if you prefer')} />;
}

export default function Tool(a: ToolArgs) {
  switch (a.tool) {
    case 'board': return <Board {...a} />;
    case 'jewel': return <Jewel {...a} />;
    case 'sell': return <Sell {...a} />;
    case 'zakat': return <Zakat {...a} />;
    case 'tourist': return <Tourist {...a} />;
    case 'units': return <Units {...a} />;
    case 'compare': return <Compare {...a} />;
    case 'swap': return <Swap {...a} />;
    case 'spread': return <Spread {...a} />;
    case 'history': return <History {...a} />;
    case 'bar': return <Bar {...a} />;
    case 'making': return <Making {...a} />;
    case 'vat': return <Vat {...a} />;
    default: return null;
  }
}

/* ---------- Tableau du jour : prix par carat, et prix d'un poids ---------- */
function Board({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [k, setK] = useState(karat);
  const [g, setG] = useState(10);
  useEffect(() => { const u = readParams(location.search); const uc = str(u, 'c', country); if (isCountry(uc)) setC(uc); setK(num(u, 'k', karat)); setG(num(u, 'g', 10)); }, []);
  useEffect(() => { updateURL({ c, k, g }); }, [c, k, g]);
  const spot = useSpot();
  const fx = spot.fx[c];
  const rows = karatTable(spot.usdPerOz, fx);
  const price = gramKarat(spot.usdPerOz, fx, k) * g;
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <CountrySelect id={`b-c-${k}`} lang={lang} value={c} onChange={setC} />
        <div className="grid grid-cols-2 gap-x-4"><KaratSelect id={`b-k-${k}`} lang={lang} value={k} onChange={setK} /><NumberField id={`b-g-${k}`} lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} /></div>
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, `قيمة ${formatNumber(g, 2, lang)} غرام عيار ${k} في ${COUNTRY_NAME[c].ar}`, `${formatNumber(g, 2, lang)} g of ${k}K in ${COUNTRY_NAME[c].en}`)} value={money(price, C, lang)} sub={T(lang, 'قيمة الذهب الخام قبل المصنعية والضريبة', 'Metal value before making charges and VAT')} />
        <table className="mt-3 w-full text-sm"><caption className="sr-only">{T(lang, 'سعر الغرام حسب العيار', 'Gram price by karat')}</caption><tbody className="divide-y divide-accent-200">
          {rows.map((r) => <Row key={r.k} label={T(lang, `غرام عيار ${r.k}`, `1 g ${r.k}K`)} value={gramMoney(r.gram, C, lang)} strong={r.k === k} />)}
          <Row label={T(lang, 'الأونصة (31.10 غرام) عيار 24', 'Ounce (31.10 g) 24K')} value={money(gram24(spot.usdPerOz, fx) * P.units.troyOunceGrams, C, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Prix d'un bijou : métal + façon + TVA ---------- */
function Jewel({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [k, setK] = useState(karat);
  const [g, setG] = useState(10);
  const [mode, setMode] = useState<MakingMode>('percent');
  const [mk, setMk] = useState(8);
  const [own, setOwn] = useState(0);
  useEffect(() => { const u = readParams(location.search); const uc = str(u, 'c', country); if (isCountry(uc)) setC(uc); setK(num(u, 'k', karat)); setG(num(u, 'g', 10)); const um = str(u, 'm', 'percent'); if (um === 'percent' || um === 'perGram') setMode(um); setMk(num(u, 'f', mk)); }, []);
  useEffect(() => { updateURL({ c, k, g, m: mode, f: mk }); }, [c, k, g, mode, mk]);
  const { spot, site, price24 } = usePrice24(c, own);
  const vat = P.countries[c].vat;
  const r = jewelleryPrice({ grams: g, k, price24, makingMode: mode, making: mode === 'percent' ? mk / 100 : mk, vatRate: vat });
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="j-c" lang={lang} value={c} onChange={(x) => { setC(x); setOwn(0); }} /><KaratSelect id="j-k" lang={lang} value={k} onChange={setK} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="j-g" lang={lang} label={T(lang, 'وزن القطعة', 'Weight of the piece')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} />
          <Toggle id="j-mode" label={T(lang, 'طريقة المصنعية', 'Making charge basis')} value={mode} onChange={(v) => setMode(v as MakingMode)} options={[{ value: 'perGram', label: T(lang, 'للغرام', 'Per gram') }, { value: 'percent', label: '%' }]} /></div>
        <NumberField id="j-mk" lang={lang} label={mode === 'percent' ? T(lang, 'المصنعية بالنسبة من قيمة الذهب', 'Making charge as % of gold value') : T(lang, 'المصنعية لكل غرام', 'Making charge per gram')} value={mk} onChange={setMk} decimals={2} unit={mode === 'percent' ? '%' : curLabel(C, lang)} max={mode === 'percent' ? 100 : 10000}
          help={T(lang, 'رقم يحدده المحل لكل قطعة؛ اسأل عنه قبل الوزن', 'Set by the shop for each piece; ask before it is weighed')} />
        <Price24Field id="j-p" lang={lang} country={c} site={site} own={own} setOwn={setOwn} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'السعر النهائي المتوقع للقطعة', 'Expected final price of the piece')} value={money(r.total, C, lang)} sub={T(lang, `أي ${gramMoney(r.perGram, C, lang)} للغرام شاملًا كل شيء`, `that is ${gramMoney(r.perGram, C, lang)} per gram, all in`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, `ذهب عيار ${k}`, `${k}K gold`)} value={money(r.goldValue, C, lang)} bar={r.total ? r.goldValue / r.total : 0} />
          <Row label={T(lang, 'المصنعية', 'Making charge')} value={money(r.making, C, lang)} bar={r.total ? r.making / r.total : 0} />
          <Row label={vat > 0 ? T(lang, `ضريبة القيمة المضافة ${formatPercent(vat, 0, lang)} على الذهب والمصنعية`, `VAT ${formatPercent(vat, 0, lang)} on gold and making`) : T(lang, 'لا ضريبة قيمة مضافة في هذا البلد', 'No VAT in this country')} value={money(r.vat, C, lang)} bar={r.total ? r.vat / r.total : 0} />
          <Row label={T(lang, 'الإجمالي', 'Total')} value={money(r.total, C, lang)} strong />
        </tbody></table>
      </>} />
  );
}

/* ---------- Revente d'or usagé ---------- */
function Sell({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [k, setK] = useState(karat);
  const [g, setG] = useState(20);
  const [d, setD] = useState(0);
  const [offer, setOffer] = useState(0);
  useEffect(() => { const u = readParams(location.search); const uc = str(u, 'c', country); if (isCountry(uc)) setC(uc); setK(num(u, 'k', karat)); setG(num(u, 'g', 20)); setD(num(u, 'd', 0)); }, []);
  useEffect(() => { updateURL({ c, k, g, d }); }, [c, k, g, d]);
  const { spot, price24 } = usePrice24(c, 0);
  const r = buyback(g, k, price24, d / 100);
  const C = cur(c);
  const offerTotal = offer * g;
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="s-c" lang={lang} value={c} onChange={setC} /><KaratSelect id="s-k" lang={lang} value={k} onChange={setK} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="s-g" lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} />
          <NumberField id="s-d" lang={lang} label={T(lang, 'خصم المحل', 'Shop deduction')} value={d} onChange={setD} unit="%" decimals={1} max={100} /></div>
        <NumberField id="s-o" lang={lang} label={T(lang, 'السعر الذي عرضه المحل للغرام (اختياري)', 'Price the shop offered per gram (optional)')} value={offer} onChange={setOffer} decimals={2} unit={curLabel(C, lang)} max={100000}
          help={T(lang, 'اكتبه لترى الفرق عن قيمة الذهب الخام', 'Type it to see the gap with the metal value')} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'المبلغ المتوقع عند البيع', 'Expected payout')} value={money(r.payout, C, lang)} sub={T(lang, 'المصنعية لا تُسترد عند بيع المشغولات', 'Making charges are not paid back on resale')} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, `قيمة الذهب الخام عيار ${k}`, `Metal value at ${k}K`)} value={money(r.metal, C, lang)} />
          <Row label={T(lang, 'خصم المحل', 'Shop deduction')} value={money(r.deduction, C, lang)} />
          {offer > 0 && <Row label={T(lang, 'عرض المحل للوزن كله', 'Shop offer for the whole weight')} value={money(offerTotal, C, lang)} />}
          {offer > 0 && <Row label={T(lang, 'الفرق عن قيمة الذهب الخام', 'Gap with the metal value')} value={formatPercent(r.metal ? offerTotal / r.metal - 1 : 0, 1, lang)} strong />}
        </tbody></table>
      </>} />
  );
}

/* ---------- Zakat ---------- */
function Zakat({ lang, country = 'SA', mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [q, setQ] = useState<Record<number, number>>({ 24: 0, 22: 0, 21: 100, 18: 20 });
  const [nisab, setNisab] = useState(P.zakat.nisabGramsCommon);
  const { spot, price24 } = usePrice24(c, 0);
  const z = zakat(KARATS.map((k) => ({ grams: q[k], k })), price24, nisab);
  const C = cur(c);
  const set = (k: number) => (v: number) => setQ((o) => ({ ...o, [k]: v }));
  return (
    <Frame mini={mini}
      fields={<>
        <CountrySelect id="z-c" lang={lang} value={c} onChange={setC} />
        <div className="grid grid-cols-2 gap-x-4">{KARATS.map((k) => <NumberField key={k} id={`z-${k}`} lang={lang} label={T(lang, `غرامات عيار ${k}`, `Grams of ${k}K`)} value={q[k]} onChange={set(k)} unit={T(lang, 'غ', 'g')} decimals={2} max={1000000} />)}</div>
        <NumberField id="z-n" lang={lang} label={T(lang, 'النصاب بالغرام (ذهب خالص)', 'Nisab in grams of pure gold')} value={nisab} onChange={setNisab} unit={T(lang, 'غ', 'g')} decimals={2} max={1000}
          help={T(lang, `عشرون مثقالًا؛ الشائع ${formatNumber(P.zakat.nisabGramsCommon, 0, lang)} غرامًا، وغيّره إن اعتمدت تقديرًا آخر`, `20 mithqal; ${formatNumber(P.zakat.nisabGramsCommon, 0, lang)} g is the usual conversion, change it if you follow another`)} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'الزكاة الواجبة لهذا الحول', 'Zakat due for this lunar year')} value={money(z.due, C, lang)} sub={z.reached ? T(lang, `أو ${formatNumber(z.dueGrams, 2, lang)} غرام من الذهب الخالص`, `or ${formatNumber(z.dueGrams, 2, lang)} g of pure gold`) : T(lang, 'لم يبلغ ما تملكه النصاب', 'Your gold is below the nisab')} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'الذهب الخالص المعادل', 'Pure gold equivalent')} value={`${formatNumber(z.fine, 2, lang)} ${T(lang, 'غ', 'g')}`} />
          <Row label={T(lang, 'النصاب', 'Nisab')} value={`${formatNumber(nisab, 2, lang)} ${T(lang, 'غ', 'g')}`} />
          <Row label={T(lang, 'قيمة الذهب الخالص', 'Value of the pure gold')} value={money(z.value, C, lang)} />
          <Row label={T(lang, 'نسبة الزكاة', 'Zakat rate')} value={formatPercent(P.zakat.rate, 1, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Remboursement de TVA aux touristes (EAU) ---------- */
function Tourist({ lang, mini }: ToolArgs) {
  const [p, setP] = useState(5250);
  const [n, setN] = useState(1);
  const r = touristRefund(p, n);
  const R = P.uaeTouristRefund;
  return (
    <Frame mini={mini}
      fields={<>
        <NumberField id="t-p" lang={lang} label={T(lang, 'سعر القطعة شاملًا الضريبة', 'Price including VAT')} value={p} onChange={setP} unit={T(lang, 'درهم', 'AED')} max={10000000}
          help={T(lang, `الحد الأدنى ${formatNumber(R.minPurchaseAed, 0, lang)} درهم من البائع نفسه`, `Minimum AED ${formatNumber(R.minPurchaseAed, 0, lang)} from the same retailer`)} />
        <NumberField id="t-n" lang={lang} label={T(lang, 'عدد طلبات الاسترداد', 'Number of refund claims')} value={n} onChange={setN} max={100} help={T(lang, `رسم ثابت ${formatNumber(R.fixedFeeAed, 1, lang)} درهم لكل طلب`, `Fixed fee of AED ${formatNumber(R.fixedFeeAed, 1, lang)} per claim`)} />
      </>}
      result={<>
        <Big label={T(lang, 'المبلغ المسترد المتوقع', 'Expected refund')} value={money(r.refund, 'AED', lang)} sub={r.eligible ? T(lang, `يجب إخراج القطعة من الدولة خلال ${R.exportDays} يومًا`, `The piece must leave the country within ${R.exportDays} days`) : T(lang, 'الشراء دون الحد الأدنى', 'Purchase below the minimum')} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'الضريبة المدفوعة (5%)', 'VAT paid (5%)')} value={money(r.vat, 'AED', lang)} />
          <Row label={T(lang, `رسوم إدارية ${formatPercent(R.adminFeeRate, 0, lang)} من الضريبة + الرسم الثابت`, `Admin fee ${formatPercent(R.adminFeeRate, 0, lang)} of VAT + fixed fee`)} value={money(r.fee, 'AED', lang)} />
          <Row label={T(lang, 'الصافي المسترد', 'Net refund')} value={money(r.refund, 'AED', lang)} strong />
          {r.cashCapped && <Row label={T(lang, 'سقف الاسترداد النقدي في 24 ساعة', 'Cash refund cap per 24 hours')} value={money(R.cashCapAed, 'AED', lang)} />}
        </tbody></table>
      </>} />
  );
}

/* ---------- Unités : once, kilo, tola ---------- */
function Units({ lang, country = 'AE', mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [k, setK] = useState(24);
  const [qty, setQty] = useState(1);
  const [unit, setUnit] = useState<'oz' | 'kg' | 'tola' | 'g'>('oz');
  const spot = useSpot();
  const grams = toGrams(qty, unit);
  const value = gramKarat(spot.usdPerOz, spot.fx[c], k) * grams;
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="u-c" lang={lang} value={c} onChange={setC} /><KaratSelect id="u-k" lang={lang} value={k} onChange={setK} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="u-q" lang={lang} label={T(lang, 'الكمية', 'Quantity')} value={qty} onChange={setQty} decimals={3} max={100000} />
          <SelectField id="u-u" label={T(lang, 'الوحدة', 'Unit')} value={unit} onChange={(v) => setUnit(v as typeof unit)} options={[{ value: 'oz', label: T(lang, 'أونصة', 'Troy ounce') }, { value: 'kg', label: T(lang, 'كيلوغرام', 'Kilogram') }, { value: 'tola', label: T(lang, 'تولة', 'Tola') }, { value: 'g', label: T(lang, 'غرام', 'Gram') }]} /></div>
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'القيمة بسعر الذهب الخام', 'Value at the metal price')} value={money(value, C, lang)} sub={T(lang, `${formatNumber(grams, 3, lang)} غرام عيار ${k}`, `${formatNumber(grams, 3, lang)} g of ${k}K`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'الأونصة بالدولار', 'Ounce in US dollars')} value={money(spot.usdPerOz, 'USD', lang, 2)} />
          <Row label={T(lang, 'الأونصة بالغرام', 'Grams in a troy ounce')} value={formatNumber(P.units.troyOunceGrams, 4, lang)} />
          <Row label={T(lang, 'التولة بالغرام', 'Grams in a tola')} value={formatNumber(toGrams(1, 'tola'), 4, lang)} />
          <Row label={T(lang, `غرام عيار ${k}`, `1 g of ${k}K`)} value={gramMoney(gramKarat(spot.usdPerOz, spot.fx[c], k), C, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Comparer les six pays, TVA comprise ---------- */
function Compare({ lang, karat = 21, mini }: ToolArgs) {
  const [k, setK] = useState(karat);
  const [g, setG] = useState(20);
  const [mk, setMk] = useState(8);
  const spot = useSpot();
  const rows = COUNTRIES.map((c) => {
    const p24 = gram24(spot.usdPerOz, spot.fx[c]);
    const r = jewelleryPrice({ grams: g, k, price24: p24, makingMode: 'percent', making: mk / 100, vatRate: P.countries[c].vat });
    const usd = r.total / spot.fx[c];
    return { c, r, usd };
  }).sort((x, y) => x.usd - y.usd);
  const best = rows[0];
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><KaratSelect id="cmp-k" lang={lang} value={k} onChange={setK} /><NumberField id="cmp-g" lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} /></div>
        <NumberField id="cmp-m" lang={lang} label={T(lang, 'المصنعية بالنسبة من قيمة الذهب', 'Making charge as % of gold value')} value={mk} onChange={setMk} unit="%" decimals={1} max={100}
          help={T(lang, 'نسبة واحدة في كل البلدان لتظهر أثر الضريبة وحدها', 'One rate everywhere, so only VAT makes the difference')} />
        <SpotLine spot={spot} lang={lang} />
      </>}
      result={<>
        <Big label={T(lang, 'أرخص بلد لهذه القطعة شاملًا الضريبة', 'Cheapest country for this piece, VAT included')} value={COUNTRY_NAME[best.c][lang]} sub={money(best.r.total, cur(best.c), lang)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          {rows.map((x) => <Row key={x.c} label={`${COUNTRY_NAME[x.c][lang]} · ${formatPercent(P.countries[x.c].vat, 0, lang)}`} value={`${money(x.r.total, cur(x.c), lang)} · ${money(x.usd, 'USD', lang)}`} strong={x === best} />)}
        </tbody></table>
      </>} />
  );
}

/* ---------- Équivalence entre carats ---------- */
function Swap({ lang, country = 'SA', mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [g, setG] = useState(21);
  const [from, setFrom] = useState(21);
  const [to, setTo] = useState(24);
  const spot = useSpot();
  const out = karatSwap(g, from, to);
  const value = gramKarat(spot.usdPerOz, spot.fx[c], from) * g;
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="w-g" lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} /><CountrySelect id="w-c" lang={lang} value={c} onChange={setC} /></div>
        <div className="grid grid-cols-2 gap-x-4"><KaratSelect id="w-f" lang={lang} value={from} onChange={setFrom} label={T(lang, 'من عيار', 'From karat')} /><KaratSelect id="w-t" lang={lang} value={to} onChange={setTo} label={T(lang, 'إلى عيار', 'To karat')} /></div>
      </>}
      result={<>
        <Big label={T(lang, `ما يعادلها من عيار ${to}`, `Equivalent weight in ${to}K`)} value={`${formatNumber(out, 3, lang)} ${T(lang, 'غرام', 'g')}`} sub={T(lang, 'الكمية نفسها من الذهب الخالص', 'Same amount of pure gold')} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'ذهب خالص في القطعة', 'Pure gold in the piece')} value={`${formatNumber(karatSwap(g, from, 24), 3, lang)} ${T(lang, 'غ', 'g')}`} />
          <Row label={T(lang, 'قيمتها بسعر اليوم', 'Value at today’s price')} value={money(value, C, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Écart achat / revente ---------- */
function Spread({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [k, setK] = useState(karat);
  const [g, setG] = useState(10);
  const [mk, setMk] = useState(20);
  const [d, setD] = useState(2);
  const spot = useSpot();
  const p24 = gram24(spot.usdPerOz, spot.fx[c]);
  const buy = jewelleryPrice({ grams: g, k, price24: p24, makingMode: 'perGram', making: mk, vatRate: P.countries[c].vat });
  const sell = buyback(g, k, p24, d / 100);
  const rt = roundTrip(buy.total, sell.payout);
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="sp-c" lang={lang} value={c} onChange={setC} /><KaratSelect id="sp-k" lang={lang} value={k} onChange={setK} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="sp-g" lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} />
          <NumberField id="sp-m" lang={lang} label={T(lang, 'المصنعية للغرام', 'Making per gram')} value={mk} onChange={setMk} unit={curLabel(C, lang)} decimals={2} max={10000} /></div>
        <NumberField id="sp-d" lang={lang} label={T(lang, 'خصم المحل عند البيع', 'Shop deduction on resale')} value={d} onChange={setD} unit="%" decimals={1} max={100} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'ما تخسره لو بعتها اليوم', 'What you lose if you sell it today')} value={money(rt.loss, C, lang)} sub={T(lang, `${formatPercent(rt.lossRate, 1, lang)} من سعر الشراء`, `${formatPercent(rt.lossRate, 1, lang)} of the purchase price`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'سعر الشراء بالمصنعية والضريبة', 'Purchase price with making and VAT')} value={money(buy.total, C, lang)} />
          <Row label={T(lang, 'المبلغ عند البيع', 'Resale payout')} value={money(sell.payout, C, lang)} />
          <Row label={T(lang, 'منها مصنعية وضريبة لا تعودان', 'Of which making and VAT not returned')} value={money(buy.making + buy.vat, C, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Historique : ce que vaudrait aujourd'hui un achat passé ---------- */
const MONTHS = history.months as Array<{ m: string; usd: number }>;
function History({ lang, country = 'SA', mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [amount, setAmount] = useState(10000);
  const [m, setM] = useState(MONTHS[MONTHS.length - 61]?.m ?? MONTHS[0].m);
  const spot = useSpot();
  const row = MONTHS.find((x) => x.m === m) ?? MONTHS[0];
  const fx = spot.fx[c];
  const then24 = gram24(row.usd, fx);
  const grams = then24 > 0 ? amount / then24 : 0;
  const now = grams * gram24(spot.usdPerOz, fx);
  const C = cur(c);
  const opts = [...MONTHS].reverse().filter((_, i) => i % 3 === 0 || i < 12).map((x) => ({ value: x.m, label: x.m }));
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="h-c" lang={lang} value={c} onChange={setC} /><SelectField id="h-m" label={T(lang, 'شهر الشراء', 'Month of purchase')} value={m} onChange={setM} options={opts} /></div>
        <NumberField id="h-a" lang={lang} label={T(lang, 'المبلغ المستثمر في ذهب عيار 24', 'Amount put into 24K gold')} value={amount} onChange={setAmount} unit={curLabel(C, lang)} max={100000000}
          help={T(lang, 'بمتوسط سعر الشهر من البنك الدولي، دون مصنعية', 'At the World Bank monthly average, no making charge')} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'قيمتها اليوم', 'Worth today')} value={money(now, C, lang)} sub={T(lang, `${formatPercent(amount ? now / amount - 1 : 0, 1, lang)} منذ ${m}`, `${formatPercent(amount ? now / amount - 1 : 0, 1, lang)} since ${m}`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, `متوسط الأونصة في ${m}`, `Average ounce in ${m}`)} value={money(row.usd, 'USD', lang)} />
          <Row label={T(lang, 'الأونصة الآن', 'Ounce now')} value={money(spot.usdPerOz, 'USD', lang)} />
          <Row label={T(lang, 'الغرامات المشتراة', 'Grams bought')} value={`${formatNumber(grams, 2, lang)} ${T(lang, 'غ', 'g')}`} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Lingot : prime, TVA selon le pays et le vendeur ---------- */
const BARS = [1, 5, 10, 20, 50, 100, 1000];
function Bar({ lang, country = 'AE', mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [w, setW] = useState(10);
  const [prem, setPrem] = useState(2);
  const [first, setFirst] = useState('no');
  const spot = useSpot();
  const metal = gram24(spot.usdPerOz, spot.fx[c]) * w;
  const ht = metal * (1 + prem / 100);
  const rate = vatFor(c, 'bar', first === 'yes');
  const C = cur(c);
  const rule = P.countries[c].investmentZero;
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="bar-c" lang={lang} value={c} onChange={setC} />
          <SelectField id="bar-w" label={T(lang, 'وزن السبيكة', 'Bar weight')} value={String(w)} onChange={(v) => setW(Number(v))} options={BARS.map((b) => ({ value: String(b), label: b === 1000 ? T(lang, '1 كيلوغرام', '1 kg') : T(lang, `${b} غرام`, `${b} g`) }))} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="bar-p" lang={lang} label={T(lang, 'علاوة البائع فوق السعر', 'Seller premium over spot')} value={prem} onChange={setPrem} unit="%" decimals={2} max={100} />
          <Toggle id="bar-f" label={T(lang, 'البائع هو المصفاة أو المنتج؟', 'Seller is the refiner or producer?')} value={first} onChange={setFirst} options={[{ value: 'no', label: T(lang, 'لا', 'No') }, { value: 'yes', label: T(lang, 'نعم', 'Yes') }]} /></div>
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'سعر السبيكة المتوقع', 'Expected bar price')} value={money(ht * (1 + rate), C, lang)} sub={rate === 0 ? T(lang, 'بنسبة ضريبة صفر', 'At the zero VAT rate') : T(lang, `مع ضريبة ${formatPercent(rate, 0, lang)}`, `With ${formatPercent(rate, 0, lang)} VAT`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'قيمة الذهب الخالص', 'Pure gold value')} value={money(metal, C, lang)} />
          <Row label={T(lang, 'علاوة البائع', 'Seller premium')} value={money(ht - metal, C, lang)} />
          <Row label={T(lang, 'الضريبة', 'VAT')} value={money(ht * rate, C, lang)} />
          <Row label={T(lang, 'القاعدة المطبقة', 'Rule applied')} value={rule === 'all' ? T(lang, 'صفر لكل توريد', 'Zero on every sale') : rule === 'first-supply' ? T(lang, 'صفر لأول توريد فقط', 'Zero on first supply only') : rule === 'none' ? T(lang, 'لا ضريبة', 'No VAT') : T(lang, 'النسبة الأساسية', 'Standard rate')} />
        </tbody></table>
      </>} />
  );
}

/* ---------- Façon : au gramme ou en pourcentage ---------- */
function Making({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [c, setC] = useState<Country>(country);
  const [g, setG] = useState(15);
  const [pg, setPg] = useState(25);
  const [pc, setPc] = useState(8);
  const spot = useSpot();
  const p24 = gram24(spot.usdPerOz, spot.fx[c]);
  const vat = P.countries[c].vat;
  const a = jewelleryPrice({ grams: g, k: karat, price24: p24, makingMode: 'perGram', making: pg, vatRate: vat });
  const b = jewelleryPrice({ grams: g, k: karat, price24: p24, makingMode: 'percent', making: pc / 100, vatRate: vat });
  const breakEven = gramKarat(spot.usdPerOz, spot.fx[c], karat) * (pc / 100);
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><CountrySelect id="mk-c" lang={lang} value={c} onChange={setC} /><NumberField id="mk-g" lang={lang} label={T(lang, `وزن قطعة عيار ${karat}`, `Weight of a ${karat}K piece`)} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} /></div>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="mk-a" lang={lang} label={T(lang, 'عرض أ: للغرام', 'Offer A: per gram')} value={pg} onChange={setPg} unit={curLabel(C, lang)} decimals={2} max={10000} />
          <NumberField id="mk-b" lang={lang} label={T(lang, 'عرض ب: نسبة', 'Offer B: percentage')} value={pc} onChange={setPc} unit="%" decimals={1} max={100} /></div>
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, 'العرض الأرخص', 'Cheaper offer')} value={a.total <= b.total ? T(lang, 'أ (للغرام)', 'A (per gram)') : T(lang, 'ب (النسبة)', 'B (percentage)')} sub={T(lang, `الفرق ${money(Math.abs(a.total - b.total), C, lang)} شاملًا الضريبة`, `Difference ${money(Math.abs(a.total - b.total), C, lang)} including VAT`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'الإجمالي بالعرض أ', 'Total with offer A')} value={money(a.total, C, lang)} />
          <Row label={T(lang, 'الإجمالي بالعرض ب', 'Total with offer B')} value={money(b.total, C, lang)} />
          <Row label={T(lang, 'النسبة تعادل للغرام', 'The percentage equals per gram')} value={gramMoney(breakEven, C, lang)} />
        </tbody></table>
      </>} />
  );
}

/* ---------- TVA d'une pièce : part du métal et part de la façon ---------- */
function Vat({ lang, country = 'SA', karat = 21, mini }: ToolArgs) {
  const [g, setG] = useState(10);
  const [mk, setMk] = useState(25);
  const [k, setK] = useState(karat);
  const spot = useSpot();
  const c = country;
  const p24 = gram24(spot.usdPerOz, spot.fx[c]);
  const vat = P.countries[c].vat;
  const r = jewelleryPrice({ grams: g, k, price24: p24, makingMode: 'perGram', making: mk, vatRate: vat });
  const C = cur(c);
  return (
    <Frame mini={mini}
      fields={<>
        <div className="grid grid-cols-2 gap-x-4"><NumberField id="v-g" lang={lang} label={T(lang, 'الوزن', 'Weight')} value={g} onChange={setG} unit={T(lang, 'غرام', 'g')} decimals={2} max={100000} /><KaratSelect id="v-k" lang={lang} value={k} onChange={setK} /></div>
        <NumberField id="v-m" lang={lang} label={T(lang, 'المصنعية للغرام', 'Making per gram')} value={mk} onChange={setMk} unit={curLabel(C, lang)} decimals={2} max={10000} />
        <SpotLine spot={spot} lang={lang} country={c} />
      </>}
      result={<>
        <Big label={T(lang, `الضريبة على القطعة (${formatPercent(vat, 0, lang)})`, `VAT on the piece (${formatPercent(vat, 0, lang)})`)} value={money(r.vat, C, lang)} sub={T(lang, `من إجمالي ${money(r.total, C, lang)}`, `out of a ${money(r.total, C, lang)} total`)} />
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-accent-200">
          <Row label={T(lang, 'ضريبة على قيمة الذهب', 'VAT on the gold value')} value={money(r.goldValue * vat, C, lang)} />
          <Row label={T(lang, 'ضريبة على المصنعية', 'VAT on the making charge')} value={money(r.making * vat, C, lang)} />
          <Row label={T(lang, 'السعر قبل الضريبة', 'Price before VAT')} value={money(r.subtotal, C, lang)} />
        </tbody></table>
      </>} />
  );
}
