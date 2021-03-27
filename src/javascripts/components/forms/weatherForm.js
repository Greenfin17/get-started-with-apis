// weatherForm.js

// import selectState from './selectState';

const weatherForm = () => {
  document.querySelector('.weather-form-container').innerHTML = `
    <form class="needs-validation" style="width: 25em;">
      <div class="form-group">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="input-city" required>
      </div>
      <button type="submit" class="btn btn-primary" id="btn-submit-location">Get Current Conditions</button>
    </form>`;
};

export default weatherForm;
