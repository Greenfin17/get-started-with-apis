// domEvents.js

import { jokeSetup, jokePunchLine, jokeError } from '../../components/cards/jokeCards';
import showLyrics from '../../components/showLyrics';
import { getJoke, storeJoke, getStoredJoke } from '../data/jokesData';
import getLyrics from '../data/lyricsData';
// import showLyrics from '../../components/showLyrics';

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

  if (e.target.id === 'btn-lyrics-submit') {
    e.preventDefault();
    const artist = document.querySelector('#artist').value;
    const title = document.querySelector('#song-title').value;
    const songObj = {
      artist,
      title
    };
    getLyrics(songObj).then((lyrics) => showLyrics(songObj, lyrics));
  }
};

const domEvents = () => document.querySelector('body').addEventListener('click', jokeEvents);

export default domEvents;
