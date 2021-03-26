// weatherCard.js

const clearWeatherCards = () => {
  document.querySelector('.weather-container').innerHTML = '';
};

const weatherCard = (weatherObj) => {
  document.querySelector('.weather-container').innerHTML += `
    <div class="card weather-card" style="width: 18rem;">
    <img src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${weatherObj.name}</h5>
      <p class="card-text">${weatherObj.main.temp} | ${weatherObj.weather[0].main}</p>
    </div>
  </div>`;
};

export { weatherCard, clearWeatherCards };
