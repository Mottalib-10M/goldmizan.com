import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'compare-countries', group: 'tools', order: 40, tool: 'compare', toolProps: { karat: 21 }, kind: 'outil',
  related: ['tourist-refund', 'vat-uae', 'vat-saudi', 'kuwait', 'bahrain', 'gram-price'],
  sources: ['ksaVatLaw', 'uaeDecreeLaw', 'nbrRate', 'omanVatLaw', 'cbuaeFx'],
  ar: {
    slug: 'compare-countries', nav: 'أين الذهب أرخص في الخليج؟', card: 'القطعة نفسها في دول الخليج الست، بالضريبة، مرتبة من الأرخص.',
    title: 'الذهب الأرخص في الخليج {year}: مقارنة 6 دول شاملة الضريبة',
    description: 'قارن سعر قطعة الذهب نفسها في السعودية والإمارات والكويت وقطر والبحرين وعُمان، بالمصنعية نفسها وضريبة كل بلد، مرتبة من الأرخص إلى الأغلى بالدولار وبعملة كل دولة.',
    h1: 'أين الذهب أرخص في الخليج؟',
    resume: 'سعر الذهب الخام شبه متطابق في دول الخليج الست إذا حوّلته إلى الدولار، لأن أربع عملات منها مربوطة بالدولار بسعر ثابت، والدينار الكويتي والريال القطري قريبان منه. ما يصنع الفرق في سعر القطعة النهائي أمران: الضريبة والمصنعية. الضريبة معروفة: صفر في الكويت وقطر حتى تاريخ مراجعتنا، و{vat.AE} في الإمارات، و{vat.OM} في عُمان، و{vat.BH} في البحرين، و{vat.SA} في السعودية، وتُحسب على الذهب والمصنعية معًا. المصنعية تختلف من محل إلى آخر داخل البلد الواحد أكثر مما تختلف بين البلدان. لذلك تضع الحاسبة نسبة مصنعية واحدة في البلدان الست، فيظهر أثر الضريبة وحده، وترتب البلدان من الأرخص إلى الأغلى بالدولار. غيّر الوزن والعيار ونسبة المصنعية لترى كم توفر فعلًا إن اشتريت في بلد آخر، قبل حساب تكلفة السفر. المقيم الذي يتنقل بين الرياض ودبي والكويت للعمل أو الزيارة يرى هنا بالأرقام هل يستحق الفرق أن يؤجل شراءه إلى رحلته القادمة.',
    faqs: [
      { q: 'هل الذهب في دبي أرخص من الرياض؟', a: 'بقيمة الذهب الخام لا فرق تقريبًا، لأن الريال والدرهم مربوطان بالدولار. الفرق في الضريبة: {vat.AE} في الإمارات مقابل {vat.SA} في السعودية، وتُحسب على الذهب والمصنعية. على قطعة واحدة بالمصنعية نفسها يكون السعر في دبي أقل بفارق النسبتين تقريبًا، قبل أي استرداد للسياح.' },
      { q: 'هل يحق للسعودي استرداد ضريبة الذهب في الإمارات؟', a: 'نظام الاسترداد الإماراتي مخصص للسائح غير المقيم في أي من الدول المطبقة للضريبة، بحسب اللائحة التنفيذية. لا نفصل هنا في وضع المقيمين في دول الخليج الأخرى، فاسأل البائع المشارك في النظام قبل الشراء إن كان بإمكانه إصدار مستند الاسترداد لك. واحتفظ بفاتورتك الضريبية في كل الأحوال.' },
      { q: 'هل أدفع ضريبة عند إدخال الذهب الذي اشتريته من الخارج؟', a: 'قد تنطبق قواعد الجمارك والضريبة على الاستيراد في بلد الوصول، وتختلف بحسب القيمة وطبيعة الاستعمال. هذه الحاسبة لا تحسب رسوم الجمارك ولا ضريبة الاستيراد، فراجع جمارك بلدك قبل السفر إن كانت القطعة ثمينة. واحتفظ بالفاتورة الأصلية، فقد تطلبها الجمارك لإثبات قيمة القطعة وتاريخ شرائها.' },
    ],
    body: (h) => `
<h2>لماذا نثبت نسبة المصنعية</h2>
<p>لو تركنا لكل بلد مصنعية مختلفة لكانت النتيجة تقديرًا من عندنا، ولا نملك رقمًا رسميًا لمتوسط المصنعية في أي بلد. النسبة الواحدة تجعل المقارنة عادلة: إن كان المحل في الكويت يأخذ المصنعية نفسها التي يأخذها محل في الدمام، فهذا هو فرق الضريبة. إن عرفت المصنعية الفعلية في كل محل، فاحسب كل عرض وحده في ${h.a('jewellery-price', 'حاسبة سعر القطعة')}.</p>
<h2>نسب الضريبة من مصادرها</h2>
<p>نأخذ النسب من نصوصها: ${h.src('ksaVatLaw', 'نظام ضريبة القيمة المضافة السعودي')} بنسبة {vat.SA}، و${h.src('uaeDecreeLaw', 'المرسوم بقانون الإماراتي رقم 8 لسنة 2017')} بنسبة {vat.AE}، و${h.src('nbrRate', 'الجهاز الوطني للإيرادات في البحرين')} بنسبة {vat.BH}، و${h.src('omanVatLaw', 'قانون ضريبة القيمة المضافة العماني')} بنسبة {vat.OM}. الكويت وقطر بلا ضريبة قيمة مضافة حتى تاريخ مراجعتنا.</p>
<h2>عمود الدولار</h2>
<p>كل سطر في الحاسبة يذكر السعر بعملة البلد ثم بالدولار. التحويل إلى الدولار يستعمل سعر الربط في السعودية والإمارات والبحرين وعُمان، وسعر اليوم أو الرقم الاحتياطي من ${h.src('cbuaeFx', 'جدول مصرف الإمارات المركزي')} في الكويت وقطر. الترتيب يقوم على عمود الدولار، فيمكنك أن تقارن أسطرًا بعملات مختلفة دون حساب.</p>`,
  },
  en: {
    slug: 'cheapest-gold-gulf', nav: 'Where is gold cheapest in the Gulf?', card: 'The same piece in the six Gulf countries, VAT included, cheapest first.',
    title: 'Cheapest Gold in the Gulf {year}: Six Countries With VAT',
    description: 'The same gold piece priced in Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain and Oman, with one making charge and each country’s VAT, ranked cheapest first.',
    h1: 'Where is gold cheapest in the Gulf?',
    resume: 'The raw gold price is practically the same in the six Gulf countries once converted to dollars, because four of their currencies are pegged to the dollar at a fixed rate and the Kuwaiti dinar and Qatari riyal stay close to it. Two things make the difference on the final price of a piece: VAT and the making charge. VAT is known: zero in Kuwait and Qatar as of our last review, {vat.AE} in the UAE, {vat.OM} in Oman, {vat.BH} in Bahrain and {vat.SA} in Saudi Arabia, charged on gold and making together. The making charge varies more between shops in one country than between countries. The calculator therefore applies one making percentage everywhere, so VAT alone shows, and ranks the countries from cheapest to dearest in dollars. Change weight, karat and making rate to see how much you would really save by buying elsewhere, before counting the cost of the trip. It answers a question expats moving around the Gulf ask all the time.',
    faqs: [
      { q: 'Is gold cheaper in Dubai than in Riyadh?', a: 'On raw gold value there is almost no difference, since the riyal and the dirham are both pegged to the dollar. The gap is VAT: {vat.AE} in the UAE against {vat.SA} in Saudi Arabia, charged on gold and making. For one piece with the same making charge, Dubai comes out lower by roughly the difference between the two rates, before any tourist refund.' },
      { q: 'Can a Saudi resident reclaim UAE VAT on gold?', a: 'The UAE refund scheme is for an overseas tourist not resident in any implementing state, under the Executive Regulation. We do not rule here on residents of other Gulf states, so before buying ask a retailer taking part in the scheme whether it can issue you a refund document.' },
      { q: 'Do I pay tax when bringing gold bought abroad into my country?', a: 'Customs and import VAT rules may apply in the country of arrival, depending on value and use. This calculator does not include customs duty or import VAT, so check with your own customs authority before travelling if the piece is valuable, and keep the invoice.' },
    ],
    body: (h) => `
<h2>Why one making rate</h2>
<p>Giving each country its own making charge would mean inventing a figure: there is no official average making charge for any country. One rate keeps the comparison fair: if the shop in Kuwait charges the same making as one in Dammam, the gap is the VAT. If you know the actual making charge in each shop, price each offer separately in the ${h.a('jewellery-price', 'jewellery price calculator')}.</p>
<h2>VAT rates from their sources</h2>
<p>The rates come from the texts themselves: the ${h.src('ksaVatLaw', 'Saudi VAT Law')} at {vat.SA}, ${h.src('uaeDecreeLaw', 'UAE Federal Decree-Law No. 8 of 2017')} at {vat.AE}, ${h.src('nbrRate', 'Bahrain’s National Bureau for Revenue')} at {vat.BH} and the ${h.src('omanVatLaw', 'Omani VAT Law')} at {vat.OM}. Kuwait and Qatar had no VAT as of our review.</p>
<h2>The dollar column</h2>
<p>Each line gives the price in local currency and then in dollars. The conversion uses the peg in Saudi Arabia, the UAE, Bahrain and Oman, and today’s rate or the fallback from the ${h.src('cbuaeFx', 'UAE central bank table')} in Kuwait and Qatar. The ranking follows the dollar column, so lines in different currencies compare without any arithmetic.</p>`,
  },
});
