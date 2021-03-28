// lordData.js
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = 'https://the-one-api.dev/v2';
const apid = firebaseConfig.theOneApiKey;

const getQuote = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/character/${id}/quote`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    }).catch((error) => reject(error));
});

const getCharacters = () => new Promise((resolve, reject) => {
  console.warn(apid);
  axios.get(`${dbUrl}/character?limit=20`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        const responseArr = Object.values(response.data);
        resolve(responseArr[0]);
      }
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

const getPagedCharacters = (page, size) => new Promise((resolve, reject) => {
  console.warn(`in getPagedCharactes page is ${page}`);
  axios.get(`${dbUrl}/character?page=${page}&limit=${size}`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        console.warn(response.data);
        resolve(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

export { getCharacters, getPagedCharacters, getQuote };
