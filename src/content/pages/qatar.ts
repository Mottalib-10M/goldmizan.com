import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'qatar', group: 'today', order: 13, tool: 'board', toolProps: { country: 'QA', karat: 22 }, kind: 'outil',
  related: ['kuwait', 'karat-22', 'karat-24', 'compare-countries', 'buy-sell-gap', 'gram-price'],
  sources: ['cbuaeFx', 'fxApi', 'goldApi', 'ukWeights', 'worldBank'],
  ar: {
    slug: 'qatar', nav: 'سعر الذهب في قطر', card: 'الغرام بالريال القطري لكل عيار، من الأونصة وسعر صرف اليوم.',
    title: 'سعر الذهب في قطر اليوم {year}: غرام 24 و22 و21 بالريال القطري',
    description: 'سعر غرام الذهب في قطر الآن بالريال القطري لعيار 24 و22 و21 و18، من سعر الأونصة وسعر صرف الريال اليوم، مع حساب قيمة أي وزن قبل المصنعية في محلات الدوحة.',
    h1: 'سعر الذهب في قطر اليوم بالريال القطري',
    resume: 'في قطر يُحسب سعر غرام الذهب بالريال القطري من سعر الأونصة بالدولار وسعر صرف الريال، ثم يُقسم على {oz} غرام ويُضرب في نسبة العيار. الريال القطري قريب جدًا من سعر ثابت مقابل الدولار، لكننا لم نجد على موقع مصرف قطر المركزي صفحة قابلة للقراءة تنشر هذا الرقم، فلا نكتبه كسعر ربط رسمي. بدلًا من ذلك نأخذ سعر اليوم من ExchangeRate-API، ونحتفظ برقم احتياطي من الجدول الرسمي لمصرف الإمارات المركزي، وهو {peg.QA} ريال للدولار في آخر يوم من الجدول. قطر لا تطبق ضريبة قيمة مضافة على المجوهرات حتى تاريخ مراجعتنا، فالفاتورة تتكون من الذهب والمصنعية. محلات الدوحة تبيع عيار 22 و21 و18 جنبًا إلى جنب، والحاسبة تعطي قيمة الذهب الخام لأي منها بحسب الوزن الذي تكتبه. ومن يعمل في الدوحة ويرسل ذهبًا إلى أهله يعرف هنا قيمته الخام قبل الشحن.',
    faqs: [
      { q: 'ما سعر صرف الريال القطري الذي تستخدمه الحاسبة؟', a: 'سعر اليوم من ExchangeRate-API عند فتح الصفحة، وإن لم يصل فالرقم الاحتياطي {peg.QA} ريال للدولار المستخرج من جدول مصرف الإمارات المركزي لأسعار الصرف. يظهر تحت الحاسبة أي الرقمين استُعمل وقيمته، لتعرف بالضبط على أي أساس حُسب سعر الغرام. ولا نستعمل أي سعر صرف تجاري.' },
      { q: 'هل تُضاف ضريبة على شراء الذهب في الدوحة؟', a: 'لا تطبق قطر ضريبة قيمة مضافة حتى تاريخ مراجعة هذه الصفحة، لذلك تظهر الضريبة صفرًا في كل حاسباتنا عند اختيار قطر. يبقى على المشتري أن يسأل عن المصنعية، فهي البند الذي يصنع الفرق بين محل وآخر في سوق الذهب. فاطلب أن تُكتب في الفاتورة منفصلة.' },
      { q: 'هل الذهب أرخص في قطر منه في الإمارات بسبب الضريبة؟', a: 'قيمة الذهب الخام تكاد تكون واحدة لأن العملتين مستقرتان أمام الدولار، والفرق الأساسي هو ضريبة {vat.AE} في الإمارات مقابل صفر في قطر، ثم المصنعية. السائح في دبي قد يسترد جزءًا من الضريبة، فالمقارنة الصحيحة تكون بالسعر النهائي في حاسبة المقارنة بالأرقام الفعلية.' },
    ],
    body: (h) => `
<h2>لماذا لا نكتب رقم ربط رسميًا لقطر</h2>
<p>قاعدة الموقع أن كل رقم نستعمله نقرؤه في مصدر رسمي ونذكره. لم نتمكن من قراءة صفحة سعر الصرف على موقع مصرف قطر المركزي، فاخترنا طريقين معلنين: سعر اليوم من ${h.src('fxApi', 'ExchangeRate-API')} مع ذكر المصدر، ورقم احتياطي من ${h.src('cbuaeFx', 'الجدول الرسمي لمصرف الإمارات المركزي')} الذي يذكر الريال القطري مقابل الدرهم كل يوم عمل. هذا أصدق من نقل رقم من موقع لا نعرف مصدره.</p>
<h2>العيارات في محلات الدوحة</h2>
<p>تعرض المحلات في قطر غالبًا ثلاثة عيارات: 22 للمشغولات الهندية الطابع، و21 للتصاميم الخليجية، و18 للقطع المرصعة. الفرق بين غرام 22 وغرام 18 أربعة أجزاء من 24، أي أن غرام 18 أرخص بنحو 18% من غرام 22. اختر العيار في الحاسبة واكتب الوزن، ثم انظر إلى سطر الأونصة لتتأكد من أن الأساس هو نفسه الذي تراه في نشرات الأسعار العالمية.</p>
<h2>من الفاتورة إلى المقارنة</h2>
<p>لأن الضريبة صفر، يكفي في قطر أن تقسم المبلغ النهائي على الوزن لتعرف كم دفعت للغرام شاملًا المصنعية، ثم تطرح منه سعر الغرام الخام الذي تعطيه الحاسبة. الباقي هو المصنعية وهامش المحل. إن أردت أن تعرف كم ستخسر لو أعدت بيع القطعة، فاستخدم ${h.a('buy-sell-gap', 'حاسبة فرق الشراء والبيع')}.</p>
<h2>سعر الذهب في قطر عبر السنوات بالريال القطري</h2>
<p>يحوّل الجدول متوسط الأونصة السنوي الذي ينشره ${h.src('worldBank', 'البنك الدولي')} إلى سعر غرام عيار 24 و22 و21 بالريال القطري. الريال يتحرك في نطاق ضيق جدًا حول الدولار، فاستعملنا رقمًا واحدًا لكل السنوات هو الرقم الاحتياطي {peg.QA}، وهذا يكفي لرؤية الاتجاه: كم كان غرام 22 يكلف في الدوحة قبل خمس سنوات وكم يكلف الآن. هذه متوسطات سنة كاملة، لا تصلح لمراجعة فاتورة يوم بعينه.</p>
<!--table:annual:QA:24,22,21-->
<p>لمراجعة شراء محدد، اختر الشهر واكتب المبلغ الذي وضعته في ذهب خالص، فتظهر قيمته اليوم بالريال القطري بسعر الأونصة الحالي. المصنعية التي دُفعت يومها لا تدخل في الحساب لأنها لا تعود عند البيع.</p>
<!--tool:history-->
<h2>زكاة الذهب في قطر بالريال</h2>
<p>حساب زكاة الذهب في قطر يحتاج إلى قيمة الذهب الخالص بالريال القطري يوم تمام الحول. الحاسبة التالية تحوّل كل عيار إلى ذهب خالص، وتقارنه بنصاب عشرين مثقالًا، ويُقدَّر عادة بـ{nisab} غرامًا، ثم تحسب ربع العشر بسعر اليوم. الحلي الملبوس مسألة خلافية، فاكتب ما تراه داخلًا في الزكاة بحسب الفتوى التي تتبعها، والتفصيل في ${h.a('zakat-gold', 'صفحة زكاة الذهب')}.</p>
<!--tool:zakat-->`,
  },
  en: {
    slug: 'qatar', nav: 'Gold price in Qatar', card: 'The gram in Qatari riyals for every karat, from the ounce and today’s rate.',
    title: 'Gold Rate in Qatar Today {year}: 24K, 22K, 21K in Riyals',
    description: 'Gold price in Qatar now in Qatari riyals for 24, 22, 21 and 18 karat, from the ounce and today’s riyal rate, with the metal value of any weight in Doha.',
    h1: 'Gold rate in Qatar today, in Qatari riyals',
    resume: 'In Qatar the riyal price of a gram of gold comes from the dollar ounce price and the riyal exchange rate, divided by {oz} grams and multiplied by the karat ratio. The Qatari riyal trades very close to a fixed dollar rate, but we could not find a readable page on the Qatar Central Bank website publishing that figure, so we do not present one as an official peg. Instead we take today’s rate from ExchangeRate-API and keep a fallback from the UAE central bank official table, {peg.QA} riyals per dollar on the last day listed. Qatar applies no VAT on jewellery as of our last review, so an invoice is gold plus making charge. Doha shops sell 22K, 21K and 18K side by side, and the calculator gives the metal value of whichever you pick for the weight you type, which is handy for expats used to quotes in another currency.',
    faqs: [
      { q: 'Which Qatari riyal rate does the calculator use?', a: 'Today’s rate from ExchangeRate-API when the page opens, or, if that fails, the fallback of {peg.QA} riyals per dollar taken from the UAE central bank exchange rate table. The line under the calculator shows which one was used and its value, so you know exactly what the gram price rests on.' },
      { q: 'Is VAT added when buying gold in Doha?', a: 'Qatar had not introduced VAT as of this page’s review, so VAT shows as zero in all our calculators when Qatar is selected. The buyer still needs to ask about the making charge, which is what separates one shop from another in the gold souq.' },
      { q: 'Is gold cheaper in Qatar than in the UAE because of VAT?', a: 'The metal value is almost identical since both currencies are stable against the dollar; the main gap is {vat.AE} VAT in the UAE against none in Qatar, then the making charge. A tourist in Dubai may reclaim part of the VAT, so compare final prices in the comparison calculator.' },
    ],
    body: (h) => `
<h2>Why we do not print an official Qatar peg</h2>
<p>The rule on this site is that every figure we use is read on an official source and cited. We could not read the exchange rate page of the Qatar Central Bank website, so we use two declared routes: today’s rate from ${h.src('fxApi', 'ExchangeRate-API')}, credited, and a fallback from the ${h.src('cbuaeFx', 'UAE central bank official table')}, which lists the Qatari riyal against the dirham every working day. That is more honest than copying a number from a site whose source we cannot check.</p>
<h2>Karats in Doha shops</h2>
<p>Shops in Qatar usually show three karats: 22K for Indian-style pieces, 21K for Gulf designs and 18K for set jewellery. A gram of 18K holds four twenty-fourths less gold than a gram of 22K, so it costs about 18% less. Pick the karat, type the weight, and look at the ounce line to check the base matches the world prices you see in the news.</p>
<h2>From the invoice to a comparison</h2>
<p>With no VAT, dividing the final amount by the weight tells you what you paid per gram including making; subtract the metal gram price from the calculator and what remains is making charge and shop margin. To see what you would lose by selling the piece back, use the ${h.a('buy-sell-gap', 'buy and sell gap calculator')}.</p>
<h2>Gold rate in Qatar over the years, in riyals</h2>
<p>The table turns the yearly average ounce published by the ${h.src('worldBank', 'World Bank')} into a gram of 24K, 22K and 21K in Qatari riyals. The riyal moves in a very narrow band around the dollar, so one figure is used for every year, the fallback rate of {peg.QA}; that is enough to see the trend, such as what a gram of 22K cost in Doha five years ago against today. These are full-year averages and will not match the invoice of a given day.</p>
<!--table:annual:QA:24,22,21-->
<p>To check a specific purchase, pick the month and type what you put into pure gold: the calculator shows its worth today in Qatari riyals at the current ounce price. The making charge paid at the time is left out, because a shop never pays it back.</p>
<!--tool:history-->
<h2>Zakat on gold in Qatar, in riyals</h2>
<p>Working out zakat on gold in Qatar means valuing the pure gold in Qatari riyals on the day the lunar year completes. The calculator below converts each karat to pure gold, compares it with the nisab of twenty mithqal, usually put at {nisab} grams, and takes one fortieth at today’s price. Worn jewellery is a disputed case, so enter what your own fatwa counts; the ${h.a('zakat-gold', 'gold zakat page')} explains the views.</p>
<!--tool:zakat-->`,
  },
});
