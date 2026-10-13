import { route, type Locale } from './routes';
import { PAGES, pageById } from '../lib/pages';
import type { Group } from '../lib/page-types';
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<Locale, Record<string, string>> = {
  ar: { home: 'سعر الذهب اليوم', method: 'طريقة الحساب', about: 'من نحن', widget: 'ضع الحاسبة في موقعك', contact: 'اتصل بنا', editorial: 'السياسة التحريرية', privacy: 'الخصوصية', terms: 'إشعار قانوني', cookies: 'ملفات تعريف الارتباط' },
  en: { home: 'Gold rate today', method: 'How we calculate', about: 'About', widget: 'Embed the calculator', contact: 'Contact', editorial: 'Editorial policy', privacy: 'Privacy', terms: 'Legal notice', cookies: 'Cookies' },
};
const GROUP_LABEL: Record<Locale, Record<Group, string>> = {
  ar: { today: 'الأسعار حسب البلد والعيار', tools: 'الحاسبات', guides: 'الضريبة والمصنعية' },
  en: { today: 'Prices by country and karat', tools: 'Calculators', guides: 'VAT and making charges' },
};
export const label = (id: string, lang: Locale) => CORE[lang][id] ?? pageById(id)?.[lang].nav ?? id;
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id, lang) });
export function navCategories(lang: Locale): NavCategory[] {
  return (['today', 'tools', 'guides'] as Group[]).map((g) => ({ label: GROUP_LABEL[lang][g], links: PAGES.filter((p) => p.group === g).map((p) => link(p.id, lang)) })).filter((c) => c.links.length);
}
export const navDirect = (lang: Locale): NavLink[] => [link('method', lang)];
export const footerColumns = (lang: Locale): NavCategory[] => [...navCategories(lang), { label: lang === 'ar' ? 'الموقع' : 'Site', links: ['home', 'method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].map((i) => link(i, lang)) }];
