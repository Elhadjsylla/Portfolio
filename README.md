# Portfolio — Elhadj Sylla M'Bengue

Projet réalisé dans le cadre du cours PHP & MySQL (professeur : M. Diouf).
**Partie 1 : HTML & CSS uniquement.**

## Structure des fichiers

```
portfolio/
  index.html            Page d'accueil
  css/
    style.css           Feuille de style unique du site
  images/
    favicon.svg         Icône du site
    photo-profil.svg    Portrait (à remplacer par une vraie photo)
    projet-*.svg        Vignettes des projets (à remplacer par
                        les vraies captures d'écran des sites)
  pages/
    apropos.html        Présentation et parcours
    competences.html    Compétences techniques
    projets.html        Projets réalisés
    contact.html        Formulaires de contact et de demande de projet
  cv/
    CV_Elhadj_Sylla.pdf  CV téléchargeable depuis le pied de page
```

## Choix techniques

- **Aucun JavaScript.** Le menu mobile, la bascule mode sombre / clair, le
  carrousel et le filtre de projets par technologie sont réalisés uniquement
  en CSS (cases à cocher masquées, boutons radio, `scroll-snap`, `:has()`).
- **Aucun CSS en ligne.** Toute la mise en forme passe par des classes
  définies dans `css/style.css`.
- **Responsive** avec Flexbox et Grid, unités relatives (`rem`, `%`, `vw`)
  et trois points de rupture : 980 px, 720 px et 480 px.
- **Accessibilité** : attributs `alt` sur les images, `label` associé à
  chaque champ de formulaire, lien d'évitement, contours de focus visibles
  et respect de `prefers-reduced-motion`.

## Palette de couleurs

| Rôle | Thème sombre | Thème clair |
|------|--------------|-------------|
| Principale (ambre) | `#f5a524` | `#8f5208` |
| Secondaire (cuivre) | `#e8683f` | `#c2521f` |
| Accent (prune) | `#c04a6e` | `#9c3355` |
| Fond | `#12100e` | `#faf7f2` |
| Texte | `#f4efe9` | `#1a1512` |

Le choix de l'ambre et du cuivre est volontaire : ce sont des teintes chaudes,
rares dans les portfolios de développeurs (majoritairement bleus ou verts).
Le fond n'est pas un noir neutre mais un charbon légèrement brun, pour rester
cohérent avec la chaleur des accents. En thème clair, l'ambre vif devient un
bronze plus foncé afin de conserver un contraste d'au moins 5:1 avec le fond.

## Typographie

- Titres : **Space Grotesk**
- Texte courant : **Inter**

## À faire ensuite (partie PHP)

Les formulaires (`contact.html`, `projets.html`) pointent déjà vers
`traitement-contact.php` et `traitement-projet.php`. Ces scripts seront
écrits dans la partie suivante du cours, ainsi que la recherche de projets
par mots-clés côté serveur.
