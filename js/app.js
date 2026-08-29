const app = document.getElementById('app');

const pages = {
  '/': () => `
    <section class="page page-home">
      <p>roberticola.it — sito in costruzione...</p>
    </section>
  `,
  '/galleria': () => `
    <section class="page page-gallery">
      <p>roberticola.it — sito in costruzione...</p>
      <div class="gallery-grid"></div>
    </section>
  `,
};

function currentPath() {
  return window.location.hash.replace(/^#/, '') || '/';
}

function render() {
  const path = currentPath();
  const view = pages[path] || pages['/'];
  app.innerHTML = view();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
