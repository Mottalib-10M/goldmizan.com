import type { Locale } from './routes';
const ar = {
  updatedOn: 'آخر تحديث', editorialPolicy: 'السياسة التحريرية', contactLabel: 'اتصل بنا', reviewedBy: 'راجعه',
  skipToContent: 'انتقل إلى المحتوى', mainNav: 'القائمة الرئيسية', breadcrumbLabel: 'مسار الصفحة', breadcrumbHome: 'الرئيسية', menuOpen: 'فتح القائمة',
  faqTitle: 'أسئلة شائعة', related: 'صفحات وحاسبات ذات صلة', sourcesTitle: 'المصادر', writtenBy: 'إعداد',
  asOf: 'القواعد والنسب', lastUpdated: 'روجعت في', footerBrowser: 'الحساب في متصفحك · لا نرسل أي بيانات · مجاني',
  footerSources: 'المصادر: البنوك المركزية، هيئة الزكاة والضريبة والجمارك، الهيئة الاتحادية للضرائب، البنك الدولي',
  footerDisclaimer: 'موقع مستقل تنشره Radif Partners، لا يتبع أي جهة حكومية أو بنك أو محل ذهب. الأسعار المعروضة تقدير إرشادي محسوب من سعر الأونصة العالمي وسعر الصرف، وسعر المحل يختلف بهامش البيع والمصنعية؛ لا يغني عن فاتورة البائع ولا عن استشارة مختص.',
  notFound: 'هذه الصفحة غير موجودة.', readMore: 'اقرأ المزيد', otherLang: 'English', otherLangTitle: 'English version',
};
const en: typeof ar = {
  updatedOn: 'Updated on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Checked by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Frequently asked questions', related: 'Related pages and calculators', sourcesTitle: 'Sources', writtenBy: 'Written by',
  asOf: 'Rules and rates', lastUpdated: 'checked on', footerBrowser: 'Calculated in your browser · no data sent · free',
  footerSources: 'Sources: central banks, ZATCA, UAE Federal Tax Authority, World Bank',
  footerDisclaimer: 'Independent site published by Radif Partners, not affiliated with any government body, bank or gold shop. Prices shown are an estimate for guidance, worked out from the world ounce price and the exchange rate; a shop adds its margin and making charges. It does not replace the seller’s invoice or professional advice.',
  notFound: 'This page does not exist.', readMore: 'Read more', otherLang: 'العربية', otherLangTitle: 'النسخة العربية',
};
export function t(lang: Locale) { return lang === 'en' ? en : ar; }
