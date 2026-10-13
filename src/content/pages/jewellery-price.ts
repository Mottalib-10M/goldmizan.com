import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'jewellery-price', group: 'tools', order: 10, tool: 'jewel', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['making-charges', 'vat-saudi', 'vat-uae', 'compare-countries', 'buy-sell-gap', 'karat-21'],
  sources: ['ksaVatLaw', 'uaeDecreeLaw', 'nbrRate', 'omanVatLaw', 'goldApi'],
  ar: {
    slug: 'jewellery-price', nav: 'حساب سعر الذهب مع المصنعية', card: 'سعر القطعة النهائي: الذهب والمصنعية وضريبة القيمة المضافة لكل بلد.',
    title: 'حساب سعر الذهب مع المصنعية والضريبة {year}: سعر القطعة',
    description: 'احسب سعر قطعة الذهب النهائي مع المصنعية وضريبة القيمة المضافة: 15% في السعودية و5% في الإمارات وعُمان و10% في البحرين، بالوزن والعيار وسعر الغرام الآن.',
    h1: 'حساب سعر الذهب مع المصنعية والضريبة',
    resume: 'السعر النهائي لقطعة الذهب يتكون من ثلاثة أجزاء: قيمة الذهب، وهي الوزن مضروبًا في سعر غرام العيار، ثم المصنعية التي يحددها المحل للغرام أو كنسبة من قيمة الذهب أو مبلغًا ثابتًا للقطعة، ثم ضريبة القيمة المضافة على مجموع الاثنين. الضريبة تختلف بحسب البلد: {vat.SA} في السعودية، و{vat.AE} في الإمارات، و{vat.BH} في البحرين، و{vat.OM} في عُمان، وصفر في الكويت وقطر حتى تاريخ مراجعتنا. الحاسبة تأخذ سعر غرام عيار 24 من سعر الأونصة الآن، ويمكنك أن تستبدل به سعر لوحة المحل الذي أمامك إن أردت أن يطابق الحساب فاتورته. اكتب الوزن والعيار والمصنعية، فترى السعر النهائي، وسعر الغرام شاملًا كل شيء، ونصيب كل بند من المبلغ. بهذا تعرف قبل الدفع إن كان العرض معقولًا، وتقارن بين محلين على أساس واحد. كل ذلك يجري في متصفحك، فلا يرسل الموقع أي رقم تكتبه إلى خادم أو إلى المحل.',
    faqs: [
      { q: 'هل تُحسب الضريبة على المصنعية أيضًا أم على الذهب وحده؟', a: 'على المجموع في كل بلد يطبق الضريبة. في السعودية {vat.SA} من قيمة الذهب والمصنعية معًا، وفي الإمارات {vat.AE}. لذلك فإن خفض المصنعية بمئة ريال يخفض الفاتورة في السعودية بأكثر من مئة ريال، لأن الضريبة عليها تنخفض أيضًا. الحاسبة تعرض الضريبة في سطر واحد على المجموع.' },
      { q: 'المحل يعطيني سعرًا للغرام شاملًا المصنعية، كيف أفصل بينهما؟', a: 'اطرح من سعر المحل للغرام سعر غرام العيار نفسه في هذه الحاسبة، والباقي هو المصنعية وهامش المحل للغرام. اكتبه في خانة المصنعية للغرام، واختر البلد، فتحصل على الفاتورة بعد الضريبة. إن ظهر رقم مرتفع جدًا فاطلب من البائع سطرًا منفصلًا للمصنعية. واحسب بعدها السعر النهائي.' },
      { q: 'لماذا يتغير السعر في الحاسبة وأنا أنظر إليها؟', a: 'لأن سعر الذهب يُجلب من السوق عند فتح الصفحة ثم كل خمس دقائق، فيتغير مع الأونصة. إن أردت أن تثبت السعر على رقم المحل، اكتب سعر غرام عيار 24 من لوحته في الخانة الأخيرة، فيتوقف الحساب عن اتباع السوق ويعتمد رقمك أنت.' },
      { q: 'هل المصنعية بالنسبة أفضل أم المصنعية للغرام؟', a: 'لا جواب واحد: المصنعية بالنسبة ترتفع مع سعر الذهب، والمصنعية للغرام ثابتة مهما تغير. في قطعة ثقيلة بسيطة تكون المصنعية للغرام غالبًا أرخص، وفي قطعة خفيفة دقيقة قد تكون النسبة أرخص. صفحة المصنعية تقارن بين العرضين على قطعتك. والفرق يتغير مع كل حركة في سعر الأونصة.' },
    ],
    body: (h) => `
<h2>البنود الثلاثة في الفاتورة</h2>
<p>قيمة الذهب هي الجزء الوحيد الذي لا يملك المحل أن يغيره كثيرًا، لأنها تتبع سعر الأونصة. المصنعية هي أجر الصانع وتكلفة التصميم وهامش المحل، وهي البند الذي تتفاوض عليه. أما الضريبة فتفرضها الدولة: ${h.src('ksaVatLaw', 'النظام السعودي')} بنسبة {vat.SA}، و${h.src('uaeDecreeLaw', 'المرسوم بقانون الإماراتي')} بنسبة {vat.AE}، و${h.src('nbrRate', 'الجهاز الوطني للإيرادات في البحرين')} بنسبة {vat.BH}، و${h.src('omanVatLaw', 'القانون العماني')} بنسبة {vat.OM}. لا يحق للمحل أن يحسبها على أساس آخر.</p>
<h2>ثلاث طرق لكتابة المصنعية</h2>
<p>المصنعية للغرام هي الأكثر شيوعًا في السعودية، فيقول البائع مثلًا إنها كذا ريالًا للغرام. المصنعية بالنسبة تُكتب كنسبة من قيمة الذهب، وتنتشر في محلات المجوهرات الإيطالية والهندية. والمبلغ الثابت يُستعمل للقطع المرصعة أو المصنوعة يدويًا. الحاسبة تقبل الطريقتين الأوليين مباشرة، وللثالثة يكفي أن تقسم المبلغ على الوزن وتكتبه للغرام. التفاصيل في ${h.a('making-charges', 'صفحة المصنعية')}.</p>
<h2>ما لا تعيده لك القطعة عند البيع</h2>
<p>المصنعية والضريبة جزء من سعر الشراء لا يعود عند البيع، لأن المشتري يدفع ثمن الذهب الخام ناقص خصمه. لذلك من يشتري الذهب بنية الادخار يقارن السعر النهائي للقطعة بقيمة الذهب فيها: كلما كبر الفرق كبرت الخسارة الفورية. ${h.a('buy-sell-gap', 'حاسبة فرق الشراء والبيع')} تعطيك هذا الرقم.</p>`,
  },
  en: {
    slug: 'jewellery-price', nav: 'Jewellery price with making charges', card: 'The final price of a piece: gold, making charge and each country’s VAT.',
    title: 'Gold Jewellery Price Calculator {year}: Making Charges and VAT',
    description: 'Final price of a gold piece with making charges and VAT: 15% in Saudi Arabia, 5% in the UAE and Oman, 10% in Bahrain, from weight, karat and the live price.',
    h1: 'Gold jewellery price with making charges and VAT',
    resume: 'The final price of a gold piece has three parts: the gold value, which is the weight times the gram price for its karat; the making charge, which the shop sets per gram, as a percentage of the gold value or as a fixed amount for the piece; and VAT on the two together. VAT depends on the country: {vat.SA} in Saudi Arabia, {vat.AE} in the UAE, {vat.BH} in Bahrain, {vat.OM} in Oman and zero in Kuwait and Qatar as of our last review. The calculator takes the 24K gram price from the current ounce price, and you can replace it with the board price of the shop in front of you if you want the result to match its invoice. Enter weight, karat and making charge to see the final price, the all-in price per gram and the share of each line. You will know before paying whether the offer is reasonable and can compare two shops on the same basis, which is hard to do from memory in a busy souq.',
    faqs: [
      { q: 'Is VAT charged on the making charge too, or only on the gold?', a: 'On the total in every country that has VAT: {vat.SA} of gold plus making in Saudi Arabia, {vat.AE} in the UAE. So knocking SAR 100 off the making charge lowers a Saudi bill by more than SAR 100, since the VAT on it goes too. The calculator shows VAT as one line on the total.' },
      { q: 'The shop quotes a gram price including making. How do I split it?', a: 'Subtract this calculator’s gram price for the same karat from the shop’s gram price; what is left is making charge and shop margin per gram. Enter it as making per gram, pick the country, and you get the bill after VAT. If the figure looks high, ask the seller for a separate making line.' },
      { q: 'Why does the result change while I am looking at it?', a: 'The gold price is fetched from the market when the page opens and every five minutes after, so it moves with the ounce. To lock the result to the shop’s figure, type the 24K gram price from its board in the last field; the calculator then stops following the market and uses your number.' },
      { q: 'Is a percentage making charge better than a per-gram one?', a: 'There is no single answer. A percentage rises with the gold price, a per-gram charge stays fixed whatever the market does. On a heavy plain piece per gram is often cheaper; on a light, detailed piece a percentage can win. The making charges page compares both offers on your own piece.' },
    ],
    body: (h) => `
<h2>The three lines on the invoice</h2>
<p>The gold value is the one part a shop cannot move much, since it follows the ounce. The making charge is the craftsman’s fee, design cost and shop margin, and it is the line you negotiate. VAT is set by the state: the ${h.src('ksaVatLaw', 'Saudi VAT Law')} at {vat.SA}, the ${h.src('uaeDecreeLaw', 'UAE Decree-Law')} at {vat.AE}, ${h.src('nbrRate', 'Bahrain’s National Bureau for Revenue')} at {vat.BH} and the ${h.src('omanVatLaw', 'Omani VAT Law')} at {vat.OM}. A shop has no right to compute it on another basis.</p>
<h2>Three ways a making charge is quoted</h2>
<p>Per gram is the most common in Saudi Arabia: the seller names so many riyals a gram. A percentage of the gold value is common in Italian and Indian jewellery shops. A fixed amount is used for set or handmade pieces. The calculator takes the first two directly; for the third, divide the amount by the weight and enter it per gram. More on the ${h.a('making-charges', 'making charges page')}.</p>
<h2>What the piece does not give back</h2>
<p>Making charge and VAT are part of the purchase price that does not come back on resale, because a buyer pays the raw gold value minus a deduction. Anyone buying gold to save should compare the final price with the gold inside: the bigger the gap, the bigger the immediate loss. The ${h.a('buy-sell-gap', 'buy and sell gap calculator')} gives that number.</p>`,
  },
});
