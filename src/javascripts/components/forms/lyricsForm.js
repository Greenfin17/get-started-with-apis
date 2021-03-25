// lyricForm.js

const lyricsForm = () => {
  document.querySelector('.lyrics-form-container').innerHTML = `
    <div class="lyrics">
      <form class="lyrics-form" style="width: 25em;">
      <div class="form-label"><h5>Song Lyric Search Form</h5></div>
        <div class="form-group">
          <label for="artist">Artist</label>
          <input type="text" class="form-control" id="artist">
        </div>
        <div class="form-group">
          <label for="song-title">Song title:</label>
          <input type="text" class="form-control" id="song-title">
        </div>
        <button type="submit" class="btn btn-primary" id="btn-lyrics-submit">Submit</button>
      </form>
    </div>`;
};

export default lyricsForm;
