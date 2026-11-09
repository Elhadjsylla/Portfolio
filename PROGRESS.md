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
| Projets | Écrits à la main dans `index.html` (pas de rendu par JS). Modèle de carte en commentaire. |
| Anciens projets | Darling Body retiré. |
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

- [ ] Branche `feat/structure-multipage` : PR ouverte, en attente de validation d'Elhadj.

---

## À faire par Elhadj

- [ ] **Photo professionnelle** : j'ai utilisé la photo envoyée dans la conversation (810×1080, sans EXIF). **À valider.** Si tu en as une plus grande (idéalement 1200 px de large ou plus), remplace `images/photo-pro.jpg` et je régénère les versions, y compris 1200 px.
- [ ] **Captures de projets** : `images/projet-sama-boutik.jpg`, `images/projet-maison-fade.jpg` (16:10, ~800×500). Vérifier qu'elles ne montrent **aucune vraie donnée** de client.
- [ ] **CV** : le bouton du pied de page télécharge `cv/CV_Elhadj_Sylla.pdf`, qui est **encore l'ancien fichier**. Le mettre à jour (retirer la cybersécurité, vérifier téléphone et adresse, métadonnées du PDF).
- [ ] **Nettoyer l'ancien site** : `pages/` et la capture Darling Body sont déjà retirés. Restent `images/photo-profil.jpg` et `images/projet-portfolio.jpg`, non utilisés par le nouveau site : à supprimer si tu confirmes.
- [ ] **Liste des nouveaux projets** à ajouter, avec pour chacun : nom, description en 1–2 phrases, technologies, lien en ligne, capture.
- [ ] **EcoSurv** : obtenir l'accord écrit de Babacar SY avant publication (`SECURITY_RULES.md` §3).
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

## À CONFIRMER (ne pas inventer)

| Question | Pourquoi |
|----------|----------|
| Maison Fade : « Démo en ligne » ou « En cours » ? | L'ancien site disait « En cours ». C'était aussi un projet scolaire noté. |
| Le lien Facebook (`collet00patrick`) est-il bien le tien ? | Repris tel quel de l'ancien site. |
| « Licence 2 informatique à l'ESCOA » toujours exact ? | Repris de l'ancien site. |
| Quels projets remplacent « l'ancien » : lesquels exactement ? | Seuls Sama Boutik et Maison Fade ont un lien connu. |
| Mentionner Sunu Classe, OGF, ou les sites d'immersion (Rassoul Tijara, MD__shoot, The Store…) ? | Aucun lien en ligne connu pour le moment. |
| Le lien Facebook doit-il apparaître dans le pied de page ? | Je l'ai laissé seulement sur la page Contact, tant que le lien n'est pas confirmé. |
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
