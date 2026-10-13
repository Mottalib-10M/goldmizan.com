import { definePage } from '../../lib/page-types';

export default definePage({
  id: 'ounce-price', group: 'today', order: 45, tool: 'units', toolProps: { country: 'AE' }, kind: 'outil',
  related: ['karat-24', 'gold-bars', 'gold-history', 'uae', 'gram-price', 'karat-22'],
  sources: ['ukWeights', 'goldApi', 'cbuae', 'sama'],
  ar: {
    slug: 'ounce-price', nav: 'سعر أونصة الذهب والتولة والكيلو', card: 'الأونصة بالدولار والريال والدرهم، وتحويل التولة والكيلو إلى غرام.',
    title: 'سعر أونصة الذهب اليوم {year}: بالدولار والريال والدرهم والتولة',
    description: 'سعر أونصة الذهب الآن بالدولار والريال السعودي والدرهم الإماراتي، مع تحويل الأونصة والتولة والكيلو إلى غرامات وقيمة أي كمية من عيار 24 أو 22 أو 21 أو 18.',
    h1: 'سعر أونصة الذهب اليوم، والتولة والكيلو',
    resume: 'الأونصة المستعملة في أسواق الذهب ليست الأونصة العادية، بل الأونصة التروي التي يعرّفها القانون البريطاني للأوزان والمقاييس بـ{oz} غرام. بها تُسعَّر البورصات في لندن ونيويورك، ومنها نشتق كل أسعار هذا الموقع. تُذكر الأونصة دائمًا بالدولار، فإذا أردتها بالريال السعودي ضربتها في {peg.SA}، وبالدرهم في {peg.AE}. في الإمارات تُستعمل أيضًا التولة، وهي وحدة قديمة من الهند تساوي 180 حبة، أي نحو {tola} غرام، وتُباع بها سبائك العشر تولات. والكيلو هو وحدة سبائك التجار الكبيرة. الحاسبة تحول أي كمية بالأونصة أو التولة أو الكيلو أو الغرام إلى غرامات، وتعطي قيمتها الآن بأي عيار وبعملة البلد الذي تختاره، قبل علاوة البائع والضريبة.',
    faqs: [
      { q: 'كم غرامًا في أونصة الذهب؟', a: 'الأونصة التروي تساوي {oz} غرام، أي نحو 31.1 غرام، بحسب الملحق الأول من قانون الأوزان والمقاييس البريطاني لعام 1985. لا تخلط بينها وبين الأونصة العادية المستعملة في وزن الطعام، فهي نحو 28.35 غرام وأخف بنحو 10%.' },
      { q: 'كم غرامًا في التولة؟', a: 'التولة تساوي 180 حبة، والحبة {grain} غرام بحسب القانون البريطاني نفسه، فتكون التولة نحو {tola} غرام. سبيكة العشر تولات المعروفة في دبي تزن إذن نحو 116.6 غرام، وتختلف قيمتها عن سبيكة المئة غرام بقرابة 17%.' },
      { q: 'هل سعر الأونصة المعروض هو سعر البيع في المحل؟', a: 'لا. هو سعر السوق العالمي للذهب الخالص بالجملة. المحل أو تاجر السبائك يبيع بعلاوة فوقه تغطي السك والتغليف وهامشه، ويشتري منك بسعر أقل منه. اعتبر سعر الأونصة مرجعًا تقيس به عروض البائعين، لا سعرًا تدفعه.' },
    ],
    body: (h) => `
<h2>الأونصة التروي بالأرقام</h2>
<p>تعريف ${h.src('ukWeights', 'قانون الأوزان والمقاييس البريطاني لعام 1985')} للأونصة التروي هو 0.0311034768 كيلوغرام. هذا الرقم الدقيق هو ما نستعمله، لا التقريب 31.1، لأن الفرق يظهر في السبائك الكبيرة: في سبيكة كيلو يصل خطأ التقريب إلى أكثر من غرام. سعر الأونصة الذي نعرضه يأتي من ${h.src('goldApi', 'gold-api.com')} مع وقت آخر تحديث.</p>
<h2>التولة في سوق الإمارات</h2>
<p>يتعامل كثير من تجار دبي مع الزبائن القادمين من الهند وباكستان بالتولة، ويعرضون سبائك من تولة واحدة إلى عشر تولات. التولة التقليدية 180 حبة، والحبة 64.79891 ملليغرام، فتكون التولة {tola} غرام. بعض المحلات تقرب التولة إلى 11.66 أو 11.7 غرام في كلامها، والأفضل أن تطلب الوزن بالغرام في الفاتورة. الدرهم الذي تُحسب به القيمة يقوم على سعر الربط الذي يذكره ${h.src('cbuae', 'مصرف الإمارات المركزي')}.</p>
<h2>الكيلو وسبائك التجار</h2>
<p>سبيكة الكيلو تحتوي على نحو 32.15 أونصة، وهي الوحدة التي يتداولها التجار والبنوك. علاوتها للغرام أقل بكثير من السبائك الصغيرة. إن كنت تقارن بين شراء سبيكة كبيرة وعدة سبائك صغيرة، ففي ${h.a('gold-bars', 'حاسبة السبائك')} يمكنك كتابة علاوة كل عرض ومقارنة السعر النهائي.</p>`,
  },
  en: {
    slug: 'ounce-price', nav: 'Gold ounce, tola and kilo price', card: 'The ounce in dollars, riyals and dirhams, and tola and kilo converted to grams.',
    title: 'Gold Ounce Price Today {year}: In USD, SAR and AED, Plus Tola',
    description: 'Gold ounce price now in US dollars, Saudi riyals and UAE dirhams, with ounces, tolas and kilos converted to grams and the value of any amount of gold.',
    h1: 'Gold ounce price today, plus tola and kilo',
    resume: 'The ounce used in gold markets is not the everyday ounce but the troy ounce, which the UK Weights and Measures Act defines as {oz} grams. London and New York price gold in it, and every price on this site starts from it. The ounce is always quoted in dollars: for Saudi riyals multiply by {peg.SA}, for dirhams by {peg.AE}. In the UAE the tola is common too, an old Indian unit of 180 grains, about {tola} grams, and the familiar ten-tola bar is sold by it in Dubai. The kilo is the unit of large trade bars. The calculator converts any amount in ounces, tolas, kilos or grams into grams and gives its current value in any karat and in the currency of the country you choose, before the dealer premium and any VAT. It is a quick way for anyone used to tola quotes back home to check a Dubai bar price.',
    faqs: [
      { q: 'How many grams are in an ounce of gold?', a: 'A troy ounce is {oz} grams, about 31.1 g, under Schedule 1 of the UK Weights and Measures Act 1985. Do not confuse it with the ordinary avoirdupois ounce used for food, which is about 28.35 g, roughly 10% lighter, a mistake that shows up in some converter apps.' },
      { q: 'How many grams are in a tola?', a: 'A tola is 180 grains, and a grain is {grain} g under the same UK act, so a tola is about {tola} g. The ten-tola bar sold in Dubai therefore weighs about 116.6 g, roughly 17% more gold than a 100 g bar, which matters when comparing their prices.' },
      { q: 'Is the ounce price shown what the shop charges?', a: 'No. It is the wholesale world price of pure gold. A shop or bullion dealer sells at a premium above it to cover minting, packaging and margin, and buys from you below it. Treat the ounce price as the yardstick for dealer quotes, not as a price you will pay.' },
    ],
    body: (h) => `
<h2>The troy ounce in numbers</h2>
<p>The ${h.src('ukWeights', 'UK Weights and Measures Act 1985')} defines the troy ounce as 0.0311034768 kilogram. We use that exact figure rather than the rounded 31.1, because the gap shows on large bars: on a kilo bar the rounding error exceeds a gram. The ounce price shown comes from ${h.src('goldApi', 'gold-api.com')} with the time of its last update.</p>
<h2>The tola in the UAE market</h2>
<p>Many Dubai dealers serve customers from India and Pakistan in tolas and stock bars from one to ten tolas. The traditional tola is 180 grains, and a grain is 64.79891 milligrams, so a tola is {tola} g. Some shops round it to 11.66 or 11.7 g in conversation; ask for the weight in grams on the invoice. The dirham value rests on the rate listed by the ${h.src('cbuae', 'UAE central bank')}.</p>
<h2>The kilo and trade bars</h2>
<p>A kilo bar holds about 32.15 troy ounces and is the unit dealers and banks trade. Its premium per gram is far lower than on small bars. If you are weighing one large bar against several small ones, the ${h.a('gold-bars', 'bar calculator')} lets you enter each dealer’s premium and compare final prices.</p>`,
  },
});
