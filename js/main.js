/* Portfolio d'Elhadj Sylla M'Bengue
   JavaScript sans dépendance. Pas de innerHTML, pas d'eval (voir SECURITY_RULES.md). */
(() => {
  'use strict';

  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const animated = root.classList.contains('js');           // faux si « mouvement réduit »
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Une erreur dans un bloc ne doit jamais casser les autres.
  const safe = (name, fn) => {
    try { fn(); } catch (err) { console.error('[portfolio] ' + name, err); }
  };

  /* ---------- Images : image de remplacement si le fichier manque ---------- */
  safe('images', () => {
    $$('img[data-fallback]').forEach((img) => {
      const swap = () => {
        if (img.dataset.failed) return;
        img.dataset.failed = '1';
        img.src = img.dataset.fallback;
      };
      img.addEventListener('error', swap);
      if (img.complete && img.naturalWidth === 0) swap();
    });
  });

  /* ---------- Année et heure de Dakar ---------- */
  safe('date', () => {
    const year = $('#annee');
    if (year) year.textContent = new Date().getFullYear();

    const clock = $('#heure-dakar');
    if (clock) {
      const fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dakar' });
      const tick = () => { clock.textContent = fmt.format(new Date()); };
      tick();
      setInterval(tick, 20000);
    }
  });

  /* ---------- Menu mobile ---------- */
  safe('menu', () => {
    const burger = $('.burger');
    if (!burger) return;
    const close = () => {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu');
    };
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    $$('.nav a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 920) close(); });
  });

  /* ---------- En-tête, barre de progression, section active ---------- */
  safe('scroll', () => {
    const header = $('.header');
    const bar = $('.progress');
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (header) header.classList.toggle('is-scrolled', y > 12);
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.setProperty('--p', max > 0 ? Math.min(y / max, 1).toFixed(4) : '0');
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    const links = new Map($$('[data-nav]').map((a) => [a.dataset.nav, a]));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.removeAttribute('aria-current'));
          const active = links.get(entry.target.id);
          if (active) active.setAttribute('aria-current', 'true');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach((s) => io.observe(s));
    }
  });

  /* ---------- Apparition au défilement ---------- */
  safe('reveal', () => {
    if (!animated || !('IntersectionObserver' in window)) return;

    // Décalage léger entre éléments voisins
    const groups = new Map();
    $$('[data-reveal]').forEach((el) => {
      const list = groups.get(el.parentElement) || [];
      list.push(el);
      groups.set(el.parentElement, list);
    });
    groups.forEach((list) => list.forEach((el, i) => el.style.setProperty('--d', (i * 0.09).toFixed(2) + 's')));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-in');
        io.unobserve(el);
        // Une fois apparu, l'élément retrouve ses styles normaux (survol des cartes, etc.)
        el.addEventListener('transitionend', function done(e) {
          if (e.target !== el || e.propertyName !== 'transform') return;
          el.removeAttribute('data-reveal');
          el.removeEventListener('transitionend', done);
        });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('[data-reveal]').forEach((el) => io.observe(el));
  });

  /* ---------- Halo qui suit la souris (cartes et contact) ---------- */
  safe('spotlight', () => {
    if (!finePointer) return;
    $$('[data-spot]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left).toFixed(0) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top).toFixed(0) + 'px');
      });
    });
  });

  /* ---------- Boutons « magnétiques » ---------- */
  safe('magnetic', () => {
    if (!animated || !finePointer) return;
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  });

  /* ---------- Copier l'adresse e-mail ---------- */
  safe('copy', () => {
    const btn = $('#copier-mail');
    const link = $('#adresse-mail');
    const status = $('#copie-statut');
    if (!btn || !link) return;
    const original = btn.textContent;
    let timer;

    btn.addEventListener('click', async () => {
      const mail = link.textContent.trim();
      let ok = false;
      try {
        await navigator.clipboard.writeText(mail);
        ok = true;
      } catch (e) {
        const t = document.createElement('textarea');
        t.value = mail; t.setAttribute('readonly', '');
        t.style.position = 'fixed'; t.style.opacity = '0';
        document.body.appendChild(t); t.select();
        try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
        t.remove();
      }
      btn.textContent = ok ? 'Adresse copiée' : 'Copie impossible, utilise le lien';
      if (status) status.textContent = ok ? 'Adresse e-mail copiée dans le presse-papiers.' : '';
      clearTimeout(timer);
      timer = setTimeout(() => { btn.textContent = original; }, 2200);
    });
  });
})();
