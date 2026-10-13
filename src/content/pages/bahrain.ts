import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'bahrain', group: 'today', order: 14, tool: 'board', toolProps: { country: 'BH', karat: 21 }, kind: 'outil',
  related: ['oman', 'karat-21', 'jewellery-price', 'compare-countries', 'gold-bars', 'gram-price'],
  sources: ['cbb', 'nbrRate', 'goldApi', 'ukWeights'],
  ar: {
    slug: 'bahrain', nav: 'سعر الذهب في البحرين', card: 'الغرام بالدينار البحريني، بسعر الربط 0.376 وضريبة 10%.',
    title: 'سعر الذهب في البحرين اليوم {year}: غرام 24 و21 و18 بالدينار',
    description: 'سعر غرام الذهب في البحرين الآن بالدينار البحريني لعيار 24 و22 و21 و18، بسعر الربط 0.376 للدولار، مع أثر ضريبة القيمة المضافة 10% على سعر القطعة النهائي.',
    h1: 'سعر الذهب في البحرين اليوم بالدينار',
    resume: 'سعر غرام الذهب في البحرين بالدينار هو سعر الأونصة بالدولار مضروبًا في {peg.BH}، وهو سعر الربط الذي يذكره مصرف البحرين المركزي، ومقسومًا على {oz} غرام، ثم مضروبًا في نسبة العيار. يقول المصرف إن هذا الربط لم يتغير فعليًا منذ 1980، لذلك يتحرك سعر الذهب في المنامة مع الأونصة وحدها. ما يميز البحرين عن جيرانها هو نسبة الضريبة: رفعها الجهاز الوطني للإيرادات إلى {vat.BH} اعتبارًا من الأول من يناير 2022، أي ضعف نسبة الإمارات وعُمان. على قطعة ذهب ومصنعية بقيمة 500 دينار تضيف الضريبة إذن عُشر هذا المبلغ. لم نجد في صفحات الجهاز التي قرأناها قواعد الذهب الاستثماري، فلا نحسب نسبة صفر للسبائك في البحرين، ونطبق النسبة الأساسية مع التنبيه بذلك. الحاسبة تعطي قيمة الذهب الخام بالدينار لأي وزن وعيار. ومن يعيش في المنطقة الشرقية ويعبر الجسر إلى المنامة للتسوق يستطيع أن يقارن هنا بين السعرين بالريال والدينار في ثوانٍ، على أساس الذهب نفسه.',
    faqs: [
      { q: 'كم ضريبة القيمة المضافة على الذهب في البحرين؟', a: 'النسبة الأساسية {vat.BH} منذ الأول من يناير 2022 بحسب الجهاز الوطني للإيرادات، بعد أن كانت 5% منذ 2019. تُحسب على قيمة الذهب والمصنعية معًا في المشغولات. لذلك يختلف السعر النهائي في المنامة عن دبي حتى لو تساوت قيمة الذهب الخام. وتظهر هذه النسبة تلقائيًا في الحاسبات عند اختيار البحرين.' },
      { q: 'هل السبائك بنسبة صفر في البحرين؟', a: 'لم نجد هذه القاعدة في صفحات الجهاز الوطني للإيرادات التي راجعناها، فلا نطبقها في حاسباتنا ونستعمل النسبة الأساسية {vat.BH}. قبل شراء سبيكة اسأل البائع عن النسبة المطبقة واطلب أن تظهر في الفاتورة الضريبية، ثم عدّل الحساب على أساسها. وإن ظهرت نسبة الصفر في الفاتورة فاختر في الحاسبة بلدًا يطبقها لترى السعر المقابل.' },
      { q: 'لماذا يُكتب سعر الغرام في البحرين بثلاث خانات عشرية؟', a: 'الدينار البحريني يُقسم إلى ألف فلس، وقيمته تزيد على دولارين ونصف، فيبقى سعر الغرام عشرات الدنانير. الخانة الثالثة تظهر الفلوس، وهي ما يميز عرضًا من آخر في سعر الغرام. في مجموع القطعة نعرض الدينار الكامل. ولهذا قد يبدو سعر الغرام صغيرًا لمن اعتاد الأسعار بالريال أو الدرهم.' },
    ],
    body: (h) => `
<h2>الربط عند {peg.BH}</h2>
<p>ينشر ${h.src('cbb', 'مصرف البحرين المركزي')} أن البحرين تحافظ على ربط سعر الصرف عند {peg.BH} دينار للدولار، وأن الربط يقدّم مرتكزًا للسياسة النقدية. نستعمل هذا الرقم مباشرة في الحساب: الأونصة بالدولار ضرب {peg.BH} قسمة {oz} يعطي غرام عيار 24 بالدينار. لا يدخل في الحساب أي سعر صرف تجاري أو هامش صراف.</p>
<h2>ضريبة {vat.BH} وأثرها على القطعة</h2>
<p>يشرح ${h.src('nbrRate', 'الجهاز الوطني للإيرادات')} أن البحرين بدأت بنسبة 5% في الأول من يناير 2019، ثم عُدّلت النسبة الأساسية إلى {vat.BH} من الأول من يناير 2022. في الفاتورة تُحسب الضريبة على المجموع، فأي زيادة في المصنعية تزيد الضريبة أيضًا. استخدم ${h.a('jewellery-price', 'حاسبة سعر القطعة')} واختر البحرين لترى الضريبة في سطر مستقل.</p>
<h2>متى يكون الشراء من البحرين مفيدًا</h2>
<p>قيمة الذهب الخام في البحرين مطابقة تقريبًا لجيرانها، لأن الدينار والريال والدرهم كلها مربوطة بالدولار. الضريبة الأعلى تجعل المشغولات أغلى قليلًا عند تساوي المصنعية. لهذا يقارن كثير من المقيمين بين السعر في المنامة وفي الخبر أو دبي قبل شراء طقم كبير، و${h.a('compare-countries', 'حاسبة المقارنة')} تفعل ذلك بنسبة مصنعية واحدة في كل البلدان.</p>`,
  },
  en: {
    slug: 'bahrain', nav: 'Gold price in Bahrain', card: 'The gram in Bahraini dinars, at the 0.376 peg, with 10% VAT.',
    title: 'Gold Price in Bahrain Today {year}: 24K, 21K and 18K in Dinars',
    description: 'Gold price in Bahrain now in Bahraini dinars for 24, 22, 21 and 18 karat, at the 0.376 dollar peg, with the effect of 10% VAT on the final price of a piece.',
    h1: 'Gold price in Bahrain today, in dinars',
    resume: 'The dinar price of a gram of gold in Bahrain is the dollar ounce price times {peg.BH}, the peg stated by the Central Bank of Bahrain, divided by {oz} grams and multiplied by the karat ratio. The central bank says the peg has been effectively unchanged since 1980, so gold in Manama moves with the ounce alone. What sets Bahrain apart is VAT: the National Bureau for Revenue raised the standard rate to {vat.BH} from 1 January 2022, twice the rate in the UAE and Oman. On a piece with 500 dinars of gold and making, VAT adds a tenth of that amount. We did not find the investment gold rules in the bureau pages we read, so we do not apply a zero rate to bars in Bahrain; the calculators use the standard rate and say so. The calculator gives the metal value in dinars for any weight and karat, useful for residents who also shop in Khobar or Dubai.',
    faqs: [
      { q: 'What is the VAT on gold in Bahrain?', a: 'The standard rate is {vat.BH} since 1 January 2022 according to the National Bureau for Revenue, up from 5% in 2019. On jewellery it applies to gold and making together. That is why a final price in Manama differs from Dubai even when the metal value is the same.' },
      { q: 'Are gold bars zero-rated in Bahrain?', a: 'We did not find that rule in the National Bureau for Revenue pages we reviewed, so our calculators do not apply it and use the standard {vat.BH}. Before buying a bar, ask the seller which rate applies and have it printed on the tax invoice, then adjust the calculation to match.' },
      { q: 'Why is the Bahrain gram price shown with three decimals?', a: 'A Bahraini dinar is split into 1,000 fils and is worth more than two and a half dollars, so a gram of gold is a few tens of dinars. The third decimal shows the fils, which is where two gram quotes differ. Totals for a piece are shown in whole dinars.' },
    ],
    body: (h) => `
<h2>The peg at {peg.BH}</h2>
<p>The ${h.src('cbb', 'Central Bank of Bahrain')} states that Bahrain maintains an exchange rate peg at {peg.BH} dinars to the dollar and that the peg anchors monetary policy. We use that number directly: dollar ounce times {peg.BH} divided by {oz} gives a gram of 24K in dinars. No commercial exchange rate or money-changer margin enters the calculation.</p>
<h2>{vat.BH} VAT and the piece</h2>
<p>The ${h.src('nbrRate', 'National Bureau for Revenue')} explains that Bahrain started at 5% on 1 January 2019 and raised the standard rate to {vat.BH} from 1 January 2022. On the invoice VAT is charged on the total, so a higher making charge also means more VAT. Pick Bahrain in the ${h.a('jewellery-price', 'jewellery price calculator')} to see VAT on its own line.</p>
<h2>When buying in Bahrain makes sense</h2>
<p>The metal value in Bahrain is almost identical to its neighbours, since the dinar, riyal and dirham are all pegged to the dollar. The higher VAT makes jewellery a little dearer at equal making charges. Many residents compare Manama with Khobar or Dubai before buying a large set; the ${h.a('compare-countries', 'comparison calculator')} does it with one making rate everywhere.</p>`,
  },
});
