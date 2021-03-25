// startApp.js

import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import homePage from './homePage';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  homePage();
};

export default startApp;
