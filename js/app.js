const app = document.getElementById('app');

// Natale: si accende con class="natale" sul <body> in index.html.
// Cambia i colori dei loghi, l'immagine della Home e le transizioni
// (trenino tra le sezioni, neve tra le categorie dei prodotti).
const NATALE = document.body.classList.contains('natale');
const LOGO = NATALE
  ? { home: 'bianco', pagine: 'bianco', categoria: 'bianco', filigranaHome: 'rosso-scuro', filigranaPagine: 'verde-scuro', filigranaCategoria: 'rosso' }
  : { home: 'teal', pagine: 'viola', categoria: 'teal', filigranaHome: 'viola', filigranaPagine: 'teal', filigranaCategoria: 'teal' };
const IMMAGINE_HOME = NATALE ? 'public/immagine-home-natale.webp' : 'public/immagine-home-inverno.jpg';

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

// Novità ed eventi. "fine" è l'ultimo giorno dell'evento (anno-mese-giorno):
// dal giorno dopo l'evento passa da solo tra gli "Eventi passati", con la
// foto in grigio (cliccando si vede ancora la locandina originale).
// Le novità senza "fine" restano sempre in alto.
const NOVITA = [
  {
    titolo: 'Halloween da Roberticola',
    data: '31 Ottobre',
    fine: '2026-10-31',
    sommario: 'Dolcetto o scherzetto... e un gioco in pi&ugrave;! Caramelle, sorprese e divertimento per tutti i bambini.',
    immagini: ['gallery/novita/halloween-locandina.png', 'gallery/novita/halloween-regolamento.png'],
  },
];

function eventoPassato(novita) {
  if (!novita.fine) return false;
  const oggi = new Date();
  const [a, m, g] = novita.fine.split('-').map(Number);
  return new Date(a, m - 1, g + 1) <= oggi;
}

function novitaCardHtml(novita) {
  const [copertina] = novita.immagini;
  const index = NOVITA.indexOf(novita);
  const passato = eventoPassato(novita);
  return `
    <article class="novita-card${passato ? ' novita-passata' : ''}" data-novita-index="${index}">
      <div class="novita-immagine">
        <img src="${copertina}" alt="${novita.titolo}">
      </div>
      <div class="novita-caption">
        ${passato ? '<p class="novita-data">Evento concluso</p>' : (novita.data ? `<p class="novita-data">${novita.data}</p>` : '')}
        <h4>${novita.titolo}</h4>
        <p class="novita-sommario">${novita.sommario}</p>
        <p class="link-scopri novita-scopri">Scopri di pi&ugrave; <span aria-hidden="true">&rsaquo;</span></p>
      </div>
    </article>
  `;
}

