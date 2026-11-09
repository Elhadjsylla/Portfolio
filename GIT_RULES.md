# GIT_RULES.md — Portfolio d'Elhadj Sylla M'Bengue

> Lis ce fichier avant tout commit, toute branche ou toute Pull Request.
> Objectif : qu'un agent, même avec un accès complet au dépôt, ne puisse jamais casser la version en ligne sans que **Elhadj** l'ait validé.

---

## 1. Branches

```
main                      ← la version EN LIGNE (GitHub Pages, puis Vercel). Jamais de commit direct.
 └─ dev                   ← intégration, base de tout le travail
     ├─ feat/nom-court     ← une fonctionnalité ou une section
     ├─ fix/nom-court      ← une correction
     ├─ content/nom-court  ← ajout ou changement de contenu (projet, texte, photo)
     └─ chore/nom-court    ← technique sans effet visible (config, règles, nettoyage)
```

- **Toute tâche = une branche créée depuis `dev`**, jamais depuis `main`.
- Une branche = un sujet. Ne pas mélanger un nouveau projet et un changement de design.
- `main` ne reçoit que des fusions depuis `dev` (ou un hotfix validé, voir §6).

Exemples : `feat/hero-animation`, `content/ajout-projet-ecosurv`, `fix/menu-mobile`.

## 2. Interdits absolus pour l'agent

1. **Ne jamais pousser directement sur `main` ou `dev`.** Toujours via une branche puis une Pull Request.
2. **Ne jamais fusionner une Pull Request.** C'est Elhadj qui relit, teste et fusionne.
3. **Jamais de `git push --force`** (ni `--force-with-lease` sur `main`/`dev`), jamais de réécriture de l'historique partagé (`rebase` publié, `reset --hard` poussé, `commit --amend` après push).
4. **Jamais de suppression** de branche distante, de tag ou de dépôt sans demande explicite.
5. **Pas de `git add -A` ni `git add .` à l'aveugle** : ajouter les fichiers un par un (ou par dossier connu) après avoir lu `git status` et `git diff --staged`.
6. **Jamais de secret, de fichier `.env`, de zip ou d'archive** dans un commit (voir `SECURITY_RULES.md`).
7. Ne pas modifier `SECURITY_RULES.md`, `GIT_RULES.md`, `AGENTS.md` sans demande explicite. `PROGRESS.md` se met à jour à chaque étape (c'est son rôle).
8. Ne pas toucher à des fichiers hors du périmètre de la tâche.

## 3. Commits

Format : `type: résumé court à l'impératif` (français ou anglais, rester cohérent : **français** ici).

| Type | Usage |
|------|-------|
| `feat:` | nouvelle section, nouvelle fonctionnalité |
| `fix:` | correction de bug |
| `content:` | texte, projet, image, lien |
| `style:` | CSS, mise en forme sans changement de logique |
| `docs:` | règles, README, PROGRESS |
| `chore:` | config, nettoyage, assets |

- **Commits atomiques** : un commit = un changement compréhensible seul.
- Message à l'impératif, moins de 72 caractères pour la première ligne : `feat: ajouter la section projets`.
- Si un agent (Claude Code, Gemini…) a produit le commit, la mention de co-auteur est acceptée. Elhadj décide de la garder ou non.
- Ne jamais écrire dans un message de commit un secret, un mot de passe ou une donnée personnelle.

## 4. Pull Requests

Chaque PR (`feat/...` → `dev`, puis `dev` → `main`) contient :

1. **Quoi** : ce qui change, en 2 à 4 lignes.
2. **Pourquoi** : le besoin.
3. **Comment tester** : « ouvrir `index.html`, vérifier X sur ordinateur et mobile ».
4. **Captures d'écran** avant/après si le rendu change.
5. **Résultat de la checklist de `SECURITY_RULES.md` §9.**
6. **Ce qui reste à faire** ou les points à valider par Elhadj.

Une PR reste petite : si elle touche plus de ~10 fichiers ou plusieurs sujets, la découper.

## 5. Cycle de travail de l'agent

1. Lire dans l'ordre : `AGENTS.md`, `SECURITY_RULES.md`, `GIT_RULES.md`, `PROGRESS.md`.
2. `git status` et `git branch` : vérifier où on est et que l'arbre est propre.
3. Créer la branche depuis `dev` à jour.
4. Travailler par petites étapes, committer régulièrement.
5. Mettre à jour `PROGRESS.md` (fait / en cours / à faire).
6. Ouvrir la PR vers `dev`, **puis s'arrêter** : attendre la relecture d'Elhadj.

L'agent s'arrête et demande dès qu'il est dans un de ces cas : suppression de fichier, nouveau projet à publier, nouveau service externe, changement de CSP, modification de domaine ou de déploiement, doute sur un droit de publication.

## 6. Mise en ligne

- **GitHub Pages** (pour l'instant) : publie la branche `main`. Tout ce qui arrive sur `main` est public en quelques minutes.
- **Vercel** (ensuite) : `main` = production, chaque PR = un aperçu privé (preview) à tester avant fusion. Le nom de domaine se rattache à Vercel, jamais en dur dans le code sans accord.
- **Hotfix** (bug grave en ligne) : branche `fix/...` depuis `main`, PR vers `main` relue par Elhadj, puis recopier le correctif dans `dev`.
- Avant chaque fusion vers `main` : checklist sécurité §9 de `SECURITY_RULES.md` + test visuel ordinateur et mobile.

## 7. Réglages GitHub à activer (par Elhadj)

Dépôt → *Settings* → *Branches* → règle de protection sur `main` et `dev` :

- [x] Require a pull request before merging
- [x] Do not allow force pushes
- [x] Do not allow deletions
- [x] Include administrators (pour que la règle s'applique aussi à toi, et protège contre un agent qui utiliserait ton accès)

Et dans *Settings* → *Code security* : activer *Secret scanning* et *Push protection*.

> Une règle écrite seule n'empêche rien. Un agent qui a accès à ton compte peut pousser sur `main` si rien ne l'en empêche techniquement. La protection de branche est ce qui rend ces règles réelles.
