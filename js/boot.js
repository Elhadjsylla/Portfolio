/* Chargé en tout premier : les animations ne s'activent que si la personne
   n'a pas demandé « moins de mouvement ». Sans cette classe, tout est visible. */
(function () {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
  }
})();
