// paginationEvents.js

import characterHandler from './handlers/characterHandler';

const paginationListener = (e) => {
  if (e.target.id.includes('page')) {
    e.preventDefault();
    const pageLimit = 5;
    const targetPage = e.target.id.split('--')[1];
    console.warn(`target page ${targetPage}`);
    characterHandler(targetPage, pageLimit);
  }
};

const paginationEvents = () => {
  document.querySelector('#pagination-container').addEventListener('click', paginationListener);
};

export default paginationEvents;
