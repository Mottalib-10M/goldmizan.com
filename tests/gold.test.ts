import { describe, it, expect } from 'vitest';
import { gram24, gramKarat, karatTable, jewelleryPrice, vatFor, buyback, zakat, touristRefund, toGrams, karatSwap, boardPremium, OZ } from '../src/lib/engine/gold';
import { P } from '../src/lib/engine/params';

describe('paramètres relus sur les sources officielles (2026-10-13)', () => {
  it('ancrages des banques centrales', () => {
    expect(P.countries.SA.perUsd).toBe(3.75);        // SAMA, news-557
    expect(P.countries.AE.perUsd).toBe(3.6725);      // CBUAE, fx_sep26_en.pdf
    expect(P.countries.BH.perUsd).toBe(0.376);       // CBB, monetary-policy
    expect(P.countries.OM.perUsd).toBeCloseTo(1 / 2.6008, 6); // CBO, FixedPeg : USD 2.6008 par rial
  });
  it('repli KW et QA = tableau CBUAE du 30-09-2026', () => {
    expect(P.countries.KW.perUsd).toBeCloseTo(3.6725 / 11.929511, 4);
    expect(P.countries.QA.perUsd).toBeCloseTo(3.6725 / 1.007545, 3);
  });
  it('TVA', () => {
    expect(P.countries.SA.vat).toBe(0.15); expect(P.countries.AE.vat).toBe(0.05);
    expect(P.countries.BH.vat).toBe(0.10); expect(P.countries.OM.vat).toBe(0.05);
    expect(P.countries.KW.vat).toBe(0); expect(P.countries.QA.vat).toBe(0);
  });
  it('once troy (Weights and Measures Act 1985)', () => expect(OZ).toBe(31.1034768));
});

describe('prix au gramme', () => {
  it('24 carats en riyals : 4 174,30 USD/oz → 503,28 SAR', () => expect(gram24(4174.3, 3.75)).toBeCloseTo(503.28, 2));
  it('convention k/24 : relevé ajel.sa (534,13 SAR le 24, 467,37 le 21)', () => {
    const usd = 534.13 / 3.75 * OZ;
    expect(gramKarat(usd, 3.75, 21)).toBeCloseTo(467.36, 1);
  });
  it('tableau des quatre carats', () => {
    const t = karatTable(4000, 3.6725);
    expect(t.map((r) => r.k)).toEqual([24, 22, 21, 18]);
    expect(t[3].gram / t[0].gram).toBeCloseTo(0.75, 10);
  });
});

describe('bijou', () => {
  const base = { grams: 10, k: 21, price24: 500, makingMode: 'perGram' as const, making: 30, vatRate: 0.15 };
  it('façon au gramme + TVA 15 % sur le tout', () => {
    const r = jewelleryPrice(base);
    expect(r.goldValue).toBeCloseTo(4375, 6); expect(r.making).toBe(300);
    expect(r.vat).toBeCloseTo(701.25, 6); expect(r.total).toBeCloseTo(5376.25, 6);
  });
  it('façon en pourcentage et remise', () => {
    const r = jewelleryPrice({ ...base, makingMode: 'percent', making: 0.1, makingDiscount: 0.5 });
    expect(r.making).toBeCloseTo(218.75, 6);
  });
  it('façon forfaitaire, poids nul', () => {
    const r = jewelleryPrice({ ...base, grams: 0, makingMode: 'fixed', making: 100 });
    expect(r.total).toBeCloseTo(115, 6); expect(r.perGram).toBe(0);
  });
});

describe('TVA par pays et par nature', () => {
  it('EAU : lingot au taux zéro (Executive Regulation art. 36)', () => expect(vatFor('AE', 'bar')).toBe(0));
  it('Arabie saoudite : zéro seulement pour le premier fournisseur (Implementing Regulations art. 36)', () => {
    expect(vatFor('SA', 'bar', true)).toBe(0); expect(vatFor('SA', 'bar', false)).toBe(0.15);
  });
  it('bijou au taux normal partout', () => { expect(vatFor('SA', 'jewel')).toBe(0.15); expect(vatFor('KW', 'jewel')).toBe(0); });
});

describe('revente, zakat, touristes, unités', () => {
  it('revente avec décote', () => {
    const r = buyback(20, 18, 400, 0.05);
    expect(r.metal).toBe(6000); expect(r.payout).toBe(5700);
  });
  it('zakat : 100 g de 21 = 87,5 g de 24 ≥ 85 → 2,1875 g', () => {
    const z = zakat([{ grams: 100, k: 21 }], 500, 85);
    expect(z.fine).toBeCloseTo(87.5, 6); expect(z.reached).toBe(true); expect(z.dueGrams).toBeCloseTo(2.1875, 6); expect(z.due).toBeCloseTo(1093.75, 6);
  });
  it('zakat sous le nisab', () => expect(zakat([{ grams: 90, k: 21 }], 500, 85).due).toBe(0));
  it('touristes EAU : 1 050 AED TTC → TVA 50, frais 6,5 + 4,8, remboursement 38,7', () => {
    const t = touristRefund(1050);
    expect(t.vat).toBeCloseTo(50, 6); expect(t.fee).toBeCloseTo(11.3, 6); expect(t.refund).toBeCloseTo(38.7, 6);
  });
  it('touristes EAU : sous 250 AED, rien', () => expect(touristRefund(249).refund).toBe(0));
  it('unités', () => {
    expect(toGrams(1, 'oz')).toBe(31.1034768);
    expect(toGrams(1, 'tola')).toBeCloseTo(11.6638, 4);
    expect(toGrams(1, 'kg')).toBe(1000);
  });
  it('équivalence de carats et prime d\'affichage', () => {
    expect(karatSwap(21, 21, 24)).toBeCloseTo(18.375, 6);
    expect(boardPremium(505, 500)).toBeCloseTo(0.01, 6);
  });
});
