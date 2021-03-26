// selectState.js

import stateData from '../../helpers/data/stateData';

const selectState = () => {
  let domStr = `
    <label for="input-state">State</label>
    <select id="input-state" class="form-control">
      <option selected>Select a State</option>`;
  stateData.forEach((state) => {
    domStr += `<option value="${state.id}">${state.name}</option>`;
  });
  domStr += '</select>';
  document.querySelector('#select-state').innerHTML = domStr;
};

export default selectState;
