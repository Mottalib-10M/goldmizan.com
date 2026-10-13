import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'karat-18', group: 'today', order: 35, tool: 'board', toolProps: { country: 'SA', karat: 18 }, kind: 'outil',
  related: ['karat-21', 'making-charges', 'sell-gold', 'karat-converter', 'jewellery-price', 'kuwait'],
  sources: ['sama', 'ksaVatLaw', 'goldApi', 'ukWeights'],
  ar: {
    slug: 'karat-18', nav: 'سعر الذهب عيار 18', card: 'غرام عيار 18 للمجوهرات المرصعة والذهب الأبيض، بالريال والدرهم.',
    title: 'سعر الذهب عيار 18 اليوم {year}: سعر الغرام في السعودية والخليج',
    description: 'سعر غرام الذهب عيار 18 الآن في السعودية والإمارات والكويت وبقية الخليج، أي ثلاثة أرباع غرام الذهب الخالص، وسبب ارتفاع مصنعيته في المجوهرات المرصعة بالألماس.',
    h1: 'سعر الذهب عيار 18 اليوم',
    resume: 'غرام الذهب عيار 18 يحتوي على 18 جزءًا من الذهب الخالص من أصل 24، أي 75% بالضبط، والربع الباقي معادن أخرى مثل النحاس والفضة أو البلاديوم في الذهب الأبيض. لذلك يساوي سعر غرامه ثلاثة أرباع سعر غرام عيار 24، ويُختم غالبًا بالرقم 750. هذا العيار هو الأكثر استعمالًا في المجوهرات المرصعة بالألماس والأحجار وفي الساعات، لأنه أصلب من 21 و22 ويمسك الحجر جيدًا. لكن هذه القطع تحمل عادة مصنعية مرتفعة، وقد تتجاوز قيمة الذهب نفسه في قطعة صغيرة دقيقة، وعند البيع يدفع المحل ثمن الذهب وحده. الحاسبة تحسب قيمة الذهب الخام في أي وزن من عيار 18 بسعر الأونصة الآن، بالريال أو الدرهم أو الدينار، قبل المصنعية وضريبة القيمة المضافة {vat.SA} في السعودية أو {vat.AE} في الإمارات.',
    faqs: [
      { q: 'هل الذهب الأبيض عيار 18 أرخص من الأصفر؟', a: 'قيمة الذهب في غرام عيار 18 واحدة سواء كان أبيض أو أصفر أو ورديًا، لأن الذهب الخالص فيه 75% في كل الحالات. الفرق يأتي من السبيكة المضافة وطلاء الروديوم في الأبيض ومن المصنعية. عند البيع يُحسب الذهب الخالص فقط، فلا يرفع اللون الأبيض قيمة القطعة.' },
      { q: 'لماذا أخسر كثيرًا عند بيع خاتم ألماس عيار 18؟', a: 'لأن المحل يشتري الذهب بوزنه وعياره فقط، والحجر يُقيَّم منفصلًا أو لا يُقيَّم أبدًا، والمصنعية لا تعود. في الخاتم الصغير تكون المصنعية والحجر معظم السعر، فيبدو مبلغ البيع ضئيلًا. احسب قيمة الذهب وحده في حاسبة البيع قبل أن تذهب إلى المحل.' },
      { q: 'كيف أعرف وزن الذهب في قطعة مرصعة؟', a: 'الوزن على الميزان يشمل الأحجار. الفاتورة الجيدة تذكر وزن الذهب ووزن الأحجار بالقيراط منفصلين. إن لم تذكرهما فاطلب من البائع ذلك قبل الدفع، لأن ضرب الوزن الكلي في سعر الغرام يعطيك قيمة مبالغًا فيها للذهب.' },
    ],
    body: (h) => `
<h2>ثلاثة أرباع غرام الذهب الخالص</h2>
<p>الحساب مباشر: سعر الأونصة بالدولار قسمة ${h.src('ukWeights', '31.1034768 غرام')}، ضرب سعر الصرف ({peg.SA} للريال بحسب ${h.src('sama', 'البنك المركزي السعودي')})، ضرب 18 قسمة 24. بما أن 18 على 24 تساوي 0.75 بالضبط، فإن سعر غرام عيار 18 هو ثلاثة أرباع غرام عيار 24 دائمًا، دون تقريب.</p>
<h2>المصنعية في المجوهرات الدقيقة</h2>
<p>في القطع المرصعة يتحول جزء كبير من السعر إلى عمل يدوي: تثبيت الأحجار، والنقش، والتلميع. لذلك تُعلن المصنعية أحيانًا مبلغًا ثابتًا للقطعة لا للغرام. اكتب هذا المبلغ في ${h.a('jewellery-price', 'حاسبة سعر القطعة')}، وستضاف إليه ضريبة القيمة المضافة كما تنص ${h.src('ksaVatLaw', 'المادة الثانية من النظام السعودي')}، لأن الضريبة تشمل المصنعية.</p>
<h2>من عيار 18 إلى غيره</h2>
<p>إن أردت أن تعرف ما يعادل قطعتك من عيار 21 أو 24 فاستخدم ${h.a('karat-converter', 'حاسبة التحويل بين العيارات')}. عشرون غرامًا من عيار 18 تحتوي على 15 غرامًا من الذهب الخالص، أي ما يحتويه نحو 17.1 غرام من عيار 21. وعند البيع يبدأ الحساب من هذا الذهب الخالص، كما في ${h.a('sell-gold', 'حاسبة بيع الذهب المستعمل')}.</p>`,
  },
  en: {
    slug: 'karat-18', nav: '18K gold price', card: 'A gram of 18K for diamond jewellery and white gold, in riyals and dirhams.',
    title: '18K Gold Price Today {year}: Per Gram in Saudi Arabia and the Gulf',
    description: 'The price of a gram of 18 karat gold now in Saudi Arabia, the UAE, Kuwait and the Gulf, three quarters of a pure gram, and why diamond-set 18K pieces carry high making charges.',
    h1: '18 karat gold price today',
    resume: 'A gram of 18 karat gold holds 18 parts of pure gold out of 24, exactly 75%, and the remaining quarter is other metals such as copper, silver or, in white gold, palladium. Its gram price is therefore three quarters of the 24K gram price, and pieces are usually stamped 750. It is the karat of diamond and gemstone jewellery and of watches, because it is harder than 21K and 22K and holds a stone well. Those pieces usually carry a high making charge, which on a small, delicate piece can exceed the value of the gold itself, and when you sell, a shop pays for the gold alone. The calculator gives the metal value of any weight of 18K at the current ounce price, in riyals, dirhams or dinars, before making charges and VAT, {vat.SA} in Saudi Arabia or {vat.AE} in the UAE. It is the number to know before an engagement ring purchase or a resale.',
    faqs: [
      { q: 'Is 18K white gold cheaper than yellow?', a: 'The gold in a gram of 18K is the same whether it is white, yellow or rose, because it is 75% pure in every case. The difference comes from the alloy, the rhodium plating on white gold and the making charge. On resale only the pure gold counts, so white colour does not raise the value.' },
      { q: 'Why do I lose so much selling an 18K diamond ring?', a: 'A shop buys the gold by weight and karat only; the stone is valued separately or not at all, and the making charge does not come back. On a small ring, making and stone are most of the price, so the resale figure looks tiny. Work out the gold value alone in the selling calculator before going in.' },
      { q: 'How do I know the gold weight of a set piece?', a: 'The scale weight includes the stones. A good invoice lists gold weight in grams and stone weight in carats separately. If yours does not, ask before paying, because multiplying the total weight by the gram price overstates the gold.' },
    ],
    body: (h) => `
<h2>Three quarters of a pure gram</h2>
<p>The sum is direct: dollar ounce price divided by ${h.src('ukWeights', '31.1034768 g')}, times the exchange rate ({peg.SA} for the riyal per the ${h.src('sama', 'Saudi Central Bank')}), times 18 over 24. Since 18/24 is exactly 0.75, a gram of 18K is always three quarters of a gram of 24K, with no rounding.</p>
<h2>Making charges on fine jewellery</h2>
<p>On set pieces a large share of the price is handwork: setting stones, engraving, polishing. Shops therefore sometimes quote making as a fixed amount for the piece rather than per gram. Enter that amount in the ${h.a('jewellery-price', 'jewellery price calculator')}; VAT is added to it as ${h.src('ksaVatLaw', 'Article 2 of the Saudi VAT Law')} provides, since VAT covers the making charge.</p>
<h2>From 18K to another karat</h2>
<p>To see what your piece equals in 21K or 24K, use the ${h.a('karat-converter', 'karat converter')}. Twenty grams of 18K hold 15 g of pure gold, as much as about 17.1 g of 21K. On resale the sum starts from that pure gold, as in the ${h.a('sell-gold', 'used gold calculator')}.</p>`,
  },
});
