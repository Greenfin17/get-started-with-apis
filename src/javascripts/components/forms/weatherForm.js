// weatherForm.js

import selectState from './selectState';

const weatherForm = () => {
  document.querySelector('.weather-form-container').innerHTML = `
    <form style="width: 25em;">
      <div class="form-group">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="input-city">
      </div>
      <div class="form-row">
        <div class="form-group col-md-8" id="select-state">
        </div>
        <div class="form-group col-md-4">
          <label for="input-zip">Zip</label>
          <input type="text" class="form-control" id="input-zip">
        </div>
      </div>
      <button type="submit" class="btn btn-primary" id="btn-submit-location">Get Current Conditions</button>
    </form>`;
  selectState();
};

export default weatherForm;
