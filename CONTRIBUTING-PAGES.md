# Ajouter ou modifier une page de golfe-or (ميزان الذهب / Gold Mizan)

Notice pour les agents qui prolongent le site. À lire avec `~/Documents/GitHub/RECETTE-SITE.md` (§5, §6, §7, §9.3, §11, §17, §21, §26) et le rapport `~/Documents/GitHub/reports/golfe-or-serp-2026-10-12.md`.

## Le sujet et la promesse

Prix de l'or par carat (24, 22, 21, 18) au gramme et prix final d'un bijou (métal + façon + TVA) dans les six pays du Golfe : Arabie saoudite, Émirats, Koweït, Qatar, Bahreïn, Oman. Arabe (RTL, langue par défaut, `/ar/`) + anglais pour l'expatrié du Golfe (`/en/`). Le site **calcule** le prix devant le lecteur à partir du cours de l'once ; il ne publie jamais un prix figé présenté comme celui du jour.

Le Maroc n'est pas couvert : « ثمن الذهب في المغرب » mesure 10 à 100 recherches par mois, et ses règles (TVA 20 %, poinçon) demanderaient une page entière de sources.

## Données en direct : sources et conditions (relues le 2026-10-13)

| Donnée | Source | Conditions | Où |
|---|---|---|---|
| Cours de l'once (USD) | `https://api.gold-api.com/price/XAU` | Conditions gold-api.com, §9 : « Commercial use of the API is always permitted, including use in web applications… » ; §4 : pas de rafale de requêtes ; CORS ouvert (« Use it on your website. We have CORS enabled »). Aucune garantie d'exactitude (§5, §6) | navigateur (`src/lib/live.ts`, toutes les 5 min) + relevé au build (`scripts/fetch-spot.mjs` → `src/data/spot-snapshot.json`) |
| Change KWD et QAR | `https://open.er-api.com/v6/latest/USD` (ExchangeRate-API, accès ouvert) | usage commercial permis, **attribution obligatoire** (citée sous chaque calculateur et dans les sources), **redistribution du flux interdite** : on n'affiche jamais un tableau de taux, seulement le taux utilisé pour le pays choisi | navigateur + build |
| Repli KWD et QAR | Banque centrale des EAU, tableau mensuel des taux contre le dirham (`fx_sep26_en.pdf`, 30-09-2026) | document officiel | `params-2026.json` |
| Historique | Banque mondiale, Pink Sheet mensuel (`CMO-Historical-Data-Monthly.xlsx`) | CC BY 4.0 (catalogue de données, jeu 0038238), source citée | `scripts/build-history.py` → `src/data/history-monthly.json` |

Le premier rendu de chaque calculateur utilise le relevé du build (même HTML côté serveur et navigateur, RECETTE §17.5), puis `useSpot()` remplace le cours après hydratation. La ligne sous le calculateur dit toujours quel cours a servi et à quelle heure (GMT). Si l'API ne répond pas, le relevé du build reste affiché avec sa date et un avertissement.

Mise à jour : `npm run build` relance `fetch-spot.mjs` (garde l'ancien fichier en cas d'échec). Une fois par mois, télécharger le Pink Sheet depuis https://www.worldbank.org/en/research/commodity-markets et lancer `python3 scripts/build-history.py <fichier.xlsx>`. Le relevé du HTML n'est rafraîchi qu'à chaque build : au moment de brancher le déploiement, ajouter au workflow un déclenchement planifié quotidien (`schedule: cron`) pour que le cours servi sans JavaScript ne vieillisse pas. Avec JavaScript, le navigateur affiche toujours le cours du moment.

## Paramètres réglementaires

Tout est dans `src/data/params-2026.json`, testé par `tests/gold.test.ts` (20 tests). Jamais de chiffre réglementaire en dur dans une page : les textes utilisent des jetons remplacés au rendu par `fill()` (`src/lib/helpers.ts`) :

`{vat.SA}` `{vat.AE}` `{vat.BH}` `{vat.OM}` · `{peg.SA}` `{peg.AE}` `{peg.BH}` `{peg.OMusd}` `{peg.KW}` `{peg.QA}` · `{oz}` `{oz2}` `{tola}` `{grain}` · `{zakat.rate}` `{nisab}` `{mithqal}` · `{tourist.fee}` `{tourist.fixed}` `{tourist.min}` `{tourist.days}` `{tourist.cap}` · `{year}`. Un jeton inconnu fait échouer le build.

