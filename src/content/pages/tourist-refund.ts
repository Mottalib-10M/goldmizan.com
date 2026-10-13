import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'tourist-refund', group: 'tools', order: 50, tool: 'tourist', kind: 'outil',
  related: ['vat-uae', 'uae', 'karat-22', 'compare-countries', 'jewellery-price', 'gold-bars'],
  sources: ['uaeTourist', 'uaeExecReg', 'uaeDecreeLaw'],
  ar: {
    slug: 'tourist-refund', nav: 'استرداد ضريبة الذهب للسياح في الإمارات', card: 'كم تسترد من ضريبة الذهب عند مغادرة الإمارات، بعد الرسوم.',
    title: 'استرداد ضريبة الذهب للسياح في الإمارات {year}: احسب المبلغ الصافي',
    description: 'احسب ما يسترده السائح من ضريبة القيمة المضافة على الذهب عند مغادرة الإمارات: 5% من السعر، ناقص 13% منها و4.8 درهم لكل طلب، بشرط 250 درهمًا على الأقل.',
    h1: 'استرداد ضريبة الذهب للسياح في الإمارات',
    resume: 'نظام استرداد الضريبة للسياح في الإمارات يعيد للزائر غير المقيم جزءًا من ضريبة القيمة المضافة التي دفعها على مشترياته، ومنها المجوهرات الذهبية، عند مغادرته الدولة. بحسب قرار الهيئة الاتحادية للضرائب رقم 2 لسنة 2018 وتعديلاته، يجب أن تبلغ قيمة المشتريات شاملة الضريبة {tourist.min} درهم على الأقل من البائع نفسه، وأن تخرج البضاعة مع السائح خلال {tourist.days} يومًا من تاريخ الشراء، ولا يُصدر البائع المستند لمن هو دون الثامنة عشرة. يخصم النظام رسمًا إداريًا قدره {tourist.fee} من مبلغ الضريبة المسترد، ورسمًا ثابتًا قدره {tourist.fixed} درهم عن كل طلب، ولا يتجاوز الاسترداد النقدي {tourist.cap} درهم للسائح في 24 ساعة. الحاسبة تحسب الضريبة المتضمنة في السعر، والرسوم، والمبلغ الصافي الذي تتوقع استرداده، فتعرف قيمة القطعة الحقيقية بعد العودة.',
    faqs: [
      { q: 'من يحق له استرداد ضريبة الذهب في الإمارات؟', a: 'السائح الأجنبي، أي الشخص الطبيعي غير المقيم في أي من الدول المطبقة للضريبة، وليس من أفراد طاقم الرحلة المغادرة، بحسب اللائحة التنفيذية. يجب أن يكون موجودًا في الدولة عند الشراء، وأن يغادر مع البضاعة خلال {tourist.days} يومًا. المقيمون في الإمارات لا يستفيدون من النظام.' },
      { q: 'هل أسترد الضريبة على المصنعية أيضًا؟', a: 'الضريبة في الفاتورة تُحسب على السعر كله، أي الذهب والمصنعية، والاسترداد يقوم على مبلغ الضريبة المدفوع في مستند الاسترداد. لذلك تأخذ الحاسبة سعر القطعة شاملًا الضريبة وتستخرج منه {vat.AE} المتضمنة، ثم تطرح الرسوم.' },
      { q: 'هل تُسترد ضريبة السبائك الذهبية؟', a: 'السبائك والعملات الاستثمارية بنقاوة 99% فأكثر تخضع أصلًا لنسبة الصفر في الإمارات بحسب المادة 36 من اللائحة التنفيذية، فلا توجد ضريبة لتُسترد. الاسترداد يخص المجوهرات والمشغولات الخاضعة لنسبة {vat.AE}.' },
    ],
    body: (h) => `
<h2>الشروط كما وردت في القرار</h2>
<p>يحدد ${h.src('uaeTourist', 'قرار الهيئة الاتحادية للضرائب رقم 2 لسنة 2018 وتعديلاته')} ما يلي: الحد الأدنى للمشتريات شاملة الضريبة {tourist.min} درهم من البائع الخاضع للضريبة نفسه، وإثبات خروج البضاعة خلال {tourist.days} يومًا من تاريخ التوريد، ورسم إداري بنسبة {tourist.fee} من الضريبة المستردة، ورسم ثابت {tourist.fixed} درهم لكل طلب، وسقف للاسترداد النقدي قدره {tourist.cap} درهم لكل سائح خلال 24 ساعة. ويُستثنى ما لا يرافق السائح عند المغادرة وما استُهلك داخل الدولة.</p>
<h2>من هو السائح بحسب اللائحة</h2>
<p>تعرّف ${h.src('uaeExecReg', 'اللائحة التنفيذية')} السائح الأجنبي بأنه أي شخص طبيعي غير مقيم في أي من الدول المطبقة، وليس من طاقم الرحلة. هذا التعريف هو سبب أن المقيم في دبي لا يستفيد من النظام ولو كان يحمل جواز سفر أجنبيًا. تأكد أيضًا من أن المحل مشارك في النظام قبل الدفع، لأن المستند يصدره البائع وقت الشراء.</p>
<h2>المبلغ الصافي ومقارنته</h2>
<p>الضريبة المتضمنة في سعر شامل لا تساوي {vat.AE} منه، بل السعر مضروبًا في النسبة ومقسومًا على واحد زائد النسبة، لأن الضريبة حُسبت على السعر قبلها. هذا ما تفعله الحاسبة قبل أن تطرح الرسوم. استعمل المبلغ الصافي في ${h.a('compare-countries', 'حاسبة المقارنة')}: اطرحه من سعر القطعة في الإمارات قبل أن تقارنها بسعرها في بلدك.</p>`,
  },
  en: {
    slug: 'uae-tourist-vat-refund', nav: 'UAE tourist VAT refund on gold', card: 'What you get back of the VAT on gold when leaving the UAE, after fees.',
    title: 'UAE Tourist VAT Refund on Gold {year}: Work Out the Net Amount',
    description: 'Work out the VAT a tourist gets back on gold when leaving the UAE: 5% of the price, less 13% of it and AED 4.8 per claim, on purchases of at least AED 250 from one retailer.',
    h1: 'UAE tourist VAT refund on gold',
    resume: 'The UAE Tax Refunds for Tourists Scheme gives a non-resident visitor part of the VAT back on purchases, gold jewellery included, when leaving the country. Under Federal Tax Authority Decision No. 2 of 2018 as amended, purchases including VAT must reach AED {tourist.min} from the same retailer, the goods must leave with the tourist within {tourist.days} days of purchase, and no refund form may be issued to anyone under eighteen. The scheme keeps an administrative fee of {tourist.fee} of the VAT refunded and a fixed fee of AED {tourist.fixed} per claim, and cash refunds are capped at AED {tourist.cap} per tourist in 24 hours. The calculator extracts the VAT contained in the price, deducts the fees and gives the net amount you can expect back, so you know what the piece really cost once you are home. Visitors buying 22K sets before a wedding often forget the fee, which this makes visible.',
    faqs: [
      { q: 'Who can reclaim VAT on gold in the UAE?', a: 'An overseas tourist, meaning a natural person not resident in any of the implementing states and not a crew member on the departing flight, under the Executive Regulation. You must be in the country when buying and leave with the goods within {tourist.days} days. UAE residents cannot use the scheme, whatever their passport.' },
      { q: 'Is the VAT on the making charge refunded too?', a: 'VAT on the invoice is charged on the whole price, gold and making, and the refund is based on the VAT paid shown on the refund document. That is why the calculator takes the VAT-inclusive price, extracts the {vat.AE} it contains and then subtracts the fees.' },
      { q: 'Is VAT on gold bars refunded?', a: 'Investment bars and coins of 99% purity or more are already zero-rated in the UAE under Article 36 of the Executive Regulation, so there is no VAT to reclaim. The refund concerns jewellery and other items taxed at {vat.AE}.' },
    ],
    body: (h) => `
<h2>The conditions as the decision sets them</h2>
<p>${h.src('uaeTourist', 'FTA Decision No. 2 of 2018 as amended')} sets: a minimum of AED {tourist.min} of VAT-inclusive purchases from the same taxable person; proof the goods leave within {tourist.days} days of supply; an administrative fee of {tourist.fee} of the VAT refunded; a fixed fee of AED {tourist.fixed} per claim; and a cash refund cap of AED {tourist.cap} per tourist in 24 hours. Goods not carried out by the tourist and goods consumed in the country are excluded.</p>
<h2>Who counts as a tourist</h2>
<p>The ${h.src('uaeExecReg', 'Executive Regulation')} defines an overseas tourist as any natural person not resident in any implementing state and not a crew member. That definition is why a Dubai resident cannot use the scheme even on a foreign passport. Also check that the shop takes part in the scheme before paying, since the retailer issues the document at the time of purchase.</p>
<h2>The net figure and what to do with it</h2>
<p>The VAT inside a VAT-inclusive price is not {vat.AE} of it but the price times the rate divided by one plus the rate, since VAT was charged on the price before it. The calculator does exactly that before taking the fees off. Use the net amount in the ${h.a('compare-countries', 'comparison calculator')}: subtract it from the UAE price before comparing with the price at home.</p>`,
  },
});
