// jokesPage.js

import { jokeGenerator } from '../../components/cards/jokeCards';

const jokesPage = () => {
  document.querySelector('header').innerHTML = '<h1>Jokes</h1>';
  jokeGenerator();
};

export default jokesPage;
