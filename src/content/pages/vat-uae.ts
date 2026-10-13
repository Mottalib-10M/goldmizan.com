import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'vat-uae', group: 'guides', order: 30, tool: 'vat', toolProps: { country: 'AE', karat: 22 }, kind: 'guide',
  related: ['uae', 'tourist-refund', 'gold-bars', 'vat-saudi', 'karat-22', 'jewellery-price'],
  sources: ['uaeDecreeLaw', 'uaeExecReg', 'uaeTourist', 'cbuae'],
  ar: {
    slug: 'gold-vat-uae', nav: 'ضريبة الذهب في الإمارات', card: 'ضريبة 5% على المجوهرات، وصفر على السبائك الاستثمارية عند كل بيع.',
    title: 'ضريبة الذهب في الإمارات {year}: 5% على المجوهرات وصفر للسبائك',
    description: 'ضريبة القيمة المضافة على الذهب في الإمارات: 5% على المجوهرات والمصنعية، ونسبة الصفر للسبائك والعملات بنقاوة 99% عند أي بائع، واسترداد الضريبة للسياح بعد ذلك.',
    h1: 'ضريبة القيمة المضافة على الذهب في الإمارات',
    resume: 'تفرض الإمارات ضريبة القيمة المضافة بنسبة {vat.AE} بحسب المادة الثالثة من المرسوم بقانون اتحادي رقم 8 لسنة 2017، وتنطبق على المجوهرات الذهبية بقيمة الذهب والمصنعية معًا. أما المعادن الثمينة الاستثمارية فتخضع لنسبة الصفر بحسب المادة 36 من اللائحة التنفيذية، وهي الذهب والفضة والبلاتين بنقاوة 99% فأكثر وبشكل قابل للتداول في أسواق السبائك العالمية. القاعدة الإماراتية تشمل التوريد والاستيراد معًا، ولا تشترط أن يكون البائع هو المصفاة، فالسبيكة المؤهلة بلا ضريبة عند أي محل في دبي أو أبوظبي، وهذا فرق جوهري مع السعودية. ويستطيع السائح غير المقيم أن يسترد ضريبة المجوهرات عند المغادرة بعد خصم الرسوم. الحاسبة تبين الضريبة على قطعة عيار 22، الأشيع في دبي، مقسومة بين جزء الذهب وجزء المصنعية، بسعر الأونصة الآن وسعر الربط {peg.AE}. المقيم في الإمارات يدفع الضريبة على الحلي كاملة، بينما يستردها السائح، وهذا الفرق وحده يغير قرار الشراء كثيرًا.',
    faqs: [
      { q: 'ما الذي يجعل السبيكة مؤهلة لنسبة الصفر في الإمارات؟', a: 'شرطان في المادة 36 من اللائحة التنفيذية: أن تكون نقاوة المعدن 99% أو أكثر، وأن يكون بشكل قابل للتداول في أسواق السبائك العالمية. ينطبق ذلك على الذهب والفضة والبلاتين. القطع المشغولة ولو كانت عيار 24 لا تُعد سبائك بالضرورة، فاطلب أن تذكر الفاتورة النسبة.' },
      { q: 'هل يدفع المقيم في دبي ضريبة 5% على الذهب كاملة؟', a: 'نعم. نظام الاسترداد مخصص للسائح غير المقيم في أي دولة مطبقة، فالمقيم في الإمارات يدفع {vat.AE} على المجوهرات دون استرداد، ولا يدفع شيئًا على السبائك الاستثمارية المؤهلة. لهذا يختار بعض المقيمين السبائك للادخار والمجوهرات للزينة فقط.' },
      { q: 'هل تتغير الضريبة إذا دفعت بالبطاقة أو نقدًا؟', a: 'لا. الضريبة تُحسب على قيمة التوريد مهما كانت طريقة الدفع، وأي رسوم إضافية على البطاقة يفرضها المحل تصبح جزءًا من القيمة وتخضع للضريبة كذلك. اطلب الفاتورة الضريبية في كل الحالات، فهي أيضًا شرط لاسترداد الضريبة للسياح.' },
      { q: 'ماذا عن الذهب الذي يبيعه التجار لبعضهم في سوق دبي؟', a: 'للتعامل بين المسجلين في الضريبة على الذهب والألماس قواعد احتساب عكسي خاصة بقرارات لمجلس الوزراء، وتخص التجار لا المستهلكين. هذه الصفحة وحاسباتها تخص المشتري الفرد الذي يدفع الضريبة في الفاتورة، ولا تحسب آلية الاحتساب العكسي.' },
      { q: 'هل يمكن استرداد الضريبة على قطعة اشتريتها عبر الإنترنت من محل إماراتي؟', a: 'يسمح القرار بالاسترداد للسائح الذي يشتري من منصة إلكترونية ويطلب الاسترداد من حسابه الشخصي عند الشراء، بشرط أن يستلم البضاعة بنفسه داخل الدولة. يبقى شرط الحد الأدنى {tourist.min} درهم وإخراج البضاعة خلال {tourist.days} يومًا.' },
      { q: 'كيف أعرف أن المحل مشارك في نظام استرداد الضريبة؟', a: 'اسأل البائع قبل الدفع إن كان يصدر مستند استرداد للسياح، لأن المستند يصدر وقت الشراء ولا يمكن طلبه لاحقًا. بحسب القرار يسجل البائع بيانات المشتري والمشتريات ويتحقق من أنه سائح غير مقيم. إن لم يكن المحل مشاركًا فلن تستطيع استرداد الضريبة مهما كانت قيمة القطعة.' },
      { q: 'هل تُحسب ضريبة على تصليح قطعة ذهب في دبي؟', a: 'التصليح خدمة يقدمها المحل، والخدمات خاضعة للنسبة الأساسية {vat.AE} كالسلع، ما لم يرد استثناء. الضريبة تُحسب على أجر التصليح وعلى أي ذهب يضيفه الصائغ إلى القطعة. اطلب فاتورة تفصل الأجر عن قيمة الذهب المضاف، ليتضح على ماذا دفعت الضريبة.' },
    ],
    body: (h) => `
<h2>النسبة الأساسية {vat.AE}</h2>
<p>تنص ${h.src('uaeDecreeLaw', 'المادة الثالثة من المرسوم بقانون اتحادي رقم 8 لسنة 2017 وتعديلاته')} على فرض الضريبة بنسبة أساسية {vat.AE} على كل توريد أو استيراد، مع مراعاة الأحكام الخاصة. المجوهرات الذهبية تخضع لهذه النسبة على قيمتها كاملة، والمصنعية جزء منها. في محل في ديرة يبيع سلسلة عيار 22 بسعر للغرام ومصنعية للغرام، تُحسب الضريبة على حاصل جمع الاثنين، لا على سعر الغرام وحده.</p>
<h2>المادة 36: نسبة الصفر للمعادن الاستثمارية</h2>
<p>تنص ${h.src('uaeExecReg', 'المادة 36 من اللائحة التنفيذية')} على أن توريد أو استيراد المعادن الثمينة الاستثمارية يخضع لنسبة الصفر، وتعرفها بأنها الذهب والفضة والبلاتين الذي تبلغ نقاوته 99% أو أكثر ويكون بشكل قابل للتداول في أسواق السبائك العالمية. لا يقيد النص ذلك بأول توريد ولا بصفة البائع، بخلاف ${h.a('vat-saudi', 'القاعدة السعودية')}. عمليًا تُباع السبائك من غرام واحد إلى كيلو، والعملات الذهبية الاستثمارية، بسعر الذهب مع علاوة البائع ودون ضريبة.</p>
<h2>مثال: عشرة غرامات عيار 22</h2>
<p>الحاسبة أعلاه تأخذ عشرة غرامات من عيار 22 ومصنعية للغرام، وتحسب قيمة الذهب بسعر الأونصة الآن مضروبًا في {peg.AE} بحسب ${h.src('cbuae', 'مصرف الإمارات المركزي')}، ثم الضريبة {vat.AE} على المجموع، وتفصلها إلى ضريبة على الذهب وضريبة على المصنعية. غيّر المصنعية لترى أن كل درهم إضافي فيها يرفع الضريبة أيضًا.</p>
<h2>استرداد الضريبة للسياح</h2>
<p>بحسب ${h.src('uaeTourist', 'قرار الهيئة الاتحادية للضرائب رقم 2 لسنة 2018 وتعديلاته')} يستطيع السائح غير المقيم أن يسترد الضريبة المدفوعة على مشترياته من بائع مشارك، إذا بلغت {tourist.min} درهم على الأقل من البائع نفسه، وأخرج البضاعة خلال {tourist.days} يومًا، بعد خصم رسم إداري {tourist.fee} من الضريبة ورسم ثابت {tourist.fixed} درهم لكل طلب. احسب المبلغ الصافي في ${h.a('tourist-refund', 'حاسبة الاسترداد')}. لا يُصدر مستند الاسترداد لمن هو دون الثامنة عشرة.</p>
<h2>ما يتغير بين السائح والمقيم والتاجر</h2>
<p>السائح يدفع {vat.AE} عند الشراء ثم يسترد معظمها. المقيم يدفعها ولا يستردها، إلا في السبائك المؤهلة حيث لا ضريبة أصلًا. التاجر المسجل الذي يشتري الذهب من تاجر آخر يخضع لقواعد احتساب عكسي خاصة لا تمس المستهلك. لهذا تختلف الأرقام التي يتداولها الناس عن السعر النهائي للذهب في دبي، والأدق أن يحسب كل شخص بحسب وضعه.</p>
<h2>تغيرات اللائحة</h2>
<p>عدلت الإمارات اللائحة التنفيذية أكثر من مرة منذ 2017، وآخر نسخة موحدة قرأناها هي المنشورة على موقع الهيئة الاتحادية للضرائب في سبتمبر 2026. المادة 36 لم تتغير في صياغتها بين النسختين اللتين قارناهما. نراجع النص عند كل تحديث للموقع، وتاريخ المراجعة مكتوب في أعلى الصفحة وأسفلها.</p>
<h2>أمثلة من سوق دبي</h2>
<p>زائر يشتري طقمًا من عيار 22 بسعر شامل الضريبة، فيدفع {vat.AE} على الذهب والمصنعية، ثم يسترد الجزء الأكبر منها في المطار إن استوفى الشروط. مقيم في الشارقة يشتري الطقم نفسه فيدفع الضريبة كاملة ولا يسترد شيئًا. موظف في أبوظبي يشتري سبيكة مئة غرام من تاجر في السوق فلا يدفع ضريبة أصلًا لأن السبيكة مؤهلة. ثلاثة أشخاص في السوق نفسه، وثلاث نتائج مختلفة، لذلك لا يصح أن تعتمد على سعر سمعته من صديق دون أن تعرف وضعه. اختر في الحاسبات وضعك أنت: الضريبة على المجوهرات هنا، والاسترداد في حاسبة السياح، والسبيكة في صفحة السبائك، ثم قارن السعر النهائي ببلدك إن كنت ستحمل القطعة معك عند السفر.</p>`,
  },
  en: {
    slug: 'gold-vat-uae', nav: 'VAT on gold in the UAE', card: '5% VAT on jewellery, zero on investment bars whoever sells them.',
    title: 'VAT on Gold UAE {year}: 5% on Jewellery, Zero on Gold Bars',
    description: 'VAT on gold in the UAE: 5% on jewellery and making charges, zero on bars and coins of 99% purity from any seller, and the tourist refund when you fly out.',
    h1: 'VAT on gold in the UAE',
    resume: 'The UAE charges VAT at {vat.AE} under Article 3 of Federal Decree-Law No. 8 of 2017, and it applies to gold jewellery on the gold and the making charge together. Investment precious metals are zero-rated under Article 36 of the Executive Regulation: gold, silver and platinum of 99% purity or more, in a form tradeable in global bullion markets. The UAE rule covers both supply and import and does not require the seller to be the refiner, so a qualifying bar carries no VAT at any shop in Dubai or Abu Dhabi, a real difference from Saudi Arabia. A non-resident tourist can reclaim the VAT on jewellery at departure, less fees. The calculator shows the VAT on a piece of 22K, the most common karat in Dubai, split between the gold and the making charge, at the current ounce price and the {peg.AE} peg. It is the page to read before a big jewellery purchase if you live in the Emirates, since residents get none of it back.',
    faqs: [
      { q: 'What makes a bar qualify for the zero rate in the UAE?', a: 'Two conditions in Article 36 of the Executive Regulation: the metal is 99% pure or more, and it is in a form tradeable in global bullion markets. It applies to gold, silver and platinum. Worked pieces, even in 24K, are not necessarily bars, so ask for the rate to be shown on the invoice.' },
      { q: 'Does a Dubai resident pay the full 5% VAT on gold?', a: 'Yes. The refund scheme is for overseas tourists not resident in any implementing state, so a UAE resident pays {vat.AE} on jewellery with no refund, and nothing on qualifying investment bars. That is why some residents keep bars for saving and buy jewellery only to wear.' },
      { q: 'Does VAT change if I pay by card or in cash?', a: 'No. VAT is charged on the value of the supply whatever the payment method, and any card surcharge the shop adds becomes part of that value and is taxed too. Ask for the tax invoice in every case; it is also a condition for the tourist refund.' },
      { q: 'What about gold traders selling to each other in the Dubai souq?', a: 'Supplies of gold and diamonds between VAT-registered businesses follow special reverse charge rules set by Cabinet decisions, which concern traders, not consumers. This page and its calculators cover the individual buyer who pays VAT on the invoice and do not model the reverse charge.' },
      { q: 'Can I reclaim VAT on a piece bought online from a UAE shop?', a: 'The decision allows a refund for a tourist who buys on an electronic platform and requests the refund from their personal account at purchase, provided they receive the goods themselves in the country. The AED {tourist.min} minimum and the {tourist.days}-day export rule still apply.' },
    ],
    body: (h) => `
<h2>The {vat.AE} standard rate</h2>
<p>${h.src('uaeDecreeLaw', 'Article 3 of Federal Decree-Law No. 8 of 2017 as amended')} imposes a standard rate of {vat.AE} on every supply or import, subject to specific provisions. Gold jewellery is taxed at that rate on its full value, making charge included. In a Deira shop selling a 22K chain at a gram price plus a making charge per gram, VAT is charged on the sum of the two, not on the gram price alone.</p>
<h2>Article 36: zero rate for investment metals</h2>
<p>${h.src('uaeExecReg', 'Article 36 of the Executive Regulation')} zero-rates the supply or import of investment precious metals, defined as gold, silver and platinum of a purity of 99% or more in a form tradeable in global bullion markets. The text does not limit this to a first supply or to the type of seller, unlike the ${h.a('vat-saudi', 'Saudi rule')}. In practice bars from one gram to a kilo and investment coins are sold at the gold price plus the dealer premium, with no VAT.</p>
<h2>Example: ten grams of 22K</h2>
<p>The calculator above takes ten grams of 22K and a making charge per gram, values the gold at the current ounce times {peg.AE} per the ${h.src('cbuae', 'UAE central bank')}, then applies {vat.AE} VAT to the total and splits it into VAT on the gold and VAT on the making. Change the making charge to see that each extra dirham of it raises the VAT too.</p>
<h2>The tourist refund</h2>
<p>Under ${h.src('uaeTourist', 'FTA Decision No. 2 of 2018 as amended')}, a non-resident tourist can reclaim the VAT paid at a participating retailer, provided purchases from that retailer reach AED {tourist.min} and the goods leave within {tourist.days} days, less an administrative fee of {tourist.fee} of the VAT and a fixed AED {tourist.fixed} per claim. Work out the net amount in the ${h.a('tourist-refund', 'refund calculator')}. No refund form is issued to anyone under eighteen.</p>
<h2>Tourist, resident and trader</h2>
<p>A tourist pays {vat.AE} at purchase and reclaims most of it. A resident pays it and gets nothing back, except on qualifying bars where there is no VAT in the first place. A registered trader buying gold from another trader falls under special reverse charge rules that do not touch the consumer. That is why the figures people pass around differ from the final price of gold in Dubai; the accurate way is for each person to calculate for their own situation.</p>
<h2>Changes to the regulation</h2>
<p>The UAE has amended the Executive Regulation several times since 2017; the latest consolidated version we read is the one published on the Federal Tax Authority website in September 2026. Article 36 has the same wording in the two versions we compared. We re-read the text at every site update, and the review date is shown at the top and bottom of the page.</p>`,
  },
});
