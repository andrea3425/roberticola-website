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

const NOVITA = [
  {
    titolo: 'Halloween da Roberticola',
    data: '31 Ottobre',
    sommario: 'Dolcetto o scherzetto... e un gioco in pi&ugrave;! Caramelle, sorprese e divertimento per tutti i bambini.',
    immagini: ['gallery/novita/halloween-locandina.png', 'gallery/novita/halloween-regolamento.png'],
  },
];

function novitaCardHtml(novita, index) {
  const [copertina] = novita.immagini;
  return `
    <article class="novita-card" data-novita-index="${index}">
      <div class="novita-immagine">
        <img src="${copertina}" alt="${novita.titolo}">
      </div>
      <div class="novita-caption">
        ${novita.data ? `<p class="novita-data">${novita.data}</p>` : ''}
        <h4>${novita.titolo}</h4>
        <p class="novita-sommario">${novita.sommario}</p>
        <p class="link-scopri novita-scopri">Scopri di pi&ugrave; <span aria-hidden="true">&rsaquo;</span></p>
      </div>
    </article>
  `;
}

function novitaGridHtml() {
  return NOVITA.map(novitaCardHtml).join('');
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

const PRODOTTI_FLAT = [...SEZIONI_GALLERIA.flatMap(s => s.prodotti), ...OFFERTE];

// Prezzo di un prodotto: se è in offerta, il prezzo di base barrato e accanto
// quello scontato.
function prezzoHtml(prodotto) {
  if (prodotto.prezzoOfferta == null) return formatPrezzo(prodotto.prezzo);
  return `<s class="prezzo-barrato">${formatPrezzo(prodotto.prezzo)}</s> <span class="prezzo-offerta">${formatPrezzo(prodotto.prezzoOfferta)}</span>`;
}

// Etichetta sulla foto dei prodotti in offerta: almeno -20%, oppure lo
// sconto vero se è più alto.
const SCONTO_MINIMO = 20;

function etichettaSconto(prodotto) {
  if (!OFFERTE.includes(prodotto)) return null;
  const vero = prodotto.prezzo && prodotto.prezzoOfferta != null
    ? Math.round((1 - prodotto.prezzoOfferta / prodotto.prezzo) * 100)
    : 0;
  return `-${Math.max(SCONTO_MINIMO, vero)}%`;
}

function prodottoCardHtml(prodotto) {
  const [primaImmagine] = prodotto.immagini;
  const index = PRODOTTI_FLAT.indexOf(prodotto);
  const sconto = etichettaSconto(prodotto);

  return `
    <article class="prodotto-card" data-prodotto-index="${index}">
      <div class="prodotto-immagine">
        <img src="${primaImmagine}" alt="${prodotto.titolo}">
        ${sconto ? `<span class="badge-sconto">${sconto}</span>` : ''}
      </div>
      <div class="prodotto-caption">
        <h4>${prodotto.titolo}</h4>
        <p class="prodotto-prezzo${prodotto.prezzo == null ? ' su-richiesta' : ''}">${prezzoHtml(prodotto)}</p>
      </div>
    </article>
  `;
}

function categoriaCardHtml(sezione) {
  const copertina = sezione.copertina ?? sezione.prodotti[0]?.immagini[0];
  return `
    <a href="#/galleria/${sezione.id}" class="categoria-card">
      <div class="categoria-immagine">
        ${copertina ? `<img src="${copertina}" alt="${sezione.titolo}">` : ''}
      </div>
      <div class="categoria-caption">
        <h4>${sezione.titolo}</h4>
        <p class="link-scopri categoria-scopri">Scopri di pi&ugrave; <span aria-hidden="true">&rsaquo;</span></p>
      </div>
    </a>
  `;
}

function galleriaIndiceHtml() {
  return `
    <section class="page page-gallery">
      <img src="public/logo_icona-teal.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">Uno sguardo dentro</p>
        <h2>Prodotti</h2>
        <p class="section-lead">Tutto ciò che cerchi, un mondo di idee da scoprire!</p>
        <div class="categorie-grid">
          ${SEZIONI_GALLERIA.map(categoriaCardHtml).join('')}
        </div>
        <p class="galleria-acquisto">Vuoi acquistare qualcosa online? <a href="#/" data-scroll="contatti">Contattaci</a></p>
      </div>
    </section>
  `;
}

function novitaPaginaHtml() {
  return `
    <section class="page page-gallery page-novita">
      <img src="public/logo_icona-teal.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">Cosa c'&egrave; di nuovo</p>
        <h2>Novit&agrave;</h2>
        <p class="section-lead">Eventi, giochi e sorprese da Roberticola.</p>
        <div class="novita-grid">
          ${novitaGridHtml()}
        </div>
      </div>
    </section>
  `;
}

function offertePaginaHtml() {
  const contenuto = OFFERTE.length
    ? `<div class="prodotti-grid">${OFFERTE.map(prodottoCardHtml).join('')}</div>`
    : `<p class="offerte-vuota">Nuove offerte in arrivo, torna a trovarci presto!</p>`;
  return `
    <section class="page page-gallery page-offerte">
      <img src="public/logo_icona-teal.png" alt="" class="section-watermark">
      <div class="section-inner">
        <a href="#/" class="galleria-indietro">&larr; Torna alla Home</a>
        <p class="eyebrow">Approfittane</p>
        <h2>Offerte</h2>
        <p class="section-lead">Prodotti scontati, finch&eacute; durano!</p>
        ${contenuto}
      </div>
    </section>
  `;
}

function galleriaSezioneHtml(sezione) {
  const n = sezione.prodotti.length;
  return `
    <section class="page page-gallery page-gallery-sezione">
      <img src="public/logo_icona-teal.png" alt="" class="section-watermark section-watermark-chiaro">
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
    return `
    <section id="hero" class="hero">
      <img src="public/logo_icona-viola.png" alt="" class="section-watermark hero-watermark" aria-hidden="true">
      <div class="hero-media" aria-hidden="true">
        <img src="public/immagine-halloween.jpg" alt="" class="hero-media-img">
      </div>
      <div class="hero-content">
        <div class="hero-inner">
          <h1>Roberticola</h1>
          <p class="hero-tagline">Crea, colora, gioca!</p>
          <div class="hero-actions">
            <a href="#/offerte" class="btn btn-casella btn-offerte">Offerte</a>
            <a href="#/galleria" class="btn btn-casella btn-prodotti">Prodotti</a>
            <a href="#/novita" class="btn btn-casella btn-novita">Novit&agrave;</a>
          </div>
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
          <div class="contatti-colonna">
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

            <a href="https://www.instagram.com/roberticola_store/" target="_blank" rel="noopener" class="contatti-instagram">
              <span class="contatti-instagram-icona" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none"/>
                </svg>
              </span>
              <span class="contatti-instagram-testo">
                Seguici su Instagram<br>
                <strong>@roberticola_store</strong>
              </span>
            </a>
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

    ${dividerHtml()}

    <section id="orari" class="orari">
      <img src="public/logo_icona-viola.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">Quando trovarci</p>
        <h2>Orari di apertura</h2>
        <div class="orari-tabella-wrap">
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

function updateLogoColor(theme, inCategoria) {
  const suffix = theme === 'home' || inCategoria ? 'teal' : 'viola';
  document.getElementById('logo-icon-img').src = `public/logo_icona-${suffix}.png`;
  document.getElementById('logo-text-img').src = `public/logo_scritta-${suffix}.png`;
}

let modalProdotto = null;
let modalIndiceFoto = 0;

function aggiornaModal() {
  if (!modalProdotto) return;
  resetZoom();
  const img = document.getElementById('prodotto-modal-img');
  img.src = modalProdotto.immagini[modalIndiceFoto];
  img.alt = modalProdotto.titolo;
  document.getElementById('prodotto-modal-titolo').textContent = modalProdotto.titolo;
  const prezzoEl = document.getElementById('prodotto-modal-prezzo');
  prezzoEl.hidden = modalProdotto.prezzo === undefined;
  if (!prezzoEl.hidden) prezzoEl.innerHTML = prezzoHtml(modalProdotto);

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
  impostaLente(false);
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

// ---------- Zoom e scorrimento della foto nella finestra prodotto ----------
// Telefono: pizzica per ingrandire, doppio tocco per ingrandire/ridurre,
// trascina col dito per cambiare foto (o per spostarti se ingrandita).
// Computer: dopo aver premuto "Ingrandisci", passando col cursore sulla
// foto la si vede ingrandita.

const ZOOM_MAX = 4;
const ZOOM_DOPPIO_TOCCO = 2.5;
let zoom = { scala: 1, x: 0, y: 0 };

function applicaZoom(anima) {
  const img = document.getElementById('prodotto-modal-img');
  img.classList.toggle('anima', !!anima);
  img.style.transform = zoom.scala === 1 && zoom.x === 0 && zoom.y === 0
    ? ''
    : `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scala})`;
}

function resetZoom() {
  zoom = { scala: 1, x: 0, y: 0 };
  const img = document.getElementById('prodotto-modal-img');
  img.classList.remove('zoom-cursore');
  applicaZoom(false);
}

function impostaLente(attiva) {
  const bottone = document.querySelector('.prodotto-modal-ingrandisci');
  const img = document.getElementById('prodotto-modal-img');
  bottone.setAttribute('aria-pressed', String(attiva));
  bottone.querySelector('span').textContent = attiva ? 'Riduci' : 'Ingrandisci';
  img.classList.toggle('lente-attiva', attiva);
  if (!attiva) img.classList.remove('zoom-cursore');
}

function limitaSpostamento(box) {
  const maxX = (box.width * (zoom.scala - 1)) / 2;
  const maxY = (box.height * (zoom.scala - 1)) / 2;
  zoom.x = Math.max(-maxX, Math.min(maxX, zoom.x));
  zoom.y = Math.max(-maxY, Math.min(maxY, zoom.y));
}

function initZoomFoto() {
  const area = document.querySelector('.prodotto-modal-immagine');
  const img = document.getElementById('prodotto-modal-img');

  // Posizione di un punto rispetto al centro dell'area foto.
  const relativo = (t, box) => ({ x: t.clientX - box.left - box.width / 2, y: t.clientY - box.top - box.height / 2 });
  const distanza = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

  let gesto = null;
  let ultimoTocco = { tempo: 0, x: 0, y: 0 };

  area.addEventListener('touchstart', (e) => {
    if (e.target.closest('button')) return;
    const box = area.getBoundingClientRect();
    if (e.touches.length === 2) {
      const [a, b] = e.touches;
      const centro = relativo({ clientX: (a.clientX + b.clientX) / 2, clientY: (a.clientY + b.clientY) / 2 }, box);
      gesto = {
        tipo: 'pizzico', box, distanza0: distanza(a, b), scala0: zoom.scala,
        // Punto della foto che sta sotto le dita: deve restare lì mentre si ingrandisce.
        puntoFoto: { x: (centro.x - zoom.x) / zoom.scala, y: (centro.y - zoom.y) / zoom.scala },
      };
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      gesto = { tipo: 'trascina', box, inizio: { x: t.clientX, y: t.clientY }, x0: zoom.x, y0: zoom.y, dx: 0, dy: 0 };
    }
    applicaZoom(false);
  }, { passive: true });

  area.addEventListener('touchmove', (e) => {
    if (!gesto) return;
    e.preventDefault();
    if (gesto.tipo === 'pizzico' && e.touches.length === 2) {
      const [a, b] = e.touches;
      const centro = relativo({ clientX: (a.clientX + b.clientX) / 2, clientY: (a.clientY + b.clientY) / 2 }, gesto.box);
      zoom.scala = Math.max(1, Math.min(ZOOM_MAX, gesto.scala0 * distanza(a, b) / gesto.distanza0));
      zoom.x = centro.x - gesto.puntoFoto.x * zoom.scala;
      zoom.y = centro.y - gesto.puntoFoto.y * zoom.scala;
      limitaSpostamento(gesto.box);
      applicaZoom(false);
    } else if (gesto.tipo === 'trascina' && e.touches.length === 1) {
      const t = e.touches[0];
      gesto.dx = t.clientX - gesto.inizio.x;
      gesto.dy = t.clientY - gesto.inizio.y;
      if (zoom.scala > 1) {
        zoom.x = gesto.x0 + gesto.dx;
        zoom.y = gesto.y0 + gesto.dy;
        limitaSpostamento(gesto.box);
      } else if (modalProdotto.immagini.length > 1) {
        // Foto non ingrandita: la foto segue il dito per far capire che si può scorrere.
        zoom.x = gesto.dx;
      }
      applicaZoom(false);
    }
  }, { passive: false });

  area.addEventListener('touchend', (e) => {
    if (!gesto || e.touches.length > 0) {
      // Da due dita a una: si continua come trascinamento della foto ingrandita.
      if (gesto && e.touches.length === 1) {
        const t = e.touches[0];
        gesto = { tipo: 'trascina', box: gesto.box, inizio: { x: t.clientX, y: t.clientY }, x0: zoom.x, y0: zoom.y, dx: 0, dy: 0 };
      }
      return;
    }
    const g = gesto;
    gesto = null;

    if (g.tipo === 'trascina' && zoom.scala === 1) {
      const swipe = Math.abs(g.dx) > 50 && Math.abs(g.dx) > Math.abs(g.dy);
      if (swipe && modalProdotto.immagini.length > 1) {
        modalVai(g.dx < 0 ? 1 : -1);
        return;
      }
    }

    // Doppio tocco: ingrandisce nel punto toccato, oppure torna normale.
    const tap = g.tipo === 'trascina' && Math.abs(g.dx) < 10 && Math.abs(g.dy) < 10;
    if (tap) {
      const ora = Date.now();
      const vicino = Math.hypot(g.inizio.x - ultimoTocco.x, g.inizio.y - ultimoTocco.y) < 30;
      if (ora - ultimoTocco.tempo < 300 && vicino) {
        if (zoom.scala > 1) {
          zoom = { scala: 1, x: 0, y: 0 };
        } else {
          const p = relativo({ clientX: g.inizio.x, clientY: g.inizio.y }, g.box);
          zoom = { scala: ZOOM_DOPPIO_TOCCO, x: -p.x * (ZOOM_DOPPIO_TOCCO - 1), y: -p.y * (ZOOM_DOPPIO_TOCCO - 1) };
          limitaSpostamento(g.box);
        }
        ultimoTocco = { tempo: 0, x: 0, y: 0 };
        applicaZoom(true);
        return;
      }
      ultimoTocco = { tempo: ora, x: g.inizio.x, y: g.inizio.y };
    }

    if (zoom.scala <= 1.02) zoom = { scala: 1, x: 0, y: 0 };
    applicaZoom(true);
  });

  // Computer: lente d'ingrandimento che segue il cursore.
  const conMouse = window.matchMedia('(hover: hover) and (pointer: fine)');
  const bottoneLente = document.querySelector('.prodotto-modal-ingrandisci');
  bottoneLente.addEventListener('click', () => {
    impostaLente(bottoneLente.getAttribute('aria-pressed') !== 'true');
  });
  img.addEventListener('mousemove', (e) => {
    if (!conMouse.matches || !img.classList.contains('lente-attiva')) return;
    const box = img.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * 100;
    const y = ((e.clientY - box.top) / box.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.classList.add('zoom-cursore');
  });
  img.addEventListener('mouseleave', () => {
    img.classList.remove('zoom-cursore');
  });
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
  }, { threshold: 0.01, rootMargin: '0px 0px 200px 0px' });
  dividers.forEach(d => obs.observe(d));
}

let pathPrecedente = null;

const profonditaPagina = (path) => (path.startsWith('/galleria/') ? 2 : 1);

// Tra l'elenco delle categorie e una categoria (in entrambi i sensi) lo
// schermo diventa tutto viola e le due linee ondulate della home lo
// attraversano. Finché il viola non copre tutto resta visibile una copia
// ferma della pagina vecchia; quando il viola svanisce si è nella nuova.
function preparaTransizioneCategoria(path) {
  const prima = pathPrecedente;
  const traCategorie = prima !== null && prima !== path &&
    (prima === '/galleria' || prima.startsWith('/galleria/')) &&
    (path === '/galleria' || path.startsWith('/galleria/'));
  if (!traCategorie || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const vecchia = app.querySelector('.page-gallery');
  if (!vecchia) return null;
  const copia = vecchia.cloneNode(true);
  copia.classList.add('pagina-uscente');
  copia.style.backgroundColor = getComputedStyle(vecchia).backgroundColor;
  const verso = profonditaPagina(path) > profonditaPagina(prima) ? 'avanti' : 'indietro';
  return { copia, topSchermo: vecchia.getBoundingClientRect().top, verso };
}

function avviaTransizioneCategoria(transizione) {
  if (!transizione) return;
  const { copia, topSchermo, verso } = transizione;
  copia.style.top = `${topSchermo - app.getBoundingClientRect().top}px`;
  app.prepend(copia);
  app.classList.add('in-transizione');

  document.querySelector('.velo-transizione')?.remove();
  const velo = document.createElement('div');
  velo.className = `velo-transizione ${verso}`;
  velo.setAttribute('aria-hidden', 'true');

  // Le onde sono disegnate alla larghezza reale dello schermo, così la
  // linea attraversa tutto lo schermo con lo spessore giusto.
  const w = window.innerWidth;
  const onda = (y) => {
    let d = `M0,${y}`;
    for (let x = 0; x < w; x += 200) d += ` C${x + 70},${y - 22} ${x + 130},${y + 22} ${x + 200},${y}`;
    return d;
  };
  velo.innerHTML = `
    <div class="linee-transizione">
      <svg viewBox="0 0 ${w} 90" preserveAspectRatio="none">
        <path class="linea-1" d="${onda(38)}" />
        <path class="linea-2" d="${onda(54)}" />
      </svg>
    </div>
  `;
  document.body.appendChild(velo);
  velo.querySelectorAll('path').forEach(p => p.style.setProperty('--lunghezza', `${Math.ceil(p.getTotalLength()) + 10}px`));

  // Quando il viola copre tutto, la copia della pagina vecchia non serve più.
  setTimeout(() => {
    copia.remove();
    app.classList.remove('in-transizione');
  }, 180);
  velo.addEventListener('animationend', (e) => {
    if (e.target === velo) velo.remove();
  });
}

function render() {
  const path = currentPath();
  const inCategoria = path.startsWith('/galleria/');
  const inGalleria = path === '/galleria' || path.startsWith('/galleria/');
  const inNovita = path === '/novita';
  const inOfferte = path === '/offerte';

  let html;
  if (path === '/galleria') {
    html = galleriaIndiceHtml();
  } else if (path.startsWith('/galleria/')) {
    const sezione = SEZIONI_GALLERIA.find(s => s.id === path.slice('/galleria/'.length));
    html = sezione ? galleriaSezioneHtml(sezione) : galleriaIndiceHtml();
  } else if (inNovita) {
    html = novitaPaginaHtml();
  } else if (inOfferte) {
    html = offertePaginaHtml();
  } else {
    html = pages['/']();
  }

  const transizione = preparaTransizioneCategoria(path);
  app.innerHTML = html;
  pathPrecedente = path;
  updateActiveNav(inGalleria ? '/galleria' : (inNovita ? '/novita' : (inOfferte ? '/offerte' : '/')));
  const theme = inGalleria || inNovita || inOfferte ? 'secondary' : 'home';
  document.body.dataset.theme = theme;
  document.body.classList.toggle('in-categoria', inCategoria);
  updateLogoColor(theme, inCategoria);
  window.scrollTo({ top: 0, behavior: 'instant' });
  avviaTransizioneCategoria(transizione);
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

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.novita-card');
    if (!card) return;
    const novita = NOVITA[Number(card.dataset.novitaIndex)];
    if (novita) apriModal(novita);
  });

  initZoomFoto();

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
