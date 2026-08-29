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
    testo: 'Gratta e vinci, Lotto, SuperEnalotto e ricevitoria.',
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

const MAPS_QUERY = encodeURIComponent('Via Marmorale, 73, 02013 Antrodoco RI');

const pages = {
  '/': () => {
    const stato = statoApertura();
    return `
    <section id="hero" class="hero">
      <div class="hero-inner">
        <img src="public/logo_icona.png" alt="" class="hero-icon" aria-hidden="true">
        <p class="badge ${stato.aperto ? 'badge-open' : 'badge-closed'}">${stato.testo}</p>
        <h1>Roberticola</h1>
        <p class="hero-tagline">Edicola e tabacchi ad Antrodoco, di fiducia da sempre.</p>
        <div class="hero-actions">
          <a href="tel:+390746578079" class="btn btn-primary">Chiama ora</a>
          <a href="#/" data-scroll="contatti" class="btn btn-ghost">Vieni a trovarci</a>
        </div>
      </div>
    </section>

    <section id="servizi" class="servizi">
      <div class="section-inner">
        <p class="eyebrow">Cosa trovi da noi</p>
        <h2>I nostri servizi</h2>
        <p class="section-lead">Tutto quello che serve, in un unico negozio di quartiere.</p>
        <div class="servizi-grid">
          ${serviziGridHtml()}
        </div>
      </div>
    </section>

    <section id="contatti" class="contatti">
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

            <table class="orari-table">
              <tbody>
                ${orariTableHtml()}
              </tbody>
            </table>

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
      </div>
    </section>
  `;
  },
  '/galleria': () => `
    <section class="page page-gallery">
      <div class="section-inner">
        <p class="eyebrow">Uno sguardo dentro</p>
        <h2>Galleria</h2>
        <p class="section-lead">Presto qui trovi qualche scatto del negozio.</p>
        <div class="gallery-grid"></div>
      </div>
    </section>
  `,
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

function render() {
  const path = currentPath();
  const view = pages[path] || pages['/'];
  app.innerHTML = view();
  updateActiveNav(path in pages ? path : '/');
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
    if (e.target.closest('a[data-route]')) closeNav();
  });

  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
