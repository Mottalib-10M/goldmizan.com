import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'gram-price', group: 'today', order: 40, tool: 'board', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['karat-24', 'karat-21', 'saudi-arabia', 'uae', 'compare-countries', 'ounce-price'],
  sources: ['sama', 'cbuae', 'cbb', 'cbo', 'cbk', 'goldApi'],
  ar: {
    slug: 'gram-price', nav: 'سعر جرام الذهب', card: 'سعر الجرام لكل عيار في دول الخليج الست، في جدول واحد يُحدَّث معك.',
    title: 'سعر جرام الذهب اليوم {year}: كل العيارات في دول الخليج الست',
    description: 'سعر جرام الذهب الآن لعيار 24 و22 و21 و18 بالريال السعودي والدرهم والدينار الكويتي والريال القطري والدينار البحريني والريال العماني، من سعر الأونصة وأسعار الصرف.',
    h1: 'سعر جرام الذهب اليوم في الخليج',
    resume: 'سعر جرام الذهب في أي بلد خليجي يُستخرج بالخطوات نفسها: سعر الأونصة بالدولار، مقسومًا على {oz} جرام، مضروبًا في سعر صرف عملة البلد، ثم في نسبة العيار. في السعودية والإمارات والبحرين وعُمان سعر الصرف ثابت تعلنه البنوك المركزية، فيبقى الفرق بين هذه البلدان في سعر الجرام صفرًا تقريبًا إذا حوّلته إلى الدولار. في الكويت يتغير الدينار قليلًا لأنه مربوط بسلة عملات، وفي قطر نأخذ سعر اليوم. لذلك لا معنى للقول إن الذهب أرخص في بلد خليجي من آخر بسبب سعر الجرام وحده: الفرق الحقيقي يأتي من الضريبة والمصنعية وهامش المحل. اختر البلد والعيار والوزن في الحاسبة، وانظر في الجدول تحتها إلى سعر الجرام نفسه بعملات الخليج الست في اللحظة ذاتها. أما المقيم الذي ينتقل بين مدن الخليج فيجد في الجدول نفسه سعر الجرام بعملة كل بلد، دون أن يحسب أسعار الصرف بنفسه، وهذا ما تفعله الحاسبة كل خمس دقائق.',
    faqs: [
      { q: 'هل كلمة جرام وغرام تعنيان الشيء نفسه؟', a: 'نعم، الجرام والغرام كتابتان لوحدة الوزن نفسها، والجرام أكثر استعمالًا في السعودية والخليج على لوحات المحلات، والغرام أقرب إلى الفصحى. في هذا الموقع نستعمل الكلمتين، وكل الحسابات تقوم على الجرام المتري، وهو جزء من ألف من الكيلوغرام. فلا فرق في الحساب بين الكتابتين.' },
      { q: 'لماذا تتساوى أسعار الجرام بالدولار في السعودية والإمارات والبحرين وعمان؟', a: 'لأن عملات هذه البلدان الأربعة مربوطة بالدولار بأسعار ثابتة، فإذا حوّلت سعر الجرام بالريال أو الدرهم أو الدينار البحريني أو الريال العماني إلى الدولار بأسعار الربط الرسمية حصلت على الرقم نفسه. الاختلاف الذي تراه في المحلات هامش وضريبة ومصنعية. وهذا ما يظهره عمود الدولار في الحاسبة.' },
      { q: 'ما الذي يجعل سعر الجرام في الكويت مختلفًا قليلًا؟', a: 'الدينار الكويتي مربوط بسلة عملات بحسب بنك الكويت المركزي، فلا يساوي الدولار عددًا ثابتًا من الفلوس. إذا تحرك الدولار أمام العملات الأخرى تحرك سعر الجرام بالدينار ولو ثبتت الأونصة. الفرق صغير لكنه سبب اختلاف الكويت في الجدول. وتظهر قيمة الدينار المستعملة تحت الحاسبة.' },
    ],
    body: (h) => `
<h2>سعر الجرام الآن في دول الخليج الست</h2>
<!--tool:compare-->
<p>الحاسبة أعلاه تقارن قطعة واحدة في البلدان الست مع الضريبة. أما أسعار الصرف التي يقوم عليها كل سطر فهي: ${h.src('sama', 'البنك المركزي السعودي')} عند {peg.SA}، و${h.src('cbuae', 'مصرف الإمارات المركزي')} عند {peg.AE}، و${h.src('cbb', 'مصرف البحرين المركزي')} عند {peg.BH}، و${h.src('cbo', 'البنك المركزي العماني')} عند {peg.OMusd} دولار للريال، والدينار الكويتي بسعر اليوم لأنه ${h.src('cbk', 'مربوط بسلة عملات')}.</p>
<h2>كم خانة عشرية تقرأ</h2>
<p>الريال السعودي والدرهم والريال القطري تُكتب أسعار جرامها بخانتين، لأن المحلات تسعّر بالهللة والفلس. أما الدينار الكويتي والدينار البحريني والريال العماني فتُقسم إلى ألف فلس أو بيسة، فتظهر ثلاث خانات. لا تقارن جرامًا بالريال السعودي بجرام بالدينار الكويتي مباشرة، بل حوّل كليهما إلى الدولار أو إلى عملة واحدة، وهذا ما يفعله سطر الدولار في ${h.a('compare-countries', 'حاسبة المقارنة')}.</p>
<h2>من سعر الجرام إلى سعر القطعة</h2>
<p>سعر الجرام نقطة البداية فقط. القطعة التي تزن عشرين جرامًا لا تكلف عشرين ضعف سعر الجرام، لأن المحل يضيف المصنعية ثم الضريبة. ${h.a('jewellery-price', 'حاسبة سعر القطعة')} تحسب السعر النهائي بحسب البلد، و${h.a('karat-21', 'صفحة عيار 21')} تشرح لماذا يختلف سعر اللوحة عن قيمة الذهب الخام.</p>`,
  },
  en: {
    slug: 'gram-price', nav: 'Gold price per gram', card: 'The gram price for every karat in the six Gulf countries, in one live table.',
    title: 'Gold Price Per Gram Today {year}: Every Karat, Six Gulf States',
    description: 'Gold price per gram now for 24, 22, 21 and 18 karat in riyals, dirhams and dinars across the six Gulf states, from the live ounce and official exchange rates.',
    h1: 'Gold price per gram today in the Gulf',
    resume: 'The gold price per gram in any Gulf country comes from the same steps: the dollar ounce price, divided by {oz} grams, times the exchange rate of the local currency, times the karat ratio. In Saudi Arabia, the UAE, Bahrain and Oman the exchange rate is a fixed peg announced by the central bank, so once you convert to dollars the gram price is practically the same in all four. In Kuwait the dinar moves slightly because it follows a basket of currencies, and for Qatar we use today’s rate. Saying that gold is cheaper in one Gulf country than another because of the gram price alone therefore makes little sense; the real difference comes from VAT, making charges and shop margins. Pick a country, karat and weight in the calculator, and use the comparison below it to see the same piece priced in the six Gulf currencies at the same moment, VAT included, which is what expats moving between Gulf cities usually want to know.',
    faqs: [
      { q: 'Why do I see both jaram and ghram in Arabic?', a: 'They are two spellings of the same unit. Jaram is the usual form on Saudi and Gulf shop boards, ghram is closer to classical Arabic. This site uses both, and every calculation is based on the metric gram, one thousandth of a kilogram, so a quote in either spelling means the same weight.' },
      { q: 'Why is the dollar gram price the same in Saudi Arabia, the UAE, Bahrain and Oman?', a: 'Their four currencies are pegged to the dollar at fixed rates. Convert a gram price in riyals, dirhams, Bahraini dinars or Omani rials back to dollars at the official pegs and you get the same figure. The gaps you see in shops are margin, VAT and making charge.' },
      { q: 'Why is Kuwait slightly different in the table?', a: 'The Kuwaiti dinar follows a basket of currencies according to the Central Bank of Kuwait, so a dollar is not a fixed number of fils. When the dollar moves against other currencies, the dinar gram price moves even with a flat ounce. The gap is small, but it is the reason Kuwait stands apart.' },
    ],
    body: (h) => `
<h2>The gram price now in the six Gulf countries</h2>
<!--tool:compare-->
<p>The calculator above prices one piece in all six countries with VAT. The exchange rates behind each line are the ${h.src('sama', 'Saudi Central Bank')} at {peg.SA}, the ${h.src('cbuae', 'UAE central bank')} at {peg.AE}, the ${h.src('cbb', 'Central Bank of Bahrain')} at {peg.BH}, the ${h.src('cbo', 'Central Bank of Oman')} at USD {peg.OMusd} per rial, and the Kuwaiti dinar at today’s rate since it is ${h.src('cbk', 'pegged to a basket')}.</p>
<h2>How many decimals to read</h2>
<p>Saudi riyal, dirham and Qatari riyal gram prices carry two decimals, because shops price in halalas and fils. The Kuwaiti dinar, Bahraini dinar and Omani rial split into 1,000 fils or baisa, so three decimals appear. Never compare a gram in Saudi riyals with a gram in Kuwaiti dinars directly; convert both to dollars or one currency, which is what the dollar column in the ${h.a('compare-countries', 'comparison calculator')} does.</p>
<h2>From the gram to the piece</h2>
<p>The gram price is only the starting point. A twenty-gram piece does not cost twenty times the gram price, because the shop adds a making charge and then VAT. The ${h.a('jewellery-price', 'jewellery price calculator')} gives the final price by country, and the ${h.a('karat-21', '21K page')} explains why a board price differs from the raw metal value.</p>`,
  },
});