function novitaGridHtml() {
  const prossime = NOVITA.filter(n => !eventoPassato(n));
  const passate = NOVITA.filter(eventoPassato);
  const inArrivo = prossime.length
    ? `<div class="novita-grid">${prossime.map(novitaCardHtml).join('')}</div>`
    : `<p class="offerte-vuota">Nuovi eventi in arrivo, torna a trovarci presto!</p>`;
  const archivio = passate.length ? `
    <div class="novita-archivio">
      <h3>Eventi passati</h3>
      <div class="novita-grid">${passate.map(novitaCardHtml).join('')}</div>
    </div>` : '';
  return inArrivo + archivio;
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

const PRODOTTI_FLAT = [...SEZIONI_GALLERIA, ...NATALE_SEZIONI].flatMap(s => s.prodotti);

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
  if (prodotto.prezzoOfferta == null) return null;
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
    <article class="prodotto-card${prodotto.inEvidenza && prodotto.prezzoOfferta != null ? ' prodotto-evidenza' : ''}" data-prodotto-index="${index}">
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

function categoriaCardHtml(sezione, base = '#/galleria/') {
  const copertina = sezione.copertina ?? sezione.prodotti[0]?.immagini[0];
  return `
    <a href="${base}${sezione.id}" class="categoria-card">
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
      <img src="public/logo_icona-${LOGO.filigranaPagine}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">${NATALE ? 'Idee sotto l\'albero' : 'Uno sguardo dentro'}</p>
        <h2>Prodotti</h2>
        <p class="section-lead">${NATALE ? 'Tante idee regalo per un Natale da ricordare!' : 'Tutto ciò che cerchi, un mondo di idee da scoprire!'}</p>
        <div class="categorie-grid">
          ${SEZIONI_GALLERIA.map(s => categoriaCardHtml(s)).join('')}
        </div>
        <p class="galleria-acquisto">Vuoi acquistare qualcosa online? <a href="#/" data-scroll="contatti">Contattaci</a></p>
      </div>
    </section>
  `;
}

function novitaPaginaHtml() {
  return `
    <section class="page page-gallery page-novita">
      <img src="public/logo_icona-${LOGO.filigranaPagine}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">${NATALE ? 'Novità delle feste' : 'Cosa c\'&egrave; di nuovo'}</p>
        <h2>Novit&agrave;</h2>
        <p class="section-lead">${NATALE ? 'Eventi, giochi e sorprese di Natale da Roberticola.' : 'Eventi, giochi e sorprese da Roberticola.'}</p>
        ${novitaGridHtml()}
      </div>
    </section>
  `;
}

// Pagina Natale (casella "Natale" della Home e voce del menu): due
// sottosezioni, Cornici e Cartoleria (prodotti in NATALE_SEZIONI, nel file
// prodotti.js). Si entra in ognuna come in una categoria dei Prodotti.
function natalePaginaHtml() {
  return `
    <section class="page page-gallery page-natale">
      <img src="public/logo_icona-${LOGO.filigranaPagine}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <a href="#/" class="galleria-indietro">&larr; Torna alla Home</a>
        <p class="eyebrow">Idee regalo</p>
        <h2>Natale</h2>
        <p class="section-lead">Tanti regali da mettere sotto l'albero, scegli il tuo!</p>
        <div class="categorie-grid categorie-natale">
          ${NATALE_SEZIONI.map(s => categoriaCardHtml(s, '#/natale/')).join('')}
        </div>
        <p class="galleria-acquisto">Vuoi prenotare un regalo? <a href="#/" data-scroll="contatti">Contattaci</a></p>
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
      <img src="public/logo_icona-${LOGO.filigranaPagine}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <a href="#/" class="galleria-indietro">&larr; Torna alla Home</a>
        <p class="eyebrow">${NATALE ? 'Regali a prezzi speciali' : 'Prezzi speciali'}</p>
        <h2>Offerte</h2>
        <p class="section-lead">${NATALE ? 'Tanti regali scontati, per poco tempo: approfittane!' : 'I nostri prodotti in offerta, a prezzi scontati per poco tempo!'}</p>
        ${contenuto}
      </div>
    </section>
  `;
}

function galleriaSezioneHtml(sezione, indietro = { href: '#/galleria', testo: 'Tutte le categorie' }) {
  const n = sezione.prodotti.length;
  return `
    <section class="page page-gallery page-gallery-sezione">
      <img src="public/logo_icona-${LOGO.filigranaCategoria}.png" alt="" class="section-watermark section-watermark-chiaro">
      <div class="section-inner">
        <a href="${indietro.href}" class="galleria-indietro">&larr; ${indietro.testo}</a>
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
      <img src="public/logo_icona-${LOGO.filigranaHome}.png" alt="" class="section-watermark hero-watermark" aria-hidden="true">
      <div class="hero-media" aria-hidden="true">
        <img src="${IMMAGINE_HOME}" alt="" class="hero-media-img">
      </div>
      <div class="hero-content">
        <div class="hero-inner">
          <h1>Roberticola</h1>
          <p class="hero-tagline">${NATALE ? 'Il Natale è qui: regali, sorprese e tanta magia!' : 'Fuori fa freddo, qui c\'&egrave; un mondo da scoprire!'}</p>
          <div class="hero-actions">
            ${NATALE ? `
            <a href="#/offerte" class="btn btn-casella btn-offerte">Offerte</a>
            <a href="#/natale" class="btn btn-casella btn-natale">Natale</a>
            <a href="#/galleria" class="btn btn-casella btn-novita">Prodotti</a>` : `
            <a href="#/offerte" class="btn btn-casella btn-offerte">Offerte</a>
            <a href="#/galleria" class="btn btn-casella btn-prodotti">Prodotti</a>
            <a href="#/novita" class="btn btn-casella btn-novita">Novit&agrave;</a>`}
          </div>
        </div>
      </div>
    </section>

    ${dividerHtml()}

    <section id="servizi" class="servizi">
      <img src="public/logo_icona-${LOGO.filigranaHome}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">${NATALE ? 'Cosa trovi da noi per le feste' : 'Cosa trovi da noi'}</p>
        <h2>I nostri servizi</h2>
        <p class="section-lead">${NATALE ? 'Tutto quello che ti serve per le feste, in un unico negozio di quartiere.' : 'Tutto quello che serve, in un unico negozio di quartiere.'}</p>
        <div class="servizi-grid">
          ${serviziGridHtml()}
        </div>
      </div>
    </section>

    ${dividerHtml()}

    <section id="contatti" class="contatti">
      <img src="public/logo_icona-${LOGO.filigranaHome}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">${NATALE ? 'Dove trovarci per i tuoi regali' : 'Dove siamo'}</p>
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
                  <dd><a href="tel:+390746802570">0746 802570</a></dd>
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

            <a href="https://wa.me/390746802570" target="_blank" rel="noopener" class="contatti-instagram contatti-whatsapp">
              <span class="contatti-instagram-icona" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/>
                </svg>
              </span>
              <span class="contatti-instagram-testo">
                Scrivici su WhatsApp<br>
                <strong>0746 802570</strong>
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
      <img src="public/logo_icona-${LOGO.filigranaHome}.png" alt="" class="section-watermark">
      <div class="section-inner">
        <p class="eyebrow">${NATALE ? 'Quando passare a trovarci' : 'Quando trovarci'}</p>
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
  const suffix = inCategoria ? LOGO.categoria : (theme === 'home' ? LOGO.home : LOGO.pagine);
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

const profonditaPagina = (path) => (path === '/' ? 0 : path.startsWith('/galleria/') || path.startsWith('/natale/') ? 2 : 1);
const inGalleriaPath = (path) => path === '/galleria' || path.startsWith('/galleria/');
// Sezione del sito a cui appartiene una pagina: le categorie dei prodotti
// fanno parte della sezione Prodotti.
const sezioneDi = (path) => (inGalleriaPath(path) ? '/galleria' : path.startsWith('/natale') ? '/natale' : path);

// Tra l'elenco delle categorie e una categoria (in entrambi i sensi) lo
// schermo diventa tutto viola e le due linee ondulate della home lo
// attraversano. Finché il viola non copre tutto resta visibile una copia
// ferma della pagina vecchia; quando il viola svanisce si è nella nuova.
// Passando invece da una sezione all'altra (Home, Prodotti, Novità,
// Offerte) c'è la transizione invernale con la neve.
function preparaTransizioneCategoria(path) {
  const prima = pathPrecedente;
  if (prima === null || prima === path ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  const inverno = sezioneDi(prima) !== sezioneDi(path);

  let vecchia;
  let copia;
  if (prima === '/') {
    // La Home è fatta di più sezioni: le copio tutte dentro un contenitore
    // che mantiene i colori della Home anche dopo il cambio di tema.
    vecchia = app.firstElementChild;
    if (!vecchia) return null;
    copia = document.createElement('div');
    copia.classList.add('tema-home');
    [...app.children].forEach(el => copia.appendChild(el.cloneNode(true)));
  } else {
    vecchia = app.querySelector('.page-gallery');
    if (!vecchia) return null;
    copia = vecchia.cloneNode(true);
  }
  copia.classList.add('pagina-uscente');
  copia.style.backgroundColor = getComputedStyle(vecchia).backgroundColor;
  const verso = profonditaPagina(path) > profonditaPagina(prima) ? 'avanti' : 'indietro';
  return { copia, topSchermo: vecchia.getBoundingClientRect().top, verso, inverno };
}

// Transizione invernale, nei colori del sito: lo schermo diventa viola, un
// grande fiocco di neve si disegna al centro con le due linee (bianca e
// verde acqua) come le onde della Home, cade una neve leggera e dal basso
// sale un cumulo di neve.
function veloInvernoHtml() {
  const colori = ['#ffffff', 'var(--verde-menta)', 'var(--viola-lilla)'];
  let neve = '';
  for (let i = 0; i < 40; i++) {
    const x = (Math.random() * 100).toFixed(1);
    const size = 4 + Math.round(Math.random() * 8);
    const ritardo = (Math.random() * 0.4).toFixed(2);
    const colore = colori[i % colori.length];
    neve += `<span class="velo-neve-punto" style="left:${x}%;width:${size}px;height:${size}px;background:${colore};animation-delay:${ritardo}s"></span>`;
  }
  const bracci = 'M0 -60 L0 60 M-52 -30 L52 30 M-52 30 L52 -30 ' +
    'M-14 -46 L0 -32 L14 -46 M-14 46 L0 32 L14 46 ' +
    'M-47 -11 L-28 -16 L-33 -35 M47 11 L28 16 L33 35 ' +
    'M-47 11 L-28 16 L-33 35 M47 -11 L28 -16 L33 -35';
  return `
    <div class="velo-neve">${neve}</div>
    <svg class="velo-fiocco-disegnato" viewBox="-70 -70 140 140">
      <path class="tratto-1" pathLength="100" d="${bracci}"/>
      <path class="tratto-2" pathLength="100" d="${bracci}"/>
    </svg>
    <svg class="velo-cumulo" viewBox="0 0 1200 160" preserveAspectRatio="none">
      <path class="cumulo-1" d="M0 70 C150 20 300 20 450 60 C600 100 750 30 900 50 C1050 70 1130 40 1200 55 L1200 160 L0 160 Z"/>
      <path class="cumulo-2" d="M0 105 C180 70 330 120 520 95 C700 70 860 125 1020 100 C1110 88 1160 95 1200 100 L1200 160 L0 160 Z"/>
    </svg>`;
}

// Natale, tra una sezione e l'altra: notte verde con stelline e neve e
// una ferrovia che, vista in prospettiva, arriva da sinistra in lontananza
// e fa una curva morbida fino a chi guarda. Il trenino (locomotiva e tre
// vagoni, disegni in public/treno-*.svg) la percorre: ogni pezzo segue la
// curva per conto suo, così il treno si piega mentre gira.
const TRENO_PEZZI = [
  // Un pezzo unico: il treno visto di tre quarti che viene verso chi guarda.
  // file, larghezza, proporzione, punto che poggia sul binario (davanti alle ruote), distanza
  { src: 'public/treno-natale.svg', larg: 1, alt: 330 / 460, ax: 0.4, ay: 0.94, dist: 0, fisso: true },
]

// La ferrovia: una linea morbida a "S" che passa per alcuni punti scelti a
// mano (x da 0 a 1 = larghezza dello schermo, y da 0 = orizzonte a 1 = dove
// si ferma il treno). Entra da sinistra in lontananza, ondeggia a destra e
// a sinistra e arriva al centro davanti a chi guarda. Più è in basso, più è
// vicina e quindi più grande.
const FERROVIA = [
  [0.72, 0], [0.55, 0.5], [0.38, 1], [0.261, 1.35],
]

function percorsoTreno() {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const orizzonte = H * 0.42;
  const arrivo = H * 0.985;
  const L = Math.min(W * 0.95, (H * 0.62) / TRENO_PEZZI[0].alt);
  const P = FERROVIA.map(([x, y]) => ({ x: x * W, y: orizzonte + y * (arrivo - orizzonte) }));
  // Curva morbida che passa per tutti i punti (Catmull-Rom).
  const punti = [];
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[Math.min(P.length - 1, i + 2)];
    for (let k = 0; k < 60; k++) {
      const t = k / 60;
      const t2 = t * t;
      const t3 = t2 * t;
      const c = (a, b, c2, d) => 0.5 * (2 * b + (-a + c2) * t + (2 * a - 5 * b + 4 * c2 - d) * t2 + (-a + 3 * b - 3 * c2 + d) * t3);
      punti.push({ x: c(p0.x, p1.x, p2.x, p3.x), y: c(p0.y, p1.y, p2.y, p3.y) });
    }
  }
  punti.push({ ...P[P.length - 1] });
  // Grandezza (prospettiva), direzione e distanze lungo il binario: sullo
  // schermo e "nel mondo" (dove i pezzi lontani contano di più).
  let lungo = 0;
  let mondo = 0;
  let fermata = 0;
  punti.forEach((p, i) => {
    p.s = 0.05 + 0.95 * Math.max(0, (p.y - orizzonte) / (arrivo - orizzonte));
    const a = punti[Math.max(0, i - 1)];
    const b = punti[Math.min(punti.length - 1, i + 1)];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    p.tx = dx / len;
    p.ty = dy / len;
    if (i) {
      const passo = Math.hypot(p.x - punti[i - 1].x, p.y - punti[i - 1].y);
      lungo += passo;
      mondo += passo / (L * Math.max(0.05, p.s));
    }
    p.lungo = lungo;
    p.mondo = mondo;
    if (p.y <= arrivo + 0.5) fermata = i;
  });
  // Punto del binario a una certa distanza "nel mondo".
  const inMondo = (m) => {
    let lo = 0;
    let hi = punti.length - 1;
    m = Math.max(0, Math.min(punti[hi].mondo, m));
    while (hi - lo > 1) {
      const c = (lo + hi) >> 1;
      if (punti[c].mondo < m) lo = c; else hi = c;
    }
    const a = punti[lo];
    const b = punti[hi];
    const f = b.mondo > a.mondo ? (m - a.mondo) / (b.mondo - a.mondo) : 0;
    const mix = (k) => a[k] + (b[k] - a[k]) * f;
    return { x: mix('x'), y: mix('y'), s: mix('s'), tx: mix('tx'), ty: mix('ty') };
  };
  const partenza = punti.findIndex(p => p.x > -60);
  return { W, H, L, orizzonte, punti, inMondo, partenza, fermata };
}

function veloTrenoHtml(percorso) {
  const { W, H, L, orizzonte, punti } = percorso;
  let stelle = '';
  for (let i = 0; i < 24; i++) {
    stelle += `<span class="velo-stellina" style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 36).toFixed(1)}%;animation-delay:${(Math.random() * 0.8).toFixed(2)}s"></span>`;
  }
  let neve = '';
  for (let i = 0; i < 40; i++) {
    const size = 3 + Math.round(Math.random() * 6);
    neve += `<span class="velo-neve-punto velo-neve-lenta" style="left:${(Math.random() * 100).toFixed(1)}%;width:${size}px;height:${size}px;background:#ffffff;animation-delay:${(Math.random() * 3).toFixed(2)}s"></span>`;
  }

  // Rotaie e traversine: si allargano avvicinandosi; dove il binario
  // corre di lato (lontano) le rotaie si vedono schiacciate.
  const g = 0.16 * L;
  const fuori = (x) => x < -80 || x > W + 80;
  const lato = (p, k) => ({ x: p.x - p.ty * k * p.s, y: p.y + p.tx * k * p.s * 0.35 });
  let rotaie = '';
  let traversine = '';
  let prossima = 0;
  punti.forEach((p, i) => {
    if (!i || fuori(p.x)) return;
    const q = punti[i - 1];
    for (const v of [-g, g]) {
      const A = lato(q, v);
      const B = lato(p, v);
      rotaie += `<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}" stroke-width="${Math.max(0.8, 0.016 * L * p.s).toFixed(2)}"/>`;
    }
    if (p.mondo >= prossima) {
      prossima = p.mondo + 0.1;
      const A = lato(p, -g * 1.45);
      const B = lato(p, g * 1.45);
      traversine += `<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}" stroke-width="${Math.max(1, 0.03 * L * p.s).toFixed(2)}"/>`;
    }
  });

  // Abeti innevati sparsi ai lati della ferrovia (i lontani dietro).
  const abete = (x, y, h) => {
    const w = h * 0.62;
    const piano = (y0, y1, mezzo) => `M${x} ${y0} L${x + mezzo} ${y1} Q${x} ${y1 - h * 0.08} ${x - mezzo} ${y1} Z`;
    return `<g>
      <rect x="${x - h * 0.05}" y="${y - h * 0.08}" width="${h * 0.1}" height="${h * 0.1}" fill="#5a3620"/>
      <path d="${piano(y - h * 0.55, y - h * 0.06, w / 2)}" fill="#1f5c3c"/>
      <path d="${piano(y - h * 0.8, y - h * 0.32, w * 0.4)}" fill="#24693f"/>
      <path d="${piano(y - h, y - h * 0.58, w * 0.28)}" fill="#2f7a4d"/>
      <path d="M${x - w * 0.18} ${y - h * 0.62} Q${x} ${y - h * 0.68} ${x + w * 0.2} ${y - h * 0.6} M${x - w * 0.32} ${y - h * 0.36} Q${x} ${y - h * 0.42} ${x + w * 0.34} ${y - h * 0.34} M${x - w * 0.46} ${y - h * 0.1} Q${x} ${y - h * 0.16} ${x + w * 0.48} ${y - h * 0.08}" stroke="#ffffff" stroke-width="${Math.max(1.2, h * 0.05)}" stroke-linecap="round" fill="none"/>
      <path d="M${x - w * 0.1} ${y - h * 0.93} L${x} ${y - h} L${x + w * 0.1} ${y - h * 0.93} Z" fill="#ffffff"/>
    </g>`;
  };
  const alberi = [];
  for (let i = 0; i < 30; i++) {
    const fy = ((i * 7919) % 1000) / 1000;
    const x = (((i * 104729) % 1000) / 1000) * W * 1.1 - W * 0.05;
    const y = orizzonte + 4 + Math.pow(fy, 1.6) * (H - orizzonte) * 0.75;
    const s = 0.05 + 0.95 * (y - orizzonte) / (H * 0.985 - orizzonte);
    const vicino = punti.some(p => Math.abs(p.y - y) < 0.3 * L * s && Math.abs(p.x - x) < 0.7 * L * s);
    if (!vicino) alberi.push({ x, y, h: 0.45 * L * s + 8 });
  }
  const alberiHtml = alberi.sort((m, n) => m.y - n.y).map(t => abete(t.x, t.y, t.h)).join('');

  const pezzi = TRENO_PEZZI.map((pz, i) => ({ ...pz, i })).reverse().map(pz =>
    `<img class="velo-treno-img" data-pezzo="${pz.i}" src="${pz.src}" alt="" style="width:${(pz.larg * L).toFixed(0)}px;height:${(pz.larg * L * pz.alt).toFixed(0)}px;opacity:0">`).join('');

  return `
    <div class="velo-cielo">${stelle}</div>
    <svg class="velo-scena" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <path d="M0 ${orizzonte + 10} C${W * 0.2} ${orizzonte - 40} ${W * 0.35} ${orizzonte - 30} ${W * 0.5} ${orizzonte - 6} C${W * 0.65} ${orizzonte + 14} ${W * 0.8} ${orizzonte - 44} ${W} ${orizzonte - 8} L${W} ${H} L0 ${H} Z" fill="#e6eef0"/>
      <rect x="0" y="${orizzonte + 6}" width="${W}" height="${H}" fill="#fff8ee"/>
      <g stroke="#8a6a55" stroke-linecap="round">${traversine}</g>
      <g stroke="#6b5a55" stroke-linecap="round">${rotaie}</g>
      ${alberiHtml}
    </svg>
    ${pezzi}
    <div class="velo-cielo">${neve}</div>`;
}

