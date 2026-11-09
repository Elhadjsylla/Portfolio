/* Formulaire de contact (page contact.html uniquement).
   Sans innerHTML : tous les messages passent par textContent / createElement (voir SECURITY_RULES.md §5).
   Envoi : fetch vers Formspree si FORM_ENDPOINT (js/config.js) est renseigné, sinon e-mail pré-rempli (mailto:). */
(() => {
  'use strict';

  const form = document.getElementById('form-contact');
  if (!form) return;

  const MAIL = 'elhadjsylla667@gmail.com';
  const MIN_DELAY_MS = 3000;      // délai minimum avant envoi (anti-robots)
  const MIN_MSG = 20;
  const MAX_MSG = 2000;
  const TIMEOUT_MS = 15000;
  const ENDPOINT_RE = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;

  const $ = (id) => document.getElementById(id);
  const el = {
    nom: $('f-nom'), email: $('f-email'), sujet: $('f-sujet'), message: $('f-message'),
    piege: form.querySelector('[name="_gotcha"]'),
    compteur: $('compteur'), statut: $('form-statut'), bouton: $('btn-envoyer'),
    mode: $('form-mode'), ok: $('form-ok'), okTexte: $('ok-texte'), autre: $('btn-autre'),
  };
  const errors = { nom: $('e-nom'), email: $('e-email'), message: $('e-message') };

  // Adresse d'envoi : acceptée seulement si elle a la forme attendue (sinon repli mailto)
  let endpoint = (typeof FORM_ENDPOINT === 'string') ? FORM_ENDPOINT.trim() : '';
  if (endpoint && !ENDPOINT_RE.test(endpoint)) {
    console.warn('[contact] FORM_ENDPOINT invalide, repli sur mailto.');
    endpoint = '';
  }
  const labelEnvoyer = endpoint ? 'Envoyer le message' : 'Ouvrir dans ma messagerie';
  let startedAt = Date.now();

  /* ---------- Affichage ---------- */
  form.hidden = false;                       // sans JavaScript, le formulaire reste caché (voir <noscript>)
  el.bouton.textContent = labelEnvoyer;
  if (!endpoint && el.mode) {
    el.mode.textContent = "Pour l'instant, ce bouton ouvre ton application de messagerie avec le message prérempli.";
    el.mode.hidden = false;
  }

  const mailLink = () => {
    const a = document.createElement('a');
    a.href = 'mailto:' + MAIL;
    a.textContent = MAIL;
    return a;
  };
  const setStatus = (kind, ...parts) => {    // kind : '', 'info', 'error'
    el.statut.className = 'form__statut' + (kind ? ' is-' + kind : '');
    el.statut.replaceChildren(...parts);
  };

  /* ---------- Compteur de caractères ---------- */
  const updateCount = () => { el.compteur.textContent = el.message.value.length + ' / ' + MAX_MSG; };
  el.message.addEventListener('input', updateCount);
  updateCount();

  /* ---------- Validation ---------- */
  const rules = {
    nom: () => (el.nom.value.trim() ? '' : 'Indique ton nom.'),
    email: () => {
      const v = el.email.value.trim();
      if (!v) return 'Indique ton adresse e-mail.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Cette adresse e-mail ne semble pas valide. Exemple : prenom@exemple.com';
      return '';
    },
    message: () => {
      const n = el.message.value.trim().length;
      if (n === 0) return 'Écris ton message.';
      if (n < MIN_MSG) return 'Le message est trop court : ' + n + ' caractère' + (n > 1 ? 's' : '') + ' sur ' + MIN_MSG + ' minimum.';
      if (n > MAX_MSG) return 'Le message est trop long : ' + n + ' caractères sur ' + MAX_MSG + ' maximum.';
      return '';
    },
  };

  const showError = (key, msg) => {
    const field = el[key];
    const out = errors[key];
    if (msg) {
      field.setAttribute('aria-invalid', 'true');
      out.textContent = msg;
      out.hidden = false;
    } else {
      field.removeAttribute('aria-invalid');
      out.textContent = '';
      out.hidden = true;
    }
  };
  const check = (key) => { const msg = rules[key](); showError(key, msg); return msg; };

  Object.keys(rules).forEach((key) => {
    el[key].addEventListener('blur', () => { if (el[key].value !== '') check(key); });
    el[key].addEventListener('input', () => { if (el[key].getAttribute('aria-invalid') === 'true') check(key); });
  });

  /* ---------- États : succès, erreur, envoi ---------- */
  const setBusy = (busy) => {
    el.bouton.disabled = busy;
    if (busy) el.bouton.setAttribute('aria-busy', 'true'); else el.bouton.removeAttribute('aria-busy');
    el.bouton.textContent = busy ? 'Envoi en cours…' : labelEnvoyer;
  };

  const showSuccess = (name) => {
    form.hidden = true;
    el.okTexte.textContent = 'Merci ' + name + ', ton message est bien parti. Je te réponds par e-mail, à l\'adresse que tu as indiquée.';
    el.ok.hidden = false;
    el.ok.focus();
  };

  el.autre.addEventListener('click', () => {
    form.reset();
    updateCount();
    Object.keys(rules).forEach((key) => showError(key, ''));
    setStatus('');
    el.ok.hidden = true;
    form.hidden = false;
    startedAt = Date.now();
    el.nom.focus();
  });

  const openMailto = (p) => {
    const body = p.message + '\n\n--\nNom : ' + p.name + '\nE-mail : ' + p.email;
    const url = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Portfolio : ' + p.subject) + '&body=' + encodeURIComponent(body);
    window.open(url, '_self');
    setStatus('info', "Ton application de messagerie devrait s'ouvrir avec le message prérempli. Si rien ne s'ouvre, écris-moi directement à ", mailLink(), '.');
  };

  /* ---------- Envoi ---------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (el.bouton.disabled) return;

    // 1. Validation, avec focus sur le premier champ en erreur
    const bad = Object.keys(rules).filter((key) => check(key));
    if (bad.length) {
      setStatus('error', bad.length === 1 ? 'Un champ est à corriger.' : bad.length + ' champs sont à corriger.');
      el[bad[0]].focus();
      return;
    }

    const name = el.nom.value.trim();
    const payload = {
      name,
      email: el.email.value.trim(),
      subject: el.sujet.value || 'Non précisé',
      message: el.message.value.trim(),
      _subject: 'Portfolio : ' + (el.sujet.value || 'message'),
      _gotcha: el.piege ? el.piege.value : '',
    };

    // 2. Anti-spam : champ piège rempli = robot. On fait semblant, sans rien envoyer.
    if (payload._gotcha) { showSuccess(name); return; }

    // 3. Anti-spam : délai minimum
    const wait = MIN_DELAY_MS - (Date.now() - startedAt);
    if (wait > 0) {
      setStatus('info', 'Encore ' + Math.ceil(wait / 1000) + ' seconde' + (wait > 1000 ? 's' : '') + ' avant de pouvoir envoyer. Cette courte pause protège le formulaire des robots.');
      return;
    }

    // 4. Pas d'identifiant Formspree : e-mail pré-rempli
    if (!endpoint) { openMailto(payload); return; }

    // 5. Envoi réel
    setBusy(true);
    setStatus('info', 'Envoi en cours…');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('');
      showSuccess(name);
    } catch (err) {
      setStatus('error', "L'envoi n'a pas fonctionné. Réessaie dans un moment, ou écris-moi directement à ", mailLink(), '.');
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  });
})();
