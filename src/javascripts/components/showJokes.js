// showJokes.js

import getJoke from '../helpers/data/jokesData';
import { jokeCard } from './cards/jokeCards';

const showJokes = () => {
  getJoke().then((joke) => jokeCard(joke));
};

export default showJokes;
