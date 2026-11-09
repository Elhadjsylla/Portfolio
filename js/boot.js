/* Chargé en tout premier, avant l'affichage de la page.
   1. Thème : choix mémorisé (clé « theme » du localStorage, la seule du site),
      sinon préférence du système. Posé sur <html> pour éviter tout flash.
   2. Animations : activées seulement si la personne n'a pas demandé « moins de mouvement ».
      Sans cette classe, tout est visible. */
(function () {
  var root = document.documentElement;

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('js');
  }

  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) { /* stockage bloqué : on suit le système */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  root.setAttribute('data-theme', theme);

  // Couleur de la barre du navigateur sur mobile, alignée sur le thème affiché
  var color = theme === 'light' ? '#F3F7FE' : '#06142A';
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  for (var i = 0; i < metas.length; i++) metas[i].setAttribute('content', color);
})();
