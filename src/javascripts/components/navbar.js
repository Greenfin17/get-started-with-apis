// navbar.js

const navBar = () => {
  document.querySelector('.navbar-container').innerHTML = ` 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" id="api-home">API Apps</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="jokes-link">Jokes<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="lyrics-link">Lyrics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="weather-link">Weather</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="lord-link">Lord of the Rings</a>
          </li>
        </ul>
      </div>
    </nav>`;
};

export default navBar;
