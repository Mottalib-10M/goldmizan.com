import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'karat-21', group: 'today', order: 30, tool: 'board', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['karat-24', 'karat-22', 'karat-18', 'jewellery-price', 'saudi-arabia', 'sell-gold'],
  sources: ['sama', 'ksaVatLaw', 'ukWeights', 'goldApi'],
  ar: {
    slug: 'karat-21', nav: 'سعر الذهب عيار 21', card: 'غرام عيار 21 بالريال والدرهم والدينار، محسوبًا من سعر الأونصة الآن.',
    title: 'سعر الذهب عيار 21 اليوم {year}: الغرام في السعودية والخليج',
    description: 'سعر غرام الذهب عيار 21 الآن في السعودية والإمارات والكويت وقطر والبحرين وعُمان، محسوب من سعر الأونصة وسعر الصرف الرسمي، مع قيمة أي وزن قبل المصنعية والضريبة.',
    h1: 'سعر الذهب عيار 21 اليوم',
    resume: 'سعر غرام الذهب عيار 21 يساوي 87.5% من سعر غرام عيار 24، لأن القطعة تحتوي على 21 جزءًا من الذهب الخالص من أصل 24 جزءًا. الحاسبة أدناه تأخذ سعر الأونصة العالمي بالدولار، وتقسمه على {oz} غرام، ثم تضربه في سعر الصرف الرسمي للبلد: {peg.SA} ريال للدولار في السعودية بحسب البنك المركزي السعودي، و{peg.AE} درهم في الإمارات، ثم في 21 على 24. هذا العيار هو الأكثر بيعًا في محلات الذهب السعودية للأساور والسلاسل والأطقم، لأنه أصلب من عيار 24 ويحتفظ بلون أصفر واضح. الرقم المعروض قيمة الذهب الخام، والمحل يضيف إليه المصنعية ثم ضريبة القيمة المضافة {vat.SA} في السعودية على المجموع، لذلك يكون سعر القطعة أعلى دائمًا من سعر الغرام هنا. اكتب وزن قطعتك لترى قيمتها الآن. وإن كانت لديك فاتورة قديمة فقارن سعر الغرام فيها بسعر اليوم لترى كيف تغير.',
    faqs: [
      { q: 'لماذا يختلف سعر عيار 21 في المحل عن السعر في هذه الصفحة؟', a: 'الصفحة تعرض قيمة الذهب الخام المحسوبة من سعر الأونصة العالمي وسعر الصرف. المحل يضيف هامشًا صغيرًا على سعر الغرام في لوحته، ثم المصنعية حسب نوع القطعة، ثم ضريبة القيمة المضافة. الفرق في سعر الغرام وحده يكون عادة صغيرًا، أما الفرق في السعر النهائي فتصنعه المصنعية والضريبة، وهذا ما تحسبه صفحة حساب سعر القطعة.' },
      { q: 'كم يساوي غرام عيار 21 من الذهب الخالص؟', a: 'غرام واحد من عيار 21 يحتوي على 0.875 غرام من الذهب الخالص، أي 21 جزءًا من 24. لذلك تحتاج إلى 24 غرامًا من عيار 21 لتجمع 21 غرامًا من الذهب الخالص، وهذا هو الأساس الذي نعتمده في حساب الزكاة وفي تحويل الأوزان بين العيارات.' },
      { q: 'هل عيار 21 مناسب للادخار أم للزينة فقط؟', a: 'يصلح للاثنين، لكن المصنعية التي تدفعها عند الشراء لا تعود إليك عند البيع، وكذلك الضريبة. من يشتري عيار 21 بنية الادخار يختار قطعًا بسيطة قليلة المصنعية، ويقارن السعر النهائي بسعر السبيكة قبل أن يقرر. حاسبة فرق الشراء والبيع تبين الخسارة الفورية بالأرقام.' },
      { q: 'متى يتغير سعر غرام عيار 21؟', a: 'يتغير كلما تغير سعر الأونصة في السوق العالمية، أي طوال أيام التداول. في السعودية والإمارات سعر الصرف ثابت مقابل الدولار، فلا يأتي التغير من العملة بل من الأونصة وحدها. نحدّث السعر في هذه الصفحة كل خمس دقائق ما دامت مفتوحة.' },
    ],
    body: (h) => `
<h2>كيف يُحسب غرام عيار 21 من سعر الأونصة</h2>
<p>الأونصة التي تُسعَّر بها البورصات هي الأونصة التروي، ووزنها ${h.src('ukWeights', '31.1034768 غرام')}. نقسم سعر الأونصة بالدولار على هذا الوزن فنحصل على سعر غرام الذهب الخالص بالدولار، ثم نضربه في سعر الصرف الرسمي. في السعودية يثبت البنك المركزي الريال عند {peg.SA} ريال للدولار، وفي الإمارات يثبت المصرف المركزي الدرهم عند {peg.AE}، وفي البحرين وعُمان سعر ربط ثابت أيضًا. يبقى ضرب الناتج في 21 ثم القسمة على 24. هذه الطريقة هي التي تعتمدها لوحات الأسعار في الأسواق السعودية: غرام 21 يساوي دائمًا سبعة أثمان غرام 24.</p>
<h2>ما الذي تضيفه المحلات فوق هذا الرقم</h2>
<p>ثلاثة أشياء. الأول هامش صغير على سعر الغرام نفسه، لأن المحل يشتري من تاجر جملة ويغطي تكلفة المخزون. الثاني المصنعية، وهي أجر الصياغة والتصميم وتختلف من سلسلة بسيطة إلى طقم منقوش. والثالث ضريبة القيمة المضافة، وتُحسب على قيمة الذهب والمصنعية معًا: {vat.SA} في السعودية بحسب ${h.src('ksaVatLaw', 'المادة الثانية من نظام ضريبة القيمة المضافة')}، و{vat.AE} في الإمارات. لهذا يدفع من يشتري قطعة وزنها عشرة غرامات أكثر بكثير من عشرة أضعاف سعر الغرام المعروض هنا، وتشرح ${h.a('jewellery-price', 'حاسبة سعر القطعة بالمصنعية')} كل بند على حدة.</p>
<h2>عيار 21 في السعودية وعيار 22 في الإمارات</h2>
<p>في السوق السعودية يغلب عيار 21 على المشغولات اليومية، بينما يكثر عيار 22 في محلات دبي والشارقة التي تخدم الجاليات الهندية والباكستانية، ويكثر عيار 18 في المجوهرات المرصعة بالأحجار. الفرق بين 21 و22 جزء واحد من 24، أي أن غرام 22 أغلى من غرام 21 بنحو 5%. إذا قارنت سعر سلسلة في الرياض بسعر سلسلة في دبي فتأكد أولًا من العيار المختوم على القطعة، ثم قارن السعر النهائي شاملًا الضريبة في ${h.a('compare-countries', 'صفحة المقارنة بين دول الخليج')}.</p>
<h2>كيف تتحقق من أن القطعة عيار 21 فعلًا</h2>
<p>كثير من القطع تحمل ختمًا يبين نسبة الذهب بالأجزاء من ألف، وهو 875 لعيار 21، أو رقم العيار نفسه. اطلب من البائع فاتورة تذكر الوزن والعيار وسعر الغرام والمصنعية والضريبة كل منها في سطر، فهذا يجعل المقارنة بين محلين ممكنة ويحفظ حقك عند البيع لاحقًا. عند البيع يحسب المحل قيمة الذهب الخام فقط ويخصم نسبة، فاحتفظ بالفاتورة واحسب ما تتوقعه في ${h.a('sell-gold', 'حاسبة بيع الذهب المستعمل')}.</p>`,
  },
  en: {
    slug: 'karat-21', nav: '21K gold price', card: 'A gram of 21K in riyals, dirhams and dinars, worked out from the live ounce price.',
    title: '21K Gold Price Today {year}: Per Gram in Saudi Arabia and Gulf',
    description: 'A gram of 21 karat gold now in Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain and Oman, from the ounce price and official exchange rates, before making charges.',
    h1: '21 karat gold price today',
    resume: 'A gram of 21 karat gold is priced at 87.5% of a gram of 24 karat, because 21 parts in 24 are pure gold. The calculator below takes the world ounce price in US dollars, divides it by {oz} grams, multiplies by the official exchange rate of the country you pick (SAR {peg.SA} to the dollar in Saudi Arabia per the Saudi Central Bank, AED {peg.AE} in the UAE) and then by 21/24. In Saudi gold shops 21K is the everyday karat for bangles, chains and sets, harder than 24K and still a deep yellow, so it is also what most expats in Riyadh or Jeddah end up buying. The figure shown is the metal value only. The shop adds a making charge and then VAT on the whole amount, {vat.SA} in Saudi Arabia, so the price of a piece is always above weight times this gram price. Type the weight of your piece to see what the gold in it is worth now.',
    faqs: [
      { q: 'Why is the 21K price at the shop higher than on this page?', a: 'This page shows the metal value from the world ounce price and the exchange rate. A shop adds a small margin to the gram price on its board, then a making charge that depends on the piece, then VAT. The gap on the gram price alone is usually small; the gap on the final bill comes from making and VAT, which the jewellery calculator breaks down line by line.' },
      { q: 'How much pure gold is in a gram of 21K?', a: 'One gram of 21 karat holds 0.875 g of pure gold, 21 parts out of 24. You need 24 grams of 21K to hold 21 grams of pure gold. That is the basis we use for zakat and for converting a weight from one karat to another, so the numbers stay consistent across the site.' },
      { q: 'Is 21K a good way to save, or only for wearing?', a: 'It works for both, but the making charge you pay when buying is not paid back when you sell, and neither is the VAT. People who buy 21K to save pick plain pieces with a low making charge and compare the final price with a bar. The buy and sell gap calculator shows the immediate loss in figures.' },
      { q: 'How often does the 21K price change?', a: 'Whenever the ounce moves on the world market, which is throughout trading days. The riyal and the dirham are fixed to the dollar, so in Saudi Arabia and the UAE the change comes from the ounce alone, not from the currency. This page refreshes the price every five minutes while it stays open.' },
    ],
    body: (h) => `
<h2>From the ounce to a gram of 21K</h2>
<p>Exchanges quote gold per troy ounce, which weighs ${h.src('ukWeights', '31.1034768 g')}. Dividing the dollar price by that weight gives the dollar price of a gram of pure gold. Multiplying by the official rate turns it into local money: the Saudi Central Bank holds the riyal at {peg.SA} per dollar, the UAE central bank holds the dirham at {peg.AE}, and Bahrain and Oman have fixed pegs too. The last step is times 21, divided by 24. Saudi price boards follow that rule exactly: a gram of 21 is always seven eighths of a gram of 24.</p>
<h2>What a shop adds on top</h2>
<p>Three things. A small margin on the gram price itself, since the shop buys from a wholesaler and carries stock. The making charge, the fee for the craftsmanship, which goes from almost nothing on a plain chain to a lot on an engraved set. And VAT, charged on gold and making together: {vat.SA} in Saudi Arabia under ${h.src('ksaVatLaw', 'Article 2 of the VAT Law')}, {vat.AE} in the UAE. So a ten-gram bangle costs well over ten times the gram price shown here; the ${h.a('jewellery-price', 'jewellery price calculator')} shows each line.</p>
<h2>21K in Riyadh, 22K in Dubai</h2>
<p>In Saudi Arabia 21K dominates everyday jewellery. In Dubai and Sharjah, shops serving the Indian and Pakistani communities sell a lot of 22K, and 18K is common for pieces set with stones. A gram of 22K costs about 5% more than a gram of 21K. Before comparing a chain in Riyadh with one in Dubai, check the karat stamped on each piece, then compare the final price with VAT on the ${h.a('compare-countries', 'Gulf comparison page')}.</p>
<h2>Checking that a piece really is 21K</h2>
<p>Many pieces carry a stamp with the fineness in thousandths, 875 for 21K, or the karat itself. Ask for an invoice that lists weight, karat, gram price, making charge and VAT on separate lines. It lets you compare two shops and protects you when you sell later, because a buyer pays for the metal only and takes a deduction; the ${h.a('sell-gold', 'used gold calculator')} shows what to expect.</p>`,
  },
});
