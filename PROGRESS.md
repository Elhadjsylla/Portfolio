# PROGRESS.md — Suivi du portfolio

> Mis à jour à la fin de chaque étape, par l'agent comme par Elhadj.
> Dernière mise à jour : **9 novembre 2026**

## Résumé en une ligne

Base du nouveau site posée (HTML/CSS/JS, thème bleu nuit, une seule page). Il reste à ajouter la photo pro, les captures des projets, les nouveaux projets, puis à publier.

---

## Décisions prises

| Sujet | Décision |
|-------|----------|
| Stack | HTML, CSS, JavaScript vanilla. Pas de React, Tailwind, ni build. |
| Direction | Thème sombre bleu nuit, inspiré de la référence donnée par Elhadj (hero avec photo et halo, cartes arrondies, icônes de technologies). |
| Positionnement | **Développeur web** uniquement. Cybersécurité retirée pour l'instant (à rajouter après la licence et les certifications). |
| Carte de code | Gardée depuis l'ancien site, onglet nommé `profil`, contenu en JavaScript, texte réel. |
| Polices / icônes | Auto-hébergées (`assets/`). Sora, DM Sans, JetBrains Mono. Icônes officielles Devicon et Simple Icons. |
| Sécurité | CSP stricte (meta + `vercel.json`), pas de script ni de style inline, pas de CDN. Voir `SECURITY_RULES.md`. |
| Projets | Écrits à la main dans le HTML (pas de rendu par JS) : cartes compactes sur `index.html`, blocs détaillés sur `projets.html` (ancres `#sama-boutik`, `#ecosurv`, `#darling-body`). |
| Projets publiés | Sama Boutik, EcoSurv, puis Darling Body présenté comme « mon premier site ». **Maison Fade est retiré** (cartes, textes, tags, liens, balises). |
| EcoSurv, publication | Accord de l'associé déclaré par Elhadj le 9 novembre 2026, preuve conservée hors du dépôt. Aucun nom de partenaire n'est écrit sur le site. |
| Chiffres | Aucun chiffre sur aucun projet (élèves, écoles, utilisateurs, boutiques…). |
| Captures | Pages publiques uniquement, jamais d'écran connecté ni de donnée réelle. `images/projets/<slug>-bureau` et `<slug>-mobile`, en `.webp` avec repli `.jpg`. |
| Contenu | Aucun faux témoignage, aucun faux chiffre, aucune barre de niveau inventée. |

---

## Fait

- [x] `SECURITY_RULES.md`, `GIT_RULES.md`, `AGENTS.md`, `CLAUDE.md`, `PROGRESS.md`, `.gitignore`, `vercel.json`
- [x] Site en **5 pages** : `index.html` (aperçus), `projets.html`, `competences.html`, `apropos.html` (avec carte `profil`), `contact.html`. En-tête et pied de page dupliqués à l'identique (voir `AGENTS.md`)
- [x] **Mode clair / sombre** : bouton dans l'en-tête, système par défaut, choix mémorisé (clé `theme`), pas de flash, transition douce, couleurs en variables CSS
- [x] CV déplacé dans le pied de page (gros bouton) ; retiré de la barre du haut et du menu mobile
- [x] Pied de page : navigation, réseaux, contact, bouton CV, © 2026. Phrase « Conçu et codé à la main » supprimée
- [x] Photo pro intégrée (`images/photo-pro.jpg`, versions 480 et 800 px en WebP et JPEG, sans EXIF), cadrage propre à chaque emplacement
- [x] Section « Ton éditorial » et « Photo » dans `AGENTS.md`
- [x] (ancien) Page unique : accueil, projets, compétences, à propos (avec carte `profil`), contact, pied de page
- [x] Icônes officielles en local : HTML5, CSS3, JavaScript, React, Tailwind CSS, Vite, PHP, Python, MySQL, Supabase, Git, GitHub, LinkedIn
- [x] Animations : entrée du hero en cascade, halo tournant autour de la photo, apparition au défilement, halo qui suit la souris sur les cartes, boutons magnétiques, carte de code qui s'écrit ligne par ligne, barre de progression, heure de Dakar en direct (accueil). Le lien actif du menu est maintenant la page courante (`aria-current="page"`)
- [x] Menu mobile accessible (bouton, Échap, fermeture au clic)
- [x] Mouvement réduit respecté (sans animation, le site reste complet)
- [x] Images de remplacement si une photo ou une capture manque
- [x] Testé : ordinateur (1440 px) et mobile (360, 390, 430 px), aucun défilement horizontal, aucune erreur de console, aucune violation de CSP

