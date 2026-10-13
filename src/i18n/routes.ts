import { makeRouter, type RouteDef } from './routes-core';
import { PAGES } from '../lib/pages';
export const LOCALES = ['ar', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ar';
const R = (id: string, ar: string, en: string, noindex = false): RouteDef<Locale> => ({ id, paths: { ar: `/ar/${ar}/`, en: `/en/${en}/` }, ...(noindex ? { noindex } : {}) });
/** Pages de service : slugs latins reconnus par les contrôles (about, method, privacy…). */
const CORE: RouteDef<Locale>[] = [
  { id: 'home', paths: { ar: '/ar/', en: '/en/' } },
  R('method', 'method', 'method'),
  R('about', 'about', 'about'),
  R('widget', 'widget', 'widget', true),
  R('contact', 'contact', 'contact', true),
  R('editorial', 'editorial-policy', 'editorial-policy', true),
  R('privacy', 'privacy', 'privacy', true),
  R('terms', 'legal-notice', 'legal-notice', true),
  R('cookies', 'cookies', 'cookies', true),
];
export const ROUTES: RouteDef<Locale>[] = [CORE[0], ...PAGES.map((p) => R(p.id, p.ar.slug, p.en.slug)), ...CORE.slice(1)];
export const { NOINDEX_PATHS, route, altPaths } = makeRouter(LOCALES, ROUTES);
export const dirOf = (l: Locale) => (l === 'ar' ? 'rtl' : 'ltr');
