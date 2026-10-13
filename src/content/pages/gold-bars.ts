import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'gold-bars', group: 'guides', order: 40, tool: 'bar', toolProps: { country: 'AE' }, kind: 'guide',
  related: ['karat-24', 'ounce-price', 'vat-saudi', 'vat-uae', 'buy-sell-gap', 'gold-history'],
  sources: ['uaeExecReg', 'ksaVatRegs', 'omanVatLaw', 'nbrRate', 'ukWeights'],
  ar: {
    slug: 'gold-bars', nav: 'سعر سبائك الذهب', card: 'سعر السبيكة من غرام إلى كيلو، بعلاوة البائع وقواعد الضريبة في كل بلد.',
    title: 'سعر سبائك الذهب {year}: من غرام إلى كيلو مع الضريبة في الخليج',
    description: 'سعر سبيكة الذهب عيار 24 من غرام إلى كيلو في السعودية والإمارات والخليج: قيمة الذهب، وعلاوة البائع، ونسبة الصفر في الإمارات، وشرط أول توريد في السعودية.',
    h1: 'سعر سبائك الذهب في الخليج',
    resume: 'سعر سبيكة الذهب يتكون من قيمة الذهب الخالص فيها، أي وزنها مضروبًا في سعر غرام عيار 24 الآن، ومن علاوة يضيفها البائع لتغطية السك والفحص والتغليف وهامشه، ثم من ضريبة القيمة المضافة إن وجبت. في الإمارات تخضع السبائك والعملات بنقاوة 99% فأكثر والقابلة للتداول في أسواق السبائك العالمية لنسبة الصفر عند أي بائع، بحسب المادة 36 من اللائحة التنفيذية. في السعودية تقصر المادة 36 من اللائحة نسبة الصفر على أول توريد يقوم به المنتج أو المصفاة، ونقرأ القاعدة العمانية بالطريقة نفسها. في الكويت وقطر لا ضريبة قيمة مضافة حتى تاريخ مراجعتنا، وفي البحرين لم نجد القاعدة في صفحات الجهاز التي قرأناها فنطبق النسبة الأساسية {vat.BH}. الحاسبة تعطي سعر السبيكة النهائي بحسب وزنها والبلد والبائع والعلاوة التي تكتبها، بسعر الأونصة الآن. والقرار في النهاية يخصك أنت وحدك.',
    faqs: [
      { q: 'لماذا تكون علاوة السبيكة الصغيرة أعلى للغرام؟', a: 'تكاليف السك والفحص والتغليف والشهادة لا تتناسب مع الوزن، فتتوزع على غرامات أقل في السبيكة الصغيرة. لذلك تحمل سبيكة الغرام أو الخمسة غرامات علاوة للغرام أعلى بكثير من سبيكة المئة غرام أو الكيلو. اكتب علاوة كل عرض في الحاسبة لتقارن السعر الفعلي للغرام.' },
      { q: 'هل السبيكة أفضل من المجوهرات للادخار؟', a: 'من حيث الكلفة غالبًا نعم: علاوة السبيكة أقل من مصنعية الحلي، وقد تخضع لنسبة صفر في الإمارات، والمحل يشتريها عند البيع بخصم صغير نسبيًا. لكنها لا تُلبس، وقرار الادخار في الذهب يبقى قرارًا شخصيًا يحمل خطر انخفاض السعر لفترات طويلة. قارن الخيارين بالأرقام في الحاسبتين قبل أن تقرر.' },
      { q: 'ما الشهادة التي يجب أن ترافق السبيكة؟', a: 'لم نجد في النصوص التي قرأناها شهادة إلزامية بعينها للمستهلك. عمليًا تحمل السبائك المعروفة اسم المصفاة والوزن والنقاوة ورقمًا تسلسليًا، وتأتي في غلاف مختوم. احتفظ بالفاتورة والغلاف، فذلك يسهل البيع لاحقًا ويقلل خصم المشتري. واسأل البائع قبل الشراء هل يشتري السبيكة منك لاحقًا وبأي خصم.' },
      { q: 'هل أدفع ضريبة على سبيكة اشتريتها من محل في الرياض؟', a: 'بحسب نص المادة 36 من اللائحة التنفيذية السعودية، نسبة الصفر لأول توريد من المنتج أو المصفاة فقط، فإن كان البائع محل تجزئة اشترى من المصفاة فالنص يعيد التوريد إلى النسبة الأساسية {vat.SA}. اطلب الفاتورة الضريبية لترى النسبة المطبقة فعلًا قبل الدفع. والحاسبة تعرض الحالتين.' },
      { q: 'كم تزن سبيكة العشر تولات؟', a: 'التولة 180 حبة، أي نحو {tola} غرام، فسبيكة العشر تولات نحو 116.6 غرام من الذهب الخالص. هي شائعة في دبي لدى الجاليات الهندية والباكستانية. اكتب وزنها في حاسبة الأونصة والتولة لترى قيمتها بالدرهم، ثم أضف علاوة البائع هنا. واطلب دائمًا الوزن بالغرام في الفاتورة.' },
      { q: 'هل أستطيع بيع جزء من سبيكة الكيلو عند الحاجة؟', a: 'لا يمكن تقسيم السبيكة دون صهرها، فمن يحتاج إلى مبلغ صغير يضطر إلى بيعها كلها أو إلى قبول خصم أكبر لصهرها. لهذا يقسم بعض المدخرين مشترياتهم إلى سبائك من عشرة أو عشرين أو خمسين غرامًا، فيبيعون منها بقدر حاجتهم ويحتفظون بالباقي، مع أن العلاوة على السبائك الأصغر أعلى قليلًا.' },
      { q: 'هل تختلف علاوة السبيكة بين الشراء نقدًا وبالبطاقة؟', a: 'قد يضيف بعض الباعة رسمًا على الدفع بالبطاقة، فيرتفع السعر الفعلي للسبيكة. اسأل عن السعر في الحالتين قبل الدفع، واكتب الفرق في خانة العلاوة بالحاسبة لترى أثره على سعر الغرام. وفي الدول التي تطبق الضريبة على السبائك تزيد الضريبة أيضًا بزيادة المبلغ.' },
    ],
    body: (h) => `
<h2>من الوزن إلى السعر</h2>
<p>قيمة الذهب في السبيكة = الوزن بالغرام × سعر غرام عيار 24. سعر الغرام نحسبه من سعر الأونصة مقسومًا على ${h.src('ukWeights', '31.1034768 غرام')} ومضروبًا في سعر صرف البلد. ثم تأتي علاوة البائع، وتُكتب عادة نسبة فوق سعر السوق أو مبلغًا للسبيكة، ثم الضريبة على المجموع إن وجبت. الحاسبة تقبل العلاوة نسبة، فإن ذكر البائع مبلغًا فاقسمه على قيمة الذهب لتحصل على النسبة.</p>
<h2>الإمارات: صفر عند أي بائع</h2>
<p>تنص ${h.src('uaeExecReg', 'المادة 36 من اللائحة التنفيذية الإماراتية')} على نسبة الصفر لتوريد واستيراد المعادن الثمينة الاستثمارية، أي الذهب والفضة والبلاتين بنقاوة 99% فأكثر وبشكل قابل للتداول في أسواق السبائك العالمية. لا شرط على صفة البائع. لهذا تكون السبيكة في دبي بسعر الذهب مع العلاوة فقط، ويكون الفرق مع المجوهرات كبيرًا لمن يريد الادخار.</p>
<h2>السعودية وعُمان: أول توريد</h2>
<p>في السعودية تقول ${h.src('ksaVatRegs', 'المادة 36 من اللائحة التنفيذية')} إن أول توريد للمعدن المؤهل يقوم به منتجه أو مصفّيه يخضع لنسبة الصفر. وفي عُمان يدرج ${h.src('omanVatLaw', 'القانون في مادته 51')} توريد الذهب الاستثماري ضمن التوريدات بنسبة الصفر وفق شروط اللائحة، ونقرأ اللائحة على أنها تقصرها على أول توريد بعد الاستخراج أو التصفية. في الحاسبة سؤال: هل البائع هو المصفاة أو المنتج؟ إن اخترت نعم طبقنا الصفر، وإلا طبقنا النسبة الأساسية. الفاتورة الضريبية هي التي تحسم.</p>
<h2>البحرين والكويت وقطر</h2>
<p>في البحرين النسبة الأساسية {vat.BH} بحسب ${h.src('nbrRate', 'الجهاز الوطني للإيرادات')}، ولم نجد في الصفحات التي قرأناها قاعدة الذهب الاستثماري، فلا نطبق الصفر ونترك لك أن تتحقق من البائع. في الكويت وقطر لا ضريبة قيمة مضافة حتى تاريخ مراجعتنا، فالسبيكة بسعر الذهب والعلاوة.</p>
<h2>الأحجام الشائعة</h2>
<p>تُباع السبائك في الخليج غالبًا بأوزان 1 و5 و10 و20 و50 و100 غرام، وأونصة، وعشر تولات، وكيلو. الحاسبة تعرض الأوزان المترية والكيلو، وللأونصة والتولة استعمل ${h.a('ounce-price', 'حاسبة الأونصة والتولة')}. كلما كبرت السبيكة قلت العلاوة للغرام، لكن السبيكة الكبيرة يصعب بيع جزء منها، فبعض المدخرين يفضلون عدة سبائك متوسطة.</p>
<h2>عند البيع</h2>
<p>التاجر الذي يشتري سبيكة يدفع سعر السوق ناقص خصم أصغر عادة من خصم المجوهرات، خصوصًا إن بقيت السبيكة في غلافها مع فاتورتها. احسب الخسارة الفورية بين الشراء والبيع في ${h.a('buy-sell-gap', 'حاسبة فرق البيع والشراء')}، وتذكر أن الضريبة المدفوعة، إن وجدت، لا تعود عند البيع.</p>
<h2>أخطاء شائعة عند شراء السبائك</h2>
<p>الخطأ الأول أن يقارن المشتري سعر السبيكة بسعر الأونصة الذي يراه في نشرة الأخبار، فيظن أن البائع يغالي، والصحيح أن العلاوة جزء طبيعي من السعر، وأن المقارنة تكون بين علاوات البائعين لا بين السعر والنشرة. الخطأ الثاني أن يشتري سبائك صغيرة كثيرة بدل سبيكة متوسطة، فيدفع علاوة أعلى على مجموع الوزن نفسه. الخطأ الثالث أن يهمل الفاتورة والغلاف، فيدفع ثمن ذلك عند البيع حين يطلب المشتري فحص النقاوة ويخصم أكثر. والخطأ الرابع، في السعودية خاصة، أن يفترض نسبة صفر لم تظهر في الفاتورة. قبل أي شراء كبير اسأل ثلاثة بائعين عن علاوتهم للوزن نفسه، واكتب كل عرض في الحاسبة، واختر الأقل كلفة بعد الضريبة، ثم احتفظ بكل الأوراق في مكان آمن مع السبيكة. ومن يشتري السبائك على دفعات شهرية يدوّن تاريخ كل شراء وسعره، فذلك يساعده لاحقًا في معرفة متوسط كلفته وفي حساب الزكاة إن بلغ ما يملكه النصاب.</p>`,
  },
  en: {
    slug: 'gold-bar-price', nav: 'Gold bar prices', card: 'A bar from one gram to a kilo, with dealer premium and each country’s VAT rule.',
    title: 'Gold Bar Price {year}: 1 Gram to 1 Kilo With Gulf VAT Rules',
    description: 'A 24K gold bar from one gram to a kilo in Saudi Arabia, the UAE and the Gulf: gold value, dealer premium, the UAE zero rate and the Saudi first-supply rule.',
    h1: 'Gold bar prices in the Gulf',
    resume: 'The price of a gold bar is the value of the pure gold in it, its weight times the current 24K gram price, plus a premium the dealer adds for minting, assay, packaging and margin, plus VAT where it applies. In the UAE, bars and coins of 99% purity or more that are tradeable on world bullion markets are zero-rated from any seller under Article 36 of the Executive Regulation. In Saudi Arabia, Article 36 of the Implementing Regulations limits the zero rate to the first supply by the producer or refiner, and we read the Omani rule the same way. Kuwait and Qatar had no VAT as of our review, and for Bahrain we did not find the rule in the bureau pages we read, so the standard {vat.BH} applies in our calculator. The calculator gives the final bar price by weight, country, seller and the premium you enter, at the current ounce price. Expats in Dubai often find this is the cheapest way to hold gold in the Gulf, and the figures show why.',
    faqs: [
      { q: 'Why is the premium higher per gram on small bars?', a: 'Minting, assay, packaging and certificate costs do not scale with weight, so on a small bar they spread over fewer grams. A one-gram or five-gram bar therefore carries a much higher premium per gram than a 100 g or kilo bar. Enter each dealer’s premium in the calculator to compare the real price per gram.' },
      { q: 'Are bars better than jewellery for saving?', a: 'On cost, usually: a bar premium is lower than a jewellery making charge, bars may be zero-rated in the UAE, and a dealer buys them back at a relatively small deduction. But they cannot be worn, and saving in gold remains a personal decision carrying the risk of long periods of falling prices.' },
      { q: 'What certificate should come with a bar?', a: 'We found no specific mandatory consumer certificate in the texts we read. In practice, well-known bars show the refiner’s name, weight, fineness and a serial number, in sealed packaging. Keep the invoice and packaging; it makes selling easier and tends to reduce the buyer’s deduction.' },
      { q: 'Do I pay VAT on a bar bought from a shop in Riyadh?', a: 'Under Article 36 of the Saudi Implementing Regulations the zero rate covers only the first supply by the producer or refiner, so if the seller is a retailer that bought from a refinery, the text puts the sale back at the basic {vat.SA}. Ask for the tax invoice to see the rate actually applied before paying.' },
      { q: 'How much does a ten-tola bar weigh?', a: 'A tola is 180 grains, about {tola} g, so a ten-tola bar holds about 116.6 g of pure gold. It is popular in Dubai with Indian and Pakistani buyers. Enter its weight in the ounce and tola calculator for its dirham value, then add the dealer premium here.' },
    ],
    body: (h) => `
<h2>From weight to price</h2>
<p>Gold value of a bar = weight in grams × 24K gram price. We take the gram price from the ounce price divided by ${h.src('ukWeights', '31.1034768 g')} and multiplied by the country’s exchange rate. Then comes the dealer premium, usually quoted as a percentage over the market price or an amount per bar, then VAT on the total where due. The calculator takes the premium as a percentage; if the dealer names an amount, divide it by the gold value to get the percentage.</p>
<h2>UAE: zero from any seller</h2>
<p>${h.src('uaeExecReg', 'Article 36 of the UAE Executive Regulation')} zero-rates the supply and import of investment precious metals, meaning gold, silver and platinum of 99% purity or more in a form tradeable in global bullion markets. Nothing restricts who the seller is. A bar in Dubai therefore costs the gold plus the premium only, and the gap with jewellery is wide for anyone saving.</p>
<h2>Saudi Arabia and Oman: the first supply</h2>
<p>In Saudi Arabia, ${h.src('ksaVatRegs', 'Article 36 of the Implementing Regulations')} zero-rates the first supply of a qualifying metal by its producer or refiner. In Oman, the ${h.src('omanVatLaw', 'VAT Law in Article 51')} lists investment gold among zero-rated supplies within the conditions of the regulations, which we read as limiting it to the first supply after extraction or refining. The calculator asks whether the seller is the refiner or producer: answer yes and we apply zero, otherwise the standard rate. The tax invoice is what settles it.</p>
<h2>Bahrain, Kuwait and Qatar</h2>
<p>In Bahrain the standard rate is {vat.BH} per the ${h.src('nbrRate', 'National Bureau for Revenue')}, and we did not find the investment gold rule in the pages we read, so we do not apply zero and leave you to check with the seller. Kuwait and Qatar had no VAT as of our review, so a bar costs the gold plus the premium.</p>
<h2>Common sizes</h2>
<p>Gulf dealers mostly sell bars of 1, 5, 10, 20, 50 and 100 g, one ounce, ten tolas and one kilo. The calculator lists the metric sizes and the kilo; for ounces and tolas use the ${h.a('ounce-price', 'ounce and tola calculator')}. The bigger the bar, the lower the premium per gram, but a large bar cannot be partly sold, so some savers prefer several mid-size bars.</p>
<h2>When you sell</h2>
<p>A dealer buying a bar pays the market price minus a deduction that is usually smaller than on jewellery, especially if the bar is still sealed with its invoice. Work out the immediate loss between buying and selling in the ${h.a('buy-sell-gap', 'buy and sell gap calculator')}, and remember that any VAT paid does not come back on resale.</p>`,
  },
});
