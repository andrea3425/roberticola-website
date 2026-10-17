# roberticola.it

Sito vetrina statico (Single Page App vanilla JS, routing hash-based, nessun build step).

## Struttura

```
index.html      shell della SPA (header, nav, mount point #app)
css/style.css   stili
js/app.js       router hash-based (#/  e  #/galleria)
public/         loghi e favicon
gallery/        immagini della galleria
```

## Sviluppo locale

Basta aprire `index.html` in un browser, oppure servirlo con un server statico qualsiasi
(es. `npx serve .` o `python3 -m http.server`).

## Deploy

Il sito e' pensato per girare su cloudflare pages.