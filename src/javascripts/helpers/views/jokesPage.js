// jokesPage.js

import { jokeGenerator } from '../../components/cards/jokeCards';

const jokesPage = () => {
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add('jokes');
  document.querySelector('.title-container').innerHTML = '<h1 class="jokes">Jokes</h1>';
  jokeGenerator();
};

export default jokesPage;
