import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'karat-24', group: 'today', order: 20, tool: 'board', toolProps: { country: 'SA', karat: 24 }, kind: 'outil',
  related: ['gold-bars', 'ounce-price', 'karat-21', 'karat-22', 'gold-history', 'zakat-gold'],
  sources: ['ukWeights', 'sama', 'cbuae', 'goldApi'],
  ar: {
    slug: 'karat-24', nav: 'سعر الذهب عيار 24', card: 'غرام الذهب الخالص، الأساس الذي تُحسب منه كل العيارات الأخرى.',
    title: 'سعر الذهب عيار 24 اليوم {year}: غرام الذهب الخالص في الخليج',
    description: 'سعر غرام الذهب عيار 24 الآن في السعودية والإمارات والخليج، وهو سعر الأونصة مقسومًا على وزنها، مع قيمة السبائك من غرام واحد إلى كيلو قبل علاوة البائع والضريبة.',
    h1: 'سعر الذهب عيار 24 اليوم',
    resume: 'عيار 24 هو الذهب الخالص أو شبه الخالص، بنقاوة 999 من ألف أو أكثر، وسعر غرامه هو الأساس الذي تُحسب منه كل العيارات الأخرى: غرام 22 يساوي 22 جزءًا من 24 منه، وغرام 21 يساوي سبعة أثمانه، وغرام 18 ثلاثة أرباعه. نحسبه بقسمة سعر الأونصة التروي بالدولار على وزنها {oz} غرام، ثم بالضرب في سعر الصرف الرسمي للبلد: {peg.SA} للريال السعودي و{peg.AE} للدرهم الإماراتي. نادرًا ما يُصاغ عيار 24 حليًا لأنه لين يتشوه بسهولة، لذلك يُباع غالبًا سبائك وعملات للادخار، وفي هذه الحالة تحدد قواعد الضريبة الخاصة بالمعادن الاستثمارية ما تدفعه فوق قيمة الذهب، وهي تختلف بين الإمارات والسعودية. الحاسبة تعطي قيمة أي وزن من الذهب الخالص الآن. وتُعرض في الحاسبة أيضًا قيمة الأونصة كاملة بالعملة التي تختارها، وهي الرقم الذي يبدأ منه تجار السبائك عند التسعير في الرياض ودبي.',
    faqs: [
      { q: 'هل عيار 24 ذهب خالص بنسبة 100%؟', a: 'في التجارة يُسمى عيار 24 ما بلغت نقاوته 999 من ألف أو 999.9، أي أن نسبة الشوائب جزء من ألف أو أقل. ونحسبه في الموقع، في سعر الغرام وفي الزكاة، على أنه ذهب خالص كامل، لأن جزءًا من ألف لا يغير النتيجة عمليًا، وهذا ما تفعله لوحات الأسعار أيضًا.' },
      { q: 'لماذا لا تُصنع الأساور من عيار 24 عادة؟', a: 'الذهب الخالص لين، فيتشوه ويُخدش بسهولة في الاستعمال اليومي. خلطه بالنحاس أو الفضة في عيار 21 أو 22 أو 18 يجعله أصلب. لذلك يُشترى عيار 24 غالبًا سبائك أو عملات للادخار، بينما تُصنع الحلي من العيارات الأقل.' },
      { q: 'ما الفرق بين سعر غرام 24 في الحاسبة وسعر السبيكة في المحل؟', a: 'الحاسبة تعطي قيمة الذهب الخالص بسعر الأونصة الآن. البائع يضيف علاوة تغطي سك السبيكة وتغليفها وهامشه، وتكون نسبتها أعلى في السبائك الصغيرة منها في الكبيرة، ثم الضريبة إن وُجدت. صفحة السبائك تحسب السعر النهائي بحسب البلد والبائع.' },
    ],
    body: (h) => `
<h2>من الأونصة إلى الغرام الخالص</h2>
<p>الأونصة التي تُسعَّر بها الأسواق هي الأونصة التروي، وتعريفها القانوني ${h.src('ukWeights', '31.1034768 غرام')}. قسمة سعرها بالدولار على هذا الرقم تعطي سعر الغرام الخالص بالدولار. بعد ذلك يكفي سعر الصرف: ${h.src('sama', 'البنك المركزي السعودي')} يلتزم بـ{peg.SA} ريال للدولار، و${h.src('cbuae', 'مصرف الإمارات المركزي')} يذكر {peg.AE} درهم للدولار. لا نضيف أي هامش، فالرقم المعروض هو قيمة المعدن وحدها.</p>
<h2>السبيكة الصغيرة أغلى للغرام</h2>
<p>سبيكة غرام واحد وسبيكة كيلو تحتويان الذهب نفسه، لكن تكلفة السك والفحص والتغليف لا تتناسب مع الوزن، فترتفع العلاوة للغرام كلما صغرت السبيكة. من يدخر مبلغًا صغيرًا كل شهر يدفع علاوة أعلى من مشتري سبيكة كبيرة مرة واحدة. ${h.a('gold-bars', 'حاسبة السبيكة')} تتيح لك كتابة علاوة البائع لترى أثرها بالريال أو الدرهم.</p>
<h2>عيار 24 والزكاة</h2>
<p>في ${h.a('zakat-gold', 'حاسبة الزكاة')} نحول كل العيارات إلى ذهب خالص قبل مقارنتها بالنصاب، فغرام عيار 24 يُحسب كما هو تقريبًا، وغرام 21 يُحسب 0.875 غرام. لذلك من يملك سبائك عيار 24 يبلغ النصاب بوزن أقل من صاحب حلي عيار 18.</p>
<h2>كيف تقرأ تغير السعر</h2>
<p>لأن الريال والدرهم والدينار البحريني والريال العماني مربوطة بالدولار، فإن أي تغير في سعر غرام 24 بهذه العملات هو تغير في الأونصة نفسها، بالنسبة نفسها. يمكنك أن ترى مسار الأونصة على مدى عشر سنوات في ${h.a('gold-history', 'صفحة سعر الذهب عبر السنوات')} المأخوذة من بيانات البنك الدولي.</p>`,
  },
  en: {
    slug: 'karat-24', nav: '24K gold price', card: 'A gram of pure gold, the base every other karat is worked out from.',
    title: '24K Gold Price Today {year}: Pure Gold Per Gram in SAR and AED',
    description: 'A gram of 24 karat gold now in Saudi Arabia, the UAE and the Gulf, the ounce price divided by its weight, with bar values from 1 g to 1 kg before premium.',
    h1: '24 karat gold price today',
    resume: '24 karat is pure or nearly pure gold, 999 parts per thousand or better, and its gram price is the base for every other karat: a gram of 22 is 22 parts in 24 of it, a gram of 21 seven eighths, a gram of 18 three quarters. We work it out by dividing the dollar price of a troy ounce by its {oz} grams, then multiplying by the country’s official exchange rate, {peg.SA} for the Saudi riyal and {peg.AE} for the UAE dirham. 24K is rarely made into jewellery because it is soft and dents easily, so it is mostly sold as bars and coins for saving. In that case the VAT rules for investment metals decide what you pay on top of the gold, and they differ between the UAE and Saudi Arabia. The calculator gives the current value of any weight of pure gold, from a one-gram bar to a kilo, which is the figure to hold against a dealer quote.',
    faqs: [
      { q: 'Is 24K gold 100% pure?', a: 'In trade, 24 karat means a fineness of 999 or 999.9 parts per thousand, so impurities are one part per thousand or less. On this site, for gram prices and for zakat alike, 24K is treated as fully pure gold, since one part in a thousand does not change the result in practice, and price boards do the same.' },
      { q: 'Why are bangles not usually made in 24K?', a: 'Pure gold is soft, so it bends and scratches in daily wear. Alloying it with copper or silver to make 22K, 21K or 18K hardens it. That is why 24K is mostly bought as bars or coins to save, while jewellery is made in the lower karats.' },
      { q: 'Why does a bar cost more than the 24K gram price here?', a: 'The calculator gives the value of pure gold at the current ounce price. A dealer adds a premium for minting, assay, packaging and margin, which is higher per gram on small bars than on large ones, then VAT where it applies. The bars page works out the final price by country and seller.' },
    ],
    body: (h) => `
<h2>From the ounce to a pure gram</h2>
<p>Markets price gold per troy ounce, legally defined as ${h.src('ukWeights', '31.1034768 g')}. Dividing the dollar price by that figure gives the dollar price of a pure gram. Then only the exchange rate is needed: the ${h.src('sama', 'Saudi Central Bank')} holds {peg.SA} riyals per dollar and the ${h.src('cbuae', 'UAE central bank')} lists {peg.AE} dirhams. We add no margin; the figure shown is the metal value alone.</p>
<h2>Small bars cost more per gram</h2>
<p>A one-gram bar and a kilo bar hold the same gold, but minting, assay and packaging costs do not scale with weight, so the premium per gram rises as bars get smaller. Someone saving a small sum every month pays a higher premium than someone buying one large bar. The ${h.a('gold-bars', 'bar calculator')} lets you enter the dealer premium and see its effect in riyals or dirhams.</p>
<h2>24K and zakat</h2>
<p>In the ${h.a('zakat-gold', 'zakat calculator')} every karat is converted to pure gold before it is compared with the nisab, so a gram of 24K counts almost as it is and a gram of 21K counts as 0.875 g. Someone holding 24K bars therefore reaches the nisab with less weight than someone holding 18K jewellery.</p>
<h2>Reading a price change</h2>
<p>Because the riyal, the dirham, the Bahraini dinar and the Omani rial are pegged to the dollar, any change in the 24K gram price in those currencies is a change in the ounce itself, by the same percentage. You can follow the ounce over ten years on the ${h.a('gold-history', 'gold price history page')}, built from World Bank data.</p>`,
  },
});
