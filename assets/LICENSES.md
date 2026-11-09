# Ressources tierces (copiées en local)

Tout ce qui est ici est **auto-hébergé** : le site ne charge rien depuis un CDN (voir `SECURITY_RULES.md` §4).
Les textes de licence complets sont dans `assets/licenses/`.

| Ressource | Source | Licence | Où |
|-----------|--------|---------|----|
| Icônes de technologies (HTML5, CSS3, JavaScript, React, Tailwind CSS, Vite, PHP, Python, MySQL, Supabase, Git, GitHub, Linux, LinkedIn) | [Devicon](https://devicon.dev) | MIT | `assets/icons/tech/`, `assets/icons/social/linkedin.svg` |
| Icônes de réseaux (GitHub, Instagram, Facebook, WhatsApp) | [Simple Icons](https://simpleicons.org) | CC0 | `assets/icons/social/` |
| Police Sora | [Fontsource](https://fontsource.org) / Sora Project Authors | SIL OFL 1.1 | `assets/fonts/` |
| Police DM Sans | Fontsource / Colophon Foundry | SIL OFL 1.1 | `assets/fonts/` |
| Police JetBrains Mono | Fontsource / JetBrains | SIL OFL 1.1 | `assets/fonts/` |

Note : les icônes `assets/icons/tech/github.svg` et celle de `mysql.svg` ont été recolorées, `linux.svg` (Devicon `linux-plain`) a reçu un remplissage clair en clair pour rester lisibles sur le fond sombre.
Les marques (HTML5, CSS3, React, etc.) appartiennent à leurs propriétaires respectifs et sont utilisées ici uniquement pour désigner des technologies.

## Mettre à jour une ressource

1. Télécharger depuis la source officielle (npm : `devicon`, `simple-icons`, `@fontsource/...`).
2. Relire le fichier SVG (pas de `<script>`, pas de lien externe) avant de le copier.
3. Garder le fichier de licence à jour dans `assets/licenses/`.
