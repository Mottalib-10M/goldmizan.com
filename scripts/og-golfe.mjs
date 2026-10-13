// Images OG 1200×630 de ce site (une par langue). Ne pas lancer generate-og-images.mjs : il réécrirait les icônes.
import sharp from 'sharp';
const logo = `<g transform="translate(80,70) scale(2.6)"><rect width="32" height="32" rx="6" fill="#1f2937"/><path d="M5 23 L9 12 H23 L27 23 Z" fill="#d4a017" stroke="#7a5a0a" stroke-width="1.2" stroke-linejoin="round"/><path d="M10.5 14 H21.5" stroke="#f6d77a" stroke-width="1.4" stroke-linecap="round"/><text x="16" y="21.2" font-size="7.5" font-weight="800" fill="#3b2a05" font-family="Helvetica" text-anchor="middle">Au</text></g>`;
const card = (dir, brand, l1, l2, badge) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#fffdf7"/><rect y="0" width="1200" height="12" fill="#8C6A12"/>${logo}
<text x="${dir === 'rtl' ? 1120 : 190}" y="128" font-family="Geeza Pro, Arial" font-size="40" font-weight="700" fill="#0f172a" text-anchor="${dir === 'rtl' ? 'end' : 'start'}">${brand}</text>
<text x="${dir === 'rtl' ? 1120 : 80}" y="300" font-family="Geeza Pro, Arial" font-size="64" font-weight="800" fill="#0f172a" text-anchor="${dir === 'rtl' ? 'end' : 'start'}">${l1}</text>
<text x="${dir === 'rtl' ? 1120 : 80}" y="390" font-family="Geeza Pro, Arial" font-size="40" fill="#475569" text-anchor="${dir === 'rtl' ? 'end' : 'start'}">${l2}</text>
<text x="${dir === 'rtl' ? 1120 : 80}" y="540" font-family="Geeza Pro, Arial" font-size="30" font-weight="600" fill="#624a0d" text-anchor="${dir === 'rtl' ? 'end' : 'start'}">${badge}</text></svg>`;
await sharp(Buffer.from(card('rtl', 'ميزان الذهب', 'سعر الذهب اليوم في الخليج', 'عيار 24 و22 و21 و18 · المصنعية والضريبة', 'السعودية · الإمارات · الكويت · قطر · البحرين · عُمان'))).png().toFile('public/og-ar.png');
await sharp(Buffer.from(card('ltr', 'Gold Mizan', 'Gold rate today in the Gulf', '24K, 22K, 21K, 18K · making charges and VAT', 'UAE · Saudi Arabia · Kuwait · Qatar · Bahrain · Oman'))).png().toFile('public/og-en.png');
console.log('og-ar.png, og-en.png');
