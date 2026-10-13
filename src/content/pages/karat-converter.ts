import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'karat-converter', group: 'tools', order: 60, tool: 'swap', toolProps: { country: 'SA' }, kind: 'outil',
  related: ['zakat-gold', 'karat-24', 'karat-21', 'karat-18', 'sell-gold', 'karat-22'],
  sources: ['goldApi', 'sama', 'ukWeights'],
  ar: {
    slug: 'karat-converter', nav: 'التحويل بين عيارات الذهب', card: 'كم يعادل وزن من عيار 21 أو 18 من الذهب الخالص أو من عيار آخر.',
    title: 'تحويل عيار الذهب {year}: من 21 إلى 24 ومن 18 إلى 21 بالغرام',
    description: 'حوّل وزن الذهب من عيار إلى آخر: كم غرامًا من عيار 24 في قطعة عيار 21 أو 18، وكم يعادلها من عيار 22، مع قيمتها الآن بالريال أو الدرهم أو الدينار في الخليج.',
    h1: 'التحويل بين عيارات الذهب',
    resume: 'كل عيار من عيارات الذهب نسبة من الذهب الخالص بالأربعة والعشرين: عيار 21 فيه 21 جزءًا من 24، وعيار 18 فيه 18 جزءًا. لذلك يمكن تحويل أي وزن من عيار إلى آخر بقاعدة واحدة: اضرب الوزن في العيار الأصلي واقسمه على العيار المطلوب. واحد وعشرون غرامًا من عيار 21 تحتوي على 18.375 غرام من الذهب الخالص، أي ما يعادل 18.375 غرام من عيار 24، أو نحو 20 غرامًا من عيار 22، أو 24.5 غرام من عيار 18. هذا التحويل مفيد عند جمع حلي من عيارات مختلفة لحساب الزكاة، أو عند مقارنة سبيكة بقطعة، أو عند استبدال قطعة بأخرى من عيار مختلف. الحاسبة تعطي الوزن المعادل، والذهب الخالص في القطعة، وقيمتها الآن بعملة البلد الذي تختاره من دول الخليج. ولا يحتاج التحويل إلى ميزان ولا إلى محل، بل إلى الوزن والعيار المكتوبين على الفاتورة.',
    faqs: [
      { q: 'كم غرام عيار 21 يساوي غرامًا من عيار 24؟', a: 'تحتاج إلى 24 على 21 غرام، أي نحو 1.143 غرام من عيار 21، لتجمع غرامًا واحدًا من الذهب الخالص. بالعكس، غرام من عيار 21 يحتوي على 0.875 غرام من الذهب الخالص. القاعدة نفسها تنطبق على كل العيارات، ويكفي أن تكتب العيارين في الحاسبة.' },
      { q: 'إذا استبدلت قطعة عيار 18 بقطعة عيار 21 فهل يتساوى الوزن؟', a: 'لا. لتحصل على الذهب الخالص نفسه تحتاج قطعة عيار 21 أخف وزنًا: عشرون غرامًا من عيار 18 تساوي نحو 17.14 غرام من عيار 21. عند الاستبدال يحسب المحل الذهب الخالص ثم يضيف مصنعية القطعة الجديدة، فاحسب الوزن المعادل قبل التفاوض.' },
      { q: 'هل يصح جمع أوزان عيارات مختلفة مباشرة؟', a: 'لا يصح إذا كان الهدف قيمة الذهب أو الزكاة، لأن غرامًا من عيار 18 لا يساوي غرامًا من عيار 24. حوّل كل وزن إلى ذهب خالص أولًا ثم اجمع. حاسبة الزكاة تفعل ذلك تلقائيًا لكل العيارات معًا.' },
    ],
    body: (h) => `
<h2>القاعدة الواحدة</h2>
<p>الوزن المعادل = الوزن × العيار الأصلي ÷ العيار المطلوب. هذه القاعدة صحيحة لأن سعر كل عيار في أسواق الخليج يُحسب كنسبة من سعر عيار 24، والقيمة تُحسب من سعر الأونصة الذي نجلبه من ${h.src('goldApi', 'gold-api.com')} مقسومًا على ${h.src('ukWeights', 'وزن الأونصة التروي')} ومضروبًا في سعر الصرف، مثل {peg.SA} ريال للدولار بحسب ${h.src('sama', 'البنك المركزي السعودي')}.</p>
<h2>حالات تحتاج فيها إلى التحويل</h2>
<p>جمع حلي العائلة لحساب الزكاة، إذ يُقاس النصاب بالذهب الخالص، وهو ما تفعله ${h.a('zakat-gold', 'حاسبة الزكاة')}. أو تقدير ما سيدفعه المحل لقطعة عيار 18 إن أردت مقابلها قطعة عيار 21. أو مقارنة سبيكة عيار 24 بقطعة بسيطة عيار 22 بالوزن نفسه من الذهب الخالص. في كل حالة يبدأ الحساب الصحيح من الذهب الخالص، لا من الوزن على الميزان.</p>
<h2>حدود التحويل</h2>
<p>التحويل يخص الذهب وحده. لا يشمل الأحجار، ولا المصنعية، ولا الضريبة. القطعة المرصعة يجب أن يُعرف وزن الذهب فيها منفصلًا قبل التحويل، وإلا ظهر وزن معادل أكبر من الحقيقة. ولقيمة البيع الفعلية ارجع إلى ${h.a('sell-gold', 'حاسبة بيع الذهب المستعمل')}.</p>`,
  },
  en: {
    slug: 'karat-converter', nav: 'Gold karat converter', card: 'What a weight of 21K or 18K equals in pure gold or in another karat.',
    title: 'Gold Karat Converter {year}: 21K to 24K, 18K to 21K in Grams',
    description: 'Convert gold from one karat to another: grams of 24K in a 21K or 18K piece, what it equals in 22K, and its current value in riyals, dirhams or dinars.',
    h1: 'Gold karat converter',
    resume: 'Every karat is a share of pure gold in twenty-fourths: 21K is 21 parts in 24, 18K is 18 parts. Any weight can therefore be converted from one karat to another with one rule: multiply the weight by the original karat and divide by the target karat. Twenty-one grams of 21K hold 18.375 g of pure gold, the same as 18.375 g of 24K, about 20 g of 22K or 24.5 g of 18K. The conversion helps when adding up jewellery in several karats for zakat, when comparing a bar with a piece, or when trading a piece for one in a different karat. The calculator gives the equivalent weight, the pure gold in the piece and its current value in the currency of the Gulf country you choose. It is also handy for expats whose family jewellery is 22K from India and who are now quoted 21K prices in Saudi Arabia.',
    faqs: [
      { q: 'How many grams of 21K equal one gram of 24K?', a: 'You need 24/21 g, about 1.143 g of 21K, to hold one gram of pure gold. The other way round, a gram of 21K contains 0.875 g of pure gold. The same rule works for every karat; just enter the two karats in the calculator to get the figure for your own weight.' },
      { q: 'If I trade an 18K piece for a 21K one, is the weight the same?', a: 'No. For the same pure gold, the 21K piece must be lighter: twenty grams of 18K equal about 17.14 g of 21K. On a trade-in the shop counts pure gold and then adds the new piece’s making charge, so work out the equivalent weight before negotiating.' },
      { q: 'Can I simply add up weights in different karats?', a: 'Not if the goal is value or zakat, because a gram of 18K is not worth a gram of 24K. Convert each weight to pure gold first, then add. The zakat calculator does this for all karats at once, so you only need to type the weights.' },
    ],
    body: (h) => `
<h2>The one rule</h2>
<p>Equivalent weight = weight × original karat ÷ target karat. The rule holds because every karat in Gulf markets is priced as a share of the 24K price, and the value comes from the ounce price we fetch from ${h.src('goldApi', 'gold-api.com')}, divided by the ${h.src('ukWeights', 'troy ounce weight')} and multiplied by the exchange rate, for example {peg.SA} riyals per dollar per the ${h.src('sama', 'Saudi Central Bank')}.</p>
<h2>When you need it</h2>
<p>Adding up a family’s jewellery for zakat, since the nisab is measured in pure gold, which the ${h.a('zakat-gold', 'zakat calculator')} does. Estimating what a shop will give for an 18K piece if you want a 21K one in exchange. Comparing a 24K bar with a plain 22K piece holding the same pure gold. In each case the right sum starts from the pure gold, not from the weight on the scale.</p>
<h2>Limits of the conversion</h2>
<p>The conversion covers gold only. It ignores stones, making charges and VAT. For a set piece the gold weight must be known separately first, or the equivalent weight comes out too high. For an actual resale figure, go to the ${h.a('sell-gold', 'used gold calculator')}.</p>`,
  },
});
