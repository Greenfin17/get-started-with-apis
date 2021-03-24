// startApp.js

import domBuilder from '../../components/domBuilder';
import domEvents from '../events/domEvents';
import jokesPage from './jokesPage';
// import jokesPage from './jokesPage';

const startApp = () => {
  domBuilder();
  domEvents();
  jokesPage();
};

export default startApp;
