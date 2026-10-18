// Configurazione dei prodotti mostrati nella pagina Prodotti.
//
// Per aggiungere un prodotto: inseriscilo nell'array `prodotti` della sezione
// giusta (o creane una nuova dentro SEZIONI_GALLERIA). Ogni prodotto ha un
// titolo, un prezzo (numero in euro, oppure null se ancora da definire) e un
// elenco di immagini — anche una sola, oppure più di una se il prodotto va
// mostrato da più angolazioni o in più colori/varianti. I percorsi delle
// immagini sono relativi alla cartella del sito (es. "gallery/astucci/giallo-1.png").
//
// Le sezioni diverse da "Astucci" sono state generate automaticamente
// raggruppando le foto nella cartella gallery/ per nome file: i prezzi sono
// a null ("Prezzo su richiesta") in attesa di essere inseriti a mano.

const SEZIONI_GALLERIA = [
  {
    id: 'astucci',
    titolo: 'Astucci',
    prodotti: [
      {
        titolo: 'Astuccio one time - giallo',
        prezzo: 36.00,
        immagini: ['gallery/astucci/giallo-1.png', 'gallery/astucci/giallo-2.png', 'gallery/astucci/giallo-3.png', 'gallery/astucci/giallo-4.png', 'gallery/astucci/giallo-5.png', 'gallery/astucci/giallo-6.png'],
      },
      {
        titolo: ' Astuccio one time - fucsia',
        prezzo: 36.00,
        immagini: ['gallery/astucci/fucsia-1.png'],
      },
      {
        titolo: 'Astuccio one time— Verde Militare',
        prezzo: 36.00,
        immagini: ['gallery/astucci/verde-1.png'],
      },
      {
        titolo: 'Astuccio one time — Blu Notte',
        prezzo: 36.00,
        immagini: ['gallery/astucci/blu-1.png'],
      },
      {
        titolo: 'Astuccio one time — Rosa',
        prezzo: 36.00,
        immagini: ['gallery/astucci/rosa-1.png'],
      },
      {
        titolo: 'Astuccio one time — Rosa Salmone',
        prezzo: 36.00,
        immagini: ['gallery/astucci/rosa-salmone-1.png'],
      },
      {
        titolo: 'Astuccio one time — Nero',
        prezzo: 36.00,
        immagini: ['gallery/astucci/nero-1.png'],
      },
      {
        titolo: 'Astuccio one time — Lilla',
        prezzo: 36.00,
        immagini: ['gallery/astucci/lilla-1.png'],
      },
      {
        titolo: 'Astuccio one time — Nero glitterato',
        prezzo: 34.90,
        immagini: ['gallery/astucci/glamour-1.png', 'gallery/astucci/glmaour-3.png', 'gallery/astucci/glamour-4.png'],
      },
      {
        titolo: 'Astuccio one time — Crazy Girl',
        prezzo: 34.90,
        immagini: ['gallery/astucci/crazy-girl-1.png', 'gallery/astucci/crazy-girl-2.png', 'gallery/astucci/triplo-2.png', 'gallery/astucci/crazy-girl-3.png', 'gallery/astucci/crazy-girl-4.png', 'gallery/astucci/crazy-girl-5.png'],
      },
      {
        titolo: 'Astuccio Triplo — Donut & Diamond',
        prezzo: 22.90,
        immagini: ['gallery/astucci/crazy-1.png'],
      },
      {
        titolo: 'Bustona Triangolare — Crazy Girl',
        prezzo: 17.90,
        immagini: ['gallery/astucci/bustona-1.png', 'gallery/astucci/bustona-2.png', 'gallery/astucci/bustona-3.png'],
      },
      {
        titolo: 'Astuccio Ovale Glitter — nero',
        prezzo: 17.90,
        immagini: ['gallery/astucci/oval-glam-1.png', 'gallery/astucci/oval-glam-2.png'],
      },
      {
        titolo: 'Astuccio Ovale Glitter — Rosa',
        prezzo: 17.90,
        immagini: ['gallery/astucci/oval-1.png', 'gallery/astucci/oval-2.png'],
      },
      {
        titolo: 'Astuccio Rettangolare Glitter — Rosa',
        prezzo: 15.00,
        immagini: ['gallery/astucci/glitter-rosa-1.png'],
      },
      {
        titolo: 'Astuccio one time glitterato — Rosa',
        prezzo: 34.90,
        immagini: ['gallery/astucci/glam-1.png', 'gallery/astucci/glam-2.png', 'gallery/astucci/glam-3.png', 'gallery/astucci/glam-4.png'],
      },
      {
        titolo: 'Astuccio triplo glitterato — Nero',
        prezzo: 22.90,
        immagini: ['gallery/astucci/nero-glitter-1.png', 'gallery/astucci/nero-glitter-2.png', 'gallery/astucci/nero-glitter-3.png', 'gallery/astucci/nero-glitter-4.png'],
      },
      {
        titolo: 'Bustona Glitter — Azzurro',
        prezzo: 17.90,
        immagini: ['gallery/astucci/bustona-azzurra-1.png'],
      },
      {
        titolo: 'Astuccio bustina — Nero',
        prezzo: 11.90,
        immagini: ['gallery/astucci/nero-bustina-1.png'],
      },
      {
        titolo: 'Astuccio bustina — Grigio',
        prezzo: 11.90,
        immagini: ['gallery/astucci/grigio-1.png'],
      },
      {
        titolo: 'Astuccio bustina — Celeste',
        prezzo: 11.90,
        immagini: ['gallery/astucci/bustina-celeste-1.png'],
      },
      {
        titolo: 'Astuccio bustina — Verde acqua',
        prezzo: 11.90,
        immagini: ['gallery/astucci/bustina-verde-1.png'],
      },
      {
        titolo: 'Astuccio bauletto — Ocra',
        prezzo: 15.90,
        immagini: ['gallery/astucci/ocra-1.png'],
      },
      {
        titolo: 'Astuccio bauletto — Celeste',
        prezzo: 15.90,
        immagini: ['gallery/astucci/celeste-1.png'],
      },
      {
        titolo: 'Astuccio bauletto silicone — Verde',
        prezzo: 15.00,
        immagini: ['gallery/astucci/fiori-1.png', 'gallery/astucci/fiori-2.png'],
      },
      {
        titolo: 'Astuccio bustina silicone  — Verde',
        prezzo: 12.00,
        immagini: ['gallery/astucci/fiori-sottile-1.png', 'gallery/astucci/fiori-sottile-2.png'],
      },
      {
        titolo: 'Astuccio bauletto silicone— Blu',
        prezzo: 15.00,
        immagini: ['gallery/astucci/bauletto-1.png', 'gallery/astucci/bauletto-2.png'],
      },
      {
        titolo: 'Astuccio Silicone — Blu',
        prezzo: 14.90,
        immagini: ['gallery/astucci/silicone-1.png'],
      },
      {
        titolo: 'Astuccio Zoo — Bubble Tea',
        prezzo: 12.00,
        immagini: ['gallery/astucci/bubble-1.png', 'gallery/astucci/bubble-2.png'],
      },
      {
        titolo: 'Astuccio Zoo — Bubble Tea Coniglietto',
        prezzo: 12.00,
        immagini: ['gallery/astucci/bubble-tea-1.png'],
      },
      {
        titolo: 'Astuccio bauletto — Nero Lucido',
        prezzo: 15.90,
        immagini: ['gallery/astucci/nero-1 (2).png'],
      },
    ],
  },
  {
    id: 'agende',
    titolo: 'Agende',
    prodotti: [
      {
        titolo: 'Agenda bigiornaliera con matita',
        prezzo: 10.00,
        immagini: ['gallery/agende/fucsia-1.png', 'gallery/agende/fucsia-2.png', 'gallery/agende/fucsia-3.png', 'gallery/agende/fucsia-4.png'],
      },
      {
        titolo: 'Agenda giornaliera con copertina rigida',
        prezzo: 15.00,
        immagini: ['gallery/agende/gialla-1.png', 'gallery/agende/gialla-2.png', 'gallery/agende/gialla-3.png', 'gallery/agende/gialla-4.png'],
      },
      {
        titolo: 'Agenda profumata',
        prezzo: 9.00,
        immagini: ['gallery/agende/juice-1.png', 'gallery/agende/juice-2.png', 'gallery/agende/juice-3.png', 'gallery/agende/juice-4.png', 'gallery/agende/juice-5.png', 'gallery/agende/juice-6.png'],
      },
      {
        titolo: 'Agenda giornaliera con penna',
        prezzo: 20.00,
        immagini: ['gallery/agende/marrone-1.png', 'gallery/agende/marrone-2.png', 'gallery/agende/marrone-3.png'],
      },
      {
        titolo: 'Planning da tavolo settimanale',
        prezzo: 10.00,
        immagini: ['gallery/agende/planning-1.png', 'gallery/agende/planning-2.png', 'gallery/agende/planning-3.png'],
      },
      {
        titolo: 'Agenda profumata piccola',
        prezzo: 7.00,
        immagini: ['gallery/agende/prof-1.png', 'gallery/agende/prof-2.png', 'gallery/agende/prof-3.png'],
      },
      {
        titolo: 'Agenda giornaliera con penna',
        prezzo: 17.00,
        immagini: ['gallery/agende/rossa-1.png', 'gallery/agende/rossa-2.png', 'gallery/agende/rossa-3.png', 'gallery/agende/rossa-4.png', 'gallery/agende/rossa-5.png', 'gallery/agende/rossa-6.png', 'gallery/agende/rossa-7.png', 'gallery/agende/rossa-8.png'],
      },
    ],
  },
  {
    id: 'borracce',
    titolo: 'Borracce',
    prodotti: [
      {
        titolo: 'Borraccia con telo mare',
        prezzo: 19.90,
        immagini: ['gallery/borracce/16.png'],
      },
      {
        titolo: 'Borraccia con tappo - 500 ml',
        prezzo: 12.00,
        immagini: ['gallery/borracce/borraccia-1.png', 'gallery/borracce/borraccia-2.png', 'gallery/borracce/borraccia-3.png', 'gallery/borracce/borraccia-4.png', 'gallery/borracce/borraccia-5.png'],
      },
      {
        titolo: 'Borraccia Tinta unita Zoo - 550 ml',
        prezzo: 16.50,
        immagini: ['gallery/borracce/corn-1.png'],
      },
      {
        titolo: 'Borraccia Kids - 400 ml',
        prezzo: 15.00,
        immagini: ['gallery/borracce/kids-1.png'],
      },
      {
        titolo: 'Borraccia a scatto - 750 ml',
        prezzo: 20.00,
        immagini: ['gallery/borracce/metallo-1.png', 'gallery/borracce/metallo-2.png', 'gallery/borracce/metallo-3.png', 'gallery/borracce/metallo-4.png', 'gallery/borracce/metallo-5.png'],
      },
      {
        titolo: 'Borraccia Tinta unita kids - 400 ml',
        prezzo: 16.00,
        immagini: ['gallery/borracce/rosa-1.png', 'gallery/borracce/rosa-2.png', 'gallery/borracce/rosa-3.png'],
      },
    ],
  },
  {
    id: 'zaini',
    titolo: 'Zaini',
    prodotti: [
      {
        titolo: 'Zainetto crazy girl — Asilo',
        prezzo: 29.90,
        immagini: ['gallery/zaini/asilo-1.png', 'gallery/zaini/asilo-2.png'],
      },
      {
        titolo: 'Zaino monocolore - Azzurro',
        prezzo: 49.90,
        immagini: ['gallery/zaini/azzurro-1.png', 'gallery/zaini/azzurro-2.png'],
      },
      {
        titolo: 'Zainetto crazy girl',
        prezzo: 29.90,
        immagini: ['gallery/zaini/crazy-1.png', 'gallery/zaini/crazy-2.png'],
      },
      {
        titolo: 'Zainetto 2 in 1 - con tracolla termica staccabile',
        prezzo: 24.90,
        immagini: ['gallery/zaini/doppio-1.png', 'gallery/zaini/doppio-2.png', 'gallery/zaini/doppio-3.png'],
      },
      {
        titolo: 'Zaino Tinta unita Zoo - elefante',
        prezzo: 19.90,
        immagini: ['gallery/zaini/elefante-1.png', 'gallery/zaini/elefante-2.png'],
      },
      {
        titolo: 'Zainetto 2 in 1 - con tracolla termica staccabile',
        prezzo: 24.90,
        immagini: ['gallery/zaini/foca-1.png', 'gallery/zaini/foca-2.png', 'gallery/zaini/foca-3.png'],
      },
      {
        titolo: 'Zainetto Tinta unita Zoo — Giraffa',
        prezzo: 19.90,
        immagini: ['gallery/zaini/giraffa-1.png', 'gallery/zaini/giraffa-2.png', 'gallery/zaini/giraffa-3.png'],
      },
      {
        titolo: 'Zaino crazy girl',
        prezzo: 54.90,
        immagini: ['gallery/zaini/girl-1.png', 'gallery/zaini/girl-2.png', 'gallery/zaini/girl-3.png'],
      },
      {
        titolo: 'Zaino glamour glitterato - Nero e rosa',
        prezzo: 54.90,
        immagini: ['gallery/zaini/glitter-1.png', 'gallery/zaini/glitter-2.png'],
      },
      {
        titolo: 'Zainetto Tinta unita Zoo — Ippopotamo',
        prezzo: 19.90,
        immagini: ['gallery/zaini/ippo-1.png', 'gallery/zaini/ippo-2.png', 'gallery/zaini/ippo-3.png'],
      },
      {
        titolo: 'Zainetto Tinta unita Zoo — Dinosauro',
        prezzo: 19.90,
        immagini: ['gallery/zaini/mostro-1.png', 'gallery/zaini/mostro-2.png'],
      },
      {
        titolo: 'Zaino monocolore— Rosso',
        prezzo: 49.90,
        immagini: ['gallery/zaini/rosso-1.png', 'gallery/zaini/rosso-2.png'],
      },
      {
        titolo: 'Zaino Stuble guys',
        prezzo: 54.90,
        immagini: ['gallery/zaini/stuble-1.png'],
      },
      {
        titolo: 'Zainetto Tinta unita Zoo — Tigre',
        prezzo: 19.90,
        immagini: ['gallery/zaini/tigre-1.png', 'gallery/zaini/tigre-2.png', 'gallery/zaini/tigre-3.png'],
      },
      {
        titolo: 'Zaino Tinta unita Zoo - Unicorn',
        prezzo: 19.90,
        immagini: ['gallery/zaini/unicorn-1.png', 'gallery/zaini/unicorn-2.png'],
      },
    ],
  },
  {
    id: 'idee-regalo',
    titolo: 'Idee regalo',
    copertina: 'gallery/set e gift box/misto-1.png',
    prodotti: [
      {
        titolo: 'Borraccia con telo mare',
        prezzo: 19.90,
        immagini: ['gallery/set e gift box/borraccia-1.png'],
      },
      {
        titolo: 'Desk set',
        prezzo: 14.00,
        immagini: ['gallery/set e gift box/desk-1.png'],
      },
      {
        titolo: 'Forbici per la scuola',
        prezzo: 2.20,
        immagini: ['gallery/set e gift box/forbici-1.png'],
      },
      {
        titolo: 'Metro da colorare - con scatola pastelli x12',
        prezzo: 10.00,
        immagini: ['gallery/set e gift box/metro-1.png', 'gallery/set e gift box/metro-2.png', 'gallery/set e gift box/metro-3.png', 'gallery/set e gift box/metro-4.png'],
      },
      {
        titolo: 'Set scrivania',
        prezzo: 8.00,
        immagini: ['gallery/set e gift box/misto-1.png'],
      },
      {
        titolo: 'Postit Bubble tea ',
        prezzo: 4.50,
        immagini: ['gallery/set e gift box/postit-1.png', 'gallery/set e gift box/postit-2.png', 'gallery/set e gift box/postit-3.png'],
      },
      {
        titolo: '10 penne Roller gel profumate',
        prezzo: 9.90,
        immagini: ['gallery/set e gift box/roller-fruit-1.png'],
      },
      {
        titolo: 'Astuccio rotolo - colori + matita',
        prezzo: 18.00,
        immagini: ['gallery/set e gift box/rotolo-1.png', 'gallery/set e gift box/rotolo-2.png'],
      },
      {
        titolo: 'Scotch set',
        prezzo: 7.00,
        immagini: ['gallery/set e gift box/scotch-1.png'],
      },
      {
        titolo: '10 penne roller gel glitterate',
        prezzo: 9.90,
        immagini: ['gallery/set e gift box/set-1.png'],
      },
      {
        titolo: 'Set 6 penne cancellabili',
        prezzo: 10.00,
        immagini: ['gallery/set e gift box/set-penne-1.png'],
      },
      {
        titolo: 'Atuccio con tavoletta LCD',
        prezzo: 10.00,
        immagini: ['gallery/set e gift box/tavoletta-1.png', 'gallery/set e gift box/tavoletta-2.png', 'gallery/set e gift box/tavoletta-3.png'],
      },
      {
        titolo: 'Timbrini set x2',
        prezzo: 3.00,
        immagini: ['gallery/set e gift box/timbrini-1.png'],
      },
      {
        titolo: 'Tovagliette da colazione - Animals',
        prezzo: 4.90,
        immagini: ['gallery/set e gift box/tovaglietta-1.png', 'gallery/set e gift box/tovaglietta-2.png', 'gallery/set e gift box/tovaglietta-5.png'],
      },
      {
        titolo: 'Tovagliette da colazione - Animals 2  ',
        prezzo: 4.90,
        immagini: ['gallery/set e gift box/tovagliettta-3.png', 'gallery/set e gift box/tovagliettta-4.png'],
      },
    ],
  },
  {
    id: 'calcolatrici',
    titolo: 'Calcolatrici',
    prodotti: [
      {
        titolo: 'Calcolatrice — Classica',
        prezzo: 9.00,
        immagini: ['gallery/calcolatrici/classica-1.png', 'gallery/calcolatrici/classica-2.png'],
      },
      {
        titolo: 'Calcolatrice — Scientifica',
        prezzo: 18.00,
        immagini: ['gallery/calcolatrici/scient-1.png', 'gallery/calcolatrici/scient-2.png', 'gallery/calcolatrici/scient-3.png'],
      },
      {
        titolo: 'Calcolatrice — Tinta unita Zoo',
        prezzo: 7.00,
        immagini: ['gallery/calcolatrici/zoo-1.png', 'gallery/calcolatrici/zoo-2.png', 'gallery/calcolatrici/zoo-3.png', 'gallery/calcolatrici/zoo-4.png'],
      },
      {
        titolo: 'Calcolatrice — con Tavoletta LCD',
        prezzo: 18.00,
        immagini: ['gallery/calcolatrici/zoo-1 (2).png'],
      },
    ],
  },
  {
    id: 'colla',
    titolo: 'Colla',
    prodotti: [
      {
        titolo: 'Colla — Classica',
        prezzo: 1.50,
        immagini: ['gallery/colla/classica-1.png'],
      },
      {
        titolo: 'Colla — Grande',
        prezzo: 2.00,
        immagini: ['gallery/colla/mega-1.png'],
      },
      {
        titolo: 'Colla — Piccola',
        prezzo: 1.20,
        immagini: ['gallery/colla/piccola-1.png'],
      },
      {
        titolo: 'Colla twist — colla + correttore',
        prezzo: 2.50,
        immagini: ['gallery/colla/twist-1.png'],
      },
      {
        titolo: 'Colla — Vinilica',
        prezzo: 2.00,
        immagini: ['gallery/colla/vinilica-1.png'],
      },
      {
        titolo: 'Colla — Bubble tea',
        prezzo: 3.50,
        immagini: ['gallery/colla/zoo-2.png'],
      },
    ],
  },
  {
    id: 'compassi',
    titolo: 'Compassi',
    prodotti: [
      {
        titolo: 'Compasso colorato',
        prezzo: 5.00,
        immagini: ['gallery/compassi/classico-1.png', 'gallery/compassi/classico-2.png'],
      },
      {
        titolo: 'Compasso con balustrone - Architetto colorato',
        prezzo: 10.00,
        immagini: ['gallery/compassi/compasso-1.png', 'gallery/compassi/compasso-2.png'],
      },
      {
        titolo: 'Compasso ',
        prezzo: 5.00,
        immagini: ['gallery/compassi/normale-1.png'],
      },
    ],
  },
  {
    id: 'correttori',
    titolo: 'Correttori',
    prodotti: [
      {
        titolo: 'Correttore slim — Chiocciola',
        prezzo: 2.50,
        immagini: ['gallery/correttori/chiocciola-1.png'],
      },
      {
        titolo: 'Correttore — Slurpy',
        prezzo: 3.00,
        immagini: ['gallery/correttori/slurpy-1.png', 'gallery/correttori/slurpy-2.png'],
      },
      {
        titolo: 'Correttore Twist - correttore + colla',
        prezzo: 2.50,
        immagini: ['gallery/correttori/twist-1.png'],
      },
      {
        titolo: 'Correttore — Vintage',
        prezzo: 2.50,
        immagini: ['gallery/correttori/vintage-1.png', 'gallery/correttori/vintage-2.png'],
      },
      {
        titolo: 'Correttore — Zoo',
        prezzo: 3.50,
        immagini: ['gallery/correttori/zoo-1.png', 'gallery/correttori/zoo-2.png'],
      },
    ],
  },
  {
    id: 'evidenziatori',
    titolo: 'Evidenziatori',
    copertina: 'gallery/evidenziatori/set-1.png',
    prodotti: [
      {
        titolo: 'Evidenziatore ',
        prezzo: 1.00,
        immagini: ['gallery/evidenziatori/evi-1.png', 'gallery/evidenziatori/evi-2.png', 'gallery/evidenziatori/evi-3.png', 'gallery/evidenziatori/evi-4.png', 'gallery/evidenziatori/evi-5.png', 'gallery/evidenziatori/evi-6.png', 'gallery/evidenziatori/evi-7.png', 'gallery/evidenziatori/evi-8.png', 'gallery/evidenziatori/evi-9.png', 'gallery/evidenziatori/evi-10.png', 'gallery/evidenziatori/evi-11.png', 'gallery/evidenziatori/evi-12.png', 'gallery/evidenziatori/evi-13.png', 'gallery/evidenziatori/evi-14.png', 'gallery/evidenziatori/evi-15.png', 'gallery/evidenziatori/evi-16.png', 'gallery/evidenziatori/evi-17.png', 'gallery/evidenziatori/evi-18.png'],
      },
      {
        titolo: 'Evidenziatore — Glitterato',
        prezzo: 1.50,
        immagini: ['gallery/evidenziatori/glitter-1.png', 'gallery/evidenziatori/glitter-2.png', 'gallery/evidenziatori/glitter-3.png', 'gallery/evidenziatori/glitter-4.png', 'gallery/evidenziatori/glitter-5.png', 'gallery/evidenziatori/glitter-6.png'],
      },
      {
        titolo: 'Evidenziatore x4 — Bubble tea',
        prezzo: 12.00,
        immagini: ['gallery/evidenziatori/set-1.png'],
      },
    ],
  },
  {
    id: 'gomme',
    titolo: 'Gomme',
    prodotti: [
      {
        titolo: 'Gomma Pelikan - bicolore',
        prezzo: 1.00,
        immagini: ['gallery/gomme/bicolor-1.png'],
      },
      {
        titolo: 'Gomma — Classica',
        prezzo: 1.00,
        immagini: ['gallery/gomme/classica-1.png'],
      },
      {
        titolo: 'Gomma matitone',
        prezzo: 1.20,
        immagini: ['gallery/gomme/matita-1.png'],
      },
      {
        titolo: 'Gomma gigante ',
        prezzo: 2.00,
        immagini: ['gallery/gomme/mega-1.png'],
      },
      {
        titolo: 'Gomma pane',
        prezzo: 1.00,
        immagini: ['gallery/gomme/pane-1.png'],
      },
      {
        titolo: 'Gomma a scatto',
        prezzo: 2.00,
        immagini: ['gallery/gomme/penna-1.png'],
      },
      {
        titolo: 'Gomma Pelikan per penna',
        prezzo: 1.00,
        immagini: ['gallery/gomme/ruota-1.png'],
      },
      {
        titolo: 'Gomma Staedtler',
        prezzo: 1.20,
        immagini: ['gallery/gomme/sta-1.png'],
      },
      {
        titolo: 'Gomma 2 in 1',
        prezzo: 2.00,
        immagini: ['gallery/gomme/zoo-1.png'],
      },
    ],
  },
  {
    id: 'marker',
    titolo: 'Marker',
    prodotti: [
      {
        titolo: 'Pennarello Bic lavagna  — punta fina',
        prezzo: 1.50,
        immagini: ['gallery/marker/bic-1.png', 'gallery/marker/bic-2.png', 'gallery/marker/bic-3.png', 'gallery/marker/bic-4.png'],
      },
      {
        titolo: 'Pennarello Pilot 0.5 mm',
        prezzo: 4.00,
        immagini: ['gallery/marker/fino-1.png', 'gallery/marker/fino-2.png'],
      },
      {
        titolo: 'Pennarello Bic Lavagna - punta piatta',
        prezzo: 1.50,
        immagini: ['gallery/marker/lavagna-1.png', 'gallery/marker/lavagna-2.png'],
      },
      {
        titolo: 'Marker multisuperficie',
        prezzo: 2.00,
        immagini: ['gallery/marker/marker-1.png', 'gallery/marker/marker-2.png', 'gallery/marker/marker-3.png'],
      },
      {
        titolo: 'Marker — Permanent (S;F;M)',
        prezzo: 2.00,
        immagini: ['gallery/marker/permanent-1.png'],
      },
      {
        titolo: 'Marker permanent - piatto',
        prezzo: 2.00,
        immagini: ['gallery/marker/piatto-1.png', 'gallery/marker/piatto-2.png', 'gallery/marker/piatto-3.png'],
      },
      {
        titolo: 'Marker Staedtler permanent - M',
        prezzo: 2.00,
        immagini: ['gallery/marker/staedtler-1.png', 'gallery/marker/staedtler-2.png'],
      },
      {
        titolo: 'Marker permanent— Tondo',
        prezzo: 2.00,
        immagini: ['gallery/marker/tondo-1.png', 'gallery/marker/tondo-2.png', 'gallery/marker/tondo-3.png'],
      },
      {
        titolo: 'Marker Tratto - piatto e tondo',
        prezzo: 2.00,
        immagini: ['gallery/marker/tratto-1.png', 'gallery/marker/tratto-2.png', 'gallery/marker/tratto-3.png'],
      },
      {
        titolo: 'Pennarello — Trattopen',
        prezzo: 1.30,
        immagini: ['gallery/marker/trattopen-1.png', 'gallery/marker/trattopen-2.png', 'gallery/marker/trattopen-3.png'],
      },
    ],
  },
  {
    id: 'matite',
    titolo: 'Matite',
    prodotti: [
      {
        titolo: 'Matita — Architetto',
        prezzo: 1.00,
        immagini: ['gallery/matite/architetto-1.png', 'gallery/matite/architetto-2.png', 'gallery/matite/architetto-3.png', 'gallery/matite/architetto-4.png', 'gallery/matite/architetto-5.png', 'gallery/matite/architetto-6.png', 'gallery/matite/architetto-7.png'],
      },
      {
        titolo: 'Matita HB— Bic',
        prezzo: 1.00,
        immagini: ['gallery/matite/bic-1.png'],
      },
      {
        titolo: 'Matita Architetto — Big',
        prezzo: 2.00,
        immagini: ['gallery/matite/big-1.png'],
      },
      {
        titolo: 'Matita Tinta unita — Classic',
        prezzo: 1.00,
        immagini: ['gallery/matite/classic-1.png', 'gallery/matite/classic-2.png', 'gallery/matite/classic-3.png'],
      },
      {
        titolo: 'Matita Tinta unita — Glitter',
        prezzo: 2.00,
        immagini: ['gallery/matite/glitter-1.png'],
      },
      {
        titolo: 'Matita Tinta unita — Personaggio',
        prezzo: 1.50,
        immagini: ['gallery/matite/personaggio-1.png', 'gallery/matite/personaggio-2.png'],
      },
      {
        titolo: 'Matita Architetto— Precision',
        prezzo: 2.00,
        immagini: ['gallery/matite/precision-1.png'],
      },
      {
        titolo: 'Matita — Stabilo easy graph',
        prezzo: 2.30,
        immagini: ['gallery/matite/stabilo-1.png'],
      },
      {
        titolo: 'Matita — Staedtler',
        prezzo: 1.00,
        immagini: ['gallery/matite/staedtler-1.png', 'gallery/matite/staedtler-2.png', 'gallery/matite/staedtler-3.png', 'gallery/matite/staedtler-4.png', 'gallery/matite/staedtler-5.png'],
      },
    ],
  },
  {
    id: 'pasta-modellabile',
    titolo: 'Pasta Modellabile',
    copertina: 'gallery/pasta modellabile/unicorn-1.png',
    prodotti: [
      {
        titolo: 'Doh — Animals',
        prezzo: 18.00,
        immagini: ['gallery/pasta modellabile/animal-1.png', 'gallery/pasta modellabile/animal-2.png'],
      },
      {
        titolo: 'Doh — Beauty salon',
        prezzo: 20.00,
        immagini: ['gallery/pasta modellabile/beauty-1.png', 'gallery/pasta modellabile/beauty-2.png', 'gallery/pasta modellabile/beauty-3.png'],
      },
      {
        titolo: 'Pasta modellabile — Das bianco',
        prezzo: 4.00,
        immagini: ['gallery/pasta modellabile/das-1.png', 'gallery/pasta modellabile/das-2.png'],
      },
      {
        titolo: 'Doh - salsicciotti colorati',
        prezzo: 1.00,
        immagini: ['gallery/pasta modellabile/doh-1.png'],
      },
      {
        titolo: 'Doh — Village Elicottero',
        prezzo: 20.00,
        immagini: ['gallery/pasta modellabile/eli-1.png', 'gallery/pasta modellabile/eli-2.png', 'gallery/pasta modellabile/eli-3.png', 'gallery/pasta modellabile/eli-4.png'],
      },
      {
        titolo: 'Doh — Family face',
        prezzo: 18.00,
        immagini: ['gallery/pasta modellabile/family-1.png', 'gallery/pasta modellabile/family-2.png'],
      },
      {
        titolo: 'Doh — Pompieri',
        prezzo: 32.00,
        immagini: ['gallery/pasta modellabile/pompieri-1.png', 'gallery/pasta modellabile/pompieri-2.png', 'gallery/pasta modellabile/pompieri-3.png'],
      },
      {
        titolo: 'Doh — Sushi lovers',
        prezzo: 13.00,
        immagini: ['gallery/pasta modellabile/sushi-1.png', 'gallery/pasta modellabile/sushi-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Terracotta',
        prezzo: 4.00,
        immagini: ['gallery/pasta modellabile/terracotta-1.png', 'gallery/pasta modellabile/terracotta-2.png'],
      },
      {
        titolo: 'Doh — Unicorn',
        prezzo: 18.00,
        immagini: ['gallery/pasta modellabile/unicorn-1.png', 'gallery/pasta modellabile/unicorn-2.png'],
      },
    ],
  },
  {
    id: 'pastelli',
    titolo: 'Pastelli',
    prodotti: [
      {
        titolo: 'Pastelli acquerellabili - 24 pz',
        prezzo: 16.00,
        immagini: ['gallery/pastelli/acquerell-1.png'],
      },
      {
        titolo: 'Pastelli Giotto stilnovo— Bicolor',
        prezzo: 8.00,
        immagini: ['gallery/pastelli/bicolor-1.png'],
      },
      {
        titolo: 'Pastelli a cera - 12 pz',
        prezzo: 2.00,
        immagini: ['gallery/pastelli/cera-1.png', 'gallery/pastelli/cera-2.png'],
      },
      {
        titolo: 'Pastelli a cera Finger - 12 pz',
        prezzo: 7.00,
        immagini: ['gallery/pastelli/finger-1.png'],
      },
      {
        titolo: 'Pastelli Giotto matitoni - 12 pz',
        prezzo: 18.90,
        immagini: ['gallery/pastelli/giga-1.png'],
      },
      {
        titolo: 'Pastelli Giotto - 12 pz',
        prezzo: 8.00,
        immagini: ['gallery/pastelli/giotto-1.png'],
      },
      {
        titolo: 'Matitotto Tinta unita kids — 10 pz',
        prezzo: 12.00,
        immagini: ['gallery/pastelli/matititto-1.png', 'gallery/pastelli/matitotto-2.png'],
      },
      {
        titolo: 'Pastelli cera olio — 12 pz',
        prezzo: 5.00,
        immagini: ['gallery/pastelli/olio-1.png', 'gallery/pastelli/olio-2.png'],
      },
      {
        titolo: 'Pastelli olio Maxi - 24 pz',
        prezzo: 9.00,
        immagini: ['gallery/pastelli/olio-maxi-1.png'],
      },
      {
        titolo: 'Pastelli - 12 pz',
        prezzo: 5.50,
        immagini: ['gallery/pastelli/pastelli-1.png'],
      },
      {
        titolo: 'Pastelli — Sfusi',
        prezzo: 0.80,
        immagini: ['gallery/pastelli/sfusi-1.png', 'gallery/pastelli/sfusi-2.png'],
      },
      {
        titolo: 'Pastelli cera Sparkle -12 pz',
        prezzo: 13.00,
        immagini: ['gallery/pastelli/sparkle-1.png'],
      },
    ],
  },
  {
    id: 'pennarelli',
    titolo: 'Pennarelli',
    prodotti: [
      {
        titolo: 'Pennarelli brush - 24 pz',
        prezzo: 22.00,
        immagini: ['gallery/pennarelli/bipunta-1.png'],
      },
      {
        titolo: 'Pennarelli brush - 12 pz',
        prezzo: 11.00,
        immagini: ['gallery/pennarelli/classici-1.png'],
      },
      {
        titolo: 'Pennarelli - 18 pz',
        prezzo: 4.00,
        immagini: ['gallery/pennarelli/maxi-1.png'],
      },
      {
        titolo: 'Pennarelli Giga - 12 pz',
        prezzo: 5.00,
        immagini: ['gallery/pennarelli/mega-1.png'],
      },
      {
        titolo: 'Pennarelli brush - 18 pz',
        prezzo: 16.00,
        immagini: ['gallery/pennarelli/misti-1.png'],
      },
      {
        titolo: 'Pennarelli - 12 pz',
        prezzo: 2.50,
        immagini: ['gallery/pennarelli/normali-1.png'],
      },
    ],
  },
  {
    id: 'penne',
    titolo: 'Penne',
    prodotti: [
      {
        titolo: 'Penna — 4 Color',
        prezzo: 2.50,
        immagini: ['gallery/penne/4-color-1.png', 'gallery/penne/4-color-2.png', 'gallery/penne/4-color-3.png', 'gallery/penne/4-color-4.png', 'gallery/penne/4-color-5.png', 'gallery/penne/4-color-6.png', 'gallery/penne/4-color-7.png', 'gallery/penne/4-color-8.png'],
      },
      {
        titolo: 'Penna — Bic',
        prezzo: 0.50,
        immagini: ['gallery/penne/bic-1.png', 'gallery/penne/bic-2.png', 'gallery/penne/bic-3.png'],
      },
      {
        titolo: 'Penna — Bubble',
        prezzo: 3.00,
        immagini: ['gallery/penne/bubble-1.png'],
      },
      {
        titolo: 'Penna — Cancellabile',
        prezzo: 1.50,
        immagini: ['gallery/penne/cancellabili-1.png', 'gallery/penne/cancellabili-2.png', 'gallery/penne/cancellabili-3.png', 'gallery/penne/cancellabili-4.png', 'gallery/penne/cancellabili-5.png'],
      },
      {
        titolo: 'Penna Cristal - colorate',
        prezzo: 0.60,
        immagini: ['gallery/penne/cristal-2.png', 'gallery/penne/cristal-3.png'],
      },
      {
        titolo: 'Penna Cristal - nera 1.6 mm',
        prezzo: 0.60,
        immagini: ['gallery/penne/crital-1.png'],
      },
      {
        titolo: 'Penna — Gelyx',
        prezzo: 2.00,
        immagini: ['gallery/penne/gelyx-1.png', 'gallery/penne/gelyx-2.png', 'gallery/penne/gelyx-3.png', 'gallery/penne/gelix-4.png', 'gallery/penne/gelyx-5.png', 'gallery/penne/gelyx-6.png', 'gallery/penne/gelix-7.png'],
      },
      {
        titolo: 'Penna set Glittergel - 10 pz',
        prezzo: 9.00,
        immagini: ['gallery/penne/glittergel-1.png'],
      },
      {
        titolo: 'Penna — Mini touch',
        prezzo: 3.90,
        immagini: ['gallery/penne/mini-1.png', 'gallery/penne/mini-2.png', 'gallery/penne/mini-3.png', 'gallery/penne/mini-4.png', 'gallery/penne/mini-5.png'],
      },
      {
        titolo: 'Penna — Pilot',
        prezzo: 3.00,
        immagini: ['gallery/penne/pilot-1.png', 'gallery/penne/pilot-2.png'],
      },
      {
        titolo: 'Penna a scatto — Pilot Indelebile',
        prezzo: 2.50,
        immagini: ['gallery/penne/pilot-indelebile-1.png', 'gallery/penne/pilot-indelebile-2.png'],
      },
      {
        titolo: 'Penna — Pilot Scatto',
        prezzo: 3.50,
        immagini: ['gallery/penne/pilot-scatto-1.png'],
      },
      {
        titolo: 'Penna — Profumata',
        prezzo: 2.20,
        immagini: ['gallery/penne/profumate-1.png', 'gallery/penne/profumate-2.png', 'gallery/penne/profumate-3.png', 'gallery/penne/profumate-4.png'],
      },
      {
        titolo: 'Penna — Ricariche Pilot',
        prezzo: 5.00,
        immagini: ['gallery/penne/ricariche-pilot-1.png'],
      },
      {
        titolo: 'Penne set Rollergel profumate - 10 pz',
        prezzo: 9.00,
        immagini: ['gallery/penne/rollergel-1.png'],
      },
      {
        titolo: 'Penne set cancellabili - con 1 ricarica',
        prezzo: 5.00,
        immagini: ['gallery/penne/set-1.png', 'gallery/penne/set-2.png', 'gallery/penne/set-3.png', 'gallery/penne/set-4.png'],
      },
      {
        titolo: 'Penna — Set Cancellabili',
        prezzo: 10.00,
        immagini: ['gallery/penne/set-camncellabili-1.png'],
      },
      {
        titolo: 'Penna — Set x4 Gelyx',
        prezzo: 6.00,
        immagini: ['gallery/penne/set-gelyx-1.png', 'gallery/penne/set-gelyx-2.png', 'gallery/penne/set-gelyx-3.png'],
      },
      {
        titolo: 'Penna Set Sfera - 8 pz',
        prezzo: 16.00,
        immagini: ['gallery/penne/set-sfera-1.png'],
      },
      {
        titolo: 'Penna — Sfera 1.6 mm',
        prezzo: 2.00,
        immagini: ['gallery/penne/sfera-1.png'],
      },
      {
        titolo: 'Penna non cancellabile — Slurpy',
        prezzo: 2.00,
        immagini: ['gallery/penne/slurpy-1.png'],
      },
      {
        titolo: 'Penna — Staedtler',
        prezzo: 0.80,
        immagini: ['gallery/penne/staedtler-1.png', 'gallery/penne/staedtler-2.png', 'gallery/penne/staedtler-3.png', 'gallery/penne/staedtler-4.png', 'gallery/penne/staedtler-5.png'],
      },
      {
        titolo: 'Penna cancellabile - qui la Zampa',
        prezzo: 1.50,
        immagini: ['gallery/penne/zampa-1.png', 'gallery/penne/zampa-2.png', 'gallery/penne/zampa-3.png', 'gallery/penne/zampa-4.png', 'gallery/penne/zampa-5.png'],
      },
      {
        titolo: 'Penna — Zoo',
        prezzo: 3.00,
        immagini: ['gallery/penne/zoo-1.png', 'gallery/penne/zoo-2.png'],
      },
    ],
  },
  {
    id: 'portamerende',
    titolo: 'Portamerende',
    prodotti: [
      {
        titolo: 'Portamerenda in plastica per alimenti — Ape',
        prezzo: 8.00,
        immagini: ['gallery/portamerende/ape-1.png'],
      },
      {
        titolo: 'Portamerenda — Metallo',
        prezzo: 12.00,
        immagini: ['gallery/portamerende/metallo-1.png', 'gallery/portamerende/metallo-2.png', 'gallery/portamerende/metallo-3.png', 'gallery/portamerende/metallo-4.png'],
      },
      {
        titolo: 'Portamerenda — Plastica',
        prezzo: 8.00,
        immagini: ['gallery/portamerende/plast-1.png', 'gallery/portamerende/plast-2.png', 'gallery/portamerende/plast-3.png'],
      },
      {
        titolo: 'Portamerenda in plastica per alimenti — Tigre',
        prezzo: 8.00,
        immagini: ['gallery/portamerende/tigre-1.png'],
      },
      {
        titolo: 'Portamerenda in plastica per alimenti — Uni',
        prezzo: 8.00,
        immagini: ['gallery/portamerende/uni-1.png'],
      },
    ],
  },
  {
    id: 'temperini',
    titolo: 'Temperini',
    prodotti: [
      {
        titolo: 'Temperino con serbatoio - 1 foro',
        prezzo: 1.20,
        immagini: ['gallery/temperini/cestino-1.png', 'gallery/temperini/cestino-2.png'],
      },
      {
        titolo: 'Temperino — Classico',
        prezzo: 1.50,
        immagini: ['gallery/temperini/classico-1.png', 'gallery/temperini/classico-2.png'],
      },
      {
        titolo: 'Temperino — Elettrico',
        prezzo: 15.00,
        immagini: ['gallery/temperini/elettrico-1.png', 'gallery/temperini/elettrico-2.png'],
      },
      {
        titolo: 'Temperino con serbatoio - 3 fori',
        prezzo: 2.50,
        immagini: ['gallery/temperini/temp-1.png', 'gallery/temperini/temp-2.png', 'gallery/temperini/temp-3.png'],
      },
      {
        titolo: 'Temperino — Zoo Bubble tea',
        prezzo: 2.00,
        immagini: ['gallery/temperini/zoo-1.png'],
      },
    ],
  },
  {
    id: 'borse',
    titolo: 'Borse',
    copertina: 'gallery/borse/manico-1.png',
    prodotti: [
      {
        titolo: 'Poshette Hawaii - azzurra',
        prezzo: 18.00,
        immagini: ['gallery/borse/lilla-1.png', 'gallery/borse/17.png'],
      },
      {
        titolo: 'Beauty appendibile in neoprene - blu',
        prezzo: 18.00,
        immagini: ['gallery/borse/bagno-1.png', 'gallery/borse/bagno-2.png'],
      },
      {
        titolo: 'Poshette Hawaii - fucsia',
        prezzo: 18.00,
        immagini: ['gallery/borse/fiori-1.png'],
      },
      {
        titolo: 'Borsa con manici - lilla',
        prezzo: 38.00,
        immagini: ['gallery/borse/grande-1.png', 'gallery/borse/grande-2.png'],
      },
      {
        titolo: 'Borsa con manici - rosa',
        prezzo: 38.00,
        immagini: ['gallery/borse/manico-1.png', 'gallery/borse/manico-2.png', 'gallery/borse/manico-3.png'],
      },
      {
        titolo: 'Borsa Moon',
        prezzo: 29.00,
        immagini: ['gallery/borse/moon-1.png', 'gallery/borse/moon-2.png', 'gallery/borse/moon-3.png'],
      },
      {
        titolo: 'Poshette 3 in 1 Hawaii',
        prezzo: 15.00,
        immagini: ['gallery/borse/multi-1.png', 'gallery/borse/multi-2.png'],
      },
      {
        titolo: 'Pouch',
        prezzo: 22.00,
        immagini: ['gallery/borse/poshette-1.png', 'gallery/borse/poshette-2.png'],
      },
    ],
  },
  {
    id: 'acquerelli-tempere',
    titolo: 'Acquerelli e Tempere',
    prodotti: [
      {
        titolo: 'Acquerelli - confezione 12 colori',
        prezzo: 4.50,
        immagini: ['gallery/acquerelli:tempere/acquerelli-1.png'],
      },
      {
        titolo: 'Acquerelli - 12 colori',
        prezzo: 4.50,
        immagini: ['gallery/acquerelli:tempere/acquerelli-classico-1.png'],
      },
      {
        titolo: 'Acquerelli - 24 colori',
        prezzo: 7.50,
        immagini: ['gallery/acquerelli:tempere/acquerelli-grande-1.png'],
      },
      {
        titolo: 'Acquerelli Fluo - 12 colori',
        prezzo: 5.50,
        immagini: ['gallery/acquerelli:tempere/fluo-1.png'],
      },
      {
        titolo: 'Acquerelli Mega - 6 colori',
        prezzo: 7.50,
        immagini: ['gallery/acquerelli:tempere/mega-1.png'],
      },
      {
        titolo: 'Tempere - 7 colori',
        prezzo: 9.50,
        immagini: ['gallery/acquerelli:tempere/tempere-1.png'],
      },
      {
        titolo: 'Tempere Solide - 6 colori',
        prezzo: 5.50,
        immagini: ['gallery/acquerelli:tempere/tempere-solide-1.png', 'gallery/acquerelli:tempere/tempere-solide-2.png'],
      },
    ],
  },
];
