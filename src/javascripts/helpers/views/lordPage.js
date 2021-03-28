// lordPage.js

import paginationEvents from '../events/paginationEvents';

const lordPage = () => {
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add('lord');
  document.querySelector('main').innerHTML = '';
  document.querySelector('.title-container').innerHTML = `<h1 class="lord">Lord of the Rings</h1>
  <nav class="navbar-collapse collapse show d-flex justify-content-center">
    <div id="lord-nav" >
      <ul class="navbar-nav mr-auto d-flex flex-wrap">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="characters-link">Characters<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="movies-link">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="books-link">Books</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  document.querySelector('main').innerHTML = `<div class="lord-form-container"></div>
    <div class="d-flex flex-wrap justify-content-around" id="lord-rings-container"></div>
    <div class="d-flex flex-wrap justify-content-center" id="pagination-container"></div>`;
  paginationEvents();
};

export default lordPage;
