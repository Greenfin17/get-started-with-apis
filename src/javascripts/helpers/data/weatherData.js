// weatherData.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = 'https://api.openweathermap.org/data/2.5';
const apid = firebaseConfig.apiKey;

const locationArr = [];

const getWeather = (locationObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/weather?q=${locationObj.city}&units=imperial&appid=${apid}`).then((response) => {
    if (response.data) {
      resolve(response.data);
    }
  }).catch((error) => reject(error));
});

const storeLocation = (locationObj) => {
  locationArr.unshift(locationObj);
  if (locationArr.length > 3) {
    locationArr.pop();
  }
};

const retrieveLocations = () => (locationArr);

export { getWeather, storeLocation, retrieveLocations };
