// domEvents.js

import { jokeSetup, jokePunchLine, jokeError } from '../../components/cards/jokeCards';
import showLyrics from '../../components/showLyrics';
import { getJoke, storeJoke, getStoredJoke } from '../data/jokesData';
import getLyrics from '../data/lyricsData';
import { getWeather, retrieveLocations, storeLocation } from '../data/weatherData';
// import showWeather from '../../components/showWeather';
import { weatherCard, clearWeatherCards } from '../../components/cards/weatherCard';

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
  if (e.target.id === 'btn-submit-location') {
    const form = document.querySelector('.needs-validation');
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const city = document.querySelector('#input-city').value;
      const locationObj = {
        city,
      };
      form.classList.add('was-validated');
      storeLocation(locationObj);
      const locations = retrieveLocations();
      console.warn(locations);
      clearWeatherCards();
      locations.forEach((location) => {
        getWeather(location).then((report) => weatherCard(report));
      });
    }
  }
};

const domEvents = () => document.querySelector('body').addEventListener('click', jokeEvents);
export default domEvents;
