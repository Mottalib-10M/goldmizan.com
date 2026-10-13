import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'gold-history', group: 'tools', order: 80, tool: 'history', toolProps: { country: 'SA' }, kind: 'outil',
  related: ['karat-24', 'ounce-price', 'gold-bars', 'buy-sell-gap', 'saudi-arabia', 'uae'],
  sources: ['worldBank', 'worldBankLicence', 'sama', 'cbuae'],
  ar: {
    slug: 'gold-price-history', nav: 'سعر الذهب عبر السنوات', card: 'متوسط الأونصة شهرًا بشهر من البنك الدولي، وقيمة ذهب اشتريته في الماضي.',
    title: 'سعر الذهب عبر السنوات {year}: متوسط الأونصة شهريًا منذ 2016',
    description: 'سعر الذهب عبر السنوات: متوسط الأونصة الشهري من بيانات البنك الدولي، وكم يساوي اليوم الذهب الذي اشتريته في شهر سابق بالريال السعودي أو الدرهم أو بعملة أخرى.',
    h1: 'سعر الذهب عبر السنوات',
    resume: 'يسأل كثيرون كم كان سعر الذهب قبل سنة أو خمس سنوات، وكم يساوي اليوم ما اشتروه في ذلك الوقت. هذه الصفحة تجيب من مصدر واحد مفتوح: بيانات أسعار السلع الشهرية للبنك الدولي، المعروفة باسم Pink Sheet، والمنشورة برخصة المشاع الإبداعي CC BY 4.0. يعطي البنك متوسط سعر الأونصة بالدولار لكل شهر، ونحن نحوله إلى الريال أو الدرهم أو عملة البلد الذي تختاره، بسعر الصرف نفسه المستعمل في بقية الموقع. الحاسبة تفترض أنك وضعت مبلغًا في ذهب عيار 24 بمتوسط سعر شهر تختاره، دون مصنعية ولا علاوة، ثم تحسب كم غرامًا اشتريت وقيمتها بسعر الأونصة الآن. الجدول تحت الحاسبة يعرض المتوسط السنوي منذ 2016. هذه أرقام ماضية للمقارنة فقط، ولا تعني أن الذهب سيتحرك بالطريقة نفسها في السنوات القادمة.',
    faqs: [
      { q: 'من أين تأتي أسعار الذهب القديمة في هذه الصفحة؟', a: 'من بيانات أسعار السلع الشهرية للبنك الدولي، الجدول الشهري المحدَّث في أوائل كل شهر، عمود الذهب بالدولار للأونصة التروي. منذ يونيو 2025 يستعمل البنك متوسط الأسعار الفورية اليومية، وقبل ذلك متوسط تثبيت لندن بعد الظهر. البيانات منشورة برخصة CC BY 4.0 ونذكر المصدر.' },
      { q: 'لماذا لا تعرض الصفحة سعر الذهب يومًا بيوم في الماضي؟', a: 'لأننا لا نملك مصدرًا يومًا بيوم تسمح شروطه بإعادة النشر. المتوسط الشهري للبنك الدولي مفتوح ومستقر وموثق، ويكفي لمعرفة اتجاه السعر وقيمة شراء قديم بفارق صغير. السعر الحالي في الحاسبة هو سعر الأونصة الآن.' },
      { q: 'هل يعني ارتفاع الذهب في الماضي أنه سيرتفع مستقبلًا؟', a: 'لا. الجدول يبين ما حدث، وقد مر الذهب بسنوات طويلة من الانخفاض أو الركود قبل فترات الارتفاع. هذه الصفحة أداة حساب لا نصيحة استثمار، والقرار يعود إليك أو إلى مستشار مالي مرخص في بلدك.' },
    ],
    body: (h) => `
<h2>المتوسط السنوي للأونصة منذ 2016</h2>
<!--table:annual-->
<p>الأرقام أعلاه متوسطات سنوية لأسعار الشهور في ${h.src('worldBank', 'بيانات البنك الدولي')}، ولسنة ${h.P.year} متوسط الشهور المنشورة حتى الآن فقط. تحويلها إلى الريال يكون بضربها في {peg.SA} بحسب ${h.src('sama', 'البنك المركزي السعودي')}، وإلى الدرهم بضربها في {peg.AE} بحسب ${h.src('cbuae', 'مصرف الإمارات المركزي')}.</p>
<h2>كيف تقرأ نتيجة الحاسبة</h2>
<p>الحاسبة تقسم المبلغ على متوسط سعر غرام 24 في الشهر الذي تختاره، فتعرف كم غرامًا كان يشتري، ثم تضرب هذه الغرامات في سعر الغرام الآن. النتيجة أعلى من الواقع قليلًا، لأن المشتري الحقيقي دفع علاوة أو مصنعية وربما ضريبة. لمعرفة أثر هذه البنود على شراء اليوم استعمل ${h.a('buy-sell-gap', 'حاسبة فرق الشراء والبيع')}.</p>
<h2>رخصة البيانات</h2>
<p>يذكر ${h.src('worldBankLicence', 'كتالوج بيانات البنك الدولي')} أن بيانات أسعار السلع منشورة برخصة المشاع الإبداعي، النسبة 4.0، التي تسمح بإعادة الاستعمال مع ذكر المصدر. لهذا نعرض المتوسطات ونذكر البنك الدولي في كل جدول.</p>`,
  },
  en: {
    slug: 'gold-price-history', nav: 'Gold price history', card: 'The monthly average ounce from the World Bank, and what past gold is worth now.',
    title: 'Gold Price History {year}: Monthly Average Ounce Since 2016',
    description: 'Gold price history: the World Bank monthly average ounce price, and what gold bought in a past month is worth today in riyals, dirhams or another Gulf currency.',
    h1: 'Gold price history',
    resume: 'Many people want to know what gold cost a year or five years ago, and what their purchase from back then is worth today. This page answers from one open source: the World Bank monthly commodity price data, known as the Pink Sheet, published under a Creative Commons Attribution 4.0 licence. The bank gives the average dollar price of an ounce for every month, and we convert it to riyals, dirhams or the currency of the country you choose, at the same exchange rates used across the site. The calculator assumes you put an amount into 24K gold at the average price of a month you pick, with no making charge or premium, then works out how many grams you bought and their value at the current ounce price. The table below it shows the yearly average since 2016. These are past figures for comparison only; they do not mean gold will move the same way in the coming years.',
    faqs: [
      { q: 'Where do the old gold prices on this page come from?', a: 'From the World Bank monthly commodity price data, the monthly table updated early each month, gold column in dollars per troy ounce. Since June 2025 the bank uses the average of daily spot rates, and before that the average London afternoon fixing. The data is published under CC BY 4.0 and we credit the source.' },
      { q: 'Why not show the past gold price day by day?', a: 'We have no day-by-day source whose terms allow republishing. The World Bank monthly average is open, stable and documented, and it is enough to see the trend and value an old purchase within a small margin. The current price in the calculator is the live ounce price.' },
      { q: 'Does a past rise in gold mean it will keep rising?', a: 'No. The table shows what happened, and gold has gone through long years of decline or stagnation before rises. This page is a calculation tool, not investment advice; the decision is yours or a licensed financial adviser’s in your country.' },
    ],
    body: (h) => `
<h2>Yearly average ounce since 2016</h2>
<!--table:annual-->
<p>The figures above are yearly averages of the monthly prices in the ${h.src('worldBank', 'World Bank data')}; for ${h.P.year} they average only the months published so far. To convert to riyals multiply by {peg.SA}, per the ${h.src('sama', 'Saudi Central Bank')}; to dirhams by {peg.AE}, per the ${h.src('cbuae', 'UAE central bank')}.</p>
<h2>Reading the calculator</h2>
<p>The calculator divides your amount by the average 24K gram price in the month you choose to find how many grams it bought, then multiplies those grams by today’s gram price. The result is a little above reality, because a real buyer paid a premium or making charge and perhaps VAT. To see what those lines do to a purchase today, use the ${h.a('buy-sell-gap', 'buy and sell gap calculator')}.</p>
<h2>The data licence</h2>
<p>The ${h.src('worldBankLicence', 'World Bank Data Catalog')} lists the commodity price data under the Creative Commons Attribution 4.0 licence, which allows reuse with credit. That is why we show the averages and name the World Bank with every table.</p>`,
  },
});
