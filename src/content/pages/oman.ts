import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'oman', group: 'today', order: 15, tool: 'board', toolProps: { country: 'OM', karat: 22 }, kind: 'outil',
  related: ['bahrain', 'karat-22', 'gold-bars', 'compare-countries', 'jewellery-price', 'gram-price'],
  sources: ['cbo', 'omanVatLaw', 'goldApi', 'ukWeights'],
  ar: {
    slug: 'oman', nav: 'سعر الذهب في عُمان', card: 'الغرام بالريال العماني، بسعر الربط 2.6008 دولار للريال.',
    title: 'سعر الذهب في عمان اليوم {year}: غرام 24 و22 و21 بالريال',
    description: 'سعر غرام الذهب في سلطنة عمان الآن بالريال العماني لعيار 24 و22 و21 و18، بالربط الثابت 2.6008 دولار للريال، مع ضريبة 5% ونسبة الصفر للذهب الاستثماري فيها.',
    h1: 'سعر الذهب في عُمان اليوم بالريال العماني',
    resume: 'البنك المركزي العماني يعبّر عن الربط بطريقة معكوسة: الريال العماني يساوي {peg.OMusd} دولار، ولم يتغير هذا الربط منذ آخر تعديل في 1986. لذلك نقسم سعر الأونصة بالدولار على {peg.OMusd} لنحصل على سعرها بالريال، ثم على {oz} غرام، ثم نضرب في نسبة العيار. ولأن الريال العماني أكبر من الدولار، يكون سعر غرام الذهب بضع عشرات من الريالات، ويُكتب بثلاث خانات عشرية، أي بالبيسة. يفرض قانون ضريبة القيمة المضافة العماني نسبة {vat.OM} في المادة 36 على التوريدات، ومنها المشغولات الذهبية بقيمة الذهب والمصنعية، بينما تذكر المادة 51 توريد الذهب والفضة والبلاتين الاستثماري ضمن التوريدات بنسبة الصفر وفق شروط اللائحة. الحاسبة تعرض قيمة الذهب الخام في مسقط وصلالة وصحار لأي وزن.',
    faqs: [
      { q: 'كيف يُحسب سعر الغرام بالريال العماني؟', a: 'الريال العماني يساوي {peg.OMusd} دولار بحسب البنك المركزي العماني. نقسم سعر الأونصة بالدولار على {peg.OMusd} فنحصل على الأونصة بالريال، ثم نقسم على {oz} غرام للحصول على غرام عيار 24، ثم نضرب في العيار على 24. السعر نفسه في كل ولايات السلطنة قبل هامش المحل.' },
      { q: 'كم ضريبة القيمة المضافة على المجوهرات في عُمان؟', a: 'النسبة {vat.OM} بحسب المادة 36 من قانون ضريبة القيمة المضافة، وتُحسب على الذهب والمصنعية معًا في المشغولات. الذهب الاستثماري مذكور في المادة 51 ضمن التوريدات الخاضعة لنسبة الصفر، والشروط في اللائحة التنفيذية، ونطبقها في حاسباتنا على أول توريد فقط.' },
      { q: 'هل يختلف سعر الذهب في مسقط عن دبي؟', a: 'قيمة الذهب الخام شبه متطابقة لأن العملتين مربوطتان بالدولار، ونسبة الضريبة واحدة تقريبًا: {vat.OM} في عُمان و{vat.AE} في الإمارات. الفرق يأتي من المصنعية وهامش المحل، فقارن بالسعر النهائي المكتوب في الفاتورة لا بلوحة الغرام وحدها.' },
    ],
    body: (h) => `
<h2>ربط مكتوب بالدولار للريال</h2>
<p>يذكر ${h.src('cbo', 'البنك المركزي العماني')} أن الربط الثابت بقي عند {peg.OMusd} دولار للريال منذ آخر تغيير في التعادل عام 1986. أغلب المواقع تكتب الرقم المقلوب، نحو 0.3845 ريال للدولار، وهو صحيح حسابيًا. نحن نحتفظ بالرقم كما ينشره البنك، ونقلبه داخل الحساب، حتى لا يتراكم خطأ التقريب.</p>
<h2>الضريبة ونسبة الصفر</h2>
<p>تنص ${h.src('omanVatLaw', 'المادة 36 من قانون ضريبة القيمة المضافة العماني')} على حساب الضريبة بنسبة {vat.OM} من القيمة الخاضعة للضريبة، وتدرج المادة 51 توريد الذهب والفضة والبلاتين الاستثماري ضمن التوريدات بنسبة الصفر، وفق الحدود والشروط التي تحددها اللائحة. قراءتنا للائحة أن نسبة الصفر تخص أول توريد بعد الاستخراج أو التصفية، كما في السعودية، ولذلك تسأل ${h.a('gold-bars', 'حاسبة السبيكة')} إن كان البائع هو المصفاة.</p>
<h2>الريال والبيسة في الفاتورة</h2>
<p>الريال العماني يُقسم إلى ألف بيسة، فتظهر في أسعار الغرام ثلاث خانات عشرية. إذا كتب المحل سعر غرام عيار 22 بالريال والبيسة فاكتبه في ${h.a('jewellery-price', 'حاسبة سعر القطعة')} مكان سعرنا، وستحصل على السعر النهائي مع المصنعية والضريبة، ثم قارنه بالأسعار في دول الخليج الأخرى.</p>`,
  },
  en: {
    slug: 'oman', nav: 'Gold price in Oman', card: 'The gram in Omani rials, at the fixed peg of USD 2.6008 per rial.',
    title: 'Gold Price in Oman Today {year}: 24K, 22K, 21K in Omani Rials',
    description: 'Gold price in Oman now in Omani rials for 24, 22, 21 and 18 karat, at the fixed peg of USD 2.6008 per rial, with 5% VAT on jewellery and zero on bars.',
    h1: 'Gold price in Oman today, in Omani rials',
    resume: 'The Central Bank of Oman states its peg the other way round: one Omani rial equals USD {peg.OMusd}, unchanged since the last change in parity in 1986. So we divide the dollar ounce price by {peg.OMusd} to get it in rials, then by {oz} grams, then apply the karat ratio. Since the rial is worth more than a dollar, a gram of gold is a few tens of rials and is written to three decimals, in baisa. The Omani VAT Law sets {vat.OM} in Article 36, which covers jewellery on gold and making together, while Article 51 lists the supply of investment gold, silver and platinum among the zero-rated supplies, within the conditions of the Executive Regulations. The calculator shows the metal value in Muscat, Salalah or Sohar for any weight, which helps expats used to quoting in dirhams or riyals.',
    faqs: [
      { q: 'How is the gram price in Omani rials worked out?', a: 'The Central Bank of Oman fixes one rial at USD {peg.OMusd}. We divide the dollar ounce price by {peg.OMusd} to get the ounce in rials, divide by {oz} grams for a gram of 24K, then multiply by karat over 24. The price is the same in every governorate before the shop margin.' },
      { q: 'What VAT applies to jewellery in Oman?', a: 'The rate is {vat.OM} under Article 36 of the VAT Law, charged on gold and making together for jewellery. Investment gold appears in Article 51 among zero-rated supplies, with conditions in the Executive Regulations; our calculators apply the zero rate to the first supply only.' },
      { q: 'Is gold cheaper in Muscat than in Dubai?', a: 'The metal value is nearly identical because both currencies are pegged to the dollar, and VAT is the same at {vat.OM} in Oman and {vat.AE} in the UAE. The difference comes from making charges and shop margins, so compare the final price on the invoice rather than the gram board alone.' },
    ],
    body: (h) => `
<h2>A peg written in dollars per rial</h2>
<p>The ${h.src('cbo', 'Central Bank of Oman')} says the fixed peg has stayed at USD {peg.OMusd} per rial since the last change in parity in 1986. Most websites print the inverse, about 0.3845 rials per dollar, which is arithmetically right. We keep the figure as the bank publishes it and invert it inside the calculation, so no rounding error builds up.</p>
<h2>VAT and the zero rate</h2>
<p>${h.src('omanVatLaw', 'Article 36 of the Omani VAT Law')} computes VAT at {vat.OM} of the taxable value, and Article 51 lists the supply of investment gold, silver and platinum among zero-rated supplies, within the limits and conditions set by the regulations. Our reading of the regulations is that the zero rate covers the first supply after extraction or refining, as in Saudi Arabia, which is why the ${h.a('gold-bars', 'bar calculator')} asks whether the seller is the refiner.</p>
<h2>Rials and baisa on the invoice</h2>
<p>An Omani rial is split into 1,000 baisa, so gram prices carry three decimals. If a shop quotes a gram of 22K in rials and baisa, type it in the ${h.a('jewellery-price', 'jewellery price calculator')} in place of ours to get the final price with making and VAT, then compare with the other Gulf countries.</p>`,
  },
});
