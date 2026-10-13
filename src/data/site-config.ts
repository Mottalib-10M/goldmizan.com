/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://golfe-or.example";
export const SITE_NAMES: Record<string, string> = {"ar": "ميزان الذهب", "en": "Gold Mizan"};
export const LANG_TAGS: Record<string, string> = {"ar": "ar", "en": "en"};
export const OG_LOCALES: Record<string, string> = {"ar": "ar_SA", "en": "en_AE"};
export const LOCALE_TAG = 'ar-SA';
/** Formatage des nombres par langue (RECETTE §4) : chiffres latins en arabe, comme les bijoutiers et la
 *  presse du Golfe (« عيار 21 »), séparateurs arabes ; anglais à virgule des milliers. */
export const NUMBER_LOCALES: Record<string, string> = { ar: 'ar-u-nu-latn', en: 'en-AE' };
export const CURRENCY = 'SAR';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-10-13';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"ar": "ناشر مستقل لحاسبات أسعار الذهب في الخليج", "en": "Independent publisher of Gulf gold price calculators"};
export const AUTHOR_DESC: Record<string, string> = {"ar": "تصدر Radif Partners موقع ميزان الذهب: سعر غرام الذهب لعيارات 24 و22 و21 و18 في السعودية والإمارات والكويت وقطر والبحرين وعُمان، محسوبًا أمامك من سعر الأونصة بالدولار وسعر الصرف الرسمي للبنك المركزي، مع حاسبات لسعر القطعة بالمصنعية وضريبة القيمة المضافة لكل بلد، وقيمة البيع، والزكاة، واسترداد ضريبة السياح في الإمارات.", "en": "Radif Partners publishes Gold Mizan: the price of a gram of 24, 22, 21 and 18 karat gold in Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain and Oman, worked out in front of you from the dollar ounce price and each central bank's official exchange rate, with calculators for a piece's price with making charges and each country's VAT, resale value, zakat and the UAE tourist VAT refund."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"ar": ["سعر الذهب حسب العيار", "مصنعية الذهب", "ضريبة القيمة المضافة على الذهب في السعودية والإمارات", "زكاة الذهب", "بيع الذهب المستعمل", "سبائك الذهب الاستثمارية"], "en": ["Gold price per karat", "Jewellery making charges", "VAT on gold in Saudi Arabia and the UAE", "Zakat on gold", "Selling used gold", "Investment gold bars"]};
export const CONTACT_EMAIL = "contact@golfe-or.example";
export const THEME_COLOR = '#8C6A12';
export const LOGO_SYMBOL = 'Au';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau, aucun cookie, Clarity chargé en mode sans cookie (consentv2 denied).
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
export const GA4_ID = '';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = '';
export const INDEXNOW_KEY = 'b7d3e91a5c4f2086ad1e3f7c9b5a2d48';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',  // éditeur de tous les sites du portefeuille (RECETTE §8)
  legalForm: '',  // vide : publication à titre personnel, pas de société
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "TVA",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
