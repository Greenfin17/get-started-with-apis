// domBuilder.js

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <header class="api-header"></header>
  <main class="api-main"></main>`;
};

export default domBuilder;
