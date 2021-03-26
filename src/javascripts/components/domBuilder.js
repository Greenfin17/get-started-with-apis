// domBuilder.js

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <header>
    <nav class="navbar-container"></nav>
    <div class="title-container"></div>
  </header>
  <main></main>`;
};

export default domBuilder;
