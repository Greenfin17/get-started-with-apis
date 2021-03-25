// lyricsPage.js

import lyricsForm from '../../components/forms/lyricsForm';

const lyricsPage = () => {
  document.querySelector('body').classList = '';
  document.querySelector('body').classList.add('lyrics');
  document.querySelector('main').innerHTML = '';
  document.querySelector('.title-container').innerHTML = '<h1 class="jokes">Lyrics</h1>';
  document.querySelector('main').innerHTML = `<div class="lyrics-form-container"></div>
    <div class="lyrics-container"></div>`;
  document.querySelector('.title-container').innerHTML = '<h1 class="lyrics">Lyrics</h1>';
  lyricsForm();
};

export default lyricsPage;
