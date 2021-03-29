// _lordCharacter.js

const characterCard = (characterObj, quote = '') => {
  // eslint-disable-next-line no-underscore-dangle
  const Id = characterObj._id;
  document.querySelector('#lord-rings-container').innerHTML += `
    <div class="card character-card" id="character--${Id}" style="width: 18rem;">
    <div class="card-body">
      <div class="card__face card__face--front">
        <h5 class="card-title character-card-title">${characterObj.name}</h5>
        <p class="gender">${characterObj.gender}<br />${characterObj.race}</p>
      </div>
      <div class="card__face card__face--back">
        <p class="card-quote">${quote}</p>
  </div>`;
};

export default characterCard;
