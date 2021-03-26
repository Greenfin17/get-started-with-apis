// weatherData.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = 'https://api.openweathermap.org/data/2.5';
const apid = firebaseConfig.apiKey;

const getWeather = (locationObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/weather?q=${locationObj.city}&units=imperial&appid=${apid}`).then((response) => {
    if (response.data) {
      resolve(response.data);
    }
  }).catch((error) => reject(error));
});

export default getWeather;
