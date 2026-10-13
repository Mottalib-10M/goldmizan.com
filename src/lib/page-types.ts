/**
 * Une page = UN fichier de `src/content/pages/<id>.ts` (CONTRIBUTING-PAGES.md). Il porte les deux
 * langues, le texte, la FAQ, les sources et l'outil. Le cœur (routes, menus, sitemap, hreflang,
 * schémas, maillage) le lit seul.
 */
import type { SourceKey, Params, Country, Karat } from './engine/params';
export type Lang = 'ar' | 'en';
export type Group = 'today' | 'tools' | 'guides';
export interface FAQ { q: string; a: string }
export type Tool = 'board' | 'jewel' | 'sell' | 'zakat' | 'tourist' | 'units' | 'compare' | 'swap' | 'spread' | 'history' | 'bar' | 'making' | 'vat';

export interface Helpers {
  lang: Lang;
  a: (id: string, text: string) => string;
  num: (n: number, decimals?: number) => string;
  dec: (n: number, max?: number) => string;
  pct: (x: number, decimals?: number) => string;
  money: (n: number, cur: string, decimals?: number) => string;
  date: (iso: string) => string;
  table: (headers: string[], rows: Array<Array<string | number>>, caption?: string) => string;
  src: (key: SourceKey, text?: string) => string;
  P: Params;
}

export interface PageText {
  /** Segment d'URL latin, minuscules et tirets, sans année ni nombre de 3 chiffres. */
  slug: string;
  nav: string;
  card: string;
  /** 50 à 60 caractères, terme-clé en tête, année comprise (§11). */
  title: string;
  /** 150 à 160 caractères. */
  description: string;
  h1: string;
  /** Bloc citable : UN paragraphe d'au moins 120 mots (§21), replié à la première phrase. */
  resume: string;
  faqs: FAQ[];
  body: (h: Helpers) => string;
}

export interface ToolProps { country?: Country; karat?: Karat; focus?: string }

export interface PageDef {
  id: string;
  group: Group;
  order: number;
  tool: Tool;
  toolProps?: ToolProps;
  /** Page outil (500 mots, `data-outil`) ou guide (1 200 mots). */
  kind: 'outil' | 'guide';
  related: string[];
  sources: SourceKey[];
  ar: PageText;
  en: PageText;
}
export const definePage = (p: PageDef): PageDef => p;
