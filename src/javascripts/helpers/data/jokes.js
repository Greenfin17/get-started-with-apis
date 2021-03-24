// jokes.js

import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com/random_joke';

let storedJoke = '';

const storeJoke = (joke) => {
  storedJoke = joke;
};

const getStoredJoke = () => {
  console.warn(`in getStoredJoke: ${storedJoke}`);
  return storedJoke;
};

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}`).then((response) => {
    if (response.data) {
      resolve(response.data);
    }
  }).catch((error) => reject(error));
});

export { getJoke, storeJoke, getStoredJoke };
