/**
 * Accueil (page pilier, RECETTE §5) : texte des deux langues. Structure propre au sujet : titre, une
 * ligne, tableau du jour en tête (simulateur), bloc citable, comparaison des six pays, taux officiels,
 * TVA par pays, historique, liens, FAQ, sources.
 */
import type { FAQ, Helpers } from '../lib/page-types';

interface HomeText { title: string; description: string; h1: string; lead: string; resume: string; faqs: FAQ[]; body: (h: Helpers) => string }

export const HOME: Record<'ar' | 'en', HomeText> = {
  ar: {
    title: 'سعر الذهب اليوم {year}: غرام 24 و22 و21 و18 في السعودية والخليج',
    description: 'سعر الذهب اليوم محسوب أمامك من سعر الأونصة الآن: غرام عيار 24 و22 و21 و18 بالريال والدرهم والدينار، وسعر القطعة النهائي بالمصنعية وضريبة القيمة المضافة لكل بلد.',
    h1: 'سعر الذهب اليوم في السعودية والخليج',
    lead: 'اختر البلد والعيار والوزن: السعر يُحسب الآن من سعر الأونصة وسعر الصرف الرسمي، مع وقت آخر تحديث.',
    resume: 'سعر الذهب اليوم في السعودية والإمارات وبقية دول الخليج لا يحتاج إلى خبر صحفي: يكفي سعر الأونصة العالمي بالدولار وسعر صرف العملة المحلية. نقسم سعر الأونصة على {oz} غرام، وهو وزن الأونصة التروي، فنحصل على غرام الذهب الخالص بالدولار، ثم نضربه في سعر الصرف الذي يعلنه البنك المركزي: {peg.SA} ريال للدولار في السعودية، و{peg.AE} درهم في الإمارات، و{peg.BH} دينار في البحرين، و{peg.OMusd} دولار للريال في عُمان، وسعر اليوم للدينار الكويتي والريال القطري. ثم نضرب في نسبة العيار: 22 أو 21 أو 18 على 24. الأرقام في هذه الصفحة تُحدَّث كل خمس دقائق ما دامت مفتوحة، ويظهر وقت آخر سعر للأونصة تحت الحاسبة. هذا هو سعر الذهب الخام قبل هامش المحل والمصنعية وضريبة القيمة المضافة، وهي {vat.SA} في السعودية و{vat.AE} في الإمارات، ولكل منها حاسبة في الموقع.',
    faqs: [
      { q: 'كم سعر غرام الذهب عيار 21 اليوم في السعودية؟', a: 'الرقم يتغير مع سعر الأونصة، لذلك نعرضه في الحاسبة أعلى الصفحة لا في النص: اختر السعودية وعيار 21 تجد سعر الغرام بالريال مع وقت آخر تحديث. يساوي دائمًا سبعة أثمان غرام عيار 24، ويُضاف إليه في المحل هامش ومصنعية وضريبة {vat.SA}.' },
      { q: 'لماذا يختلف سعر الذهب بين المواقع؟', a: 'كثير من المواقع تنشر مقالًا يوميًا بأرقام ساعة كتابته، وبعضها يبقى في نتائج البحث أسابيع أو أشهر. نحن نحسب السعر لحظة فتح الصفحة من سعر الأونصة ونعرض وقته. وقد تعرض مواقع أخرى سعر لوحة محل يتضمن هامشه، وهو أعلى من قيمة الذهب الخام.' },
      { q: 'من أين يأتي سعر الأونصة المعروض هنا؟', a: 'من gold-api.com، وهي خدمة تنشر سعر الذهب الفوري وتسمح شروطها باستعماله في المواقع التجارية. نجلبه من متصفحك مباشرة كل خمس دقائق، ونحتفظ بآخر سعر سجلناه عند بناء الموقع إن تعذر الاتصال، مع كتابة وقته بوضوح.' },
      { q: 'هل الأسعار هنا هي أسعار البيع أم الشراء في المحل؟', a: 'لا هذه ولا تلك: هي قيمة الذهب الخام بسعر السوق العالمي. المحل يبيعك فوقها بهامش ومصنعية وضريبة، ويشتري منك تحتها بخصم. لكل حالة حاسبة: حساب سعر القطعة عند الشراء، وحاسبة بيع الذهب المستعمل عند البيع.' },
      { q: 'هل يتغير سعر الذهب في الخليج يوم الجمعة؟', a: 'الأسواق العالمية للذهب تتداول من الاثنين إلى الجمعة بتوقيتها، وتتوقف في عطلة نهاية الأسبوع، فيبقى آخر سعر للأونصة ثابتًا تقريبًا يومي السبت والأحد. المحلات في الخليج تفتح في عطلتها وتعتمد غالبًا آخر سعر، وهو ما تعرضه الحاسبة مع وقته.' },
      { q: 'لماذا لا تذكر الصفحة سعرًا رسميًا للذهب من جهة حكومية؟', a: 'لأن البنوك المركزية في الخليج لا تنشر سعرًا يوميًا للذهب للمستهلكين، بل تنشر أسعار الصرف. ما نأخذه من الجهات الرسمية هو سعر الصرف ونسب الضريبة، وما نأخذه من السوق هو سعر الأونصة. لكل رقم مصدر مكتوب في الصفحة.' },
      { q: 'هل يمكنني وضع هذه الحاسبة في موقعي؟', a: 'نعم. صفحة ضع الحاسبة في موقعك تعطيك رمز إطار جاهزًا للنسخ يعرض حاسبة سعر الذهب بالعربية أو الإنجليزية مع رابط المصدر تحتها. الحاسبة تعمل في متصفح الزائر ولا تجمع أي بيانات منه.' },
    ],
    body: (h) => `
<h2>القطعة نفسها في دول الخليج الست الآن</h2>
<p>إذا حوّلت سعر غرام الذهب في السعودية والإمارات والبحرين وعُمان إلى الدولار وجدته واحدًا تقريبًا، لأن عملاتها مربوطة بالدولار. ما يغير السعر النهائي هو الضريبة والمصنعية. الحاسبة التالية تأخذ قطعة واحدة بنسبة مصنعية واحدة، وتحسب سعرها النهائي في البلدان الست، مرتبة من الأرخص.</p>
<!--tool:compare-->
<h2>لماذا لا يطابق رقمنا لوحة المحل دائمًا</h2>
<p>لوحة الأسعار في محل الذهب تعرض سعر بيع المحل للغرام، وهو قيمة الذهب الخام مضافًا إليها هامش. في السعودية تتبع اللوحات غالبًا النسبة البسيطة بين العيارات، فغرام 21 سبعة أثمان غرام 24. في سوق الذهب بدبي يُضاف الهامش بالدرهم على كل غرام، فيبدو غرام 22 أو 18 أغلى من نسبته. لا يعني ذلك أن أحد الرقمين خطأ: رقمنا قيمة المعدن، ورقم اللوحة سعر المحل. الفرق بينهما هو ما تدفعه للمحل قبل المصنعية، وتستطيع أن تراه بالأرقام إذا كتبت سعر اللوحة في ${h.a('jewellery-price', 'حاسبة سعر القطعة')}.</p>
<p>وهناك سبب ثالث للاختلاف بين المواقع: كثير من صفحات الأخبار تنشر سعر الذهب يومًا بيوم في مقالات منفصلة، فتظهر في نتائج البحث صفحة من الشهر الماضي أو من بداية السنة على أنها سعر اليوم. لذلك نكتب تحت الحاسبة سعر الأونصة الذي حسبنا منه، ووقته بتوقيت غرينتش، فتعرف دائمًا متى سُجل الرقم الذي تراه.</p>
<h2>أسعار الصرف التي نعتمدها</h2>
<p>لكل عملة مصدر رسمي. ${h.src('sama', 'البنك المركزي السعودي')} يعلن التزامه بسعر {peg.SA} ريال للدولار. ${h.src('cbuae', 'مصرف الإمارات المركزي')} يذكر الدولار بـ{peg.AE} درهم في جداوله. ${h.src('cbb', 'مصرف البحرين المركزي')} يربط الدينار عند {peg.BH} للدولار. ${h.src('cbo', 'البنك المركزي العماني')} يثبت الريال عند {peg.OMusd} دولار. أما ${h.src('cbk', 'بنك الكويت المركزي')} فيربط الدينار بسلة عملات، فنأخذ سعر اليوم، كما نفعل للريال القطري، مع رقم احتياطي من الجدول الرسمي لمصرف الإمارات المركزي.</p>
<h2>ضريبة القيمة المضافة على الذهب في كل بلد</h2>
<p>السعودية: {vat.SA} على المشغولات بحسب ${h.src('ksaVatLaw', 'المادة الثانية من نظام ضريبة القيمة المضافة')}، ونسبة صفر لأول توريد للمعدن الاستثماري من المنتج أو المصفاة فقط. الإمارات: {vat.AE} على المشغولات بحسب ${h.src('uaeDecreeLaw', 'المرسوم بقانون رقم 8 لسنة 2017')}، ونسبة صفر للسبائك والعملات الاستثمارية عند أي بائع. البحرين: {vat.BH}. عُمان: {vat.OM}. الكويت وقطر: لا ضريبة قيمة مضافة حتى تاريخ مراجعتنا. في كل البلدان التي تطبقها تُحسب الضريبة على الذهب والمصنعية معًا، والتفاصيل في ${h.a('vat-saudi', 'صفحة الضريبة في السعودية')} و${h.a('vat-uae', 'صفحة الضريبة في الإمارات')}.</p>
<h2>ثلاثة أسئلة تسبق كل شراء</h2>
<p>الأول: ما العيار المختوم على القطعة؟ لأن الفرق بين 21 و22 وحده نحو 5% من سعر الغرام. الثاني: كيف تُحسب المصنعية، للغرام أم بالنسبة أم للقطعة؟ لأنها البند الوحيد الذي يمكن التفاوض عليه. الثالث: كم سيدفع المحل لو أعدت بيعها؟ لأن المصنعية والضريبة لا تعودان. لكل سؤال حاسبة: ${h.a('karat-converter', 'التحويل بين العيارات')}، و${h.a('making-charges', 'مقارنة عرضي المصنعية')}، و${h.a('buy-sell-gap', 'فرق البيع والشراء')}.</p>
<h2>الذهب للزكاة وللادخار</h2>
<p>من يملك ذهبًا من عيارات مختلفة يحتاج إلى تحويله إلى ذهب خالص قبل مقارنته بالنصاب، وهو عشرون مثقالًا بحسب فتوى الشيخ ابن باز. ${h.a('zakat-gold', 'حاسبة الزكاة')} تفعل ذلك وتحسب ربع العشر بسعر اليوم، وتترك لك أن تقرر هل تدخل الحلي الملبوس، لأن المسألة خلافية. ومن يدخر في الذهب يقارن بين السبيكة والحلي في ${h.a('gold-bars', 'صفحة السبائك')}، حيث تختلف قواعد الضريبة بين الإمارات والسعودية اختلافًا كبيرًا.</p>
<h2>سعر الذهب في السنوات الأخيرة</h2>
<p>لمعرفة اتجاه السعر نعتمد على متوسطات البنك الدولي الشهرية، المنشورة برخصة مفتوحة. الجدول التالي يعرض المتوسط السنوي للأونصة وما يقابله لغرام عيار 24 بالريال والدرهم، والتفاصيل شهرًا بشهر في ${h.a('gold-history', 'صفحة سعر الذهب عبر السنوات')}.</p>
<!--table:annual-->
<h2>من يحسب هذه الأرقام</h2>
<p>الموقع تنشره Radif Partners، وهي جهة نشر مستقلة لا تبيع الذهب ولا تتلقى عمولة من أي محل. كل رقم في الموقع يأتي إما من سعر الأونصة الذي نجلبه من ${h.src('goldApi', 'gold-api.com')}، وإما من نص رسمي مذكور بالاسم والرابط. طريقة الحساب كاملة، مع حدودها، في ${h.a('method', 'صفحة طريقة الحساب')}، ومن نحن ولماذا أنشأنا الموقع في ${h.a('about', 'صفحة من نحن')}. ما يميز الموقع عن الصفحة الأولى في نتائج البحث أنه يحسب السعر أمامك الآن وبضريبة بلدك، بدل مقال كُتب قبل أسابيع.</p>`,
  },
  en: {
    title: 'Gold Rate Today {year}: 24K, 22K, 21K, 18K in Dubai, UAE and Saudi',
    description: 'Gold rate today worked out in front of you from the live ounce price: a gram of 24, 22, 21 and 18 karat in dirhams, riyals and dinars, and a piece’s final price with making and VAT.',
    h1: 'Gold rate today in the UAE, Saudi Arabia and the Gulf',
    lead: 'Pick a country, karat and weight: the price is worked out now from the ounce price and the official exchange rate, with the time of the last update.',
    resume: 'The gold rate today in the UAE, Saudi Arabia and the rest of the Gulf does not need a news article: the world ounce price in dollars and the local exchange rate are enough. We divide the ounce price by {oz} grams, the weight of a troy ounce, to get a gram of pure gold in dollars, then multiply by the rate the central bank announces: AED {peg.AE} per dollar in the UAE, SAR {peg.SA} in Saudi Arabia, BHD {peg.BH} in Bahrain, USD {peg.OMusd} per rial in Oman, and today’s rate for the Kuwaiti dinar and the Qatari riyal. Then we multiply by the karat ratio, 22, 21 or 18 over 24. The figures on this page refresh every five minutes while it is open, and the time of the last ounce price is shown under the calculator. This is the raw gold value before the shop margin, the making charge and VAT, which is {vat.AE} in the UAE and {vat.SA} in Saudi Arabia; each has its own calculator on the site. If you live in Dubai or Riyadh and want to know what a gram really costs before walking into the souq, start here.',
    faqs: [
      { q: 'What is the 22K gold rate in Dubai today?', a: 'It moves with the ounce, so we show it in the calculator at the top rather than in the text: pick the UAE and 22K to see the dirham gram price with the time of the last update. It is always 22/24 of the 24K gram; Dubai shop boards add a margin per gram, then making and {vat.AE} VAT.' },
      { q: 'Why do gold rates differ between websites?', a: 'Many sites publish a daily article with the figures of the hour it was written, and some of those pages stay in search results for weeks or months. We compute the price when the page opens and show its time. Other sites may show a shop board price, which includes the shop margin and sits above the raw gold value.' },
      { q: 'Where does the ounce price shown here come from?', a: 'From gold-api.com, a service publishing the spot gold price whose terms allow its use on commercial websites. We fetch it from your browser every five minutes, and keep the last price recorded when the site was built in case the connection fails, with its time clearly stated.' },
      { q: 'Are these the shop buying or selling prices?', a: 'Neither: they are the raw gold value at the world market price. A shop sells above it with a margin, making charge and VAT, and buys below it with a deduction. Each case has its own calculator: the jewellery price calculator for buying, the used gold calculator for selling.' },
      { q: 'Does the gold rate change at the weekend in the Gulf?', a: 'World gold markets trade from Monday to Friday in their own time zones and pause at the weekend, so the last ounce price stays roughly fixed on Saturday and Sunday. Gulf shops open during their weekend and usually use that last price, which the calculator shows with its time.' },
      { q: 'Why is there no official gold price from a government body?', a: 'Gulf central banks do not publish a daily consumer gold price; they publish exchange rates. What we take from official bodies is the exchange rate and the VAT rates; what we take from the market is the ounce price. Every figure has its source written on the page.' },
      { q: 'Can I put this calculator on my own website?', a: 'Yes. The embed page gives you ready-to-copy iframe code showing the gold rate calculator in Arabic or English, with a source link under it. The calculator runs in the visitor’s browser and collects no data from them.' },
    ],
    body: (h) => `
<h2>The same piece in all six Gulf countries now</h2>
<p>Convert the gram price in the UAE, Saudi Arabia, Bahrain and Oman to dollars and it is almost the same, because their currencies are pegged to the dollar. What changes the final price is VAT and the making charge. The next calculator takes one piece with one making rate and prices it in all six countries, cheapest first.</p>
<!--tool:compare-->
<h2>Why our figure does not always match the shop board</h2>
<p>A gold shop board shows the shop’s selling price per gram, which is the raw gold value plus a margin. In Saudi Arabia boards usually follow the simple ratio between karats, so a gram of 21K is seven eighths of a gram of 24K. In the Dubai Gold Souk the margin is added in dirhams per gram, so 22K or 18K look dearer than their ratio. Neither figure is wrong: ours is the metal value, the board is the shop price. The gap between them is what you pay the shop before the making charge, and you can see it in numbers by typing the board price into the ${h.a('jewellery-price', 'jewellery price calculator')}.</p>
<p>There is a third reason sites disagree: many news pages publish the gold price day by day in separate articles, so a page from last month or the start of the year appears in search results as today’s price. That is why we print, under the calculator, the ounce price we used and its time in GMT, so you always know when the figure you see was recorded.</p>
<h2>The exchange rates we use</h2>
<p>Each currency has an official source. The ${h.src('cbuae', 'UAE central bank')} lists the dollar at {peg.AE} dirhams in its tables. The ${h.src('sama', 'Saudi Central Bank')} states its commitment to {peg.SA} riyals per dollar. The ${h.src('cbb', 'Central Bank of Bahrain')} pegs the dinar at {peg.BH} per dollar. The ${h.src('cbo', 'Central Bank of Oman')} fixes the rial at USD {peg.OMusd}. The ${h.src('cbk', 'Central Bank of Kuwait')} pegs the dinar to a basket, so we use today’s rate, as for the Qatari riyal, with a fallback from the UAE central bank official table.</p>
<h2>VAT on gold in each country</h2>
<p>UAE: {vat.AE} on jewellery under ${h.src('uaeDecreeLaw', 'Federal Decree-Law No. 8 of 2017')}, and zero on investment bars and coins from any seller. Saudi Arabia: {vat.SA} on jewellery under ${h.src('ksaVatLaw', 'Article 2 of the VAT Law')}, and zero on investment metal only for the first supply by a producer or refiner. Bahrain: {vat.BH}. Oman: {vat.OM}. Kuwait and Qatar: no VAT as of our review. Wherever VAT applies, it is charged on gold and making together; details on the ${h.a('vat-uae', 'UAE VAT page')} and the ${h.a('vat-saudi', 'Saudi VAT page')}.</p>
<h2>Three questions before any purchase</h2>
<p>First, what karat is stamped on the piece? The gap between 21K and 22K alone is about 5% of the gram price. Second, how is the making charge set, per gram, as a percentage or per piece? It is the only line you can negotiate. Third, what would a shop pay if you sold it back? The making charge and VAT do not come back. Each question has a calculator: the ${h.a('karat-converter', 'karat converter')}, the ${h.a('making-charges', 'making charge comparison')} and the ${h.a('buy-sell-gap', 'buy and sell gap')}.</p>
<h2>Gold for zakat and for saving</h2>
<p>Anyone holding gold in several karats needs to convert it to pure gold before comparing it with the nisab, twenty mithqal according to the fatwa of Sheikh Ibn Baz. The ${h.a('zakat-gold', 'zakat calculator')} does that and works out one fortieth at today’s price, leaving you to decide whether worn jewellery counts, since scholars disagree. Anyone saving in gold can compare bars with jewellery on the ${h.a('gold-bars', 'gold bars page')}, where VAT rules differ sharply between the UAE and Saudi Arabia.</p>
<h2>The gold price in recent years</h2>
<p>For the trend we rely on the World Bank monthly averages, published under an open licence. The table below shows the yearly average ounce and the matching 24K gram in riyals and dirhams; month-by-month detail is on the ${h.a('gold-history', 'gold price history page')}.</p>
<!--table:annual-->
<h2>Who works out these figures</h2>
<p>The site is published by Radif Partners, an independent publisher that sells no gold and takes no commission from any shop. Every figure comes either from the ounce price we fetch from ${h.src('goldApi', 'gold-api.com')} or from an official text named and linked on the page. The full method, with its limits, is on the ${h.a('method', 'method page')}, and who we are and why we built the site is on the ${h.a('about', 'about page')}. What sets the site apart from the first search result is that it works the price out in front of you now, with your country’s VAT, instead of an article written weeks ago.</p>`,
  },
};
