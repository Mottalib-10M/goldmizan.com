import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'sell-gold', group: 'tools', order: 20, tool: 'sell', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['buy-sell-gap', 'karat-18', 'karat-21', 'karat-converter', 'jewellery-price', 'zakat-gold'],
  sources: ['goldApi', 'sama', 'cbuae', 'ukWeights'],
  ar: {
    slug: 'sell-gold', nav: 'بيع الذهب المستعمل', card: 'كم يدفع المحل ثمنًا لذهبك المستعمل، وكم يخصم من قيمته.',
    title: 'بيع الذهب المستعمل {year}: احسب ما يدفعه المحل لذهبك الآن',
    description: 'احسب سعر بيع الذهب المستعمل في السعودية والإمارات والخليج: قيمة الذهب الخام بالوزن والعيار ناقص خصم المحل، وقارنها بالعرض الذي تلقيته قبل أن تقبل الصفقة.',
    h1: 'بيع الذهب المستعمل: كم يدفع المحل؟',
    resume: 'عندما تبيع ذهبًا مستعملًا لا يدفع المحل ثمن القطعة كما اشتريتها، بل ثمن الذهب الذي فيها: الوزن مضروبًا في سعر غرام العيار يوم البيع، ثم يخصم نسبة يسميها بعض الباعة أجرة الكسر أو الصهر أو الفحص. المصنعية التي دفعتها والضريبة لا تعودان. لذلك فإن السؤال الصحيح قبل الذهاب إلى المحل هو: كم تساوي هذه الغرامات اليوم بسعر الذهب الخام؟ الحاسبة تجيب عن ذلك بسعر الأونصة الآن وبسعر الصرف الرسمي للبلد، وتسمح لك بكتابة نسبة الخصم التي يذكرها المحل، أو بكتابة سعر الغرام الذي عرضه عليك، فترى الفرق بينه وبين قيمة الذهب بالنسبة المئوية. خذ معك الفاتورة الأصلية إن وجدت، فهي تثبت الوزن والعيار وتسهل التفاوض، واطلب أن توزن القطعة أمامك على ميزان ظاهر. وإن كانت القطعة إرثًا عائليًا فاحسب قيمتها هنا أولًا ثم قرر بهدوء.',
    faqs: [
      { q: 'كم يخصم محل الذهب عادة عند شراء الذهب المستعمل؟', a: 'لا توجد نسبة رسمية، وكل محل يحدد خصمه بحسب حالة القطعة والعيار وحاجته إلى الذهب. لذلك نترك خانة الخصم صفرًا ونطلب منك أن تكتب الرقم الذي يذكره البائع. الأفضل أن تسأل محلين أو ثلاثة عن سعرهم للغرام وتقارن كل عرض بقيمة الذهب الخام في الحاسبة.' },
      { q: 'هل أسترد المصنعية إذا بعت القطعة بعد أسبوع من شرائها؟', a: 'عادة لا. المحل الذي يشتري القطعة يعاملها كذهب مستعمل، حتى لو كانت جديدة، إلا إذا كان لديه سياسة استبدال خاصة. الضريبة كذلك لا تعود. قبل شراء قطعة بمصنعية مرتفعة اسأل عن سياسة الإرجاع والاستبدال واكتبها في الفاتورة. فاقرأ شروط الاستبدال قبل أن تدفع ثمن القطعة.' },
      { q: 'هل يدفع المحل سعرًا أعلى لعيار 24 من عيار 18 للغرام؟', a: 'نعم، لأن غرام عيار 24 يحتوي ذهبًا خالصًا أكثر بالثلث من غرام عيار 18. المحل يحسب الذهب الخالص في قطعتك، فغرام عيار 18 يُحسب ثلاثة أرباع غرام، وغرام 21 سبعة أثمانه. اختر العيار الصحيح في الحاسبة لتحصل على القيمة الدقيقة، فالفرق بين العيارين كبير.' },
    ],
    body: (h) => `
<h2>ما الذي يحسبه المشتري</h2>
<p>المحل الذي يشتري ذهبك سيصهره أو يبيعه لتاجر جملة، فيهمه الذهب الخالص وحده. يزن القطعة، ويتحقق من العيار، ثم يضرب الوزن في سعر الغرام بعد خصمه. الحاسبة تعيد هذا الحساب بسعر الأونصة من ${h.src('goldApi', 'gold-api.com')} وبسعر صرف ${h.src('sama', 'البنك المركزي السعودي')} أو ${h.src('cbuae', 'مصرف الإمارات المركزي')}، فتحصل على الرقم الذي ينبغي أن يقترب منه العرض.</p>
<h2>القطع المرصعة والذهب المختلط</h2>
<p>إن كانت القطعة مرصعة بأحجار، فالوزن على الميزان يشمل الأحجار، والمحل يخصمها أو يقدّرها. اطلب أن يُذكر وزن الذهب وحده. وإن كانت لديك قطع من عيارات مختلفة، فاحسب كل عيار وحده ثم اجمع، أو حوّلها إلى عيار واحد في ${h.a('karat-converter', 'حاسبة التحويل بين العيارات')}.</p>
<h2>البيع أم الاستبدال</h2>
<p>بعض المحلات تعرض عليك قطعة جديدة مقابل القديمة مع دفع الفرق. في هذه الحالة احسب أمرين: قيمة ذهبك القديم في هذه الحاسبة، والسعر النهائي للقطعة الجديدة في ${h.a('jewellery-price', 'حاسبة سعر القطعة')}. الفرق الحقيقي هو ما بينهما، وكثيرًا ما تختفي فيه مصنعية الجديدة.</p>`,
  },
  en: {
    slug: 'sell-used-gold', nav: 'Selling used gold', card: 'What a shop pays for your used gold, and how much it deducts.',
    title: 'Sell Used Gold {year}: What a Gulf Shop Should Pay You Today',
    description: 'Selling used gold in Saudi Arabia, the UAE and the Gulf: the raw gold value by weight and karat minus the shop deduction, set against the offer you got.',
    h1: 'Selling used gold: what should the shop pay?',
    resume: 'When you sell used gold, a shop does not pay for the piece as you bought it but for the gold inside it: the weight times the gram price for its karat on the day of sale, minus a deduction some sellers call a melting, refining or testing fee. The making charge you paid and the VAT do not come back. The right question before going to a shop is therefore what those grams are worth today at the raw gold price. The calculator answers it at the current ounce price and the country’s official exchange rate, lets you enter the deduction the shop names, or the gram price it offered, and shows the gap between that offer and the gold value as a percentage. Bring the original invoice if you have it, since it proves weight and karat and makes haggling easier, and ask for the piece to be weighed in front of you on a visible scale. It helps anyone clearing out jewellery before leaving the Gulf.',
    faqs: [
      { q: 'How much does a gold shop usually deduct when buying used gold?', a: 'There is no official rate; each shop sets its deduction by the state of the piece, the karat and how much it needs gold. That is why the deduction field starts at zero and you type the figure the seller gives. Ask two or three shops for their gram price and compare each offer with the gold value in the calculator.' },
      { q: 'Do I get the making charge back if I sell a week after buying?', a: 'Usually not. A shop buying the piece treats it as used gold, even if it is new, unless it has a specific exchange policy. VAT does not come back either. Before buying a piece with a high making charge, ask about returns and exchanges and have the policy written on the invoice.' },
      { q: 'Does a shop pay more per gram for 24K than for 18K?', a: 'Yes, because a gram of 24K holds a third more pure gold than a gram of 18K. A shop counts the pure gold in your piece, so a gram of 18K counts as three quarters of a gram and a gram of 21K as seven eighths. Pick the right karat in the calculator to get the exact value.' },
    ],
    body: (h) => `
<h2>What the buyer counts</h2>
<p>A shop buying your gold will melt it or sell it to a wholesaler, so it only cares about the pure gold. It weighs the piece, checks the karat, then multiplies the weight by its own gram price after the deduction. The calculator repeats that sum with the ounce price from ${h.src('goldApi', 'gold-api.com')} and the exchange rate of the ${h.src('sama', 'Saudi Central Bank')} or the ${h.src('cbuae', 'UAE central bank')}, giving the figure an offer should come close to.</p>
<h2>Set pieces and mixed gold</h2>
<p>If the piece is set with stones, the scale weight includes them and the shop deducts or estimates them. Ask for the gold weight alone. If you have pieces in different karats, value each karat separately and add up, or convert them to one karat in the ${h.a('karat-converter', 'karat converter')}.</p>
<h2>Selling or trading in</h2>
<p>Some shops offer a new piece against your old one plus the difference. Work out two things: the value of your old gold here, and the final price of the new piece in the ${h.a('jewellery-price', 'jewellery price calculator')}. The real cost is the gap between them, and the new piece’s making charge often hides in it.</p>`,
  },
});