// Fa percorrere il binario al trenino: parte piano, scorre e rallenta
// dolcemente arrivando, grande, al centro davanti a chi guarda.
function animaTreno(velo, percorso) {
  const { L, punti, inMondo, partenza, fermata } = percorso;
  const N = 160;
  const da = punti[partenza].lungo;
  const a = punti[fermata].lungo;
  // Distanza "nel mondo" della locomotiva quando ha percorso una certa
  // strada sullo schermo: il movimento sullo schermo resta morbido e
  // continuo, i vagoni restano agganciati alla giusta distanza.
  const mondoA = (lungo) => {
    const i = Math.max(1, punti.findIndex(p => p.lungo >= lungo));
    const p0 = punti[i - 1];
    const p1 = punti[i];
    const f = (lungo - p0.lungo) / ((p1.lungo - p0.lungo) || 1);
    return p0.mondo + (p1.mondo - p0.mondo) * f;
  };
  velo.querySelectorAll('.velo-treno-img').forEach(img => {
    const pz = TRENO_PEZZI[Number(img.dataset.pezzo)];
    const w = pz.larg * L;
    const h = w * pz.alt;
    const fotogrammi = [];
    for (let k = 0; k <= N; k++) {
      const u = k / N;
      // Parte deciso e rallenta dolcemente arrivando.
      const dolce = (1 - Math.cos(u * Math.PI)) / 2;
      const p = inMondo(mondoA(da + dolce * (a - da)) - pz.dist);
      // Inclinazione morbida secondo la curva; quando il binario va verso
      // sinistra il pezzo si gira, quando viene verso di noi si stringe.
      const angolo = (Math.atan2(p.ty, Math.abs(p.tx)) * 180) / Math.PI;
      const giro = pz.fisso ? 0 : Math.max(-9, Math.min(12, angolo * 0.2)) * Math.sign(p.tx || 1);
      const lato = p.tx / (Math.hypot(p.tx, p.ty * 1.6) || 1);
      const verso = pz.fisso || lato >= 0 ? 1 : -1;
      const stretto = pz.fisso ? 1 : 0.55 + 0.45 * Math.abs(lato);
      fotogrammi.push({
        transform: `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) rotate(${giro.toFixed(2)}deg) scale(${(p.s * stretto * verso).toFixed(4)}, ${p.s.toFixed(4)}) translate(${(-pz.ax * w).toFixed(1)}px, ${(-pz.ay * h).toFixed(1)}px)`,
      });
    }
    img.style.opacity = '1';
    img.animate(fotogrammi, { duration: 4600, delay: 150, fill: 'both', easing: 'linear' });
  });
}

