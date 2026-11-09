# AGENTS.md — Instructions pour tout agent (Claude Code, Gemini/Antigravity, autre)

Projet : **portfolio personnel d'Elhadj Sylla M'Bengue**, développeur web basé à Dakar (Sénégal), étudiant en Licence 2 informatique à l'ESCOA.
Public visé : recruteurs, maîtres de stage, clients potentiels (commerçants, entrepreneurs), école.

## Qui fait quoi

- **Elhadj** : propriétaire du projet. Il supervise, valide, fusionne, publie.
- **Toi (l'agent)** : développeur senior. Tu proposes, tu construis, tu expliques brièvement tes choix, tu t'arrêtes aux points de validation.

## À lire avant de commencer, dans cet ordre

1. `AGENTS.md` (ce fichier)
2. `SECURITY_RULES.md`
3. `GIT_RULES.md`
4. `PROGRESS.md` (où on en est, ce qu'il reste à faire)

Si un fichier manque ou si deux règles se contredisent, **demande**.

## Stack et contraintes techniques

- **HTML5, CSS3, JavaScript vanilla.** Pas de framework (React, Vue…), pas de Tailwind, pas d'étape de build, pas de dépendance d'exécution.
- Site statique, un seul `index.html`, fichiers séparés : `css/style.css`, `js/main.js`.
- Polices, icônes et images **en local** dans le dépôt (`assets/`, `images/`). Aucun CDN, aucune requête externe (la CSP les bloque).
- Doit fonctionner en ouvrant simplement `index.html`, et sur GitHub Pages et Vercel sans configuration spéciale.
- Accessibilité : HTML sémantique, contraste AA, navigation clavier, focus visible, `prefers-reduced-motion` respecté, textes alternatifs.
- Responsive : de 360 px à grand écran, sans défilement horizontal de la page.
- Performance : images optimisées (WebP/JPEG compressé), `loading="lazy"` hors du premier écran, pas de JS superflu.

## Direction artistique

- Thème **sombre bleu nuit** (fond très foncé, accent bleu électrique), inspiré de la référence donnée par Elhadj : hero avec photo et halo bleu, cartes arrondies, boutons en pilule, icônes de technologies officielles.
- Polices : Sora (titres), DM Sans (texte), JetBrains Mono (code). Déjà installées en local.
- **Éléments à garder de l'ancien portfolio** : la carte de code `profil` (vrai texte sélectionnable, pas une image).
- Animations soignées mais sobres : entrée du hero, apparition au défilement, halo qui suit la souris sur les cartes, effets au survol. Toujours désactivables via `prefers-reduced-motion`.
- La touche personnelle prime sur l'effet « template » : pas de faux témoignages, pas de faux chiffres, pas de barres de compétences en pourcentage inventé, pas de services fictifs.

## Contenu

- Langue : **français**, à la première personne (« je construis… »), ton direct et simple.
- **Positionnement : développeur web.** Ne pas mettre en avant la cybersécurité pour l'instant (Elhadj la reprendra après sa licence, avec ses certifications). Ne pas mentionner de certification qu'il n'a pas.
- N'invente jamais un fait : projet, lien, chiffre, expérience, diplôme. Si l'information manque, mets un marqueur `À CONFIRMER` dans `PROGRESS.md` et demande.
- Projets publiables : voir `SECURITY_RULES.md` §3. Les projets sous contrat ne sont publiés qu'avec accord.

## Manière de travailler

1. Annonce en une phrase ce que tu vas faire, puis fais-le.
2. Petites étapes, vérifiables. Après chaque étape : teste (ouvre la page, regarde la console, vérifie mobile).
3. Mets à jour `PROGRESS.md` à la fin de chaque étape.
4. Ne change pas ce qu'on ne t'a pas demandé de changer.
5. Quand tu termines : résume en 2–3 phrases, indique ce que tu as testé, et propose **une** suite logique.

## Demande l'accord d'Elhadj avant de :

- publier un nouveau projet, ou changer un lien ;
- ajouter un fichier externe, une bibliothèque, un service tiers, un outil de suivi ;
- toucher à la CSP, au déploiement, au domaine, à `vercel.json` ;
- supprimer un fichier ou une branche ;
- utiliser une photo, un logo ou un texte dont l'origine n'est pas claire.

## Définition de « terminé »

- [ ] Fonctionne sur ordinateur et mobile, sans erreur dans la console (CSP incluse)
- [ ] Aucun défilement horizontal, aucun texte coupé
- [ ] Clavier : tout est atteignable, focus visible
- [ ] Mouvement réduit : le site reste complet sans animation
- [ ] Checklist `SECURITY_RULES.md` §9 passée
- [ ] `PROGRESS.md` à jour
