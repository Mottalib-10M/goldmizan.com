import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'karat-22', group: 'today', order: 25, tool: 'board', toolProps: { country: 'AE', karat: 22 }, kind: 'outil',
  related: ['uae', 'karat-24', 'karat-21', 'tourist-refund', 'ounce-price', 'jewellery-price'],
  sources: ['cbuae', 'uaeDecreeLaw', 'goldApi', 'ukWeights'],
  ar: {
    slug: 'karat-22', nav: 'سعر الذهب عيار 22', card: 'غرام عيار 22 الشائع في دبي، بالدرهم والريال وبقية عملات الخليج.',
    title: 'سعر الذهب عيار 22 اليوم {year}: الغرام في دبي والخليج',
    description: 'سعر غرام الذهب عيار 22 الآن في الإمارات والسعودية وقطر وعُمان، أي 22 جزءًا من 24 من سعر الغرام الخالص، مع قيمة أي وزن قبل المصنعية وضريبة القيمة المضافة.',
    h1: 'سعر الذهب عيار 22 اليوم',
    resume: 'غرام الذهب عيار 22 يحتوي على 22 جزءًا من الذهب الخالص من أصل 24، أي نحو 91.7%، ولذلك يُحسب سعره بضرب سعر غرام عيار 24 في 22 ثم القسمة على 24. هذا العيار هو المفضل في محلات دبي والشارقة التي تخدم الجاليات القادمة من الهند وباكستان وبنغلاديش، لأن الذهب في تلك البلدان يُشترى تقليديًا بعيار 22، وكثيرًا ما يُختم على القطعة الرقم 916. في الإمارات يُحسب السعر بالدرهم من سعر الأونصة وسعر الربط {peg.AE}، ويضاف عند الشراء أجر المصنعية ثم ضريبة القيمة المضافة {vat.AE} على المجموع. لوحات المحلات في دبي تعرض لعيار 22 سعرًا أعلى قليلًا من النسبة البسيطة، لأن الهامش يُضاف على كل غرام. الحاسبة تعطي قيمة الذهب الخام في أي وزن من عيار 22 الآن، في أي بلد خليجي تختاره.',
    faqs: [
      { q: 'ما معنى الرقم 916 على قطعة عيار 22؟', a: 'هو نسبة الذهب الخالص بالأجزاء من ألف: 22 على 24 تساوي 0.9167، فتُختم القطعة غالبًا 916. ترى هذا الختم كثيرًا على المشغولات المصنوعة للسوق الهندية في دبي. إن وجدت 916 فالقطعة عيار 22، وإن وجدت 875 فهي عيار 21.' },
      { q: 'هل يستحق شراء عيار 22 في دبي لمن يعود إلى الهند؟', a: 'المقارنة تكون بالسعر النهائي: قيمة الذهب والمصنعية والضريبة {vat.AE} في الإمارات، ناقص ما يسترده السائح غير المقيم عند المغادرة، مقابل السعر النهائي في بلده بعد رسومه الجمركية. المقيم في الإمارات لا يحق له الاسترداد، فيدفع الضريبة كاملة.' },
      { q: 'كم يزيد غرام 22 على غرام 21؟', a: 'جزء واحد من 24، أي أن غرام 22 أغلى بنحو 4.8% من غرام 21 عند سعر الأونصة نفسه. على قطعة وزنها عشرون غرامًا يصبح الفرق ملحوظًا، فتأكد من العيار المكتوب في الفاتورة قبل مقارنة عرضين من محلين مختلفين.' },
    ],
    body: (h) => `
<h2>عيار 22 في سوق دبي</h2>
<p>في ديرة والكرامة والشارقة تجد المحلات الهندية تعرض عيار 22 أولًا، وعيار 24 للعملات، وعيار 18 للماس. الزبون الذي اعتاد شراء الذهب في كيرالا أو لاهور يسأل عن عيار 22 تلقائيًا، فتصير مقارنة الأسعار بين المدينتين ممكنة فقط إذا كان العيار واحدًا. الحاسبة تحسب قيمة هذا العيار بالدرهم بسعر الربط الذي يذكره ${h.src('cbuae', 'مصرف الإمارات المركزي')}.</p>
<h2>لماذا لوحة المحل أعلى من النسبة</h2>
<p>لو أخذت سعر غرام 24 من لوحة محل وضربته في 22 على 24 لوجدت رقمًا أقل من سعر عيار 22 في اللوحة نفسها. المحل يضيف هامشه بالدرهم على كل غرام، لا نسبة مئوية من سعره، فيظهر أكبر في العيار الأقل. لهذا نعرض قيمة المعدن الخالص في كل عيار، ونترك لك أن تكتب سعر اللوحة في ${h.a('jewellery-price', 'حاسبة سعر القطعة')}.</p>
<h2>الضريبة والاسترداد</h2>
<p>تُفرض ضريبة {vat.AE} على المشغولات بحسب ${h.src('uaeDecreeLaw', 'المرسوم بقانون رقم 8 لسنة 2017')}، على الذهب والمصنعية. السائح غير المقيم يسترد معظمها بعد خصم {tourist.fee} منها و{tourist.fixed} درهم للطلب، والحساب في ${h.a('tourist-refund', 'حاسبة الاسترداد')}. أما المقيم في الإمارات فيدفعها كاملة، وهذا ما يجعل الأسعار النهائية التي يتبادلها الأصدقاء متضاربة أحيانًا.</p>`,
  },
  en: {
    slug: 'karat-22', nav: '22K gold price', card: 'A gram of 22K, the Dubai favourite, in dirhams, riyals and other Gulf currencies.',
    title: '22K Gold Price Today {year}: Per Gram in Dubai and the Gulf',
    description: 'A gram of 22 karat gold now in the UAE, Saudi Arabia, Qatar and Oman, 22 parts in 24 of the pure gram price, with the value of any weight before making and VAT.',
    h1: '22 karat gold price today',
    resume: 'A gram of 22 karat gold holds 22 parts of pure gold out of 24, about 91.7%, so its price is the 24K gram price times 22, divided by 24. It is the karat of choice in Dubai and Sharjah shops serving families from India, Pakistan and Bangladesh, where gold is traditionally bought in 22K, and pieces are often stamped 916. In the UAE the dirham price comes from the ounce price and the {peg.AE} peg; on top of it the shop adds a making charge and then {vat.AE} VAT on the total. Dubai shop boards show a 22K price slightly above the simple ratio, because the margin is added per gram. The calculator gives the metal value of any weight of 22K right now, in whichever Gulf country you pick, so you can see what part of a quote is gold and what part is the shop, before you ask for a discount on the making charge.',
    faqs: [
      { q: 'What does 916 on a 22K piece mean?', a: 'It is the fineness in thousandths: 22 divided by 24 is 0.9167, so the piece is usually stamped 916. You see it often on jewellery made for the Indian market in Dubai. A 916 stamp means 22K; an 875 stamp means 21K, which is the common Saudi karat.' },
      { q: 'Is buying 22K in Dubai worth it if I am flying back to India?', a: 'Compare final prices: gold, making and {vat.AE} UAE VAT, minus what a non-resident tourist reclaims at departure, against the final price at home after customs duty. A UAE resident cannot claim the refund and pays the VAT in full, which changes the answer.' },
      { q: 'How much more is a gram of 22K than 21K?', a: 'One part in 24, so a gram of 22K costs about 4.8% more than a gram of 21K at the same ounce price. On a twenty-gram piece the gap is noticeable, so check the karat written on the invoice before comparing offers from two shops.' },
    ],
    body: (h) => `
<h2>22K in the Dubai market</h2>
<p>In Deira, Karama and Sharjah, Indian jewellers put 22K first, 24K for coins and 18K for diamond pieces. A buyer used to shopping for gold in Kerala or Lahore asks for 22K automatically, so comparing prices between the two cities only works at the same karat. The calculator values it in dirhams at the rate listed by the ${h.src('cbuae', 'UAE central bank')}.</p>
<h2>Why the board is above the ratio</h2>
<p>Take a shop’s 24K board price, multiply by 22/24, and you get less than its own 22K board price. The shop adds its margin as dirhams per gram, not as a percentage, so it shows more on a lower karat. That is why we show the pure metal value for each karat and let you type the board price into the ${h.a('jewellery-price', 'jewellery price calculator')}.</p>
<h2>VAT and the refund</h2>
<p>Jewellery carries {vat.AE} VAT under ${h.src('uaeDecreeLaw', 'Federal Decree-Law No. 8 of 2017')}, on gold and making. A non-resident tourist reclaims most of it less {tourist.fee} of the VAT and AED {tourist.fixed} per claim; the ${h.a('tourist-refund', 'refund calculator')} does the sum. UAE residents pay it in full, which is why the final prices friends quote to each other sometimes disagree.</p>`,
  },
});
