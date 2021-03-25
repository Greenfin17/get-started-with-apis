// homePage.js

const homePage = () => {
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add('home');
  document.querySelector('.title-container').innerHTML = '<h1 class="home">API Apps</h1>';
  document.querySelector('main').innerHTML = `<div class="homepage-container">
    <p>Click a navbar link to view a demo app using API's</p></div>`;
};

export default homePage;
