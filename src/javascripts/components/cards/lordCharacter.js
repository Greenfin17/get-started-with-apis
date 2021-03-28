// lordCharacter.js

const characterCard = (characterObj, quote = '') => {
  // eslint-disable-next-line no-underscore-dangle
  const Id = characterObj._id;
  document.querySelector('#lord-rings-container').innerHTML += `
    <div class="card character-card" style="width: 18rem;">
    <div class="card-body">
      <div class="card-front">
        <h5 class="card-title">${characterObj.name}</h5>
      </div>
      <div class="card-back">
        <p class="card-quote">${quote}</p>
      </div>
      <button class="btn btn-primary" id="${Id}">Quote</button>
    </div>
  </div>`;
};

export default characterCard;
