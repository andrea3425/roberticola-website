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

Il sito e' pensato per girare come container nginx dietro un reverse proxy condiviso
(nginx-proxy + acme-companion) definito in un repo infra separato, dato che il VPS
ospitera' piu' siti.

- Questo repo produce solo un'immagine Docker statica (`Dockerfile`) che espone la porta 80.
- `docker-compose.yml` collega il container alla rete Docker esterna `proxy`, creata dal
  repo infra, e imposta `VIRTUAL_HOST`/`LETSENCRYPT_HOST` cosi' il reverse proxy scopre
  automaticamente il sito e richiede il certificato Let's Encrypt.
- Nessuna config nginx custom e' necessaria qui: il routing e' hash-based (`#/galleria`),
  quindi nginx serve sempre lo stesso `index.html` senza bisogno di regole `try_files`.

Prerequisiti sul VPS prima del primo deploy:
1. DNS di roberticola.it (e www) puntato all'IP del VPS.
2. Rete Docker esterna `proxy` creata (dal repo infra).
3. Repo infra con nginx-proxy + acme-companion gia' in esecuzione.

Poi qui basta: `docker compose up -d --build`.
