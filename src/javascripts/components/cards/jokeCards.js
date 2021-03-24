// jokeCards.js

const jokeGenerator = () => {
  document.querySelector('main').innerHTML = `
  <div class="jokes">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke Generator</h5>
        <a href="#" class="btn btn-primary" id="get-joke">GET A JOKE</a>
      </div>
    </div>
  </div>`;
};

const jokeSetup = (joke) => {
  document.querySelector('main').innerHTML = `
  <div class="jokes">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <p class="card-text">${joke.setup}</p>
        <a href="#" class="btn btn-primary" id="get-punchline">GET PUNCHLINE</a>
      </div>
    </div>
  </div>`;
};

const jokePunchLine = (joke) => {
  document.querySelector('main').innerHTML = `
  <div class="jokes">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${joke.type}</h5>
        <p class="card-text">${joke.setup}</p>
        <p class="card-text">${joke.punchline}</p>
        <a href="#" class="btn btn-primary" id="get-new-joke">GET A NEW JOKE</a>
      </div>
    </div>
  </div>`;
};
const jokeError = () => {
  document.querySelector('main').innerHTML = `
    <div class="jokes">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Error getting joke</h5>
          <a href="#" class="btn btn-primary" id="get-joke">Get a Joke</a>
        </div>
      </div>
    </div>`;
};

export {
  jokeGenerator, jokeSetup,
  jokePunchLine, jokeError
};
