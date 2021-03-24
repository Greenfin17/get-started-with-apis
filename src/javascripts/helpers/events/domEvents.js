// domEvents.js

import { jokeSetup, jokePunchLine, jokeError } from '../../components/cards/jokeCards';
import { getJoke, storeJoke, getStoredJoke } from '../data/jokes';

const jokeEvents = (e) => {
  if (e.target.id === 'get-joke'
      || e.target.id === 'get-new-joke') {
    getJoke().then((joke) => {
      if (joke) {
        jokeSetup(joke);
        storeJoke(joke);
      } else jokeError();
    });
  }
  if (e.target.id === 'get-punchline') {
    const joke = getStoredJoke();
    jokePunchLine(joke);
  }
};

const domEvents = () => document.querySelector('body').addEventListener('click', jokeEvents);

export default domEvents;
