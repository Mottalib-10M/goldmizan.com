import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'buy-sell-gap', group: 'tools', order: 70, tool: 'spread', toolProps: { country: 'SA', karat: 21 }, kind: 'outil',
  related: ['sell-gold', 'jewellery-price', 'making-charges', 'gold-bars', 'gold-history', 'qatar'],
  sources: ['ksaVatLaw', 'uaeDecreeLaw', 'goldApi'],
  ar: {
    slug: 'buy-sell-gap', nav: 'فرق سعر البيع والشراء', card: 'كم تخسر لو بعت القطعة فور شرائها: المصنعية والضريبة وخصم المحل.',
    title: 'فرق سعر البيع والشراء في الذهب {year}: كم تخسر عند إعادة البيع',
    description: 'احسب الفرق بين سعر شراء قطعة الذهب بالمصنعية والضريبة وسعر بيعها في اليوم نفسه، لتعرف كم يجب أن يرتفع الذهب حتى تسترد ما دفعته في السعودية أو الإمارات.',
    h1: 'فرق سعر البيع والشراء في الذهب',
    resume: 'من يشتري قطعة ذهب ثم يبيعها في اليوم نفسه يخسر مبلغًا حتى لو لم يتحرك سعر الأونصة، لأن ثلاثة أشياء لا تعود: المصنعية التي دفعها، وضريبة القيمة المضافة عليها وعلى الذهب، وخصم المحل عند الشراء منه. في السعودية تبلغ الضريبة {vat.SA} من السعر قبلها، فتضيف وحدها خسارة فورية كبيرة على أي قطعة. هذه الحاسبة تحسب سعر الشراء النهائي بالمصنعية والضريبة، ثم المبلغ الذي يدفعه المحل لو بعت القطعة فورًا بسعر الذهب الخام ناقص خصمه، وتعرض الفرق بالمبلغ وبالنسبة من سعر الشراء. هذه النسبة هي الارتفاع الذي يحتاجه سعر الذهب حتى تتعادل، تقريبًا. لذلك ينصح من يشتري الذهب للادخار بالقطع قليلة المصنعية أو بالسبائك، ويفيد هذا الرقم أيضًا من يفكر في بيع قطعة اشتراها قبل أشهر.',
    faqs: [
      { q: 'كم يجب أن يرتفع الذهب حتى أسترد ما دفعته في قطعة؟', a: 'يجب أن يرتفع سعر الذهب بما يغطي المصنعية والضريبة وخصم المحل معًا. الحاسبة تعطي هذا الفرق كنسبة من سعر الشراء، فإذا ظهر 20% مثلًا فأنت تحتاج إلى ارتفاع في قيمة الذهب الخام يعوض هذا المبلغ قبل أن تربح شيئًا من البيع.' },
      { q: 'لماذا الخسارة الفورية أكبر في السعودية منها في الكويت؟', a: 'لأن الضريبة في السعودية {vat.SA} على الذهب والمصنعية، وهي جزء من سعر الشراء لا يعود عند البيع، بينما لا ضريبة قيمة مضافة في الكويت حتى تاريخ مراجعتنا. بالمصنعية نفسها وخصم المحل نفسه، تكون الخسارة الفورية في الكويت أصغر بمقدار الضريبة.' },
      { q: 'هل السبيكة أفضل من الحلي من حيث فرق البيع والشراء؟', a: 'في الغالب نعم، لأن علاوة السبيكة أقل من مصنعية الحلي، وقد تخضع لنسبة ضريبة صفر في الإمارات. لكن البائع يشتري السبيكة أيضًا بأقل من سعر السوق. قارن الحالتين بأرقام حقيقية من البائع، في حاسبة السبيكة وفي هذه الحاسبة.' },
    ],
    body: (h) => `
<h2>من أين تأتي الخسارة</h2>
<p>سعر الشراء = الذهب + المصنعية + الضريبة على المجموع، كما تقضي ${h.src('ksaVatLaw', 'المادة الثانية من نظام الضريبة السعودي')} و${h.src('uaeDecreeLaw', 'المادة الثالثة من المرسوم بقانون الإماراتي')}. سعر البيع = الذهب ناقص خصم المحل. الفرق بينهما هو المصنعية والضريبة والخصم، ولا علاقة له بحركة السوق. الحاسبة تحسب الطرفين بسعر الأونصة نفسه من ${h.src('goldApi', 'gold-api.com')}، فلا يدخل في النتيجة إلا ما يدفعه المشتري للمحل وللدولة.</p>
<h2>كيف تقلل الفرق</h2>
<p>تفاوض على المصنعية قبل الوزن، فهي البند الوحيد القابل للتفاوض. اختر قطعة بسيطة إن كان هدفك الادخار. احتفظ بالفاتورة لأنها تثبت العيار والوزن عند البيع. واسأل المحل عن سياسة الاستبدال: بعض المحلات تشتري قطعها بخصم أقل. ${h.a('making-charges', 'صفحة المصنعية')} تشرح كيف تقارن عرضين.</p>
<h2>متى يصبح البيع رابحًا</h2>
<p>إذا ارتفع سعر الذهب بعد الشراء، يبدأ ارتفاع قيمة الذهب الخام في تعويض الفرق. يمكنك أن ترى في ${h.a('gold-history', 'صفحة سعر الذهب عبر السنوات')} كيف تغيرت الأونصة على مدى عشر سنوات، لكن الماضي لا يضمن المستقبل، والذهب قد ينخفض أيضًا لفترات طويلة.</p>`,
  },
  en: {
    slug: 'buy-sell-gap', nav: 'Gold buy and sell gap', card: 'What you lose selling a piece right after buying: making, VAT and deduction.',
    title: 'Gold Buy and Sell Gap {year}: What You Lose When Reselling',
    description: 'The gap between what a gold piece costs with making and VAT and what a shop pays for it the same day, and how far gold must rise for you to break even.',
    h1: 'The gold buy and sell gap',
    resume: 'Buy a piece of gold and sell it the same day and you lose money even if the ounce has not moved, because three things never come back: the making charge you paid, the VAT on it and on the gold, and the shop’s deduction when it buys from you. In Saudi Arabia VAT is {vat.SA} of the pre-VAT price, which alone creates a large immediate loss on any piece. The calculator works out the final purchase price with making and VAT, then what a shop would pay if you sold straight back at the raw gold value minus its deduction, and shows the gap in money and as a share of the purchase price. That share is roughly how far gold must rise for you to break even. It is why people buying gold to save are told to choose plain pieces or bars, and it is also the number to check before selling a piece you bought a few months ago. Expats deciding whether to buy gold before leaving the Gulf can use it to see what the move really costs.',
    faqs: [
      { q: 'How far must gold rise before I get back what I paid for a piece?', a: 'Gold must rise enough to cover the making charge, VAT and the shop’s deduction together. The calculator shows that gap as a share of the purchase price; if it reads 20%, the raw gold value has to rise by enough to cover that amount before a sale shows any gain at all.' },
      { q: 'Why is the immediate loss bigger in Saudi Arabia than in Kuwait?', a: 'Saudi VAT is {vat.SA} on gold and making, and it is part of the purchase price that does not come back on resale, while Kuwait had no VAT as of our review. With the same making charge and the same deduction, the immediate loss in Kuwait is smaller by the amount of the VAT.' },
      { q: 'Are bars better than jewellery for the buy and sell gap?', a: 'Usually, because a bar premium is lower than a jewellery making charge and bars may be zero-rated in the UAE. A dealer still buys a bar back below the market price, though. Compare both with real dealer figures, in the bar calculator and in this one.' },
    ],
    body: (h) => `
<h2>Where the loss comes from</h2>
<p>Purchase price = gold + making + VAT on the total, as ${h.src('ksaVatLaw', 'Article 2 of the Saudi VAT Law')} and ${h.src('uaeDecreeLaw', 'Article 3 of the UAE Decree-Law')} provide. Sale price = gold minus the shop deduction. The gap is making, VAT and deduction, and has nothing to do with the market. The calculator prices both sides at the same ounce price from ${h.src('goldApi', 'gold-api.com')}, so the result only reflects what the buyer pays the shop and the state.</p>
<h2>How to narrow it</h2>
<p>Negotiate the making charge before the piece is weighed; it is the only line open to negotiation. Pick a plain piece if you are saving. Keep the invoice, since it proves karat and weight when you sell. Ask about the exchange policy: some shops buy their own pieces back with a smaller deduction. The ${h.a('making-charges', 'making charges page')} shows how to compare two offers.</p>
<h2>When selling turns a profit</h2>
<p>If gold rises after you buy, the higher raw gold value starts to cover the gap. The ${h.a('gold-history', 'gold price history page')} shows how the ounce moved over ten years, but the past guarantees nothing, and gold can also fall for long periods.</p>`,
  },
});
