import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'zakat-gold', group: 'tools', order: 30, tool: 'zakat', toolProps: { country: 'SA' }, kind: 'outil',
  related: ['karat-converter', 'karat-24', 'karat-21', 'saudi-arabia', 'sell-gold', 'gold-bars'],
  sources: ['binbazNisab', 'binbazHuli', 'goldApi', 'sama'],
  ar: {
    slug: 'zakat-gold', nav: 'حساب زكاة الذهب', card: 'هل بلغ ذهبك النصاب؟ وكم زكاته بالريال وبالغرام هذا الحول.',
    title: 'حساب زكاة الذهب {year}: النصاب وربع العشر بسعر الذهب الآن',
    description: 'احسب زكاة الذهب بعيار 24 و22 و21 و18: نحوّل ما تملكه إلى ذهب خالص ونقارنه بنصاب عشرين مثقالًا، ثم نحسب ربع العشر بسعر الذهب الآن بالريال أو الدرهم أو الدينار.',
    h1: 'حساب زكاة الذهب بسعر اليوم',
    resume: 'نصاب الذهب عشرون مثقالًا، والزكاة فيه ربع العشر، أي {zakat.rate}، إذا حال عليه الحول، كما في فتوى الشيخ عبد العزيز بن باز المنشورة على موقعه الرسمي. يحوّل كثير من المعاصرين المثقال إلى نحو 4.25 غرام فيصير النصاب {nisab} غرامًا من الذهب الخالص تقريبًا، وتجد تقديرات أخرى، لذلك جعلنا النصاب خانة تستطيع تعديلها. لأن الحلي تكون بعيارات مختلفة، تحوّل الحاسبة كل عيار إلى ذهب خالص: غرام عيار 21 يُحسب 0.875 غرام، وغرام عيار 18 يُحسب 0.75، ثم تجمع الكل وتقارنه بالنصاب، وتحسب الزكاة بسعر الذهب الآن بعملة بلدك، وبالغرام لمن يخرجها ذهبًا. أما زكاة الحلي المعدّ للبس فمسألة خلافية بين العلماء، يرى الشيخ ابن باز وجوبها ويرى آخرون عدمه، والحاسبة لا تفصل في ذلك: أدخل ما تراه داخلًا في الزكاة. والحساب كله يجري في متصفحك دون إرسال أي رقم.',
    faqs: [
      { q: 'هل تجب الزكاة في الذهب الملبوس؟', a: 'المسألة خلافية. ينقل الشيخ ابن باز في فتواه أن قومًا من الصحابة والعلماء قالوا لا زكاة في الحلي المستعمل، وأن آخرين أوجبوها، ويرجح هو وجوبها إذا بلغت النصاب، لعموم الأدلة ولحديث المسكتين. الحاسبة تحسب ما تُدخله، فاسأل من تثق بعلمه في بلدك عن الحلي التي تلبسها.' },
      { q: 'كم غرامًا نصاب الذهب؟', a: 'النصاب عشرون مثقالًا بحسب فتوى ابن باز المنشورة على موقعه، وذكر في فتوى أخرى أنه يعادل أحد عشر جنيهًا سعوديًا ونصفًا. تحويله الشائع {nisab} غرامًا من الذهب الخالص، على أساس أن المثقال نحو 4.25 غرام. إن اعتمدت تقديرًا آخر فاكتبه في خانة النصاب.' },
      { q: 'هل أحسب الزكاة على سعر الشراء أم سعر اليوم؟', a: 'تُقوَّم الزكاة بقيمة الذهب يوم وجوبها، أي عند تمام الحول، لا بسعر الشراء. لهذا تأخذ الحاسبة سعر الذهب الآن. إن كان حولك يتم في يوم آخر، فافتح الصفحة في ذلك اليوم أو اكتب الوزن واحفظ الرابط، لأن الوزن يبقى والسعر يتغير.' },
    ],
    body: (h) => `
<h2>من العيار إلى الذهب الخالص</h2>
<p>النصاب يُقاس بالذهب الخالص، والحلي لا تكون خالصة. لهذا نضرب كل وزن في نسبة عياره: الوزن كاملًا لعيار 24، و22 على 24 لعيار 22، و21 على 24 لعيار 21، و18 على 24 لعيار 18. من يملك مئة غرام من عيار 21 يملك 87.5 غرام من الذهب الخالص، وهذا يتجاوز {nisab} غرامًا. أما من يملك مئة غرام من عيار 18 فيملك 75 غرامًا فقط، فلا يبلغ النصاب بهذا التقدير.</p>
<h2>ربع العشر بالريال وبالغرام</h2>
<p>مقدار الزكاة ${h.src('binbazNisab', 'ربع العشر')}، أي {zakat.rate} من قيمة الذهب. تعرض الحاسبة المبلغ بعملة البلد بسعر الأونصة الآن، وتعرضه أيضًا بالغرام من الذهب الخالص لمن يفضل أن يخرج الزكاة ذهبًا. في الحالتين نستعمل القيمة الكاملة للذهب الخالص، لا السعر الذي دفعته في المحل ولا المصنعية.</p>
<h2>الحلي الملبوس</h2>
<p>في ${h.src('binbazHuli', 'فتوى حكم زكاة الذهب المعد للاستعمال')} يعرض الشيخ ابن باز القولين، وينقل أن جماعة من الصحابة وأهل العلم لم يروا زكاة في الحلي المستعمل، وأن آخرين أوجبوها، ثم يرجح الوجوب. لا نتبنى قولًا في الموقع: الحاسبة تجمع كل ما تكتبه، فإن كنت تتبع القول بعدم الوجوب فلا تُدخل الحلي التي تلبسها، وأدخل المدخر وحده.</p>`,
  },
  en: {
    slug: 'zakat-on-gold', nav: 'Zakat on gold calculator', card: 'Has your gold reached the nisab, and how much zakat is due this year?',
    title: 'Zakat on Gold {year}: Nisab and 2.5% at Today’s Gold Price',
    description: 'Zakat on 24, 22, 21 and 18 karat gold: holdings converted to pure gold, compared with the 20 mithqal nisab, then 2.5% at the current price in your currency.',
    h1: 'Zakat on gold at today’s price',
    resume: 'The nisab for gold is twenty mithqal, and zakat on it is one fortieth, {zakat.rate}, once a lunar year has passed, as stated in the fatwa of Sheikh Abdulaziz bin Baz published on his official website. Many contemporary scholars convert a mithqal to about 4.25 g, which puts the nisab at roughly {nisab} g of pure gold; other conversions exist, so the nisab is a field you can change. Since jewellery comes in different karats, the calculator turns each karat into pure gold, counting a gram of 21K as 0.875 g and a gram of 18K as 0.75 g, adds it all up, compares it with the nisab, and gives the zakat at the current gold price in your currency, and in grams for those who pay it in gold. Whether zakat is due on jewellery that is worn is a matter of scholarly disagreement: Sheikh Ibn Baz holds that it is due, others hold that it is not. The calculator does not settle that question; enter what you count as zakatable.',
    faqs: [
      { q: 'Is zakat due on gold jewellery that is worn?', a: 'Scholars disagree. Sheikh Ibn Baz reports in his fatwa that some Companions and scholars held there is no zakat on jewellery in use and others held it is due, and he favours it being due once it reaches the nisab. The calculator counts what you enter, so ask a scholar you trust about the pieces you wear.' },
      { q: 'How many grams is the gold nisab?', a: 'The nisab is twenty mithqal according to the fatwa of Ibn Baz on his official site, which another fatwa equates to eleven and a half Saudi gold pounds. The common conversion is {nisab} g of pure gold, taking a mithqal as about 4.25 g. If you follow another conversion, type it in the nisab field.' },
      { q: 'Do I value the gold at the purchase price or today’s price?', a: 'Zakat is assessed on the value of the gold on the day it falls due, when the lunar year is complete, not on what you paid. That is why the calculator uses the current price. If your year ends on another day, open the page that day or save the link with your weights.' },
    ],
    body: (h) => `
<h2>From karat to pure gold</h2>
<p>The nisab is measured in pure gold, and jewellery is never pure. So each weight is multiplied by its karat ratio: the full weight for 24K, 22/24 for 22K, 21/24 for 21K and 18/24 for 18K. Someone with a hundred grams of 21K holds 87.5 g of pure gold, above {nisab} g. Someone with a hundred grams of 18K holds only 75 g and stays below the nisab on that conversion.</p>
<h2>One fortieth in money and in grams</h2>
<p>Zakat is ${h.src('binbazNisab', 'one fortieth')}, {zakat.rate} of the gold value. The calculator shows it in your currency at the current ounce price and also in grams of pure gold for those who prefer to give gold. Either way it uses the full value of the pure gold, not what you paid in the shop and not the making charge.</p>
<h2>Jewellery that is worn</h2>
<p>In the ${h.src('binbazHuli', 'fatwa on zakat on gold kept for use and adornment')}, Sheikh Ibn Baz sets out both views, reporting that a group of Companions and scholars saw no zakat on jewellery in use while others required it, and then favours the obligation. The site takes no position: the calculator adds up whatever you enter, so if you follow the view that worn jewellery is exempt, enter only your saved gold.</p>`,
  },
});