## En cours

- [ ] Branche `feat/contact` (créée en local à partir de `content/projets`, car ni `content/projets` ni `feat/structure-multipage` ne sont fusionnées et `dev` contient encore l'ancien site) : page Contact et formulaire faits, **en attente de l'identifiant Formspree** et de la validation d'Elhadj. Les branches `feat/structure-multipage` et `content/projets` attendent aussi sa validation.

---

## À faire par Elhadj

- [ ] **Photo professionnelle** : j'ai utilisé la photo envoyée dans la conversation (810×1080, sans EXIF). **À valider.** Si tu en as une plus grande (idéalement 1200 px de large ou plus), remplace `images/photo-pro.jpg` et je régénère les versions, y compris 1200 px.
- [ ] **Anciennes images de projets, non utilisées** : `images/projet-sama-boutik.jpg` (capture périmée, remplacée par `images/projets/`) et `images/projet-maison-fade.jpg` (projet retiré). Je ne les ai pas supprimées : dis-moi si je peux.
- [ ] **Captures de projets** : vérifier d'un coup d'œil que `images/projets/*` ne montrent aucune donnée réelle. Les exemples de démonstration de Sama Boutik (« +15 000 FCFA ») sont fictifs (confirmé).
- [ ] **CV** : le bouton du pied de page télécharge `cv/CV_Elhadj_Sylla.pdf`, qui est **encore l'ancien fichier**. Le mettre à jour (retirer la cybersécurité, vérifier téléphone et adresse, métadonnées du PDF).
- [ ] **Nettoyer l'ancien site** : `pages/` et la capture Darling Body sont déjà retirés. Restent `images/photo-profil.jpg` et `images/projet-portfolio.jpg`, non utilisés par le nouveau site : à supprimer si tu confirmes.
- [ ] 1 projet client à ajouter plus tard.
- [ ] **Formspree : créer le compte et coller l'identifiant** dans `js/config.js` (`FORM_ENDPOINT`). Tant qu'il est vide, le bouton du formulaire ouvre un e-mail pré-rempli au lieu d'envoyer. Étapes détaillées dans la réponse de l'agent du 9 novembre 2026 (compte gratuit, nouveau formulaire vers elhadjsylla667@gmail.com, copier l'URL `https://formspree.io/f/xxxxxxxx`, activer le filtre anti-spam).
- [ ] **WhatsApp** : veux-tu l'ajouter aux réseaux de la page Contact ? Je ne publie **jamais** ton numéro sans ton accord.
- [ ] **GitHub** : activer la protection de branche sur `main` et `dev`, la double authentification, *Secret scanning* et *Push protection* (`GIT_RULES.md` §7).
- [ ] **Vercel** : connecter le dépôt, puis rattacher le nom de domaine. Mettre à jour les URL `og:` dans `index.html`.

## À faire par l'agent (après validation d'Elhadj)

- [ ] Ajouter les nouveaux projets (branche `content/...`)
- [ ] Peaufiner le design et les animations après les retours d'Elhadj
- [ ] Image de partage `og-image` (1200×630), `robots.txt`, `sitemap.xml`, page 404
- [ ] Optimiser les images (WebP + JPEG), vérifier le poids de la page
- [ ] Audit Lighthouse (performance, accessibilité, bonnes pratiques, SEO) et corrections
- [ ] Vérifier sur Safari iPhone et Firefox

---

## Confirmé par Elhadj

- [x] Le lien Facebook (`collet00patrick`) est bien le sien : affiché dans le pied de page de chaque page et sur la page Contact.
- [x] « Licence 2 informatique à l'ESCOA » est exact.
- [x] Ville : Dakar.
- [x] Sama Boutik : technologies React, Tailwind CSS, Vite et **Supabase** (la base de données), pas de PHP. Rôle : **base de données et back-end** (le front a été fait par un proche, non nommé sur le site). Le « problème » : les gens perdent de l'argent en gérant leur boutique sur un bout de papier.
- [x] Sama Boutik, fonctions : caisse, stock, dettes clients, alerte de retard, hors ligne, paiements Wave et Orange Money, un accès par employé ou vendeur, et le volet grossistes et distributeurs (boutiques clientes à crédit, tournées, rapprochement de caisse). Confirmé par Elhadj. Les exemples de démonstration du site (montants, noms) sont des tests anciens, fictifs.
- [x] EcoSurv : mêmes technologies, Supabase compris ; conçu pour la gestion des écoles ; rôle : **tout réalisé par Elhadj** (interface, base de données, développement, mise en ligne). Fonctions retenues : les 5 confirmées plus chèque, opérateurs Bankily, Masrvi et Sedad, validation par le directeur, clôture de caisse, notifications, quatre accès. Aucun tarif repris.
- [x] Darling Body revient sur la page Projets, présenté comme son premier site.

## Procédure pour ajouter un projet

1. Captures des **pages publiques** (bureau 1440×900, mobile 390×844), jamais d'écran connecté ni de donnée réelle. Playwright installé **hors du dépôt**.
2. Sortie : `images/projets/<slug>-bureau.webp`, `<slug>-mobile.webp` et leurs repli `.jpg`, moins de 200 Ko chacune.
3. Copier un bloc `<article class="project">` de `projets.html` (alterner `project--flip`) et une carte de `index.html`.
4. Aucun nom de partenaire, aucun chiffre. Voir `SECURITY_RULES.md` §3.

---

## À CONFIRMER (ne pas inventer)

| Question | Pourquoi |
|----------|----------|
| Mentionner Sunu Classe, OGF, ou les sites d'immersion (Rassoul Tijara, MD__shoot, The Store…) ? | Aucun lien en ligne connu pour le moment. |
| **Sama Boutik, rôle** : « Je me suis occupé de la base de données et du back-end. » Faut-il ajouter la mise en ligne et le référencement du site, que ta première description citait ? | Ta dernière précision (base de données et back-end seulement) remplace la première. |
| **Sama Boutik, crédit du front** : citer le proche qui l'a fait, avec son nom ? | Je ne publie le nom de personne sans accord. Pour l'instant, le site ne le mentionne pas. |
| **EcoSurv, « Le problème »** : ton texte à toi, en une ou deux phrases ? | Le paragraphe actuel vient du « constat » de la page publique d'EcoSurv. |
| **À propos : ton histoire** : pourquoi l'informatique ? Un moment, un déclic, une anecdote vraie, en une ou deux phrases ? | La page est solide mais reste fidèle aux faits confirmés. Une vraie phrase de toi la rendrait bien plus personnelle. Je n'invente aucun souvenir. |
| **À propos, section « Ce que j'aime » : à refaire avec de vrais détails.** Quels animés (titres) ? Quel football : tu regardes, tu joues ? Quel club, quel joueur ? Depuis quand ? | Seuls les **animés** et le **football** sont confirmés (cités par Elhadj le 9 novembre 2026), sans aucun détail. Je n'invente rien. Dès que tu donnes les détails, je refais la section avec de vrais visuels. Attention aux droits : logos de clubs et affiches d'animés sont des marques protégées, à n'utiliser qu'avec ton accord. |
| **Accueil : l'accroche « Je développe des outils de gestion pour les commerçants et les écoles. »** te convient-elle ? | Elle remplace l'ancienne formule, retirée du site (Elhadj ne l'avait pas dite). Faits seulement : Sama Boutik (gestion commerciale) et EcoSurv (gestion scolaire). |
| Description de Sama Boutik : le point que tu signalais (« cité que Sama Boutik ») | Interprété comme : la description de l'accueil et celle de Sama Boutik ne montraient pas tout. Élargies. Dis-moi si tu visais autre chose. |
| `og:image` : la photo en portrait (800×1067) te convient pour les aperçus de partage ? | Les aperçus (WhatsApp, LinkedIn) préfèrent du 1200×630, qui sera coupé en paysage. Une vraie image de partage reste à faire. |
| Textes d'introduction des pages : tu valides la reformulation « Pour un stage, une collaboration ou un site à construire, écris-moi » ? | J'ai remplacé « toujours partant pour un nouveau défi » par une phrase plus directe, sans ajouter de fait. |
| **Infos reprises de l'ancien CV, à valider (PR `content/apropos-competences`)** : bac série Sciences en Mauritanie (2024) ; entrée à l'ESCOA en décembre 2024, L1 en 2025 ; stage d'informatique à l'APIM (Nouakchott, septembre–octobre 2025) et ses quatre services ; langues et niveaux (français et arabe courants, anglais intermédiaire, wolof, pulaar et soninké en notions). | Tu as confirmé ces faits dans ta consigne, mais ils viennent d'une ancienne version du CV : relis-les. Les sigles NIF et CNSS sont laissés tels quels, sans les développer. |
| **Stage : durée.** Ta consigne dit « en un mois de stage, j'ai changé quatre fois de service » mais aussi « septembre à octobre ». | Je n'ai écrit aucune durée en mois, seulement « septembre – octobre 2025 ». Dis-moi laquelle est exacte. |
| **Nom de l'éditeur de code** : le nommer ou pas ? | Le site dit seulement « un éditeur de code ». |
| **Outils d'IA** : en nommer ou pas ? | Aucun outil ni aucune marque n'est cité (À propos et Compétences). |
| **Ce que je cherche** : formulation « Je suis ouvert à tout type d'opportunité : un stage, une mission ou une collaboration. Je suis disponible. » | À valider. |
| **Savoir-être** (Curiosité, Adaptabilité, Travail en équipe, Écoute du client, Fiabilité) : une phrase chacun, tirée du fait associé. | À valider. Aucune autre qualité n'est écrite. |
| **Hors écran** : sport tous les jours, foot (je le regarde), temps en famille, animés. | Simples étiquettes, sans icône ni détail (aucune icône ajoutée sans ton accord). Les détails demandés plus haut (« Ce que j'aime ») restent utiles. |
| **« Marketing digital »** : employé seulement dans les blocs « J'apprends en ce moment » (À propos et Compétences), comme demandé. | Exception au ton éditorial, voulue par Elhadj. |
| **Niveaux** : Supabase est marqué « J'apprends » alors qu'il sert sur Sama Boutik et EcoSurv ; Vite est dans « Outils ». | Appliqué tel que demandé. Dis-moi si tu veux un autre repère. |
| **Carte `profil` de l'accueil** : elle reste inchangée (elle cite Supabase et les deux projets) ; celle de À propos est plus courte. | Les garder différentes ou les unifier ? |

---

## Journal

### 2026-11-09 (À propos et Compétences détaillées)
- Branche `content/apropos-competences`, créée depuis `feat/contact` : `feat/contact` n'est pas fusionnée dans `dev` (qui contient encore l'ancien site), donc la branche empile les travaux précédents.
- **À propos** : en-tête (photo carrée cadrée sur le visage, 4 phrases, liens Projets et Contact), parcours daté (bac 2024, ESCOA décembre 2024, stage APIM septembre–octobre 2025, L2 en cours), formation et stage service par service (sans nom de personne, sans chiffre, sans règle interne), « D'où ça vient », deux principes de travail, paragraphe « Travailler avec l'IA » (ancre `#ia`), ce que j'apprends, langues avec niveaux, hors écran, ce que je cherche avec bouton Contact et carte `profil` mise à jour. Les savoir-être n'y sont pas répétés.
- **Compétences** : groupes Front-end, Back-end et données, Outils, Travailler avec l'IA, Savoir-être, J'apprends en ce moment. Étiquette de niveau par outil (jamais de pourcentage ni de barre). Phrase et liens vers `projets.html#ecosurv` et `#sama-boutik` pour React, Tailwind CSS et Vite. Sama Boutik : le front n'est pas à moi, je n'écris donc que « Sama Boutik repose aussi dessus ». Aucune icône ajoutée (`assets/LICENSES.md` inchangé). Pas de changement de CSP. CV non modifié.
- Tests : 5 pages × 2 thèmes × 360, 390 et 1440 px sans erreur ni violation CSP, aucun défilement horizontal, contrastes AA, zones tactiles ≥ 44 px, clavier, mouvement réduit. Greps sécurité propres (pas de secret, pas de script ni style inline, aucun numéro, aucune mention de cybersécurité, d'outil d'IA ou d'éditeur).

### 2026-11-09
- Refonte lancée : passage de l'ancien portfolio (HTML/CSS, thème orange) à une base plus soignée, en HTML/CSS/JS.
- Rédaction des règles et des instructions d'agent avant tout code.
- Construction de la base (voir « Fait »). Correction en cours de route : le halo tournant de la photo élargissait la page sur mobile (corrigé avec `overflow-x: clip` sur le hero) ; le panneau du menu mobile est maintenant opaque.
- Une première version « cahier d'écolier » avait été proposée plus tôt dans la session. Elle n'a pas été retenue, la référence bleu nuit d'Elhadj prime.

### 2026-11-09 (structure multipage)
- Branche `feat/structure-multipage`, créée depuis `main` (la branche `dev` du dépôt contient encore l'ancien site : à aligner avant de s'en servir).
- Passage de une à 5 pages ; accueil réduit à des aperçus. Contenu existant déplacé, rien d'inventé.
- Mode clair/sombre ajouté. `SECURITY_RULES.md` §5 modifié : seule clé `localStorage` autorisée = `theme`. **Pas de changement de CSP.**
- Choix technique : les logos de technologies sont posés sur une pastille bleu nuit plutôt que dupliqués en variantes claires/sombres. Un seul fichier par logo, lisible sur les deux fonds.
- Photo : source 810 px de large, donc versions 480 et 800 px seulement (pas d'agrandissement vers 1200).
- Tests faits en navigateur (Chrome headless) : 5 pages × 2 thèmes × 360, 390 et 1440 px, aucune erreur de console ni violation de CSP, aucun défilement horizontal, contrastes mesurés ≥ AA, clavier, menu mobile, mouvement réduit. Non testé : Safari iPhone, Firefox.

### 2026-11-09 (mobile et « Ce que j'aime »)
- **Mobile :** sur l'accueil, l'ordre est maintenant titre, **photo**, puis carte de code `profil` (avant, la carte passait avant la photo). Sur grand écran, rien ne change.
- **Accueil, grand écran :** la photo est revenue à côté du titre, dans le premier écran, à sa taille d'origine (4:5, 420 px). La carte `profil` est dessous, alignée à gauche sur le titre.
- **À propos :** la section « Ce que j'utilise » est retirée (déjà couverte par la page Compétences). Une section « Ce que j'aime » (animés, football) avait été essayée avec deux icônes dessinées à la main ; **Elhadj l'a refusée** (il veut de vrais icônes et de vrais détails). Elle est **retirée**, et les deux icônes, jamais commitées, sont supprimées. La page se termine sur le parcours et l'appel au contact.

### 2026-11-09 (accroches : accueil, À propos, Contact)
- **Accueil :** nouveau titre en deux niveaux (« Salut, je suis Elhadj Sylla, développeur web à Dakar. » puis « Je développe des outils de gestion pour les commerçants et les écoles. »). La description couvre les deux publics (commerçants : caisse, stock, dettes clients, même sans réseau ; écoles : élèves, paiements, reçus, absences), et pas seulement Sama Boutik. La carte de code `profil` est déplacée de la page À propos vers l'accueil, juste sous le titre, alignée sur la même colonne. **La photo garde sa taille d'origine** (4:5, 420 px), centrée en hauteur face au titre et à la carte. La carte mentionne aussi les études (Licence 2, ESCOA), la base de données (Supabase) et les deux projets.
- **Retiré du site à la demande d'Elhadj :** toute formule « le cahier et le crayon » (il ne l'avait pas dite) et les « je te réponds par e-mail » (le message de confirmation du formulaire reste sobre : « ton message a bien été envoyé »).
- **Descriptions de Sama Boutik élargies** (cartes de l'accueil et page Projets) : hors ligne, Wave et Orange Money, accès par employé, grossistes et distributeurs. Les descriptions de partage (`<meta description>`, `og:`) de l'accueil, de À propos et de Contact sont réécrites dans le même esprit.
- **À propos refait, et volontairement différent de l'accueil :** en-tête détaillé (petit titre, grand titre « Un premier site codé à la main, puis des applications qui servent vraiment. », introduction, trois pastilles), puis **la photo d'origine** (rectangle arrondi, qui reste en vue pendant le défilement) à côté du parcours en 3 étapes (premier site, applications, aujourd'hui), outils utilisés, appel au contact. **Tout vient de faits que tu as confirmés ; rien d'inventé, aucune date, aucun chiffre.** À toi de le nourrir avec ton histoire (voir « À CONFIRMER »).
- **Contact :** en-tête détaillé (petit titre, grand titre d'accroche, introduction, trois pastilles : Disponible, Dakar ou à distance, Stage ou mission).
- Tests (Chrome headless) : 5 pages × 2 thèmes × 360, 390 et 1440 px sans erreur, contrastes AA, 130 contrôles du formulaire toujours OK.

### 2026-11-09 (page Contact et formulaire)
- Branche `feat/contact`. Page Contact refaite : formulaire à gauche (empilé au-dessus sur mobile), coordonnées et réseaux à droite (GitHub, LinkedIn, Instagram, Facebook, chacun avec icône, nom et court libellé). Disponibilité : « Disponible. Ouvert à tout type de stage ou de mission. » Aucun délai de réponse annoncé, aucun numéro de téléphone.
- Formulaire : nom, e-mail, sujet (facultatif), message de 20 à 2000 caractères avec compteur. Validation en français reliée aux champs (`aria-describedby`, `aria-invalid`), focus sur le premier champ en erreur. Anti-spam : champ piège `_gotcha` caché par classe CSS et délai minimum de 3 secondes. États annoncés avec `aria-live`. Sans JavaScript : l'adresse e-mail remplace le formulaire. Pas de `innerHTML`.
- Envoi : `js/config.js` (`FORM_ENDPOINT = ""`) et `js/contact.js`, chargés sur cette page seulement. Identifiant vide = e-mail pré-rempli (`mailto:`). Identifiant renseigné = `fetch` POST JSON vers Formspree. Un identifiant qui n'a pas la forme `https://formspree.io/f/…` est ignoré (repli mailto).
- **CSP modifiée, à la demande d'Elhadj :** `connect-src 'self' https://formspree.io`, identique dans le `<meta>` des 5 pages et dans `vercel.json`. Raison : autoriser l'envoi du formulaire de contact vers Formspree. `form-action 'none'` et le reste de la CSP sont inchangés. `SECURITY_RULES.md` §4 et §6 mis à jour (service tiers autorisé : Formspree, pour ce formulaire seulement).
- Bug trouvé par les tests et corrigé : `display: grid` écrasait l'attribut `hidden` (la confirmation aurait été visible dès le départ). Ajout de `[hidden] { display: none !important; }`.
- Tests faits en navigateur : mise en page, thèmes, tailles, validation, délai, champ piège, repli mailto, faux identifiant (requête réelle vers formspree.io : erreur propre, aucune violation CSP), envoi simulé (en cours, succès, contenu de la requête), clavier seul, sans JavaScript, mouvement réduit. **Pas testé : un vrai envoi** (il faut l'identifiant Formspree).

### 2026-11-09 (page Projets)
- Branche `content/projets`. Maison Fade retiré partout (cartes, tags, lien, balises `og:`/description, et les phrases qui y faisaient allusion : « l'agenda d'un salon »). **Le fichier `images/projet-maison-fade.jpg` n'est pas supprimé** : à ton accord.
- Page Projets : un bloc détaillé par projet (Sama Boutik, puis EcoSurv, alternés), puis Darling Body en « mon premier site ». Cadre navigateur (trois points) et cadre téléphone, en clair et en sombre.
- Accueil : « Projets à la une » (2 cartes compactes avec vraies captures, liens vers les ancres). La grille accepte une 3e carte sans refonte.
- Captures : pages publiques, avec le mouvement réduit demandé au navigateur et le bandeau cookies refusé (navigateur jetable) pour une image propre. Aucune connexion, aucune saisie, aucun compte créé.
- Darling Body : capture retrouvée dans l'historique Git (ancien site), réoptimisée.
- Pied de page de chaque page : GitHub, LinkedIn, Instagram **et Facebook**.
- Zones tactiles : tous les liens et boutons font au moins 44 px (mesuré en navigateur).
- Textes : seuls les faits confirmés sont écrits. Les passages à valider sont dans « À CONFIRMER ». Pas de changement de CSP.
- Le « ES » du logo et de l'onglet Chrome est remplacé par la photo, recadrée en carré sur le visage : `images/avatar-96.webp` et `.jpg` (logo de la capsule), `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` (icônes). Tout est dérivé de `images/photo-pro.jpg` : **si la photo change, ces 5 fichiers sont à régénérer** (recadrage carré 700×700 px depuis le point 50,90 de la photo 810×1080, sans métadonnées). L'ancien `favicon.svg` n'est plus référencé ; je ne l'ai pas supprimé (à ton accord).
- En-tête du site en **capsule flottante** (logo, liens, bouton de thème), dans les deux thèmes ; sur mobile, le menu s'ouvre en panneau arrondi sous la capsule. Bouton « Télécharger mon CV » déplacé dans la colonne Contact du pied de page, à taille normale (plus de grand bouton en bas).
- En-tête de la page Projets enrichi à la demande d'Elhadj : petit titre, grand titre (« Des outils pour tenir une boutique et gérer une école. »), introduction et trois raccourcis vers les projets. Les blocs projets sont inchangés. Texte écrit à partir de faits confirmés, sans chiffre.
- Après réponses d'Elhadj : tag **Supabase** ajouté aux deux projets (base de données) ; rôle de Sama Boutik réduit à la base de données et au back-end ; EcoSurv « tout réalisé moi-même » ; fonctions de Sama Boutik (hors ligne, Wave et Orange Money, accès par employé, alerte de retard, volet grossistes) et d'EcoSurv (chèque, opérateurs, validation par le directeur, clôture de caisse, notifications, quatre accès) ajoutées.
