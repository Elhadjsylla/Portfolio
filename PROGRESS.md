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
- [x] Page unique : accueil, projets, compétences, à propos (avec carte `profil`), contact, pied de page
- [x] Icônes officielles en local : HTML5, CSS3, JavaScript, React, Tailwind CSS, Vite, PHP, Python, MySQL, Supabase, Git, GitHub, LinkedIn
- [x] Animations : entrée du hero en cascade, halo tournant autour de la photo, apparition au défilement, halo qui suit la souris sur les cartes, boutons magnétiques, carte de code qui s'écrit ligne par ligne, barre de progression, section active dans le menu, heure de Dakar en direct
- [x] Menu mobile accessible (bouton, Échap, fermeture au clic)
- [x] Mouvement réduit respecté (sans animation, le site reste complet)
- [x] Images de remplacement si une photo ou une capture manque
- [x] Script de développement local : `npm run dev` (serveur statique sur http://localhost:5500, aucune dépendance installée)
- [x] Testé : ordinateur (1440 px) et mobile (360, 390, 430 px), aucun défilement horizontal, aucune erreur de console, aucune violation de CSP

## En cours

- [ ] Rien d'ouvert côté agent. En attente des éléments d'Elhadj ci-dessous.

---

## À faire par Elhadj

- [ ] **Photo professionnelle** : `images/photo-pro.jpg`, portrait 4:5 (au moins 640×800), **métadonnées EXIF retirées** (`exiftool -all= images/photo-pro.jpg`).
- [ ] **Captures de projets** : `images/projet-sama-boutik.jpg`, `images/projet-maison-fade.jpg` (16:10, ~800×500). Vérifier qu'elles ne montrent **aucune vraie donnée** de client.
- [ ] **CV** : mettre à jour `cv/CV_Elhadj_Sylla.pdf` (retirer la cybersécurité, vérifier téléphone et adresse).
- [ ] **Nettoyer l'ancien site** : supprimer le dossier `pages/`, les anciens fichiers et `images/projet-darling-body.jpg` s'il n'est plus utilisé.
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

---

## Journal

### 2026-11-09
- Refonte lancée : passage de l'ancien portfolio (HTML/CSS, thème orange) à une base plus soignée, en HTML/CSS/JS.
- Rédaction des règles et des instructions d'agent avant tout code.
- Construction de la base (voir « Fait »). Correction en cours de route : le halo tournant de la photo élargissait la page sur mobile (corrigé avec `overflow-x: clip` sur le hero) ; le panneau du menu mobile est maintenant opaque.
- Une première version « cahier d'écolier » avait été proposée plus tôt dans la session. Elle n'a pas été retenue, la référence bleu nuit d'Elhadj prime.

### 2026-11-09 (suite)
- Ancien site remplacé par le nouveau (PR #1, fusionnée dans `main`). `dev` n'a pas été alignée sur `main` : à décider par Elhadj.
- Ajout de `package.json` (script `dev` : `npx --yes serve@14 . -l 5500`, sans dependencies). Branche `chore/script-dev` créée depuis `main`, faute de `dev` à jour.
- Testé : `npm run dev` démarre, `/`, CSS, JS et favicon répondent 200. Console du navigateur non vérifiée par l'agent.