if (NATALE) TRENO_PEZZI.forEach(pz => { new Image().src = pz.src; });

// Natale, tra l'elenco delle categorie e una categoria: schermo rosso,
// un grande fiocco di neve che si disegna al centro (bianco e oro), tanti
// fiocchi di neve che scendono girando e un cumulo di neve dal basso.
function veloNeveHtml() {
  const bracci = 'M0 -60 L0 60 M-52 -30 L52 30 M-52 30 L52 -30 ' +
    'M-14 -46 L0 -32 L14 -46 M-14 46 L0 32 L14 46 ' +
    'M-47 -11 L-28 -16 L-33 -35 M47 11 L28 16 L33 35 ' +
    'M-47 11 L-28 16 L-33 35 M47 -11 L28 -16 L33 -35';
  let neve = '';
  for (let i = 0; i < 26; i++) {
    const x = (Math.random() * 100).toFixed(1);
    const size = 12 + Math.round(Math.random() * 20);
    const ritardo = (Math.random() * 0.45).toFixed(2);
    neve += `<svg class="velo-fiocchetto" viewBox="-70 -70 140 140" style="left:${x}%;width:${size}px;animation-delay:${ritardo}s"><path d="${bracci}"/></svg>`;
  }
  for (let i = 0; i < 30; i++) {
    const x = (Math.random() * 100).toFixed(1);
    const size = 4 + Math.round(Math.random() * 6);
    const ritardo = (Math.random() * 0.4).toFixed(2);
    neve += `<span class="velo-neve-punto" style="left:${x}%;width:${size}px;height:${size}px;background:#ffffff;animation-delay:${ritardo}s"></span>`;
  }
  return `
    <div class="velo-neve">${neve}</div>
    <svg class="velo-fiocco-disegnato" viewBox="-70 -70 140 140">
      <path class="tratto-1" pathLength="100" d="${bracci}"/>
      <path class="tratto-2" pathLength="100" d="${bracci}"/>
    </svg>
    <svg class="velo-cumulo" viewBox="0 0 1200 160" preserveAspectRatio="none">
      <path class="cumulo-1" d="M0 70 C150 20 300 20 450 60 C600 100 750 30 900 50 C1050 70 1130 40 1200 55 L1200 160 L0 160 Z"/>
      <path class="cumulo-2" d="M0 105 C180 70 330 120 520 95 C700 70 860 125 1020 100 C1110 88 1160 95 1200 100 L1200 160 L0 160 Z"/>
    </svg>`;
}

