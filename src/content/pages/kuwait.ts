import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'kuwait', group: 'today', order: 12, tool: 'board', toolProps: { country: 'KW', karat: 21 }, kind: 'outil',
  related: ['qatar', 'karat-21', 'karat-18', 'compare-countries', 'jewellery-price', 'gram-price'],
  sources: ['cbk', 'cbuaeFx', 'fxApi', 'goldApi'],
  ar: {
    slug: 'kuwait', nav: 'سعر الذهب في الكويت', card: 'الغرام بالدينار الكويتي، بسعر صرف اليوم لأن الدينار مربوط بسلة عملات.',
    title: 'سعر الذهب في الكويت اليوم {year}: غرام 24 و21 و18 بالدينار',
    description: 'سعر غرام الذهب في الكويت الآن بالدينار لعيار 24 و22 و21 و18، محسوب من سعر الأونصة وسعر صرف الدينار اليوم، لأن الدينار مربوط بسلة عملات لا بالدولار وحده.',
    h1: 'سعر الذهب في الكويت اليوم بالدينار',
    resume: 'الكويت حالة مختلفة عن جيرانها: الدينار ليس مربوطًا بالدولار وحده، بل بسلة عملات يحددها بنك الكويت المركزي، فيتغير سعره مقابل الدولار قليلًا من يوم إلى آخر. لذلك يتأثر سعر الذهب بالدينار بعاملين: سعر الأونصة بالدولار، وسعر صرف الدينار. الحاسبة تأخذ سعر الدينار اليوم من ExchangeRate-API، وإن تعذر ذلك تستخدم آخر سعر نشره مصرف الإمارات المركزي في جدوله الشهري، وهو {peg.KW} دينار للدولار. ولأن الدينار وحدة كبيرة، يُكتب سعر الغرام بثلاث خانات عشرية، أي بالفلس. لا تطبق الكويت ضريبة قيمة مضافة على المجوهرات حتى تاريخ مراجعتنا، فالسعر النهائي للقطعة هو قيمة الذهب والمصنعية. اكتب وزن قطعتك وعيارها لترى قيمة الذهب الخام فيها بالدينار.',
    faqs: [
      { q: 'لماذا يتغير سعر الذهب بالدينار الكويتي حتى لو ثبتت الأونصة؟', a: 'لأن الدينار مربوط بسلة عملات وليس بالدولار وحده، بحسب سياسة سعر الصرف لبنك الكويت المركزي. إذا ارتفع الدولار أمام عملات السلة انخفض سعر الدولار بالدينار قليلًا، فيتغير سعر الغرام ولو بقيت الأونصة في مكانها. الأثر صغير عادة، لكنه موجود.' },
      { q: 'هل توجد ضريبة قيمة مضافة على الذهب في الكويت؟', a: 'لم تطبق الكويت ضريبة قيمة مضافة حتى تاريخ مراجعة هذه الصفحة، فلا تظهر الضريبة في حاسباتنا عند اختيار الكويت. المشتري يدفع قيمة الذهب والمصنعية فقط. إن صدر قانون جديد سنعدّل النسبة في ملف المعايير وتظهر في كل الحاسبات معًا.' },
      { q: 'لماذا يُكتب سعر الغرام في الكويت بثلاث خانات عشرية؟', a: 'الدينار الكويتي يُقسم إلى ألف فلس، وقيمته عالية مقابل الدولار، فغرام الذهب يساوي عشرات الدنانير فقط. كتابة الفلس تجعل الفرق بين محلين ظاهرًا. في الأسعار الإجمالية للقطع نكتفي بالدينار الكامل لأن الفلس لا يغير القرار.' },
    ],
    body: (h) => `
<h2>سلة العملات وأثرها على الذهب</h2>
<p>يشرح ${h.src('cbk', 'بنك الكويت المركزي')} أن سياسة سعر الصرف تقوم على ربط الدينار بسلة موزونة من عملات الشركاء التجاريين والماليين للكويت. النتيجة أن الدولار لا يساوي رقمًا ثابتًا بالدينار كما في الرياض أو أبوظبي. لهذا نجلب سعر الصرف اليومي من ${h.src('fxApi', 'ExchangeRate-API')} عند فتح الصفحة، ونذكر مصدره تحت الحاسبة كما تشترط شروطه.</p>
<h2>رقم احتياطي من جهة رسمية</h2>
<p>إذا لم يصل سعر اليوم نستعمل الرقم الذي ينشره ${h.src('cbuaeFx', 'مصرف الإمارات المركزي')} في جدوله الشهري لأسعار الصرف، فهو جدول رسمي يذكر الدينار الكويتي مقابل الدرهم كل يوم عمل. من الدينار مقابل الدرهم والدولار مقابل الدرهم نستخرج {peg.KW} دينار للدولار في آخر يوم من الجدول. يبقى رقمًا تقديريًا، والسطر الذي تحت الحاسبة يقول لك أي الرقمين استُعمل: سعر اليوم أو الرقم الاحتياطي.</p>
<h2>من دون ضريبة، تبقى المصنعية هي الفرق</h2>
<p>غياب الضريبة يجعل المقارنة مع دول الضريبة لصالح الكويت في الحسابات الخام، لكن المصنعية هي التي تحسم السعر النهائي. قطعة بمصنعية مرتفعة في الكويت قد تكلف أكثر من قطعة بمصنعية منخفضة في دبي رغم ضريبة {vat.AE} هناك. جرّب الحالتين في ${h.a('compare-countries', 'حاسبة المقارنة بين دول الخليج')}، واطلب من البائع أن يكتب سعر الغرام والمصنعية في سطرين منفصلين.</p>`,
  },
  en: {
    slug: 'kuwait', nav: 'Gold price in Kuwait', card: 'The gram in Kuwaiti dinars, at today’s rate, since the dinar follows a basket.',
    title: 'Gold Price in Kuwait Today {year}: 24K, 21K and 18K in Dinars',
    description: 'Gold price in Kuwait now in dinars for 24, 22, 21 and 18 karat, from the ounce and today’s dinar rate, since the dinar follows a basket, not the dollar.',
    h1: 'Gold price in Kuwait today, in dinars',
    resume: 'Kuwait works differently from its neighbours: the dinar is not pegged to the dollar alone but to a basket of currencies set by the Central Bank of Kuwait, so its dollar rate shifts slightly from day to day. The dinar price of gold therefore depends on two things, the dollar ounce price and the dinar exchange rate. The calculator takes today’s dinar rate from ExchangeRate-API and, if that fails, falls back on the last figure published by the UAE central bank in its monthly table, {peg.KW} dinars to the dollar. Because the dinar is a large unit, the gram is quoted to three decimals, in fils. Kuwait applies no VAT on jewellery as of our last review, so the final price of a piece is gold plus making charge. Enter the weight and karat of your piece to see the metal value in dinars, which is a useful check before haggling in the souq.',
    faqs: [
      { q: 'Why does the dinar gold price move even when the ounce does not?', a: 'Because the dinar follows a basket of currencies, not the dollar alone, under the Central Bank of Kuwait exchange rate policy. When the dollar strengthens against the basket, a dollar buys a little more dinar and the gram price shifts even with a flat ounce. The effect is usually small, but it is real.' },
      { q: 'Is there VAT on gold in Kuwait?', a: 'Kuwait had not introduced VAT as of the date this page was reviewed, so no VAT appears in our calculators when you pick Kuwait. The buyer pays gold and making only. If a law is passed, the rate goes into the parameter file and shows up in every calculator at once.' },
      { q: 'Why is the Kuwait gram price shown with three decimals?', a: 'A Kuwaiti dinar is split into 1,000 fils and is worth more than three dollars, so a gram of gold is only some tens of dinars. Showing the fils makes a gap between two shops visible. Totals for whole pieces are shown in whole dinars, because the fils no longer change the decision.' },
    ],
    body: (h) => `
<h2>The basket and its effect on gold</h2>
<p>The ${h.src('cbk', 'Central Bank of Kuwait')} explains that its exchange rate policy pegs the dinar to a weighted basket of the currencies of Kuwait’s main trade and financial partners. A dollar is therefore not a fixed number of dinars, unlike in Riyadh or Abu Dhabi. That is why we fetch the daily rate from ${h.src('fxApi', 'ExchangeRate-API')} when the page opens and name the source under the calculator, as its terms require.</p>
<h2>An official fallback</h2>
<p>If today’s rate does not arrive, we use the figure from the ${h.src('cbuaeFx', 'UAE central bank')} monthly exchange rate table, an official table listing the Kuwaiti dinar against the dirham for every working day. Dividing the dollar rate in dirhams by the dinar rate in dirhams gives {peg.KW} dinars per dollar on the last day of the table. It remains an estimate, and the line under the calculator tells you which rate was used, today’s or the fallback.</p>
<h2>No VAT, so the making charge decides</h2>
<p>Without VAT, Kuwait wins the raw comparison with VAT countries, but the making charge decides the final price. A heavily worked piece in Kuwait can cost more than a plain one in Dubai despite the {vat.AE} VAT there. Try both in the ${h.a('compare-countries', 'Gulf comparison calculator')}, and ask the seller to put gram price and making charge on two separate lines.</p>`,
  },
});