Faits établis et sources lues (voir `sources` du fichier) :
- Ancrages : SAMA 3,75 (news-557) ; CBUAE 3,6725 (tableau mensuel) ; CBB 0,376 (page monetary-policy, inchangé depuis 1980) ; CBO 2,6008 USD par rial (FixedPeg, depuis 1986) ; Koweït : panier de devises (CBK). **Qatar** : la page de la QCB n'a pas pu être lue, on ne publie donc pas d'ancrage officiel ; le taux vient du flux ou du tableau CBUAE.
- TVA : Arabie saoudite 15 % (loi TVA, art. 2) ; EAU 5 % (décret-loi fédéral 8/2017, art. 3) ; Bahreïn 10 % depuis le 1er janvier 2022 (NBR) ; Oman 5 % (loi TVA, art. 36). Koweït et Qatar : pas de TVA à la date de revue (absence de loi ; à revérifier à chaque mise à jour).
- Métaux d'investissement (≥ 99 %, négociables sur le marché mondial) : EAU taux zéro sur toute livraison ou importation (règlement d'exécution, art. 36) ; Arabie saoudite taux zéro seulement pour la **première** livraison par le producteur ou l'affineur (règlement d'application, art. 36) ; Oman : loi art. 51, conditions du règlement 53/2021 lues comme « première livraison » ; Bahreïn : règle non trouvée, on applique le taux normal et on le dit.
- Remboursement touristes EAU (décision FTA n° 2 de 2018 modifiée) : 13 % de la TVA + 4,8 AED par demande retenus ; 250 AED minimum chez un même vendeur ; sortie sous 90 jours ; plafond en espèces 35 000 AED par 24 h ; pas de formulaire pour un mineur ; « overseas tourist » = non-résident d'un État appliquant la TVA (règlement d'exécution).
- Zakat : nisab 20 mithqal, un quarantième (fatwas 5393 et 5757 de binbaz.org.sa) ; 85 g est une conversion courante, laissée modifiable ; la zakat des bijoux portés est controversée (fatwa 1476) : le site ne tranche pas.
- Once troy 31,1034768 g (Weights and Measures Act 1985, annexe 1) ; tola = 180 grains, grain = 0,06479891 g.

## Une page = un fichier

`src/content/pages/<id>.ts` (modèle : `karat-21.ts` pour une page outil, `vat-saudi.ts` pour un guide). Le fichier porte `ar` et `en` : `slug` latin (pas d'année, pas de nombre de 3 chiffres), `nav`, `card`, `title` (50-60 car., terme-clé en tête), `description` (150-160), `h1`, `resume` (UN paragraphe ≥ 120 mots : en arabe viser 130, les mots arabes sont plus courts), `faqs` (3 à 5, jusqu'à 8 sur un guide de 1 200 mots ; réponses 40-90 mots, en arabe viser 45), `body(h)`.

- `tool` : `board`, `jewel`, `sell`, `zakat`, `tourist`, `units`, `compare`, `swap`, `spread`, `history`, `bar`, `making`, `vat` (tous dans `src/components/calc/Tool.tsx`). `toolProps` fixe le pays et le carat par défaut.
- `kind` : `outil` (500 mots, `data-outil`) ou `guide` (1 200 mots).
- Dans `body` : `h.a(id, texte)`, `h.src(clé, texte)`, `h.table(...)`, `<!--tool:compare-->` (mini-calculateur secondaire), `<!--table:annual-->` (moyennes Banque mondiale).
- Aucune question de FAQ ne se répète sur le site (`check-unique`).

## Pièges rencontrés

- `check-regles.py` cherche « updated » dans l'accueil servi par la racine (`/ar/`) : le pied de page arabe porte le lien « English version, updated … ».
- `check-cookies.py` ne reconnaît que le mot latin « cookie » : les pages arabes écrivent « لا يضع هذا الموقع أي cookies ».
- Les îles dans le corps sont en `client:load` : en `client:visible`, l'hydratation tardive réécrivait le champ pendant les tests de saisie.
- Ne pas lancer `generate-og-images.mjs` (il redessine les icônes) : les images OG viennent de `scripts/og-golfe.mjs`.
- Les lignes du tableau du bijoutier de Dubaï ne suivent pas k/24 (marge par gramme) : le site affiche la valeur du métal et laisse saisir le prix du tableau.

## Contrôles (tous à 0)

```bash
cd ~/Documents/GitHub/a-publier/Mottalib-10M/golfe-or
export NODE_PATH=$(npm root -g):$PWD/node_modules
npm run build && npx vitest run
python3 scripts/check-seo.py . && python3 scripts/check-trame.py . && python3 scripts/check-unique.py dist
python3 scripts/check-simulateurs.py . && python3 scripts/check-hreflang.py . && python3 scripts/check-anglais.py .
node scripts/check-sources.mjs . && node scripts/check-legal.mjs && python3 scripts/check-cookies.py .
python3 scripts/check-regles.py . && python3 scripts/check-portefeuille.py . && python3 scripts/check-liens.py .
node scripts/check-contraste.mjs dist && node scripts/check-saisie.mjs dist --max=60 && node scripts/check-nombres.mjs dist
node scripts/typo-nbsp.mjs dist --check && node scripts/typo-sources.mjs . --check
node scripts/check-url-propre.mjs . && node scripts/check-premier-ecran.mjs . && node scripts/check-layout.mjs dist
python3 scripts/build-llms.py   # après un ajout de page
```

`check-sources` signale `nbr.gov.bh` en 403 (robot bloqué) : la page répond 200 à un navigateur, relue le 2026-10-13. Port local : 4441 (`npm run preview`). Arrêter un serveur par son port : `lsof -ti tcp:4441 | xargs kill`.

## Ce qu'on ne fait pas

Pas de dépôt GitHub ni de push sans validation de l'éditeur, pas de DNS. Pas de publicité tant que l'éditeur ne l'a pas décidée (au plus 3 emplacements, jamais au-dessus d'un calculateur). Pas de nom d'organisme ni de marque dans le nom du site.
