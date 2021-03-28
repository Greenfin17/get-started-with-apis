// navEvents.js

import homePage from '../views/homePage';
import jokesPage from '../views/jokesPage';
import lyricsPage from '../views/lyricsPage';
import weatherPage from '../views/weatherPage';
import lordPage from '../views/lordPage';

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
  if (e.target.id === 'lord-link') {
    lordPage();
  }
};

const navEvents = () => {
  document.querySelector('.navbar-container').addEventListener('click', navEventsListener);
};

export default navEvents;