function avviaTransizioneCategoria(transizione) {
  if (!transizione) return;
  const { copia, topSchermo, verso, inverno } = transizione;
  copia.style.top = `${topSchermo - app.getBoundingClientRect().top}px`;
  app.prepend(copia);
  app.classList.add('in-transizione');

  document.querySelector('.velo-transizione')?.remove();
  const velo = document.createElement('div');
  velo.className = `velo-transizione ${verso}${inverno && !NATALE ? ' inverno' : ''}`;
  velo.setAttribute('aria-hidden', 'true');

  if (NATALE) {
    velo.classList.add(inverno ? 'treno' : 'neve-natale');
    const percorso = inverno ? percorsoTreno() : null;
    velo.innerHTML = inverno ? veloTrenoHtml(percorso) : veloNeveHtml();
    document.body.appendChild(velo);
    if (inverno) animaTreno(velo, percorso);
    rimuoviVelo(velo, copia);
    return;
  }

  if (inverno) {
    velo.innerHTML = veloInvernoHtml();
    document.body.appendChild(velo);
    rimuoviVelo(velo, copia);
    return;
  }

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
  rimuoviVelo(velo, copia);
}

// Quando il viola copre tutto, la copia della pagina vecchia non serve più;
// il velo si toglie da solo alla fine della sua animazione.
function rimuoviVelo(velo, copia) {
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
  const inCategoria = path.startsWith('/galleria/') || path.startsWith('/natale/');
  const inGalleria = path === '/galleria' || path.startsWith('/galleria/');
  const inNovita = path === '/novita';
  const inOfferte = path === '/offerte';
  const inNatale = path === '/natale' || path.startsWith('/natale/');

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
  } else if (path.startsWith('/natale/')) {
    const sezione = NATALE_SEZIONI.find(s => s.id === path.slice('/natale/'.length));
    html = sezione ? galleriaSezioneHtml(sezione, { href: '#/natale', testo: 'Torna a Natale' }) : natalePaginaHtml();
  } else if (inNatale) {
    html = natalePaginaHtml();
  } else {
    html = pages['/']();
  }

  const transizione = preparaTransizioneCategoria(path);
  app.innerHTML = html;
  pathPrecedente = path;
  updateActiveNav(inGalleria ? '/galleria' : (inNovita ? '/novita' : (inOfferte ? '/offerte' : (inNatale ? '/natale' : '/'))));
  const theme = inGalleria || inNovita || inOfferte || inNatale ? 'secondary' : 'home';
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
