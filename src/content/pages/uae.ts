import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'uae', group: 'today', order: 11, tool: 'board', toolProps: { country: 'AE', karat: 22 }, kind: 'outil',
  related: ['vat-uae', 'tourist-refund', 'karat-22', 'ounce-price', 'gold-bars', 'compare-countries'],
  sources: ['cbuae', 'uaeDecreeLaw', 'uaeExecReg', 'uaeTourist', 'goldApi'],
  ar: {
    slug: 'uae', nav: 'سعر الذهب في الإمارات', card: 'الغرام بالدرهم في دبي وأبوظبي والشارقة، بسعر الربط 3.6725.',
    title: 'سعر الذهب في الإمارات اليوم {year}: غرام 24 و22 و21 بالدرهم',
    description: 'سعر الذهب في الإمارات الآن بالدرهم: غرام عيار 24 و22 و21 و18 من سعر الأونصة وسعر الربط 3.6725، مع أثر ضريبة 5% واسترداد الضريبة للسياح في دبي وأبوظبي.',
    h1: 'سعر الذهب في الإمارات اليوم بالدرهم',
    resume: 'سعر غرام الذهب في الإمارات بالدرهم هو سعر الأونصة العالمي بالدولار مضروبًا في {peg.AE}، وهو سعر الدولار مقابل الدرهم في جداول مصرف الإمارات العربية المتحدة المركزي، ومقسومًا على {oz} غرام. لذلك يتحرك السعر في دبي وأبوظبي والشارقة والعين مع الأونصة وحدها. لكن لوحة الأسعار في محلات سوق الذهب بدبي لا تتبع النسبة البسيطة بين العيارات دائمًا: غرام 22 فيها أعلى قليلًا من 22 على 24 من غرام 24، لأن المحل يضيف هامشًا ثابتًا تقريبًا على كل غرام. الحاسبة تعرض قيمة الذهب الخام، ويمكنك مقارنتها بلوحة المحل. عند الشراء تُضاف المصنعية ثم ضريبة القيمة المضافة {vat.AE} على المجموع، بينما تخضع السبائك والعملات الاستثمارية بنقاوة 99% فأكثر لنسبة الصفر، ويستطيع السائح غير المقيم استرداد جزء من الضريبة عند المغادرة. اكتب الوزن والعيار لترى قيمة القطعة بالدرهم الآن.',
    faqs: [
      { q: 'لماذا تختلف لوحة أسعار سوق الذهب في دبي عن الحساب هنا؟', a: 'الحاسبة تعطي قيمة الذهب الخالص في كل عيار، أي سعر غرام 24 مضروبًا في العيار على 24. لوحات المحلات تضيف هامشًا على كل غرام، ويظهر أثره أكبر في العيارات الأقل، فيبدو غرام 22 أو 18 أغلى من نسبته. الفرق بين الرقمين هو ما تدفعه للمحل فوق المعدن، قبل المصنعية.' },
      { q: 'كم ضريبة القيمة المضافة على المجوهرات الذهبية في الإمارات؟', a: 'النسبة الأساسية {vat.AE} بحسب المادة الثالثة من المرسوم بقانون اتحادي رقم 8 لسنة 2017، وتُحسب على قيمة الذهب والمصنعية معًا. السبائك والعملات التي لا تقل نقاوتها عن 99% وتصلح للتداول في أسواق السبائك العالمية تخضع لنسبة الصفر بحسب المادة 36 من اللائحة التنفيذية.' },
      { q: 'هل يستطيع الزائر استرداد ضريبة الذهب عند مغادرة الإمارات؟', a: 'نعم إن كان سائحًا غير مقيم في دولة مطبقة للضريبة، واشترى من بائع مشارك بقيمة {tourist.min} درهم على الأقل، وأخرج القطعة خلال {tourist.days} يومًا. يُخصم {tourist.fee} من الضريبة و{tourist.fixed} درهم لكل طلب. حاسبة استرداد الضريبة للسياح تعطي المبلغ الصافي.' },
      { q: 'هل يتغير سعر الذهب بالدرهم بين الصباح والمساء؟', a: 'نعم، لأن الأونصة تتداول طوال اليوم في الأسواق العالمية، والدرهم ثابت مقابل الدولار. المحلات في دبي تحدّث لوحاتها عدة مرات في اليوم. هذه الصفحة تجلب سعر الأونصة عند فتحها ثم كل خمس دقائق، وتعرض وقت آخر تحديث بتوقيت غرينتش.' },
    ],
    body: (h) => `
<h2>من الأونصة إلى الدرهم</h2>
<p>جداول ${h.src('cbuae', 'مصرف الإمارات المركزي')} لأسعار الصرف تثبت الدولار عند {peg.AE} درهم يومًا بعد يوم. نضرب سعر الأونصة بالدولار في هذا الرقم ونقسمه على وزن الأونصة بالغرام، فنحصل على غرام عيار 24 بالدرهم، ثم نطبق نسبة العيار: 22 على 24 لعيار 22 الشائع في دبي، و21 على 24، و18 على 24. لا نستخدم أي سعر صرف تجاري.</p>
<h2>لوحة السوق والهامش الثابت</h2>
<p>من يقارن لوحة محل في ديرة بحساب هذه الصفحة يلاحظ أن الفرق بينهما أكبر في عيار 18 منه في عيار 24. السبب أن المحل يضيف مبلغًا على كل غرام يكاد يكون واحدًا في كل العيارات، فيصبح نسبة أكبر من غرام أرخص. لهذا لا يكفي أن تضرب سعر 24 في نسبة العيار لتتوقع سعر اللوحة. في ${h.a('jewellery-price', 'حاسبة سعر القطعة')} يمكنك كتابة سعر اللوحة مكان سعرنا لترى السعر النهائي الحقيقي.</p>
<h2>الضريبة بنسبة {vat.AE} ونسبة الصفر للسبائك</h2>
<p>تفرض ${h.src('uaeDecreeLaw', 'المادة الثالثة من المرسوم بقانون رقم 8 لسنة 2017')} ضريبة بنسبة {vat.AE} على التوريدات، والمجوهرات منها، على قيمة الذهب والمصنعية. أما ${h.src('uaeExecReg', 'المادة 36 من اللائحة التنفيذية')} فتخضع توريد واستيراد المعادن الثمينة الاستثمارية لنسبة الصفر، وتعرّفها بأنها ذهب أو فضة أو بلاتين نقاوته 99% فأكثر وبشكل قابل للتداول في أسواق السبائك العالمية. القاعدة تشمل كل بيع، لا أول بيع فقط كما في السعودية، والتفاصيل في ${h.a('vat-uae', 'صفحة ضريبة الذهب في الإمارات')}.</p>
<h2>للزائر: الاسترداد عند المغادرة</h2>
<p>بحسب ${h.src('uaeTourist', 'قرار الهيئة الاتحادية للضرائب رقم 2 لسنة 2018 وتعديلاته')} يسترد السائح الضريبة بعد خصم {tourist.fee} منها ورسم ثابت قدره {tourist.fixed} درهم لكل طلب، بشرط شراء {tourist.min} درهم على الأقل من البائع نفسه وإخراج القطعة خلال {tourist.days} يومًا. احسب الصافي في ${h.a('tourist-refund', 'حاسبة الاسترداد')}، ثم قارن بالسعر في بلدك.</p>`,
  },
  en: {
    slug: 'gold-rate-dubai', nav: 'Gold rate in Dubai and the UAE', card: 'The gram in dirhams in Dubai, Abu Dhabi and Sharjah, at the 3.6725 peg.',
    title: 'Gold Rate Dubai Today {year}: 24K, 22K, 21K Per Gram in AED',
    description: 'Gold rate in Dubai and the UAE now in dirhams: a gram of 24, 22, 21 and 18 karat from the ounce at the 3.6725 peg, with 5% VAT and the tourist refund.',
    h1: 'Gold rate in Dubai and the UAE today',
    resume: 'The gold rate in the UAE is the world ounce price in dollars, times {peg.AE}, the US dollar rate against the dirham in the UAE central bank tables, divided by {oz} grams. So the price in Dubai, Abu Dhabi, Sharjah or Al Ain moves with the ounce alone. The board in a Gold Souk shop does not always follow the simple karat ratio, though: its 22K gram sits a little above 22/24 of its 24K gram, because shops add a roughly fixed amount on every gram. The calculator shows the metal value, which you can set against the board. When you buy jewellery, the shop adds a making charge and then {vat.AE} VAT on the total, while investment bars and coins of 99% purity or more are zero-rated. A visitor who is not resident can claim part of the VAT back at the airport, which matters if you are flying home with a 22K set.',
    faqs: [
      { q: 'Why does the Dubai Gold Souk board differ from this calculation?', a: 'The calculator gives the pure metal value for each karat, the 24K gram times karat over 24. Shop boards add a margin on every gram, which weighs more on cheaper karats, so 22K or 18K look dearer than their ratio. The gap between the two figures is what you pay the shop on top of the metal, before any making charge.' },
      { q: 'What is the VAT on gold jewellery in the UAE?', a: 'The standard rate is {vat.AE} under Article 3 of Federal Decree-Law No. 8 of 2017, charged on gold and making together. Bars and coins at least 99% pure and in a form tradeable on world bullion markets are zero-rated under Article 36 of the Executive Regulation, whoever sells them.' },
      { q: 'Can a visitor get the VAT on gold back when leaving the UAE?', a: 'Yes, if you are an overseas tourist not resident in an implementing state, buy at least AED {tourist.min} from a participating retailer and take the piece out within {tourist.days} days. The scheme keeps {tourist.fee} of the VAT plus AED {tourist.fixed} per claim. The tourist refund calculator gives the net amount.' },
      { q: 'Does the dirham gold rate change during the day?', a: 'Yes. The ounce trades around the clock on world markets and the dirham is fixed to the dollar, so the rate moves with the ounce. Dubai shops update their boards several times a day. This page fetches the ounce price when it opens and then every five minutes, and shows the time of the last update in GMT.' },
    ],
    body: (h) => `
<h2>From the ounce to dirhams</h2>
<p>The ${h.src('cbuae', 'UAE central bank')} exchange rate tables list the US dollar at {peg.AE} dirhams day after day. We multiply the dollar ounce price by that figure and divide by the ounce weight to get a gram of 24K in dirhams, then apply the karat ratio: 22/24 for the 22K that most Dubai jewellers stock, 21/24 and 18/24. No commercial exchange rate is involved.</p>
<h2>The souq board and its fixed margin</h2>
<p>Hold a board in a Deira shop against this page and the gap is wider on 18K than on 24K. Shops add an amount per gram that is close to the same for every karat, so it is a bigger share of a cheaper gram. Multiplying the 24K board price by the karat ratio will therefore not predict the 22K board price. In the ${h.a('jewellery-price', 'jewellery price calculator')} you can type the shop board price instead of ours and see the real final price.</p>
<h2>{vat.AE} VAT, zero for bars</h2>
<p>${h.src('uaeDecreeLaw', 'Article 3 of Federal Decree-Law No. 8 of 2017')} sets a standard rate of {vat.AE}, which applies to jewellery on gold and making. ${h.src('uaeExecReg', 'Article 36 of the Executive Regulation')} zero-rates the supply or import of investment precious metals, defined as gold, silver or platinum of 99% purity or more in a form tradeable in global bullion markets. It covers every sale, not just the first one as in Saudi Arabia; more on the ${h.a('vat-uae', 'UAE gold VAT page')}.</p>
<h2>For visitors: the refund at departure</h2>
<p>Under ${h.src('uaeTourist', 'FTA Decision No. 2 of 2018 as amended')}, a tourist gets the VAT back less {tourist.fee} of it and a fixed AED {tourist.fixed} per claim, provided the purchase from one retailer is at least AED {tourist.min} and the goods leave within {tourist.days} days. Work out the net figure in the ${h.a('tourist-refund', 'refund calculator')}, then compare with the price at home.</p>`,
  },
});
