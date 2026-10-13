import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'vat-saudi', group: 'guides', order: 20, tool: 'vat', toolProps: { country: 'SA', karat: 21 }, kind: 'guide',
  related: ['saudi-arabia', 'gold-bars', 'jewellery-price', 'making-charges', 'vat-uae', 'compare-countries'],
  sources: ['ksaVatLaw', 'ksaVatRegs', 'sama', 'goldApi'],
  ar: {
    slug: 'gold-vat-saudi', nav: 'ضريبة الذهب في السعودية', card: 'ضريبة 15% على الذهب والمصنعية، ونسبة الصفر للسبائك عند أول توريد فقط.',
    title: 'ضريبة الذهب في السعودية {year}: 15% على المشغولات وقاعدة السبائك',
    description: 'ضريبة القيمة المضافة على الذهب في السعودية: 15% على قيمة المشغولات والمصنعية، ونسبة الصفر للمعادن الاستثمارية في أول توريد من المنتج أو المصفاة فقط، بالأمثلة.',
    h1: 'ضريبة القيمة المضافة على الذهب في السعودية',
    resume: 'تخضع المشغولات الذهبية في السعودية لضريبة القيمة المضافة بالنسبة الأساسية {vat.SA}، كما تنص المادة الثانية من نظام ضريبة القيمة المضافة، وتُحسب على قيمة التوريد كاملة: الذهب والمصنعية معًا. يختلف الأمر في المعادن الاستثمارية، أي الذهب والفضة والبلاتين بنقاوة لا تقل عن 99% وقابلة للتداول في سوق السبائك العالمية: تنص المادة 36 من اللائحة التنفيذية على أن أول توريد لها يقوم به منتج المعدن أو مصفّيه يخضع لنسبة الصفر. النص لا يمد نسبة الصفر إلى البيع التالي، كبيع محل التجزئة لسبيكة اشتراها من المصفاة، وهذا قيد يغفله كثير من المقالات التي تكتب أن السبائك معفاة في السعودية من دون شروط. الحاسبة تعرض الضريبة على قطعتك مقسومة بين جزء الذهب وجزء المصنعية، لترى أين يذهب المبلغ. ولأن الريال مربوط بالدولار عند {peg.SA}، تتبع قيمة الذهب وضريبته سعر الأونصة وحده.',
    faqs: [
      { q: 'ما المادة التي تحدد نسبة ضريبة القيمة المضافة في السعودية؟', a: 'المادة الثانية من نظام ضريبة القيمة المضافة المنشور على موقع هيئة الزكاة والضريبة والجمارك، وتنص على تطبيق الضريبة بنسبة أساسية قدرها {vat.SA} على توريد السلع والخدمات، ما لم يرد نص بالإعفاء أو بنسبة الصفر. الذهب المشغول لا يندرج في أي استثناء.' },
      { q: 'من يقصد النظام بمنتج المعدن ومصفّيه؟', a: 'تعرّف المادة 36 من اللائحة المنتج بأنه من يمارس تعدين المعدن المؤهل واستخراجه، والمصفّي بأنه من يمارس تنقية أي سلعة بأي طريقة لتصبح معدنًا مؤهلًا. أول توريد يقوم به أحدهما يخضع لنسبة الصفر، والمحل الذي يبيع للجمهور ليس منتجًا ولا مصفّيًا عادة.' },
      { q: 'هل تختلف ضريبة الذهب بين الرياض وجدة؟', a: 'لا. نظام ضريبة القيمة المضافة واحد في كل المملكة، والنسبة {vat.SA} في كل المدن. ما يختلف بين المحلات هو المصنعية وهامش سعر الغرام، والضريبة تتبعهما لأنها نسبة من المجموع. قارن العروض بالسعر النهائي شاملًا الضريبة.' },
      { q: 'هل أستطيع استرداد ضريبة الذهب عند مغادرة السعودية؟', a: 'لم نجد في نظام ضريبة القيمة المضافة ولائحته التي قرأناها نظامًا لاسترداد الضريبة للسياح على المشتريات الشخصية مماثلًا للنظام الإماراتي. لا نحسب استردادًا في السعودية، وإن أعلنت الهيئة نظامًا من هذا النوع فسنضيفه.' },
      { q: 'كيف أعرف أن الضريبة محسوبة صحيحًا في فاتورتي؟', a: 'اجمع سعر الذهب والمصنعية قبل الضريبة واضربه في {vat.SA}، فيجب أن تحصل على مبلغ الضريبة في الفاتورة. إن كان الرقم أكبر فاسأل البائع عن الأساس الذي حسب عليه، وإن كانت الفاتورة لا تذكر الضريبة منفصلة فاطلب فاتورة ضريبية.' },
      { q: 'هل تخضع السبائك المستوردة للضريبة عند دخولها؟', a: 'المادة 36 تشمل أيضًا منح حق أو مصلحة في توريد معدن مؤهل للاستثمار إذا عُد نقلًا لحيازة السلع. أما ضريبة الاستيراد على أمتعة المسافر فلها قواعد جمركية خاصة لم نحللها هنا، فراجع هيئة الزكاة والضريبة والجمارك قبل إدخال كمية كبيرة.' },
    ],
    body: (h) => `
<h2>النص: المادة الثانية من النظام</h2>
<p>ينشر موقع هيئة الزكاة والضريبة والجمارك ${h.src('ksaVatLaw', 'نظام ضريبة القيمة المضافة')}، وفي مادته الثانية أن الضريبة تُطبق بنسبة أساسية قدرها {vat.SA} من قيمة التوريد أو الاستيراد، ما لم يرد نص بالإعفاء أو بنسبة الصفر. الذهب المصنوع حليًا لا يدخل في الإعفاءات ولا في التوريدات بنسبة الصفر، فيخضع للنسبة الأساسية على قيمته كلها. قيمة التوريد هي ما يدفعه المشتري مقابل القطعة: الذهب والمصنعية وأي رسوم أخرى في الفاتورة.</p>
<h2>المثال بالأرقام</h2>
<p>قطعة عيار 21 وزنها عشرة غرامات، ومصنعيتها خمسة وعشرون ريالًا للغرام. قيمة الذهب تساوي عشرة أضعاف سعر غرام 21 الآن، والمصنعية 250 ريالًا. الضريبة {vat.SA} من مجموع الاثنين. الحاسبة أعلاه تحسب هذا المثال بسعر اليوم وتفصل الضريبة إلى جزء على الذهب وجزء على المصنعية. الجزء الأكبر دائمًا على الذهب، لأن قيمته أكبر، لكن الجزء على المصنعية هو الذي تستطيع خفضه بالتفاوض.</p>
<h2>المادة 36: المعادن الاستثمارية</h2>
<p>تقول ${h.src('ksaVatRegs', 'المادة 36 من اللائحة التنفيذية')} إن أول توريد للمعدن المؤهل يقوم به منتجه أو مصفّيه يخضع لنسبة الصفر، وكذلك منح أي حق أو مصلحة أو مطالبة في توريد معدن مؤهل للاستثمار إذا عُد نقلًا لحيازة السلع. المعدن المؤهل ذهب أو فضة أو بلاتين، ويعد موردًا للاستثمار إذا كانت نقاوته لا تقل عن 99% وكان قابلًا للتداول في سوق السبائك العالمية. القراءة المباشرة للنص أن نسبة الصفر تخص أول بيع من المصفاة أو المنجم، وأن البيع اللاحق من تاجر إلى مستهلك يعود إلى القاعدة العامة.</p>
<h2>لماذا تقرأ الفاتورة قبل أن تصدق المقالات</h2>
<p>كثير من الصفحات العربية تكتب أن السبائك عيار 24 معفاة من الضريبة في السعودية، دون ذكر شرط أول توريد. ربما يطبق بعض الباعة نسبة الصفر في حالات خاصة، كأن يكون البائع وكيلًا لمصفاة، لكن هذا يظهر في الفاتورة الضريبية. القاعدة العملية: اسأل قبل الدفع عن النسبة المطبقة، واطلب أن تُكتب في الفاتورة، ثم اختر في ${h.a('gold-bars', 'حاسبة السبيكة')} ما إذا كان البائع مصفاة أو لا لترى الفرق.</p>
<h2>المقارنة مع الإمارات</h2>
<p>في الإمارات النسبة الأساسية {vat.AE}، ونسبة الصفر للمعادن الاستثمارية تشمل كل توريد، لا الأول وحده. لذلك تكون السبيكة في دبي بلا ضريبة عند أي بائع، وتكون المشغولات أرخص بفارق النسبتين عند تساوي المصنعية. التفاصيل في ${h.a('vat-uae', 'صفحة ضريبة الذهب في الإمارات')}، والمقارنة بالأرقام في ${h.a('compare-countries', 'حاسبة المقارنة بين دول الخليج')}.</p>
<h2>ما لا تفعله الحاسبة</h2>
<p>لا تحسب الحاسبة ضريبة الاستيراد ولا الرسوم الجمركية، ولا تفترض أي إعفاء لم نقرأه في النص. سعر الذهب فيها هو سعر الأونصة الآن من ${h.src('goldApi', 'gold-api.com')} بسعر صرف ${h.src('sama', 'البنك المركزي السعودي')}، والمصنعية رقم تكتبه أنت. إن كنت تاجرًا مسجلًا في الضريبة، فقواعد الخصم والاحتساب العكسي بين التجار خارج نطاق هذه الصفحة.</p>`,
  },
  en: {
    slug: 'gold-vat-saudi-arabia', nav: 'VAT on gold in Saudi Arabia', card: '15% VAT on gold and making, and a zero rate for bars on the first supply only.',
    title: 'VAT on Gold in Saudi Arabia {year}: 15% on Jewellery, Bar Rules',
    description: 'VAT on gold in Saudi Arabia: 15% on the value of jewellery including making charges, and a zero rate for investment metals only on the first supply by a producer or refiner, with examples.',
    h1: 'VAT on gold in Saudi Arabia',
    resume: 'Gold jewellery in Saudi Arabia carries VAT at the basic rate of {vat.SA}, under Article 2 of the VAT Law, on the full value of the supply: gold and making charge together. Investment metals are different. For gold, silver and platinum at least 99% pure and tradeable on the world bullion market, Article 36 of the Implementing Regulations zero-rates the first supply made by the metal’s producer or refiner. The text does not extend the zero rate to a later sale, such as a retail shop selling a bar it bought from a refinery, a condition many articles leave out when they say bars are simply exempt in Saudi Arabia. The calculator shows the VAT on your piece split between the gold and the making charge, so you can see where the money goes. Because the riyal is pegged to the dollar at {peg.SA}, the gold value and its VAT follow the ounce price alone. For expats used to buying gold VAT-free elsewhere, this is the line on the invoice that surprises most.',
    faqs: [
      { q: 'Which article sets the VAT rate in Saudi Arabia?', a: 'Article 2 of the VAT Law published on the ZATCA website applies VAT at a basic rate of {vat.SA} to supplies of goods and services, unless a provision grants an exemption or a zero rate. Worked gold jewellery falls under no exception, so it is taxed at the basic rate on its full value.' },
      { q: 'Who is a producer or refiner under the Saudi rules?', a: 'Article 36 of the Implementing Regulations defines a producer as anyone who mines and extracts a qualifying metal, and a refiner as anyone who refines a commodity by any process into a qualifying metal. The first supply by either is zero-rated; a shop selling to the public is usually neither.' },
      { q: 'Is VAT on gold different in Riyadh and Jeddah?', a: 'No. The VAT system is the same across the Kingdom and the rate is {vat.SA} in every city. What varies between shops is the making charge and the margin on the gram price, and VAT follows them because it is a share of the total. Compare offers on the final VAT-inclusive price.' },
      { q: 'Can I reclaim Saudi VAT on gold when I leave the country?', a: 'We found no tourist refund scheme for personal purchases, like the UAE one, in the VAT Law and regulations we read. We do not compute a refund for Saudi Arabia; if ZATCA announces such a scheme, we will add it to the calculators.' },
      { q: 'How do I check the VAT on my invoice is right?', a: 'Add the gold and making charge before VAT and multiply by {vat.SA}; you should get the VAT shown on the invoice. If the figure is higher, ask the seller what base was used; if the invoice does not show VAT separately, ask for a proper tax invoice.' },
      { q: 'Is VAT due on bars brought into the Kingdom?', a: 'Article 36 also zero-rates granting a right or interest in a supply of an investment metal where it amounts to transferring possession of the goods. Import VAT on traveller luggage follows separate customs rules that we have not analysed here, so check with ZATCA before bringing in a large amount.' },
    ],
    body: (h) => `
<h2>The text: Article 2 of the Law</h2>
<p>ZATCA publishes the ${h.src('ksaVatLaw', 'VAT Law')}, whose Article 2 applies VAT at a basic rate of {vat.SA} of the value of a supply or import, unless a provision grants an exemption or a zero rate. Gold made into jewellery is neither exempt nor zero-rated, so the basic rate applies to its full value. The value of the supply is what the buyer pays for the piece: gold, making charge and any other fee on the invoice.</p>
<h2>A worked example</h2>
<p>A ten-gram piece of 21K with a making charge of 25 riyals a gram. The gold value is ten times today’s 21K gram price and the making charge is 250 riyals. VAT is {vat.SA} of the two together. The calculator above runs this example at today’s price and splits the VAT between the gold and the making charge. The larger part is always on the gold, since it is worth more, but the part on the making charge is the one you can cut by negotiating.</p>
<h2>Article 36: investment metals</h2>
<p>${h.src('ksaVatRegs', 'Article 36 of the Implementing Regulations')} zero-rates the first supply of a qualifying metal by its producer or refiner, and the grant, assignment or surrender of a right, interest or claim in a supply of a qualifying metal for investment where it transfers possession of the goods. A qualifying metal is gold, silver or platinum, supplied for investment when at least 99% pure and tradeable on the global bullion market. Read plainly, the zero rate covers the first sale by the refinery or mine, and a later sale from a trader to a consumer falls back on the general rule.</p>
<h2>Read the invoice before the articles</h2>
<p>Many Arabic pages say 24K bars are VAT-exempt in Saudi Arabia without mentioning the first-supply condition. Some sellers may apply the zero rate in specific cases, for instance a refinery’s own outlet, but that shows on the tax invoice. The practical rule: ask which rate applies before paying, have it printed on the invoice, then choose in the ${h.a('gold-bars', 'bar calculator')} whether the seller is the refiner to see the difference.</p>
<h2>How it compares with the UAE</h2>
<p>In the UAE the standard rate is {vat.AE}, and the zero rate for investment metals covers every supply, not just the first. A bar in Dubai is therefore VAT-free from any seller, and jewellery is cheaper by the gap between the two rates at equal making charges. Details on the ${h.a('vat-uae', 'UAE gold VAT page')}; figures in the ${h.a('compare-countries', 'Gulf comparison calculator')}.</p>
<h2>What the calculator does not do</h2>
<p>It does not compute import VAT or customs duty, and it assumes no exemption we have not read in the text. Its gold price is the current ounce from ${h.src('goldApi', 'gold-api.com')} at the ${h.src('sama', 'Saudi Central Bank')} rate, and the making charge is a figure you enter. If you are a VAT-registered trader, input tax and reverse charge rules between businesses are outside the scope of this page.</p>`,
  },
});
