import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'saudi-arabia', group: 'today', order: 10, tool: 'board', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['vat-saudi', 'karat-21', 'jewellery-price', 'zakat-gold', 'gold-bars', 'compare-countries'],
  sources: ['sama', 'ksaVatLaw', 'ksaVatRegs', 'goldApi'],
  ar: {
    slug: 'saudi-arabia', nav: 'سعر الذهب في السعودية', card: 'الغرام بالريال لكل عيار، بسعر الصرف الرسمي 3.75 للدولار.',
    title: 'سعر الذهب في السعودية اليوم {year}: غرام 24 و21 و18 بالريال',
    description: 'سعر الذهب في السعودية الآن بالريال: غرام عيار 24 و22 و21 و18 محسوب من سعر الأونصة وسعر صرف البنك المركزي السعودي، مع ما تضيفه المصنعية وضريبة 15%.',
    h1: 'سعر الذهب في السعودية اليوم بالريال',
    resume: 'في السعودية يُحسب سعر غرام الذهب بالريال من سعر الأونصة العالمي بالدولار مضروبًا في {peg.SA}، وهو سعر الصرف الذي يلتزم به البنك المركزي السعودي منذ عقود، ومقسومًا على {oz} غرام، أي وزن الأونصة التروي. لأن الريال مربوط بالدولار، لا يتغير سعر الذهب في الرياض أو جدة أو الدمام إلا بتغير الأونصة نفسها، فالسعر واحد في كل مدن المملكة قبل هامش المحل. غرام عيار 21، وهو الأكثر تداولًا في المحلات السعودية، يساوي سبعة أثمان غرام عيار 24، وغرام عيار 18 ثلاثة أرباعه. عند الشراء تُضاف المصنعية ثم ضريبة القيمة المضافة بنسبة {vat.SA} على مجموع الذهب والمصنعية، وفق نظام ضريبة القيمة المضافة. الحاسبة تعرض قيمة الذهب الخام لأي وزن، وتُحدَّث كل خمس دقائق ما دامت الصفحة مفتوحة.',
    faqs: [
      { q: 'هل سعر الذهب في الرياض هو نفسه في جدة ومكة والدمام؟', a: 'قيمة الذهب الخام واحدة في كل المدن، لأنها تُحسب من سعر الأونصة وسعر صرف ثابت عند {peg.SA} ريال للدولار. ما يختلف بين محل وآخر هو الهامش على سعر الغرام في لوحة المحل والمصنعية. قارن عرضين بالسعر النهائي في الفاتورة، لا بسعر الغرام المعلق على الواجهة وحده.' },
      { q: 'هل تُدفع ضريبة القيمة المضافة على سعر الذهب أم على المصنعية فقط؟', a: 'على الاثنين معًا. المشغولات الذهبية في السعودية خاضعة للنسبة الأساسية {vat.SA}، وتُحسب على قيمة الذهب والمصنعية مجتمعتين. فإذا كانت قيمة الذهب والمصنعية في قطعة 4,000 ريال، أضيفت إليها {vat.SA} من هذا المبلغ كاملًا. التفاصيل والحالات الخاصة في صفحة ضريبة الذهب في السعودية.' },
      { q: 'هل السبائك معفاة من الضريبة في السعودية؟', a: 'تنص المادة 36 من اللائحة التنفيذية على نسبة الصفر لأول توريد للمعدن المؤهل يقوم به منتجه أو مصفّيه، والمعدن المؤهل نقاوته 99% على الأقل وقابل للتداول في سوق السبائك العالمية. النص لا يذكر إعفاء البيع التالي في المحل، فاطلب فاتورة ضريبية توضح النسبة المطبقة قبل الدفع.' },
      { q: 'لماذا لا يتأثر سعر الذهب بالريال بتغير الدولار؟', a: 'لأن الريال مربوط بالدولار بسعر رسمي ثابت. إذا ضعف الدولار أمام اليورو مثلًا وارتفعت الأونصة بالدولار، يرتفع الذهب بالريال بالنسبة نفسها تمامًا. لا يوجد أثر عملة مستقل كما في مصر أو تركيا، لذلك يكفي في السعودية متابعة سعر الأونصة بالدولار.' },
    ],
    body: (h) => `
<h2>سعر الصرف الذي يقوم عليه الحساب</h2>
<p>يعلن ${h.src('sama', 'البنك المركزي السعودي')} التزامه بالمحافظة على سعر الصرف الرسمي عند {peg.SA} ريال للدولار. هذا الرقم هو ما نستخدمه في كل حساب بالريال على الموقع، ولا نستعمل سعرًا من سوق الصرافة. الأونصة تُسعَّر عالميًا بالدولار، فيكفي ضربها في {peg.SA} وقسمتها على وزنها بالغرام لنحصل على غرام عيار 24 بالريال، ثم نطبق نسبة العيار.</p>
<h2>ما الذي يدفعه المشتري فوق قيمة الذهب</h2>
<p>الفاتورة السعودية النموذجية فيها أربعة أسطر: الوزن والعيار، وسعر الغرام، والمصنعية، وضريبة القيمة المضافة. الضريبة {vat.SA} بحسب ${h.src('ksaVatLaw', 'نظام ضريبة القيمة المضافة')}، وتشمل المصنعية. بعض المحلات تعلن سعرًا للغرام شاملًا المصنعية، فيصعب على المشتري أن يعرف كم دفع للصياغة. اطلب الفصل بين السطرين، ثم أدخل الأرقام في ${h.a('jewellery-price', 'حاسبة سعر القطعة')} لتعرف إن كان العرض معقولًا.</p>
<h2>السبائك والجنيهات في السوق السعودية</h2>
<p>تنص ${h.src('ksaVatRegs', 'المادة 36 من اللائحة التنفيذية')} على أن أول توريد للذهب أو الفضة أو البلاتين المؤهل، أي بنقاوة 99% فأكثر وقابل للتداول عالميًا، يقوم به المنتج أو المصفّي يخضع لنسبة الصفر. هذا يختلف عن القاعدة الإماراتية التي تشمل كل توريد. كثير من المواقع تكتب أن السبائك معفاة في السعودية من دون هذا القيد، والأسلم أن تسأل البائع عن النسبة الظاهرة في الفاتورة الضريبية. حاسبة ${h.a('gold-bars', 'سعر السبيكة')} تتيح لك المقارنة بين الحالتين.</p>
<h2>الزكاة والبيع</h2>
<p>من يملك ذهبًا للزينة أو للادخار في المملكة يحتاج غالبًا رقمين: قيمة ما لديه اليوم، ومقدار الزكاة إن بلغ النصاب. الأول تعطيه الحاسبة أعلاه، والثاني في ${h.a('zakat-gold', 'حاسبة زكاة الذهب')} التي تجمع العيارات المختلفة في ذهب خالص. وعند البيع يدفع المحل قيمة الذهب الخام ناقص خصمه، فلا تعود المصنعية ولا الضريبة.</p>`,
  },
  en: {
    slug: 'saudi-arabia', nav: 'Gold price in Saudi Arabia', card: 'The gram in riyals for every karat, at the official rate of 3.75 to the dollar.',
    title: 'Gold Price in Saudi Arabia Today {year}: 24K, 21K, 18K in SAR',
    description: 'Gold price in Saudi Arabia now in riyals: a gram of 24, 22, 21 and 18 karat from the ounce price and the Saudi Central Bank rate, plus what making charges and 15% VAT add.',
    h1: 'Gold price in Saudi Arabia today, in riyals',
    resume: 'In Saudi Arabia the riyal price of a gram of gold is the world ounce price in dollars, times {peg.SA}, the official exchange rate the Saudi Central Bank has held for decades, divided by {oz} grams, the weight of a troy ounce. Because the riyal is pegged, gold costs the same in Riyadh, Jeddah, Dammam or Khobar before a shop adds its margin, and it moves only when the ounce moves. A gram of 21 karat, the karat most Saudi shops sell, is seven eighths of a gram of 24; a gram of 18 is three quarters. When you buy a piece, the shop adds a making charge and then VAT at {vat.SA} on gold and making together, under the VAT Law. The calculator shows the metal value for any weight and refreshes every five minutes while the page is open, so expats comparing shops in the souq can check a quote on the spot.',
    faqs: [
      { q: 'Is gold the same price in Riyadh, Jeddah and Dammam?', a: 'The metal value is identical across the Kingdom, because it comes from the ounce price and a fixed rate of SAR {peg.SA} per dollar. What differs between shops is the margin on the board gram price and the making charge. Compare two offers on the final invoice, not on the gram price displayed in the window.' },
      { q: 'Is Saudi VAT charged on the gold or only on the making charge?', a: 'On both. Gold jewellery in Saudi Arabia carries the basic rate of {vat.SA}, applied to the gold value and the making charge together. On a piece with SAR 4,000 of gold and making, {vat.SA} of the whole 4,000 is added. The Saudi gold VAT page covers the special cases, including bars.' },
      { q: 'Are gold bars VAT-free in Saudi Arabia?', a: 'Article 36 of the Implementing Regulations zero-rates the first supply of a qualifying metal by its producer or refiner; a qualifying metal is at least 99% pure and tradeable on the world bullion market. The text does not zero-rate a later sale in a shop, so ask for a tax invoice showing the rate before paying.' },
      { q: 'Why does the dollar not change the riyal price of gold?', a: 'The riyal is fixed to the dollar at an official rate. When the ounce rises in dollars, gold in riyals rises by exactly the same percentage. There is no separate currency effect, unlike in Egypt or Turkey, so in Saudi Arabia following the dollar ounce price is enough.' },
    ],
    body: (h) => `
<h2>The exchange rate behind every figure</h2>
<p>The ${h.src('sama', 'Saudi Central Bank')} states its commitment to the official rate of {peg.SA} riyals per dollar. That is the rate used for every riyal figure on this site; we never use a money-changer rate. Gold is quoted per ounce in dollars, so multiplying by {peg.SA} and dividing by the ounce weight gives a gram of 24K in riyals, then the karat ratio applies.</p>
<h2>What the buyer pays on top of the gold</h2>
<p>A typical Saudi invoice has four lines: weight and karat, gram price, making charge, VAT. VAT is {vat.SA} under the ${h.src('ksaVatLaw', 'VAT Law')}, and it covers the making charge. Some shops quote a gram price that already includes making, which hides how much went on craftsmanship. Ask for the two lines separately, then enter them in the ${h.a('jewellery-price', 'jewellery price calculator')} to see whether the offer holds up.</p>
<h2>Bars and coins in the Saudi market</h2>
<p>${h.src('ksaVatRegs', 'Article 36 of the Implementing Regulations')} zero-rates the first supply of qualifying gold, silver or platinum, 99% pure or better and tradeable worldwide, made by the producer or refiner. That is narrower than the UAE rule, which zero-rates every supply. Many websites say bars are simply exempt in Saudi Arabia without that condition; the safe course is to check the rate printed on the tax invoice. The ${h.a('gold-bars', 'bar price calculator')} lets you compare both cases.</p>
<h2>Zakat and selling</h2>
<p>Anyone holding gold in the Kingdom usually needs two numbers: what it is worth today and how much zakat is due if it reaches the nisab. The calculator above gives the first; the ${h.a('zakat-gold', 'gold zakat calculator')} gives the second, adding up different karats as pure gold. When you sell, a shop pays the metal value minus its deduction; neither the making charge nor the VAT comes back.</p>`,
  },
});
