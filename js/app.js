const app = document.getElementById('app');

// Indice 0 = domenica, come Date#getDay(), orari in minuti dalla mezzanotte.
const ORARI = [
  { giorno: 'Domenica', fasce: [[8 * 60 + 30, 13 * 60]] },
  { giorno: 'Lunedì', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
  { giorno: 'Martedì', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
  { giorno: 'Mercoledì', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
  { giorno: 'Giovedì', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
  { giorno: 'Venerdì', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
  { giorno: 'Sabato', fasce: [[8 * 60, 13 * 60], [16 * 60 + 30, 20 * 60]] },
];

function formatOra(minuti) {
  const h = Math.floor(minuti / 60);
  const m = minuti % 60;
  return m === 0 ? `${h}` : `${h}:${String(m).padStart(2, '0')}`;
}

function statoApertura() {
  const now = new Date();
  const giornoOggi = now.getDay();
  const minutiOra = now.getHours() * 60 + now.getMinutes();
  const fasceOggi = ORARI[giornoOggi].fasce;

  for (const [inizio, fine] of fasceOggi) {
    if (minutiOra >= inizio && minutiOra < fine) {
      return { aperto: true, testo: `Aperto ora &middot; chiude alle ${formatOra(fine)}` };
    }
  }

  const prossima = fasceOggi.find(([inizio]) => minutiOra < inizio);
  if (prossima) {
    return { aperto: false, testo: `Chiuso ora &middot; apre alle ${formatOra(prossima[0])}` };
  }
  return { aperto: false, testo: 'Chiuso ora' };
}

const SERVIZI = [
  {
    titolo: 'Edicola',
    testo: 'Quotidiani, riviste e periodici, ogni giorno.',
    icona: '<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"/><path d="M20 20a3 3 0 0 0 0-6h-1v6Z"/><path d="M8 8h9M8 12h9M8 16h5"/>',
  },
  {
    titolo: 'Tabacchi',
    testo: 'Sigarette, tabacco, sigarette elettroniche e accessori.',
    icona: '<rect x="3" y="10" width="14" height="6" rx="1.5"/><path d="M17 12h2a1.5 1.5 0 0 1 0 3h-2"/><path d="M7 10v6"/>',
  },
  {
    titolo: 'Valori bollati',
    testo: 'Marche da bollo, francobolli e valori bollati.',
    icona: '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="8" cy="8" r="1.4"/><circle cx="16" cy="8" r="1.4"/><circle cx="8" cy="16" r="1.4"/><circle cx="16" cy="16" r="1.4"/><circle cx="12" cy="12" r="1.4"/>',
  },
  {
    titolo: 'Giochi',
    testo: 'Gratta e vinci, Lotto e ricevitoria.',
    icona: '<path d="M12 3 4 9v6l8 6 8-6V9Z"/><path d="M12 3v18M4 9l8 6 8-6"/>',
  },
  {
    titolo: 'Ricariche e pagamenti',
    testo: 'Ricariche telefoniche e pagamento bollettini.',
    icona: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/>',
  },
  {
    titolo: 'Cartoleria e regali',
    testo: 'Cartoline, articoli da regalo e cartoleria.',
    icona: '<path d="M4 20V6a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 4v6h6"/>',
  },
];

function serviziGridHtml() {
  return SERVIZI.map(s => `
    <article class="servizio-card">
      <span class="servizio-icona">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${s.icona}</svg>
      </span>
      <h3>${s.titolo}</h3>
      <p>${s.testo}</p>
    </article>
  `).join('');
}

function orariTableHtml() {
  const oggi = new Date().getDay();
  return ORARI.map((r, i) => `
    <tr class="${i === oggi ? 'oggi' : ''}">
      <td>${r.giorno}</td>
      <td>${r.fasce.map(([a, b]) => `${formatOra(a)}&ndash;${formatOra(b)}`).join(', ')}</td>
    </tr>
  `).join('');
}

function orariGrandeHtml() {
  const oggi = new Date().getDay();
  const intestazioni = ORARI.map((r, i) => `<th class="${i === oggi ? 'oggi' : ''}">${r.giorno}</th>`).join('');
  const celle = ORARI.map((r, i) => `
    <td class="${i === oggi ? 'oggi' : ''}">${r.fasce.map(([a, b]) => `${formatOra(a)}&ndash;${formatOra(b)}`).join('<br>')}</td>
  `).join('');
  return `
    <table class="orari-table">
      <thead><tr>${intestazioni}</tr></thead>
      <tbody><tr>${celle}</tr></tbody>
    </table>
  `;
}

const MAPS_QUERY = encodeURIComponent('Via Marmorale, 73, 02013 Antrodoco RI');

const formatPrezzo = (prezzo) =>
  prezzo == null ? 'Prezzo su richiesta' : prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

const PRODOTTI_FLAT = SEZIONI_GALLERIA.flatMap(s => s.prodotti);

function prodottoCardHtml(prodotto) {
  const [primaImmagine] = prodotto.immagini;
  const index = PRODOTTI_FLAT.indexOf(prodotto);

  return `
    <article class="prodotto-card" data-prodotto-index="${index}">
      <div class="prodotto-immagine">
        <img src="${primaImmagine}" alt="${prodotto.titolo}">
      </div>
      <div class="prodotto-caption">
        <h4>${prodotto.titolo}</h4>
        <p class="prodotto-prezzo${prodotto.prezzo == null ? ' su-richiesta' : ''}">${formatPrezzo(prodotto.prezzo)}</p>
      </div>
    </article>
  `;
}

function categoriaCardHtml(sezione) {
  const copertina = sezione.prodotti[0]?.immagini[0];
  const n = sezione.prodotti.length;
  return `
    <a href="#/galleria/${sezione.id}" class="categoria-card">
      <div class="categoria-immagine">
        ${copertina ? `<img src="${copertina}" alt="${sezione.titolo}">` : ''}
      </div>
      <div class="categoria-caption">
        <h4>${sezione.titolo}</h4>
        <p>${n} prodott${n === 1 ? 'o' : 'i'}</p>
      </div>
    </a>
  `;
}

function galleriaIndiceHtml() {
  return `
    <section class="page page-gallery">
      <div class="section-inner">
        <p class="eyebrow">Uno sguardo dentro</p>
        <h2>Prodotti</h2>
        <p class="section-lead">Tutto ciò che cerchi, un mondo di idee da scoprire!</p>
        <div class="categorie-grid">
          ${SEZIONI_GALLERIA.map(categoriaCardHtml).join('')}
        </div>
      </div>
    </section>
  `;
}

function galleriaSezioneHtml(sezione) {
  const n = sezione.prodotti.length;
  return `
    <section class="page page-gallery page-gallery-sezione">
      <div class="section-inner">
        <a href="#/galleria" class="galleria-indietro">&larr; Tutte le categorie</a>
        <p class="eyebrow">Categoria</p>
        <h2>${sezione.titolo}</h2>
        <p class="section-lead">${n} prodott${n === 1 ? 'o' : 'i'} in questa categoria.</p>
        <div class="prodotti-grid">
          ${sezione.prodotti.map(prodottoCardHtml).join('')}
        </div>
      </div>
    </section>
  `;
}

function dividerHtml() {
  return `
    <div class="sezione-divider" aria-hidden="true">
      <svg viewBox="0 0 300 20" preserveAspectRatio="none">
        <path class="divider-linea-1" d="M0,7 C40,-2 60,16 100,7 C140,-2 160,16 200,7 C240,-2 260,16 300,7" />
        <path class="divider-linea-2" d="M0,13 C40,4 60,22 100,13 C140,4 160,22 200,13 C240,4 260,22 300,13" />
      </svg>
    </div>
  `;
}

const pages = {
  '/': () => {
    const stato = statoApertura();
    return `
    <section id="hero" class="hero">
      <div class="hero-media" aria-hidden="true">
        <img src="public/immagine-home.png" alt="" class="hero-media-img">
      </div>
      <div class="hero-content">
        <div class="hero-inner">
          <h1>Roberticola</h1>
          <p class="hero-tagline">Crea, colora, gioca!</p>
          <div class="hero-actions">
            <a href="#/" data-scroll="contatti" class="btn btn-casella btn-contattaci">Contattaci</a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}" target="_blank" rel="noopener" class="btn btn-casella btn-chiama">Vieni a trovarci</a>
          </div>
          <p class="badge ${stato.aperto ? 'badge-open' : 'badge-closed'}">${stato.testo}</p>
        </div>
      </div>
    </section>

    ${dividerHtml()}

    <section id="servizi" class="servizi">
      <img src="public/logo_icona-viola.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">Cosa trovi da noi</p>
        <h2>I nostri servizi</h2>
        <p class="section-lead">Tutto quello che serve, in un unico negozio di quartiere.</p>
        <div class="servizi-grid">
          ${serviziGridHtml()}
        </div>
      </div>
    </section>

    ${dividerHtml()}

    <section id="contatti" class="contatti">
      <img src="public/logo_icona-viola.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">Dove siamo</p>
        <h2>Contatti</h2>
        <div class="contatti-grid">
          <div class="contatti-card">
            <dl>
              <div class="contatti-riga">
                <dt>Indirizzo</dt>
                <dd><a href="https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}" target="_blank" rel="noopener">Via Marmorale, 73<br>02013 Antrodoco (RI)</a></dd>
              </div>
              <div class="contatti-riga">
                <dt>Telefono</dt>
                <dd><a href="tel:+390746578079">0746 578079</a></dd>
              </div>
              <div class="contatti-riga">
                <dt>Email</dt>
                <dd><a href="mailto:roberticola70@gmail.com">roberticola70@gmail.com</a></dd>
              </div>
            </dl>

            <a href="https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}" target="_blank" rel="noopener" class="btn btn-primary btn-block">Ottieni indicazioni</a>
          </div>

          <div class="contatti-mappa">
            <iframe
              title="Mappa Roberticola, Via Marmorale 73, Antrodoco"
              src="https://www.google.com/maps?q=${MAPS_QUERY}&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div class="contatti-orari">
          <img src="public/logo_icona-viola.png" alt="" class="contatti-orari-watermark">
          <p class="contatti-orari-titolo">Orari di apertura</p>
          ${orariGrandeHtml()}
        </div>
      </div>
    </section>
  `;
  },
};

function currentPath() {
  return window.location.hash.replace(/^#/, '') || '/';
}

function updateActiveNav(path) {
  document.querySelectorAll('#site-nav a[data-route]').forEach(a => {
    a.classList.toggle('active', a.dataset.route === path);
  });
}

function closeNav() {
  document.getElementById('site-nav').classList.remove('open');
  document.getElementById('nav-toggle').classList.remove('active');
  document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-locked');
}

function updateLogoColor(theme) {
  const suffix = theme === 'home' ? 'teal' : 'viola';
  document.getElementById('logo-icon-img').src = `public/logo_icona-${suffix}.png`;
  document.getElementById('logo-text-img').src = `public/logo_scritta-${suffix}.png`;
}

let modalProdotto = null;
let modalIndiceFoto = 0;

function aggiornaModal() {
  if (!modalProdotto) return;
  const img = document.getElementById('prodotto-modal-img');
  img.src = modalProdotto.immagini[modalIndiceFoto];
  img.alt = modalProdotto.titolo;
  document.getElementById('prodotto-modal-titolo').textContent = modalProdotto.titolo;
  document.getElementById('prodotto-modal-prezzo').textContent = formatPrezzo(modalProdotto.prezzo);

  const multi = modalProdotto.immagini.length > 1;
  document.querySelector('.prodotto-modal-prev').hidden = !multi;
  document.querySelector('.prodotto-modal-next').hidden = !multi;

  const miniature = document.getElementById('prodotto-modal-miniature');
  miniature.innerHTML = multi
    ? modalProdotto.immagini.map((src, i) => `
        <button type="button" class="${i === modalIndiceFoto ? 'active' : ''}" data-indice="${i}" aria-label="Foto ${i + 1}">
          <img src="${src}" alt="">
        </button>
      `).join('')
    : '';
}

function apriModal(prodotto) {
  modalProdotto = prodotto;
  modalIndiceFoto = 0;
  aggiornaModal();
  document.getElementById('prodotto-modal').hidden = false;
  document.body.classList.add('modal-open');
}

function chiudiModal() {
  document.getElementById('prodotto-modal').hidden = true;
  document.body.classList.remove('modal-open');
  modalProdotto = null;
}

function modalVai(delta) {
  if (!modalProdotto) return;
  const n = modalProdotto.immagini.length;
  modalIndiceFoto = (modalIndiceFoto + delta + n) % n;
  aggiornaModal();
}

function initDividers() {
  const dividers = document.querySelectorAll('.sezione-divider');
  if (!dividers.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-vista');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  dividers.forEach(d => obs.observe(d));
}

function render() {
  const path = currentPath();
  const inGalleria = path === '/galleria' || path.startsWith('/galleria/');

  let html;
  if (path === '/galleria') {
    html = galleriaIndiceHtml();
  } else if (path.startsWith('/galleria/')) {
    const sezione = SEZIONI_GALLERIA.find(s => s.id === path.slice('/galleria/'.length));
    html = sezione ? galleriaSezioneHtml(sezione) : galleriaIndiceHtml();
  } else {
    html = pages['/']();
  }

  app.innerHTML = html;
  updateActiveNav(inGalleria ? '/galleria' : '/');
  const theme = inGalleria ? 'secondary' : 'home';
  document.body.dataset.theme = theme;
  updateLogoColor(theme);
  window.scrollTo({ top: 0 });
  initDividers();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  render();

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-locked', open);
  });

  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-scroll]');
    if (!link) return;
    e.preventDefault();
    closeNav();
    const targetId = link.dataset.scroll;
    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (currentPath() !== '/') {
      window.location.hash = '#/';
      requestAnimationFrame(scrollToTarget);
    } else {
      scrollToTarget();
    }
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#/"]')) closeNav();
  });

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.prodotto-card');
    if (!card) return;
    const prodotto = PRODOTTI_FLAT[Number(card.dataset.prodottoIndex)];
    if (prodotto) apriModal(prodotto);
  });

  const prodottoModal = document.getElementById('prodotto-modal');
  prodottoModal.addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-close]')) { chiudiModal(); return; }
    if (e.target.closest('.prodotto-modal-prev')) { modalVai(-1); return; }
    if (e.target.closest('.prodotto-modal-next')) { modalVai(1); return; }
    const miniatura = e.target.closest('.prodotto-modal-miniature button');
    if (miniatura) { modalIndiceFoto = Number(miniatura.dataset.indice); aggiornaModal(); }
  });

  document.addEventListener('keydown', (e) => {
    if (prodottoModal.hidden) return;
    if (e.key === 'Escape') chiudiModal();
    if (e.key === 'ArrowLeft') modalVai(-1);
    if (e.key === 'ArrowRight') modalVai(1);
  });

  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
