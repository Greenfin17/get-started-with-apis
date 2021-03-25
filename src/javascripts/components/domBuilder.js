// domBuilder.js

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <header class="api-header">
    <nav class="navbar-container"></nav>
    <div class="title-container"></div>
  </header>
  <main class="api-main"></main>`;
};

export default domBuilder;
