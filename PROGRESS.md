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

- [ ] Branche `content/projets` (créée en local à partir de `feat/structure-multipage`, car `dev` contient encore l'ancien site) : page Projets détaillée faite, en attente de validation d'Elhadj et des réponses listées dans « À CONFIRMER ».

---

## À faire par Elhadj

- [ ] **Photo professionnelle** : j'ai utilisé la photo envoyée dans la conversation (810×1080, sans EXIF). **À valider.** Si tu en as une plus grande (idéalement 1200 px de large ou plus), remplace `images/photo-pro.jpg` et je régénère les versions, y compris 1200 px.
- [ ] **Anciennes images de projets, non utilisées** : `images/projet-sama-boutik.jpg` (capture périmée, remplacée par `images/projets/`) et `images/projet-maison-fade.jpg` (projet retiré). Je ne les ai pas supprimées : dis-moi si je peux.
- [ ] **Captures de projets** : vérifier d'un coup d'œil que `images/projets/*` ne montrent aucune donnée réelle. Les exemples de démonstration de Sama Boutik (« +15 000 FCFA ») sont fictifs (confirmé).
- [ ] **CV** : le bouton du pied de page télécharge `cv/CV_Elhadj_Sylla.pdf`, qui est **encore l'ancien fichier**. Le mettre à jour (retirer la cybersécurité, vérifier téléphone et adresse, métadonnées du PDF).
- [ ] **Nettoyer l'ancien site** : `pages/` et la capture Darling Body sont déjà retirés. Restent `images/photo-profil.jpg` et `images/projet-portfolio.jpg`, non utilisés par le nouveau site : à supprimer si tu confirmes.
- [ ] 1 projet client à ajouter plus tard.
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
| `og:image` : la photo en portrait (800×1067) te convient pour les aperçus de partage ? | Les aperçus (WhatsApp, LinkedIn) préfèrent du 1200×630, qui sera coupé en paysage. Une vraie image de partage reste à faire. |
| Textes d'introduction des pages : tu valides la reformulation « Pour un stage, une collaboration ou un site à construire, écris-moi » ? | J'ai remplacé « toujours partant pour un nouveau défi » par une phrase plus directe, sans ajouter de fait. |

---

## Journal

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
