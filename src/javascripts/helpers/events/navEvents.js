// navEvents.js

import homePage from '../views/homePage';
import jokesPage from '../views/jokesPage';
import lyricsPage from '../views/lyricsPage';
import weatherPage from '../views/weatherPage';

const navEventsListener = (e) => {
  if (e.target.id === 'api-home') {
    homePage();
  }
  if (e.target.id === 'jokes-link') {
    jokesPage();
  }
  if (e.target.id === 'lyrics-link') {
    lyricsPage();
  }
  if (e.target.id === 'weather-link') {
    weatherPage();
  }
};

const navEvents = () => {
  document.querySelector('.navbar-container').addEventListener('click', navEventsListener);
};

export default navEvents;
