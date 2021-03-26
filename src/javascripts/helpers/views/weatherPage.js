// weatherPage.js

import weatherForm from '../../components/forms/weatherForm';

const weatherPage = () => {
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add('weather');
  document.querySelector('main').innerHTML = '';
  document.querySelector('.title-container').innerHTML = '<h1 class="weather">Weather</h1>';
  document.querySelector('main').innerHTML = `<div class="weather-container"></div>
    <div class="weather-form-container"></div>`;
  weatherForm();
};

export default weatherPage;
