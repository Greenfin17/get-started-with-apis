// showLyrics.js

const showLyrics = (songObj, lyrics) => {
  document.querySelector('.lyrics-container').innerHTML = `
  <h4 class="song-title">${songObj.title}</h4>
  <h6 class="song-artist">By: ${songObj.artist}</h6>
  <div class="song-lyrics">${lyrics.lyrics}</div>`;
};

export default showLyrics;
