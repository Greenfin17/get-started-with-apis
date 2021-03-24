// jokesPage.js

import { jokeGenerator } from '../../components/cards/jokeCards';

const jokesPage = () => {
  document.querySelector('header').innerHTML = '<h1 class="jokes">Jokes</h1>';
  jokeGenerator();
};

export default jokesPage;
