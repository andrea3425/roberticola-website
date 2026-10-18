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
        titolo: 'Astuccio Triplo Glamour — Giallo',
        prezzo: 34.90,
        immagini: ['gallery/astucci/giallo-1.png', 'gallery/astucci/giallo-2.png', 'gallery/astucci/giallo-3.png', 'gallery/astucci/giallo-4.png', 'gallery/astucci/giallo-5.png', 'gallery/astucci/giallo-6.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Fucsia',
        prezzo: 34.90,
        immagini: ['gallery/astucci/fucsia-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Verde Militare',
        prezzo: 34.90,
        immagini: ['gallery/astucci/verde-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Blu Notte',
        prezzo: 34.90,
        immagini: ['gallery/astucci/blu-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Rosa',
        prezzo: 34.90,
        immagini: ['gallery/astucci/rosa-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Rosa Salmone',
        prezzo: 34.90,
        immagini: ['gallery/astucci/rosa-salmone-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Nero',
        prezzo: 34.90,
        immagini: ['gallery/astucci/nero-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Lilla',
        prezzo: 34.90,
        immagini: ['gallery/astucci/lilla-1.png'],
      },
      {
        titolo: 'Astuccio Triplo Glamour — Nero Pelle',
        prezzo: 34.90,
        immagini: ['gallery/astucci/glamour-1.png', 'gallery/astucci/glmaour-3.png', 'gallery/astucci/glamour-4.png'],
      },
      {
        titolo: 'Astuccio Triplo — Crazy Girl',
        prezzo: 34.90,
        immagini: ['gallery/astucci/crazy-girl-1.png', 'gallery/astucci/crazy-girl-2.png', 'gallery/astucci/triplo-2.png', 'gallery/astucci/crazy-girl-3.png', 'gallery/astucci/crazy-girl-4.png', 'gallery/astucci/crazy-girl-5.png'],
      },
      {
        titolo: 'Astuccio Triplo — Donut & Diamond',
        prezzo: 34.90,
        immagini: ['gallery/astucci/crazy-1.png'],
      },
      {
        titolo: 'Bustona Triangolare — Crazy Girl',
        prezzo: 17.90,
        immagini: ['gallery/astucci/bustona-1.png', 'gallery/astucci/bustona-2.png', 'gallery/astucci/bustona-3.png'],
      },
      {
        titolo: 'Astuccio Ovale Glitter — Antracite',
        prezzo: 19.90,
        immagini: ['gallery/astucci/oval-glam-1.png', 'gallery/astucci/oval-glam-2.png'],
      },
      {
        titolo: 'Astuccio Ovale Glitter — Rosa',
        prezzo: 19.90,
        immagini: ['gallery/astucci/oval-1.png', 'gallery/astucci/oval-2.png'],
      },
      {
        titolo: 'Astuccio Rettangolare Glitter — Rosa',
        prezzo: 14.90,
        immagini: ['gallery/astucci/glitter-rosa-1.png'],
      },
      {
        titolo: 'Astuccio Rigido Glitter — Rosa',
        prezzo: 37.90,
        immagini: ['gallery/astucci/glam-1.png', 'gallery/astucci/glam-2.png', 'gallery/astucci/glam-3.png', 'gallery/astucci/glam-4.png'],
      },
      {
        titolo: 'Astuccio Rigido Glitter — Nero',
        prezzo: 37.90,
        immagini: ['gallery/astucci/nero-glitter-1.png', 'gallery/astucci/nero-glitter-2.png', 'gallery/astucci/nero-glitter-3.png', 'gallery/astucci/nero-glitter-4.png'],
      },
      {
        titolo: 'Astuccio Rigido Glitter — Azzurro Ombré',
        prezzo: 37.90,
        immagini: ['gallery/astucci/bustona-azzurra-1.png'],
      },
      {
        titolo: 'Portapenne Slim — Nero',
        prezzo: 9.90,
        immagini: ['gallery/astucci/nero-bustina-1.png'],
      },
      {
        titolo: 'Portapenne Slim — Grigio',
        prezzo: 9.90,
        immagini: ['gallery/astucci/grigio-1.png'],
      },
      {
        titolo: 'Portapenne Slim — Celeste',
        prezzo: 9.90,
        immagini: ['gallery/astucci/bustina-celeste-1.png'],
      },
      {
        titolo: 'Portapenne Slim — Verde',
        prezzo: 9.90,
        immagini: ['gallery/astucci/bustina-verde-1.png'],
      },
      {
        titolo: 'Portapenne Glossy — Ocra',
        prezzo: 9.90,
        immagini: ['gallery/astucci/ocra-1.png'],
      },
      {
        titolo: 'Portapenne Glossy — Celeste',
        prezzo: 9.90,
        immagini: ['gallery/astucci/celeste-1.png'],
      },
      {
        titolo: 'Astuccio Fiori — Verde',
        prezzo: 14.90,
        immagini: ['gallery/astucci/fiori-1.png', 'gallery/astucci/fiori-2.png'],
      },
      {
        titolo: 'Bustina Fiori Sottile — Verde',
        prezzo: 12.90,
        immagini: ['gallery/astucci/fiori-sottile-1.png', 'gallery/astucci/fiori-sottile-2.png'],
      },
      {
        titolo: 'Bauletto Fiori — Blu',
        prezzo: 14.90,
        immagini: ['gallery/astucci/bauletto-1.png', 'gallery/astucci/bauletto-2.png'],
      },
      {
        titolo: 'Astuccio Silicone — Sneaker Blu',
        prezzo: 14.90,
        immagini: ['gallery/astucci/silicone-1.png'],
      },
      {
        titolo: 'Astuccio Zoo — Bubble Tea',
        prezzo: 16.90,
        immagini: ['gallery/astucci/bubble-1.png', 'gallery/astucci/bubble-2.png'],
      },
      {
        titolo: 'Astuccio Zoo — Bubble Tea Coniglietto',
        prezzo: 16.90,
        immagini: ['gallery/astucci/bubble-tea-1.png'],
      },
      {
        titolo: 'Astuccio — Nero Lucido',
        prezzo: null,
        immagini: ['gallery/astucci/nero-1 (2).png'],
      },
    ],
  },
  {
    id: 'agende',
    titolo: 'Agende',
    prodotti: [
      {
        titolo: 'Agenda — Fucsia',
        prezzo: null,
        immagini: ['gallery/agende/fucsia-1.png', 'gallery/agende/fucsia-2.png', 'gallery/agende/fucsia-3.png', 'gallery/agende/fucsia-4.png'],
      },
      {
        titolo: 'Agenda — Gialla',
        prezzo: null,
        immagini: ['gallery/agende/gialla-1.png', 'gallery/agende/gialla-2.png', 'gallery/agende/gialla-3.png', 'gallery/agende/gialla-4.png'],
      },
      {
        titolo: 'Agenda — Juice',
        prezzo: null,
        immagini: ['gallery/agende/juice-1.png', 'gallery/agende/juice-2.png', 'gallery/agende/juice-3.png', 'gallery/agende/juice-4.png', 'gallery/agende/juice-5.png', 'gallery/agende/juice-6.png'],
      },
      {
        titolo: 'Agenda — Marrone',
        prezzo: null,
        immagini: ['gallery/agende/marrone-1.png', 'gallery/agende/marrone-2.png', 'gallery/agende/marrone-3.png'],
      },
      {
        titolo: 'Agenda — Planning',
        prezzo: null,
        immagini: ['gallery/agende/planning-1.png', 'gallery/agende/planning-2.png', 'gallery/agende/planning-3.png'],
      },
      {
        titolo: 'Agenda — Prof',
        prezzo: null,
        immagini: ['gallery/agende/prof-1.png', 'gallery/agende/prof-2.png', 'gallery/agende/prof-3.png'],
      },
      {
        titolo: 'Agenda — Rossa',
        prezzo: null,
        immagini: ['gallery/agende/rossa-1.png', 'gallery/agende/rossa-2.png', 'gallery/agende/rossa-3.png', 'gallery/agende/rossa-4.png', 'gallery/agende/rossa-5.png', 'gallery/agende/rossa-6.png', 'gallery/agende/rossa-7.png', 'gallery/agende/rossa-8.png'],
      },
    ],
  },
  {
    id: 'borracce',
    titolo: 'Borracce',
    prodotti: [
      {
        titolo: 'Borraccia — Modello 16',
        prezzo: null,
        immagini: ['gallery/borracce/16.png'],
      },
      {
        titolo: 'Borraccia — Borraccia',
        prezzo: null,
        immagini: ['gallery/borracce/borraccia-1.png', 'gallery/borracce/borraccia-2.png', 'gallery/borracce/borraccia-3.png', 'gallery/borracce/borraccia-4.png', 'gallery/borracce/borraccia-5.png'],
      },
      {
        titolo: 'Borraccia — Corn',
        prezzo: null,
        immagini: ['gallery/borracce/corn-1.png'],
      },
      {
        titolo: 'Borraccia — Kids',
        prezzo: null,
        immagini: ['gallery/borracce/kids-1.png'],
      },
      {
        titolo: 'Borraccia — Metallo',
        prezzo: null,
        immagini: ['gallery/borracce/metallo-1.png', 'gallery/borracce/metallo-2.png', 'gallery/borracce/metallo-3.png', 'gallery/borracce/metallo-4.png', 'gallery/borracce/metallo-5.png'],
      },
      {
        titolo: 'Borraccia — Rosa',
        prezzo: null,
        immagini: ['gallery/borracce/rosa-1.png', 'gallery/borracce/rosa-2.png', 'gallery/borracce/rosa-3.png'],
      },
    ],
  },
  {
    id: 'zaini',
    titolo: 'Zaini',
    prodotti: [
      {
        titolo: 'Zaino — Asilo',
        prezzo: null,
        immagini: ['gallery/zaini/asilo-1.png', 'gallery/zaini/asilo-2.png'],
      },
      {
        titolo: 'Zaino — Azzurro',
        prezzo: null,
        immagini: ['gallery/zaini/azzurro-1.png', 'gallery/zaini/azzurro-2.png'],
      },
      {
        titolo: 'Zaino — Crazy',
        prezzo: null,
        immagini: ['gallery/zaini/crazy-1.png', 'gallery/zaini/crazy-2.png'],
      },
      {
        titolo: 'Zaino — Doppio',
        prezzo: null,
        immagini: ['gallery/zaini/doppio-1.png', 'gallery/zaini/doppio-2.png', 'gallery/zaini/doppio-3.png'],
      },
      {
        titolo: 'Zaino — Elefante',
        prezzo: null,
        immagini: ['gallery/zaini/elefante-1.png', 'gallery/zaini/elefante-2.png'],
      },
      {
        titolo: 'Zaino — Foca',
        prezzo: null,
        immagini: ['gallery/zaini/foca-1.png', 'gallery/zaini/foca-2.png', 'gallery/zaini/foca-3.png'],
      },
      {
        titolo: 'Zaino — Giraffa',
        prezzo: null,
        immagini: ['gallery/zaini/giraffa-1.png', 'gallery/zaini/giraffa-2.png', 'gallery/zaini/giraffa-3.png'],
      },
      {
        titolo: 'Zaino — Girl',
        prezzo: null,
        immagini: ['gallery/zaini/girl-1.png', 'gallery/zaini/girl-2.png', 'gallery/zaini/girl-3.png'],
      },
      {
        titolo: 'Zaino — Glitter',
        prezzo: null,
        immagini: ['gallery/zaini/glitter-1.png', 'gallery/zaini/glitter-2.png'],
      },
      {
        titolo: 'Zaino — Ippo',
        prezzo: null,
        immagini: ['gallery/zaini/ippo-1.png', 'gallery/zaini/ippo-2.png', 'gallery/zaini/ippo-3.png'],
      },
      {
        titolo: 'Zaino — Mostro',
        prezzo: null,
        immagini: ['gallery/zaini/mostro-1.png', 'gallery/zaini/mostro-2.png'],
      },
      {
        titolo: 'Zaino — Rosso',
        prezzo: null,
        immagini: ['gallery/zaini/rosso-1.png', 'gallery/zaini/rosso-2.png'],
      },
      {
        titolo: 'Zaino — Stuble',
        prezzo: null,
        immagini: ['gallery/zaini/stuble-1.png'],
      },
      {
        titolo: 'Zaino — Tigre',
        prezzo: null,
        immagini: ['gallery/zaini/tigre-1.png', 'gallery/zaini/tigre-2.png', 'gallery/zaini/tigre-3.png'],
      },
      {
        titolo: 'Zaino — Unicorn',
        prezzo: null,
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
        titolo: 'Set — Borraccia',
        prezzo: null,
        immagini: ['gallery/set e gift box/borraccia-1.png'],
      },
      {
        titolo: 'Set — Desk',
        prezzo: null,
        immagini: ['gallery/set e gift box/desk-1.png'],
      },
      {
        titolo: 'Set — Forbici',
        prezzo: null,
        immagini: ['gallery/set e gift box/forbici-1.png'],
      },
      {
        titolo: 'Set — Metro',
        prezzo: null,
        immagini: ['gallery/set e gift box/metro-1.png', 'gallery/set e gift box/metro-2.png', 'gallery/set e gift box/metro-3.png', 'gallery/set e gift box/metro-4.png'],
      },
      {
        titolo: 'Set — Misto',
        prezzo: null,
        immagini: ['gallery/set e gift box/misto-1.png'],
      },
      {
        titolo: 'Set — Postit',
        prezzo: null,
        immagini: ['gallery/set e gift box/postit-1.png', 'gallery/set e gift box/postit-2.png', 'gallery/set e gift box/postit-3.png'],
      },
      {
        titolo: 'Set — Roller Fruit',
        prezzo: null,
        immagini: ['gallery/set e gift box/roller-fruit-1.png'],
      },
      {
        titolo: 'Set — Rotolo',
        prezzo: null,
        immagini: ['gallery/set e gift box/rotolo-1.png', 'gallery/set e gift box/rotolo-2.png'],
      },
      {
        titolo: 'Set — Scotch',
        prezzo: null,
        immagini: ['gallery/set e gift box/scotch-1.png'],
      },
      {
        titolo: 'Set — Set',
        prezzo: null,
        immagini: ['gallery/set e gift box/set-1.png'],
      },
      {
        titolo: 'Set — Set Penne',
        prezzo: null,
        immagini: ['gallery/set e gift box/set-penne-1.png'],
      },
      {
        titolo: 'Set — Tavoletta',
        prezzo: null,
        immagini: ['gallery/set e gift box/tavoletta-1.png', 'gallery/set e gift box/tavoletta-2.png', 'gallery/set e gift box/tavoletta-3.png'],
      },
      {
        titolo: 'Set — Timbrini',
        prezzo: null,
        immagini: ['gallery/set e gift box/timbrini-1.png'],
      },
      {
        titolo: 'Set — Tovaglietta',
        prezzo: null,
        immagini: ['gallery/set e gift box/tovaglietta-1.png', 'gallery/set e gift box/tovaglietta-2.png', 'gallery/set e gift box/tovaglietta-5.png'],
      },
      {
        titolo: 'Set — Tovagliettta',
        prezzo: null,
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
        prezzo: null,
        immagini: ['gallery/calcolatrici/classica-1.png', 'gallery/calcolatrici/classica-2.png'],
      },
      {
        titolo: 'Calcolatrice — Scient',
        prezzo: null,
        immagini: ['gallery/calcolatrici/scient-1.png', 'gallery/calcolatrici/scient-2.png', 'gallery/calcolatrici/scient-3.png'],
      },
      {
        titolo: 'Calcolatrice — Zoo',
        prezzo: null,
        immagini: ['gallery/calcolatrici/zoo-1.png', 'gallery/calcolatrici/zoo-2.png', 'gallery/calcolatrici/zoo-3.png', 'gallery/calcolatrici/zoo-4.png'],
      },
      {
        titolo: 'Calcolatrice — Set Tavoletta LCD Zoo',
        prezzo: null,
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
        prezzo: null,
        immagini: ['gallery/colla/classica-1.png'],
      },
      {
        titolo: 'Colla — Mega',
        prezzo: null,
        immagini: ['gallery/colla/mega-1.png'],
      },
      {
        titolo: 'Colla — Piccola',
        prezzo: null,
        immagini: ['gallery/colla/piccola-1.png'],
      },
      {
        titolo: 'Colla — Twist',
        prezzo: null,
        immagini: ['gallery/colla/twist-1.png'],
      },
      {
        titolo: 'Colla — Vinilica',
        prezzo: null,
        immagini: ['gallery/colla/vinilica-1.png'],
      },
      {
        titolo: 'Colla — Zoo',
        prezzo: null,
        immagini: ['gallery/colla/zoo-2.png'],
      },
    ],
  },
  {
    id: 'compassi',
    titolo: 'Compassi',
    prodotti: [
      {
        titolo: 'Compasso — Classico',
        prezzo: null,
        immagini: ['gallery/compassi/classico-1.png', 'gallery/compassi/classico-2.png'],
      },
      {
        titolo: 'Compasso — Compasso',
        prezzo: null,
        immagini: ['gallery/compassi/compasso-1.png', 'gallery/compassi/compasso-2.png'],
      },
      {
        titolo: 'Compasso — Normale',
        prezzo: null,
        immagini: ['gallery/compassi/normale-1.png'],
      },
    ],
  },
  {
    id: 'correttori',
    titolo: 'Correttori',
    prodotti: [
      {
        titolo: 'Correttore — Chiocciola',
        prezzo: null,
        immagini: ['gallery/correttori/chiocciola-1.png'],
      },
      {
        titolo: 'Correttore — Slurpy',
        prezzo: null,
        immagini: ['gallery/correttori/slurpy-1.png', 'gallery/correttori/slurpy-2.png'],
      },
      {
        titolo: 'Correttore — Twist',
        prezzo: null,
        immagini: ['gallery/correttori/twist-1.png'],
      },
      {
        titolo: 'Correttore — Vintage',
        prezzo: null,
        immagini: ['gallery/correttori/vintage-1.png', 'gallery/correttori/vintage-2.png'],
      },
      {
        titolo: 'Correttore — Zoo',
        prezzo: null,
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
        titolo: 'Evidenziatore — Modello 26',
        prezzo: null,
        immagini: ['gallery/evidenziatori/26.png'],
      },
      {
        titolo: 'Evidenziatore — Evi',
        prezzo: null,
        immagini: ['gallery/evidenziatori/evi-1.png', 'gallery/evidenziatori/evi-2.png', 'gallery/evidenziatori/evi-3.png', 'gallery/evidenziatori/evi-4.png', 'gallery/evidenziatori/evi-5.png', 'gallery/evidenziatori/evi-6.png', 'gallery/evidenziatori/evi-7.png', 'gallery/evidenziatori/evi-8.png', 'gallery/evidenziatori/evi-9.png', 'gallery/evidenziatori/evi-10.png', 'gallery/evidenziatori/evi-11.png', 'gallery/evidenziatori/evi-12.png', 'gallery/evidenziatori/evi-13.png', 'gallery/evidenziatori/evi-14.png', 'gallery/evidenziatori/evi-15.png', 'gallery/evidenziatori/evi-16.png', 'gallery/evidenziatori/evi-17.png', 'gallery/evidenziatori/evi-18.png'],
      },
      {
        titolo: 'Evidenziatore — Glitter',
        prezzo: null,
        immagini: ['gallery/evidenziatori/glitter-1.png', 'gallery/evidenziatori/glitter-2.png', 'gallery/evidenziatori/glitter-3.png', 'gallery/evidenziatori/glitter-4.png', 'gallery/evidenziatori/glitter-5.png', 'gallery/evidenziatori/glitter-6.png'],
      },
      {
        titolo: 'Evidenziatore — Set',
        prezzo: null,
        immagini: ['gallery/evidenziatori/set-1.png'],
      },
    ],
  },
  {
    id: 'gomme',
    titolo: 'Gomme',
    prodotti: [
      {
        titolo: 'Gomma — Bicolor',
        prezzo: null,
        immagini: ['gallery/gomme/bicolor-1.png'],
      },
      {
        titolo: 'Gomma — Classica',
        prezzo: null,
        immagini: ['gallery/gomme/classica-1.png'],
      },
      {
        titolo: 'Gomma — Matita',
        prezzo: null,
        immagini: ['gallery/gomme/matita-1.png'],
      },
      {
        titolo: 'Gomma — Mega',
        prezzo: null,
        immagini: ['gallery/gomme/mega-1.png'],
      },
      {
        titolo: 'Gomma — Pane',
        prezzo: null,
        immagini: ['gallery/gomme/pane-1.png'],
      },
      {
        titolo: 'Gomma — Penna',
        prezzo: null,
        immagini: ['gallery/gomme/penna-1.png'],
      },
      {
        titolo: 'Gomma — Ruota',
        prezzo: null,
        immagini: ['gallery/gomme/ruota-1.png'],
      },
      {
        titolo: 'Gomma — Sta',
        prezzo: null,
        immagini: ['gallery/gomme/sta-1.png'],
      },
      {
        titolo: 'Gomma — Zoo',
        prezzo: null,
        immagini: ['gallery/gomme/zoo-1.png'],
      },
    ],
  },
  {
    id: 'marker',
    titolo: 'Marker',
    prodotti: [
      {
        titolo: 'Marker — Bic',
        prezzo: null,
        immagini: ['gallery/marker/bic-1.png', 'gallery/marker/bic-2.png', 'gallery/marker/bic-3.png', 'gallery/marker/bic-4.png'],
      },
      {
        titolo: 'Marker — Fino',
        prezzo: null,
        immagini: ['gallery/marker/fino-1.png', 'gallery/marker/fino-2.png'],
      },
      {
        titolo: 'Marker — Lavagna',
        prezzo: null,
        immagini: ['gallery/marker/lavagna-1.png', 'gallery/marker/lavagna-2.png'],
      },
      {
        titolo: 'Marker — Marker',
        prezzo: null,
        immagini: ['gallery/marker/marker-1.png', 'gallery/marker/marker-2.png', 'gallery/marker/marker-3.png'],
      },
      {
        titolo: 'Marker — Permanent',
        prezzo: null,
        immagini: ['gallery/marker/permanent-1.png'],
      },
      {
        titolo: 'Marker — Piatto',
        prezzo: null,
        immagini: ['gallery/marker/piatto-1.png', 'gallery/marker/piatto-2.png', 'gallery/marker/piatto-3.png'],
      },
      {
        titolo: 'Marker — Staedtler',
        prezzo: null,
        immagini: ['gallery/marker/staedtler-1.png', 'gallery/marker/staedtler-2.png'],
      },
      {
        titolo: 'Marker — Tondo',
        prezzo: null,
        immagini: ['gallery/marker/tondo-1.png', 'gallery/marker/tondo-2.png', 'gallery/marker/tondo-3.png'],
      },
      {
        titolo: 'Marker — Tratto',
        prezzo: null,
        immagini: ['gallery/marker/tratto-1.png', 'gallery/marker/tratto-2.png', 'gallery/marker/tratto-3.png'],
      },
      {
        titolo: 'Marker — Trattopen',
        prezzo: null,
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
        prezzo: null,
        immagini: ['gallery/matite/architetto-1.png', 'gallery/matite/architetto-2.png', 'gallery/matite/architetto-3.png', 'gallery/matite/architetto-4.png', 'gallery/matite/architetto-5.png', 'gallery/matite/architetto-6.png', 'gallery/matite/architetto-7.png'],
      },
      {
        titolo: 'Matita — Bic',
        prezzo: null,
        immagini: ['gallery/matite/bic-1.png'],
      },
      {
        titolo: 'Matita — Big',
        prezzo: null,
        immagini: ['gallery/matite/big-1.png'],
      },
      {
        titolo: 'Matita — Classic',
        prezzo: null,
        immagini: ['gallery/matite/classic-1.png', 'gallery/matite/classic-2.png', 'gallery/matite/classic-3.png'],
      },
      {
        titolo: 'Matita — Glitter',
        prezzo: null,
        immagini: ['gallery/matite/glitter-1.png'],
      },
      {
        titolo: 'Matita — Personaggio',
        prezzo: null,
        immagini: ['gallery/matite/personaggio-1.png', 'gallery/matite/personaggio-2.png'],
      },
      {
        titolo: 'Matita — Precision',
        prezzo: null,
        immagini: ['gallery/matite/precision-1.png'],
      },
      {
        titolo: 'Matita — Stabilo',
        prezzo: null,
        immagini: ['gallery/matite/stabilo-1.png'],
      },
      {
        titolo: 'Matita — Staedtler',
        prezzo: null,
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
        titolo: 'Pasta modellabile — Animal',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/animal-1.png', 'gallery/pasta modellabile/animal-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Beauty',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/beauty-1.png', 'gallery/pasta modellabile/beauty-2.png', 'gallery/pasta modellabile/beauty-3.png'],
      },
      {
        titolo: 'Pasta modellabile — Das',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/das-1.png', 'gallery/pasta modellabile/das-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Doh',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/doh-1.png'],
      },
      {
        titolo: 'Pasta modellabile — Eli',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/eli-1.png', 'gallery/pasta modellabile/eli-2.png', 'gallery/pasta modellabile/eli-3.png', 'gallery/pasta modellabile/eli-4.png'],
      },
      {
        titolo: 'Pasta modellabile — Family',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/family-1.png', 'gallery/pasta modellabile/family-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Pompieri',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/pompieri-1.png', 'gallery/pasta modellabile/pompieri-2.png', 'gallery/pasta modellabile/pompieri-3.png'],
      },
      {
        titolo: 'Pasta modellabile — Sushi',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/sushi-1.png', 'gallery/pasta modellabile/sushi-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Terracotta',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/terracotta-1.png', 'gallery/pasta modellabile/terracotta-2.png'],
      },
      {
        titolo: 'Pasta modellabile — Unicorn',
        prezzo: null,
        immagini: ['gallery/pasta modellabile/unicorn-1.png', 'gallery/pasta modellabile/unicorn-2.png'],
      },
    ],
  },
  {
    id: 'pastelli',
    titolo: 'Pastelli',
    prodotti: [
      {
        titolo: 'Pastelli — Acquerell',
        prezzo: null,
        immagini: ['gallery/pastelli/acquerell-1.png'],
      },
      {
        titolo: 'Pastelli — Bicolor',
        prezzo: null,
        immagini: ['gallery/pastelli/bicolor-1.png'],
      },
      {
        titolo: 'Pastelli — Cera',
        prezzo: null,
        immagini: ['gallery/pastelli/cera-1.png', 'gallery/pastelli/cera-2.png'],
      },
      {
        titolo: 'Pastelli — Finger',
        prezzo: null,
        immagini: ['gallery/pastelli/finger-1.png'],
      },
      {
        titolo: 'Pastelli — Giga',
        prezzo: null,
        immagini: ['gallery/pastelli/giga-1.png'],
      },
      {
        titolo: 'Pastelli — Giotto',
        prezzo: null,
        immagini: ['gallery/pastelli/giotto-1.png'],
      },
      {
        titolo: 'Pastelli — Matititto',
        prezzo: null,
        immagini: ['gallery/pastelli/matititto-1.png'],
      },
      {
        titolo: 'Pastelli — Matitotto',
        prezzo: null,
        immagini: ['gallery/pastelli/matitotto-2.png'],
      },
      {
        titolo: 'Pastelli — Olio',
        prezzo: null,
        immagini: ['gallery/pastelli/olio-1.png', 'gallery/pastelli/olio-2.png'],
      },
      {
        titolo: 'Pastelli — Olio Maxi',
        prezzo: null,
        immagini: ['gallery/pastelli/olio-maxi-1.png'],
      },
      {
        titolo: 'Pastelli — Pastelli',
        prezzo: null,
        immagini: ['gallery/pastelli/pastelli-1.png'],
      },
      {
        titolo: 'Pastelli — Sfusi',
        prezzo: null,
        immagini: ['gallery/pastelli/sfusi-1.png', 'gallery/pastelli/sfusi-2.png'],
      },
      {
        titolo: 'Pastelli — Sparkle',
        prezzo: null,
        immagini: ['gallery/pastelli/sparkle-1.png'],
      },
    ],
  },
  {
    id: 'pennarelli',
    titolo: 'Pennarelli',
    prodotti: [
      {
        titolo: 'Pennarelli — Bipunta',
        prezzo: null,
        immagini: ['gallery/pennarelli/bipunta-1.png'],
      },
      {
        titolo: 'Pennarelli — Classici',
        prezzo: null,
        immagini: ['gallery/pennarelli/classici-1.png'],
      },
      {
        titolo: 'Pennarelli — Maxi',
        prezzo: null,
        immagini: ['gallery/pennarelli/maxi-1.png'],
      },
      {
        titolo: 'Pennarelli — Mega',
        prezzo: null,
        immagini: ['gallery/pennarelli/mega-1.png'],
      },
      {
        titolo: 'Pennarelli — Misti',
        prezzo: null,
        immagini: ['gallery/pennarelli/misti-1.png'],
      },
      {
        titolo: 'Pennarelli — Normali',
        prezzo: null,
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
        prezzo: null,
        immagini: ['gallery/penne/4-color-1.png', 'gallery/penne/4-color-2.png', 'gallery/penne/4-color-3.png', 'gallery/penne/4-color-4.png', 'gallery/penne/4-color-5.png', 'gallery/penne/4-color-6.png', 'gallery/penne/4-color-7.png', 'gallery/penne/4-color-8.png'],
      },
      {
        titolo: 'Penna — Bic',
        prezzo: null,
        immagini: ['gallery/penne/bic-1.png', 'gallery/penne/bic-2.png', 'gallery/penne/bic-3.png'],
      },
      {
        titolo: 'Penna — Bubble',
        prezzo: null,
        immagini: ['gallery/penne/bubble-1.png'],
      },
      {
        titolo: 'Penna — Cancellabili',
        prezzo: null,
        immagini: ['gallery/penne/cancellabili-1.png', 'gallery/penne/cancellabili-2.png', 'gallery/penne/cancellabili-3.png', 'gallery/penne/cancellabili-4.png', 'gallery/penne/cancellabili-5.png'],
      },
      {
        titolo: 'Penna — Cristal',
        prezzo: null,
        immagini: ['gallery/penne/cristal-2.png', 'gallery/penne/cristal-3.png'],
      },
      {
        titolo: 'Penna — Crital',
        prezzo: null,
        immagini: ['gallery/penne/crital-1.png'],
      },
      {
        titolo: 'Penna — Gelix',
        prezzo: null,
        immagini: ['gallery/penne/gelix-4.png', 'gallery/penne/gelix-7.png'],
      },
      {
        titolo: 'Penna — Gelyx',
        prezzo: null,
        immagini: ['gallery/penne/gelyx-1.png', 'gallery/penne/gelyx-2.png', 'gallery/penne/gelyx-3.png', 'gallery/penne/gelyx-5.png', 'gallery/penne/gelyx-6.png'],
      },
      {
        titolo: 'Penna — Glittergel',
        prezzo: null,
        immagini: ['gallery/penne/glittergel-1.png'],
      },
      {
        titolo: 'Penna — Mini',
        prezzo: null,
        immagini: ['gallery/penne/mini-1.png', 'gallery/penne/mini-2.png', 'gallery/penne/mini-3.png', 'gallery/penne/mini-4.png', 'gallery/penne/mini-5.png'],
      },
      {
        titolo: 'Penna — Pilot',
        prezzo: null,
        immagini: ['gallery/penne/pilot-1.png', 'gallery/penne/pilot-2.png'],
      },
      {
        titolo: 'Penna — Pilot Indelebile',
        prezzo: null,
        immagini: ['gallery/penne/pilot-indelebile-1.png', 'gallery/penne/pilot-indelebile-2.png'],
      },
      {
        titolo: 'Penna — Pilot Scatto',
        prezzo: null,
        immagini: ['gallery/penne/pilot-scatto-1.png'],
      },
      {
        titolo: 'Penna — Profumate',
        prezzo: null,
        immagini: ['gallery/penne/profumate-1.png', 'gallery/penne/profumate-2.png', 'gallery/penne/profumate-3.png', 'gallery/penne/profumate-4.png'],
      },
      {
        titolo: 'Penna — Ricariche Pilot',
        prezzo: null,
        immagini: ['gallery/penne/ricariche-pilot-1.png'],
      },
      {
        titolo: 'Penna — Rollergel',
        prezzo: null,
        immagini: ['gallery/penne/rollergel-1.png'],
      },
      {
        titolo: 'Penna — Set',
        prezzo: null,
        immagini: ['gallery/penne/set-1.png', 'gallery/penne/set-2.png', 'gallery/penne/set-3.png', 'gallery/penne/set-4.png'],
      },
      {
        titolo: 'Penna — Set Camncellabili',
        prezzo: null,
        immagini: ['gallery/penne/set-camncellabili-1.png'],
      },
      {
        titolo: 'Penna — Set Gelyx',
        prezzo: null,
        immagini: ['gallery/penne/set-gelyx-1.png', 'gallery/penne/set-gelyx-2.png', 'gallery/penne/set-gelyx-3.png'],
      },
      {
        titolo: 'Penna — Set Sfera',
        prezzo: null,
        immagini: ['gallery/penne/set-sfera-1.png'],
      },
      {
        titolo: 'Penna — Sfera',
        prezzo: null,
        immagini: ['gallery/penne/sfera-1.png'],
      },
      {
        titolo: 'Penna — Slurpy',
        prezzo: null,
        immagini: ['gallery/penne/slurpy-1.png'],
      },
      {
        titolo: 'Penna — Staedtler',
        prezzo: null,
        immagini: ['gallery/penne/staedtler-1.png', 'gallery/penne/staedtler-2.png', 'gallery/penne/staedtler-3.png', 'gallery/penne/staedtler-4.png', 'gallery/penne/staedtler-5.png'],
      },
      {
        titolo: 'Penna — Zampa',
        prezzo: null,
        immagini: ['gallery/penne/zampa-1.png', 'gallery/penne/zampa-2.png', 'gallery/penne/zampa-3.png', 'gallery/penne/zampa-4.png', 'gallery/penne/zampa-5.png'],
      },
      {
        titolo: 'Penna — Zoo',
        prezzo: null,
        immagini: ['gallery/penne/zoo-1.png', 'gallery/penne/zoo-2.png'],
      },
    ],
  },
  {
    id: 'portamerende',
    titolo: 'Portamerende',
    prodotti: [
      {
        titolo: 'Portamerenda — Ape',
        prezzo: null,
        immagini: ['gallery/portamerende/ape-1.png'],
      },
      {
        titolo: 'Portamerenda — Metallo',
        prezzo: null,
        immagini: ['gallery/portamerende/metallo-1.png', 'gallery/portamerende/metallo-2.png', 'gallery/portamerende/metallo-3.png', 'gallery/portamerende/metallo-4.png'],
      },
      {
        titolo: 'Portamerenda — Plast',
        prezzo: null,
        immagini: ['gallery/portamerende/plast-1.png', 'gallery/portamerende/plast-2.png', 'gallery/portamerende/plast-3.png'],
      },
      {
        titolo: 'Portamerenda — Tigre',
        prezzo: null,
        immagini: ['gallery/portamerende/tigre-1.png'],
      },
      {
        titolo: 'Portamerenda — Uni',
        prezzo: null,
        immagini: ['gallery/portamerende/uni-1.png'],
      },
    ],
  },
  {
    id: 'temperini',
    titolo: 'Temperini',
    prodotti: [
      {
        titolo: 'Temperino — Cestino',
        prezzo: null,
        immagini: ['gallery/temperini/cestino-1.png', 'gallery/temperini/cestino-2.png'],
      },
      {
        titolo: 'Temperino — Classico',
        prezzo: null,
        immagini: ['gallery/temperini/classico-1.png', 'gallery/temperini/classico-2.png'],
      },
      {
        titolo: 'Temperino — Elettrico',
        prezzo: null,
        immagini: ['gallery/temperini/elettrico-1.png', 'gallery/temperini/elettrico-2.png'],
      },
      {
        titolo: 'Temperino — Temp',
        prezzo: null,
        immagini: ['gallery/temperini/temp-1.png', 'gallery/temperini/temp-2.png', 'gallery/temperini/temp-3.png'],
      },
      {
        titolo: 'Temperino — Zoo',
        prezzo: null,
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
        titolo: 'Borsa — Modello 17',
        prezzo: null,
        immagini: ['gallery/borse/17.png'],
      },
      {
        titolo: 'Borsa — Bagno',
        prezzo: null,
        immagini: ['gallery/borse/bagno-1.png', 'gallery/borse/bagno-2.png'],
      },
      {
        titolo: 'Borsa — Fiori',
        prezzo: null,
        immagini: ['gallery/borse/fiori-1.png'],
      },
      {
        titolo: 'Borsa — Grande',
        prezzo: null,
        immagini: ['gallery/borse/grande-1.png', 'gallery/borse/grande-2.png'],
      },
      {
        titolo: 'Borsa — Lilla',
        prezzo: null,
        immagini: ['gallery/borse/lilla-1.png'],
      },
      {
        titolo: 'Borsa — Manico',
        prezzo: null,
        immagini: ['gallery/borse/manico-1.png', 'gallery/borse/manico-2.png', 'gallery/borse/manico-3.png'],
      },
      {
        titolo: 'Borsa — Moon',
        prezzo: null,
        immagini: ['gallery/borse/moon-1.png', 'gallery/borse/moon-2.png', 'gallery/borse/moon-3.png'],
      },
      {
        titolo: 'Borsa — Multi',
        prezzo: null,
        immagini: ['gallery/borse/multi-1.png', 'gallery/borse/multi-2.png'],
      },
      {
        titolo: 'Borsa — Poshette',
        prezzo: null,
        immagini: ['gallery/borse/poshette-1.png', 'gallery/borse/poshette-2.png'],
      },
    ],
  },
  {
    id: 'acquerelli-tempere',
    titolo: 'Acquerelli e Tempere',
    prodotti: [
      {
        titolo: 'Confezione — Acquerelli',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/acquerelli-1.png'],
      },
      {
        titolo: 'Confezione — Acquerelli Classico',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/acquerelli-classico-1.png'],
      },
      {
        titolo: 'Confezione — Acquerelli Grande',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/acquerelli-grande-1.png'],
      },
      {
        titolo: 'Confezione — Fluo',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/fluo-1.png'],
      },
      {
        titolo: 'Confezione — Mega',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/mega-1.png'],
      },
      {
        titolo: 'Confezione — Tempere',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/tempere-1.png'],
      },
      {
        titolo: 'Confezione — Tempere Solide',
        prezzo: null,
        immagini: ['gallery/acquerelli:tempere/tempere-solide-1.png', 'gallery/acquerelli:tempere/tempere-solide-2.png'],
      },
    ],
  },
];
