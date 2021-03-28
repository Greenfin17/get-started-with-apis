// characterHander.js
import characterCard from '../../../components/cards/lordCharacter';
import { getPagedCharacters, getQuote } from '../../data/lordData';
import pagination from '../../../components/pagination/pagination';

const characterHandler = (page = 1, pageLimit = 5) => {
  console.warn(`page argument ${page}`);
  getPagedCharacters(page, pageLimit).then((charactersArr) => {
    document.querySelector('#lord-rings-container').innerHTML = '';
    const { pages } = charactersArr;
    charactersArr.docs.forEach((character) => {
      // eslint-disable-next-line no-underscore-dangle
      getQuote(character._id).then((quote) => {
        let dialog = '';
        if (quote.docs.length) {
          dialog = quote.docs[0].dialog;
        }
        console.warn(`character is ${character.name} ${dialog}`);
        characterCard(character, dialog);
      });
    });
    if (pages > 1) {
      pagination('#pagination-container', page, pages, 4);
    }
  });
};

export default characterHandler;
