/**
 * Pages de service (à propos, méthode, contact, charte, confidentialité, mentions, cookies, widget),
 * écrites pour ce site et ce sujet (RECETTE §6.5). Le HTML est produit par une fonction qui reçoit les
 * helpers ; les jetons {vat.SA}… sont remplacés au rendu.
 */
import type { Helpers } from '../lib/page-types';
import { LEGAL, CONTACT_EMAIL, AUTHOR_NAME } from '../data/site-config';

export interface ServiceText { title: string; description: string; h1: string; body: (h: Helpers) => string }
type Id = 'about' | 'method' | 'contact' | 'editorial' | 'privacy' | 'terms' | 'cookies' | 'widget';

const addr = `${LEGAL.street}, ${LEGAL.postalCode} ${LEGAL.city}, ${LEGAL.country}`;
const host = `${LEGAL.hosting.name}, ${LEGAL.hosting.address}`;

export const SERVICE: Record<Id, { ar: ServiceText; en: ServiceText }> = {
  about: {
    ar: {
      title: 'ميزان الذهب من Radif Partners: من نحن ولماذا أنشأنا الموقع',
      description: 'من ينشر ميزان الذهب، ولماذا أنشأناه، وكيف نحسب سعر الذهب في السعودية والإمارات والخليج، وكيف يُموَّل الموقع، وكيف تبلغنا عن خطأ في رقم أو في نص قانوني تجده.',
      h1: 'من نحن',
      body: (h) => `
<p>ميزان الذهب موقع تنشره Radif Partners، وهي جهة نشر مستقلة تصدر حاسبات مجانية وأدلة عملية. لا نبيع الذهب، ولا نملك محلًا، ولا نأخذ عمولة على أي شراء، ولا نعرض أرقام هواتف تجار. هدف الموقع واحد: أن يعرف من يدخل محل ذهب في الرياض أو دبي أو الكويت كم يساوي الذهب الذي سيشتريه أو يبيعه، وكم سيدفع فوقه، قبل أن يدفع.</p>
<h2>لماذا أنشأنا هذا الموقع</h2>
<p>من يبحث عن سعر الذهب اليوم في السعودية أو الإمارات يجد في أول النتائج مقالات صحفية كُتبت في يوم معين، وبعضها يعود إلى أسابيع أو أشهر، ويُعرض على أنه سعر اليوم. ولا يجد حاسبة تطبق ضريبة القيمة المضافة لبلده على الذهب والمصنعية معًا. لهذا بنينا موقعًا يفعل أمرين: يحسب سعر الغرام لكل عيار أمامك من سعر الأونصة الآن وسعر الصرف الرسمي، ويحسب السعر النهائي لقطعة بالمصنعية والضريبة الخاصة بكل بلد. هذا الموقع يفعل أفضل من أول نتيجة في البحث لأنه يعيد الحساب أمامك بسعر الأونصة المسجل بالدقيقة وبسعر الصرف الرسمي لكل بنك مركزي، ويعطي السعر النهائي للقطعة بضريبة بلدك، بدل مقال مؤرخ قبل أسابيع لا يحسب شيئًا.</p>
<h2>من أين تأتي الأرقام</h2>
<p>سعر الأونصة من ${h.src('goldApi', 'gold-api.com')}، وهي خدمة تسمح شروطها بالاستعمال التجاري على المواقع. أسعار الصرف من البنوك المركزية: ${h.src('sama', 'السعودي')}، و${h.src('cbuae', 'الإماراتي')}، و${h.src('cbb', 'البحريني')}، و${h.src('cbo', 'العماني')}، و${h.src('cbk', 'الكويتي')}. نسب الضريبة من نصوصها: ${h.src('ksaVatLaw', 'النظام السعودي')} و${h.src('uaeDecreeLaw', 'المرسوم بقانون الإماراتي')} و${h.src('nbrRate', 'الجهاز الوطني للإيرادات في البحرين')} و${h.src('omanVatLaw', 'القانون العماني')}. والتاريخ الطويل لسعر الأونصة من ${h.src('worldBank', 'البنك الدولي')}. التفاصيل في ${h.a('method', 'صفحة طريقة الحساب')}.</p>
<h2>كيف يُموَّل الموقع</h2>
<p>الموقع مجاني ولا يطلب تسجيلًا. قد تظهر فيه لاحقًا إعلانات محدودة، ثلاثة مواضع على الأكثر في الصفحة، ولن توضع فوق الحاسبة. لا نبيع بيانات، ولا نرسل ما تكتبه في الحاسبات إلى أي خادم: الحساب يجري في متصفحك.</p>
<h2>إذا وجدت خطأ</h2>
<p>إن رأيت رقمًا لا يطابق نصًا رسميًا، أو نسبة ضريبة تغيرت، أو فرقًا غير مفهوم بين حاسبتنا ولوحة محل، فاكتب لنا على <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> مع رابط المصدر إن وجد. نصحح المعيار في ملف واحد فيتغير في كل الحاسبات، ونذكر تاريخ التصحيح في أعلى الصفحات. السياسة الكاملة في ${h.a('editorial', 'السياسة التحريرية')}.</p>`,
    },
    en: {
      title: 'Gold Mizan by Radif Partners: Who We Are and Why We Built It',
      description: 'Who publishes Gold Mizan, why we built it, how we work out gold prices in the UAE, Saudi Arabia and the Gulf, how the site is funded and how to report an error.',
      h1: 'About Gold Mizan',
      body: (h) => `
<p>Gold Mizan is published by Radif Partners, an independent publisher of free calculators and practical guides. We sell no gold, own no shop, take no commission on any purchase and list no dealer phone numbers. The site has one aim: that anyone walking into a gold shop in Dubai, Riyadh or Kuwait knows what the gold they are buying or selling is worth, and what they will pay on top, before they pay.</p>
<h2>Why we built it</h2>
<p>Search for today’s gold rate in Dubai or Saudi Arabia and the top results are news articles written on a given day, some of them weeks or months old, presented as today’s price. None applies your country’s VAT to gold and making together. So we built a site that does two things: it works out the gram price for each karat in front of you from the current ounce price and the official exchange rate, and it works out the final price of a piece with the making charge and each country’s VAT. This site does better than the first search result because it recalculates in front of you from an ounce price recorded to the minute and each central bank’s official exchange rate, and gives the final price of a piece with your country’s VAT, instead of an article dated weeks ago that calculates nothing.</p>
<h2>Where the figures come from</h2>
<p>The ounce price comes from ${h.src('goldApi', 'gold-api.com')}, whose terms allow commercial use on websites. Exchange rates come from the central banks of ${h.src('sama', 'Saudi Arabia')}, ${h.src('cbuae', 'the UAE')}, ${h.src('cbb', 'Bahrain')}, ${h.src('cbo', 'Oman')} and ${h.src('cbk', 'Kuwait')}. VAT rates come from the texts: the ${h.src('ksaVatLaw', 'Saudi VAT Law')}, the ${h.src('uaeDecreeLaw', 'UAE Decree-Law')}, ${h.src('nbrRate', 'Bahrain’s National Bureau for Revenue')} and the ${h.src('omanVatLaw', 'Omani VAT Law')}. The long-run ounce history comes from the ${h.src('worldBank', 'World Bank')}. Details on the ${h.a('method', 'method page')}.</p>
<h2>How the site is funded</h2>
<p>The site is free and needs no account. It may later carry a few ads, three slots per page at most, never above a calculator. We sell no data and send nothing you type into the calculators to any server: the sums run in your browser.</p>
<h2>If you find an error</h2>
<p>If a figure does not match an official text, a VAT rate has changed, or there is an unexplained gap between our calculator and a shop board, write to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> with a link to the source if you have one. We fix the parameter in one file, so it changes in every calculator, and the correction date appears at the top of the pages. The full policy is in the ${h.a('editorial', 'editorial policy')}.</p>`,
    },
  },
  method: {
    ar: {
      title: 'طريقة حساب سعر الذهب: الأونصة وسعر الصرف والعيار والضريبة',
      description: 'كيف يحسب ميزان الذهب سعر الغرام لكل عيار والسعر النهائي للقطعة: المعادلات، ومصادر الأونصة وأسعار الصرف ونسب الضريبة، والاختبارات، وحدود الحساب بصراحة.',
      h1: 'طريقة الحساب ومصادرها',
      body: (h) => `
<h2>سعر غرام عيار 24</h2>
<p>غرام 24 = سعر الأونصة بالدولار ÷ {oz} × سعر الصرف. وزن الأونصة التروي من ${h.src('ukWeights', 'قانون الأوزان والمقاييس البريطاني لعام 1985')}. سعر الصرف هو سعر الربط الرسمي في السعودية ({peg.SA})، والإمارات ({peg.AE})، والبحرين ({peg.BH})، وعُمان (الريال = {peg.OMusd} دولار). في الكويت وقطر نأخذ سعر اليوم من ${h.src('fxApi', 'ExchangeRate-API')}، والرقم الاحتياطي من ${h.src('cbuaeFx', 'جدول مصرف الإمارات المركزي')}: {peg.KW} دينار و{peg.QA} ريال قطري للدولار.</p>
<h2>العيارات الأخرى</h2>
<p>غرام العيار k = غرام 24 × k ÷ 24. هذه هي الطريقة التي تتبعها لوحات الأسعار في السعودية، وهي قيمة المعدن الخالص في كل عيار. في الإمارات قد تضيف لوحات المحلات هامشًا ثابتًا على كل غرام، فلا نحاول تقليده بل نعرض قيمة المعدن، ونترك للزائر أن يكتب سعر اللوحة في الحاسبة.</p>
<h2>سعر القطعة</h2>
<p>قيمة الذهب = الوزن × غرام العيار. المصنعية = الوزن × المصنعية للغرام، أو قيمة الذهب × النسبة. الضريبة = (قيمة الذهب + المصنعية) × نسبة البلد: {vat.SA} في السعودية بحسب ${h.src('ksaVatLaw', 'المادة الثانية من النظام')}، و{vat.AE} في الإمارات بحسب ${h.src('uaeDecreeLaw', 'المادة الثالثة من المرسوم بقانون')}، و{vat.BH} في البحرين، و{vat.OM} في عُمان، وصفر في الكويت وقطر. للسبائك: صفر في الإمارات لكل توريد (${h.src('uaeExecReg', 'المادة 36')})، وصفر لأول توريد فقط في السعودية (${h.src('ksaVatRegs', 'المادة 36')}) وعُمان، والنسبة الأساسية في البحرين لأننا لم نجد القاعدة.</p>
<h2>الزكاة والبيع واسترداد السياح</h2>
<p>الزكاة: الذهب الخالص = مجموع (الوزن × العيار ÷ 24)، والنصاب عشرون مثقالًا ونعرضه {nisab} غرامًا قابلة للتعديل، والزكاة {zakat.rate} من القيمة إن بلغ النصاب، بحسب ${h.src('binbazNisab', 'فتوى ابن باز')}. البيع: قيمة الذهب ناقص خصم المحل الذي يكتبه الزائر. استرداد السياح: الضريبة المتضمنة = السعر × النسبة ÷ (1 + النسبة)، ناقص {tourist.fee} منها و{tourist.fixed} درهم لكل طلب، بشرط {tourist.min} درهم على الأقل، بحسب ${h.src('uaeTourist', 'قرار الهيئة الاتحادية للضرائب')}.</p>
<h2>الاختبارات</h2>
<p>كل دالة حساب مختبرة آليًا: أسعار الربط مقارنة بالأرقام المنشورة، ونسبة غرام 21 إلى 24 مقارنة بسعرين منشورين في يوم واحد، وأمثلة الضريبة والزكاة والاسترداد محسوبة يدويًا ومقارنة بالنتيجة. يفشل بناء الموقع إن فشل أي اختبار.</p>
<h2>الحدود</h2>
<p>لا نعرف هامش محل بعينه ولا مصنعيته، فهما مدخلات يكتبها الزائر. لا نحسب الرسوم الجمركية ولا ضريبة الاستيراد. الكويت وقطر بلا ضريبة قيمة مضافة بحسب مراجعتنا، وقد يتغير ذلك. سعر الأونصة من مصدر واحد، وقد يختلف قليلًا عن مصادر أخرى في اللحظة نفسها. الأرقام تقدير إرشادي ولا تغني عن فاتورة البائع.</p>`,
    },
    en: {
      title: 'Gold Price Method: Ounce, Exchange Rate, Karat and VAT Rules',
      description: 'How Gold Mizan works out the gram price per karat and the final price of a piece: formulas, sources for the ounce, exchange rates and VAT, tests and limits.',
      h1: 'How we calculate, and our sources',
      body: (h) => `
<h2>The 24K gram price</h2>
<p>24K gram = dollar ounce price ÷ {oz} × exchange rate. The troy ounce weight is from the ${h.src('ukWeights', 'UK Weights and Measures Act 1985')}. The exchange rate is the official peg in Saudi Arabia ({peg.SA}), the UAE ({peg.AE}), Bahrain ({peg.BH}) and Oman (one rial = USD {peg.OMusd}). For Kuwait and Qatar we take today’s rate from ${h.src('fxApi', 'ExchangeRate-API')}, with a fallback from the ${h.src('cbuaeFx', 'UAE central bank table')}: {peg.KW} dinars and {peg.QA} Qatari riyals per dollar.</p>
<h2>Other karats</h2>
<p>Gram of karat k = 24K gram × k ÷ 24. That is how Saudi price boards work, and it is the pure metal value of each karat. In the UAE, shop boards may add a fixed margin per gram; we do not try to mimic it, we show the metal value and let visitors type the board price into the calculator.</p>
<h2>The price of a piece</h2>
<p>Gold value = weight × karat gram price. Making = weight × making per gram, or gold value × percentage. VAT = (gold value + making) × the country’s rate: {vat.SA} in Saudi Arabia under ${h.src('ksaVatLaw', 'Article 2 of the Law')}, {vat.AE} in the UAE under ${h.src('uaeDecreeLaw', 'Article 3 of the Decree-Law')}, {vat.BH} in Bahrain, {vat.OM} in Oman, zero in Kuwait and Qatar. For bars: zero in the UAE on every supply (${h.src('uaeExecReg', 'Article 36')}), zero on the first supply only in Saudi Arabia (${h.src('ksaVatRegs', 'Article 36')}) and Oman, and the standard rate in Bahrain because we did not find the rule.</p>
<h2>Zakat, resale and the tourist refund</h2>
<p>Zakat: pure gold = sum of (weight × karat ÷ 24); the nisab is twenty mithqal, shown as {nisab} g and editable; zakat is {zakat.rate} of the value once the nisab is reached, per the ${h.src('binbazNisab', 'fatwa of Ibn Baz')}. Resale: gold value minus the shop deduction the visitor enters. Tourist refund: VAT contained = price × rate ÷ (1 + rate), less {tourist.fee} of it and AED {tourist.fixed} per claim, with an AED {tourist.min} minimum, per the ${h.src('uaeTourist', 'FTA decision')}.</p>
<h2>Tests</h2>
<p>Every calculation function is tested automatically: pegs against the published figures, the 21K to 24K ratio against two prices published on the same day, and VAT, zakat and refund examples worked out by hand and compared with the result. The site build fails if any test fails.</p>
<h2>Limits</h2>
<p>We do not know a given shop’s margin or making charge; those are inputs the visitor types. We do not compute customs duty or import VAT. Kuwait and Qatar have no VAT according to our review, which may change. The ounce price comes from one source and may differ slightly from others at the same moment. Figures are estimates for guidance and do not replace the seller’s invoice.</p>`,
    },
  },
  contact: {
    ar: { title: 'اتصل بنا: ميزان الذهب، للإبلاغ عن خطأ في سعر أو نص قانوني', description: 'راسل ميزان الذهب للإبلاغ عن خطأ في حاسبة أو نسبة ضريبة أو سعر صرف، أو لطلب الحاسبة لموقعك. لا نقدم نصائح شراء ولا نتوسط بين التجار والمشترين في الخليج.', h1: 'اتصل بنا',
      body: (h) => `<p>البريد: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. نقرأ كل رسالة تخص خطأ في رقم أو في نص قانوني، ونصحح خلال أيام إن ثبت الخطأ بمصدر رسمي. لا نقدم نصيحة شراء أو بيع، ولا نرشح محلات، ولا نتوسط في أي صفقة. لوضع الحاسبة في موقعك راجع ${h.a('widget', 'صفحة ضع الحاسبة في موقعك')}. الناشر: ${AUTHOR_NAME}، ${addr}.</p>` },
    en: { title: 'Contact Gold Mizan: Report an Error in a Price or a Legal Text', description: 'Write to Gold Mizan to report an error in a calculator, a VAT rate or an exchange rate, or to embed the calculator. We give no buying advice and do not broker deals between Gulf traders and buyers.', h1: 'Contact',
      body: (h) => `<p>Email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. We read every message about an error in a figure or a legal text and correct within days when an official source confirms it. We give no buying or selling advice, recommend no shops and broker no deals. To put the calculator on your site, see the ${h.a('widget', 'embed page')}. Publisher: ${AUTHOR_NAME}, ${addr}.</p>` },
  },
  editorial: {
    ar: { title: 'السياسة التحريرية لميزان الذهب: المصادر والتحديث وتصحيح الأخطاء', description: 'كيف يختار ميزان الذهب مصادره ويحدث أسعار الصرف ونسب الضريبة ويصحح الأخطاء: نصوص رسمية فقط، ومراجعة عند كل تحديث، وتاريخ ظاهر في أعلى كل صفحة وأسفلها.', h1: 'السياسة التحريرية',
      body: (h) => `<p>نعتمد في كل قاعدة على نص رسمي نقرؤه ونذكره بالاسم والرابط: قوانين الضريبة ولوائحها، وصفحات البنوك المركزية، وفتاوى منشورة على المواقع الرسمية لأصحابها في مسائل الزكاة. لا نعتمد على مقالات أو مدونات. ما لم نجد له نصًا نقوله صراحة، كما في قاعدة السبائك في البحرين. كل المعايير في ملف واحد، تاريخ مراجعته ظاهر في أعلى الصفحات وأسفلها، ونراجعه سنويًا على الأقل وعند كل تعديل نعلم به. للإبلاغ عن خطأ: ${h.a('contact', 'اتصل بنا')}.</p>` },
    en: { title: 'Gold Mizan Editorial Policy: Sources, Updates and Corrections', description: 'How Gold Mizan chooses its sources, updates exchange rates and VAT rates and corrects errors: official texts only, a review at every update, and a date shown at the top and bottom of every page.', h1: 'Editorial policy',
      body: (h) => `<p>Every rule rests on an official text we have read and name with its link: VAT laws and regulations, central bank pages, and, for zakat, fatwas published on their authors’ official websites. We do not rely on articles or blogs. Where we found no text, we say so plainly, as with the bar rule in Bahrain. All parameters sit in one file whose review date shows at the top and bottom of pages; we review it at least yearly and whenever we learn of a change. To report an error: ${h.a('contact', 'contact us')}.</p>` },
  },
  privacy: {
    ar: { title: 'الخصوصية في ميزان الذهب: لا حساب ولا تسجيل ولا cookies', description: 'سياسة الخصوصية لميزان الذهب: الحاسبات تعمل في متصفحك، لا نجمع ما تكتبه، ولا cookies. يجلب متصفحك سعر الأونصة من gold-api.com وسعر الصرف من ExchangeRate-API فقط.', h1: 'سياسة الخصوصية',
      body: () => `<p>المسؤول عن الموقع: ${AUTHOR_NAME}، ${addr}، البريد ${CONTACT_EMAIL}. لا يضع هذا الموقع أي cookies ولا يطلب أي حساب. ما تكتبه في الحاسبات يبقى في متصفحك ولا يُرسل إلينا. عند فتح صفحة فيها حاسبة، يطلب متصفحك سعر الأونصة من gold-api.com وسعر الصرف من open.er-api.com، فتصل إلى هذين الخادمين معلومات تقنية عادية مثل عنوان IP، ولا نتحكم في معالجتها. الموقع مستضاف لدى ${host}، الذي يسجل بيانات الاتصال التقنية لأغراض الأمان. إن فعّلنا لاحقًا أداة Microsoft Clarity لقياس استقرار الموقع فستعمل دون cookies ومع إخفاء محتوى الصفحة، وسنذكر ذلك هنا. يحق لك الاستفسار عن أي معالجة بمراسلتنا، وتقديم شكوى إلى ${LEGAL.supervisoryAuthority}.</p>` },
    en: { title: 'Privacy at Gold Mizan: No Account, No Sign-Up and No Cookies', description: 'Gold Mizan privacy policy: calculators run in your browser, we collect nothing you type, and there are no cookies. Your browser fetches the ounce price from gold-api.com and the exchange rate only.', h1: 'Privacy policy',
      body: () => `<p>Controller: ${AUTHOR_NAME}, ${addr}, email ${CONTACT_EMAIL}. This site sets no cookies and asks for no account. What you type into the calculators stays in your browser and is never sent to us. When a page with a calculator opens, your browser requests the ounce price from gold-api.com and the exchange rate from open.er-api.com, so those servers receive ordinary technical information such as your IP address; we do not control their processing. The site is hosted by ${host}, which logs technical connection data for security. If we later switch on Microsoft Clarity to measure site stability, it will run with no cookies and with page content masked, and we will say so here. You may ask about any processing by writing to us, and complain to the ${LEGAL.supervisoryAuthority}.</p>` },
  },
  terms: {
    ar: { title: 'إشعار قانوني لميزان الذهب: الناشر والاستضافة وحدود المسؤولية', description: 'الإشعار القانوني لموقع ميزان الذهب: الناشر Radif Partners وعنوانه، والاستضافة، وطبيعة الأرقام المعروضة بوصفها تقديرًا إرشاديًا لا يغني عن فاتورة البائع ولا عن استشارة مختص.', h1: 'إشعار قانوني',
      body: () => `<p>الناشر والمسؤول عن المحتوى: ${AUTHOR_NAME}، ${addr}. البريد: ${CONTACT_EMAIL}. الاستضافة: ${host}. الأرقام المعروضة تقدير إرشادي محسوب من سعر الأونصة العالمي وأسعار الصرف ونسب الضريبة المذكورة في مصادرها، ولا تغني عن فاتورة البائع ولا عن استشارة مختص في الضريبة أو الزكاة. الموقع مستقل ولا يتبع أي جهة حكومية أو بنك مركزي أو محل ذهب، والعلامات المذكورة لأصحابها. سعر الأونصة مقدم من gold-api.com وسعر الصرف من ExchangeRate-API، وبيانات التاريخ من البنك الدولي برخصة CC BY 4.0.</p>` },
    en: { title: 'Gold Mizan Legal Notice: Publisher, Hosting and Liability Limits', description: 'Legal notice for Gold Mizan: publisher Radif Partners and its address, hosting provider, and the nature of the figures shown, an estimate for guidance that does not replace a seller’s invoice.', h1: 'Legal notice',
      body: () => `<p>Publisher and person responsible for content: ${AUTHOR_NAME}, ${addr}. Email: ${CONTACT_EMAIL}. Hosting: ${host}. Figures shown are an estimate for guidance, worked out from the world ounce price, exchange rates and the VAT rates named in their sources; they do not replace the seller’s invoice or advice from a tax or zakat professional. The site is independent and not affiliated with any government body, central bank or gold shop; brand names belong to their owners. Ounce prices are provided by gold-api.com, exchange rates by ExchangeRate-API, and history data by the World Bank under CC BY 4.0.</p>` },
  },
  cookies: {
    ar: { title: 'ملفات تعريف الارتباط في ميزان الذهب: لا يضع الموقع أي cookies', description: 'ميزان الذهب لا يضع أي ملفات تعريف ارتباط (cookies) ولا يستعمل تخزينًا لتتبعك. الحاسبات تعمل في متصفحك، والطلبات الوحيدة الخارجية هي سعر الأونصة وسعر الصرف.', h1: 'ملفات تعريف الارتباط',
      body: () => `<p>لا يضع هذا الموقع أي cookies، لا للقياس ولا للإعلان ولا للتفضيلات. لا يوجد ما تقبله أو ترفضه. الطلبات الخارجية الوحيدة هي طلب سعر الأونصة من gold-api.com وسعر الصرف من open.er-api.com، ولا يضع أي منهما cookies عبر صفحاتنا. إن فعّلنا لاحقًا Microsoft Clarity لقياس استقرار الموقع فسيعمل بلا cookies.</p>` },
    en: { title: 'Cookies on Gold Mizan: This Site Sets No Cookies of Any Kind', description: 'Gold Mizan sets no cookies and uses no storage to track you. The calculators run in your browser, and the only outside requests are for the gold ounce price and the exchange rate.', h1: 'Cookies',
      body: () => `<p>This site sets no cookies, whether for measurement, advertising or preferences. There is nothing to accept or refuse. The only outside requests are for the ounce price from gold-api.com and the exchange rate from open.er-api.com, and neither sets cookies through our pages. If we later switch on Microsoft Clarity to measure site stability, it will run without cookies.</p>` },
  },
  widget: {
    ar: { title: 'ضع حاسبة سعر الذهب في موقعك: رمز إطار مجاني بالعربية', description: 'رمز iframe مجاني لعرض حاسبة سعر الذهب لكل عيار في موقعك أو منتداك بالعربية أو الإنجليزية، تعمل في متصفح الزائر دون جمع بيانات، مع رابط المصدر ظاهر تحتها.', h1: 'ضع حاسبة سعر الذهب في موقعك', body: () => '' },
    en: { title: 'Embed the Gulf Gold Rate Calculator on Your Site: Free iframe', description: 'Free iframe code to show the gold rate per karat calculator on your website or forum, in Arabic or English, running in the visitor’s browser with no data collected and a source link below.', h1: 'Embed the gold rate calculator', body: () => '' },
  },
};
