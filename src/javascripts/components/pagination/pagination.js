// characterPagination.js

const pagination = (id, page, pages, range) => {
  const currPage = parseInt(page, 10);
  let firstPager = 1;
  let lastPager = 1;
  if (pages > 1) {
    if (currPage > 1) {
      firstPager = Math.max(1, currPage - range);
      lastPager = Math.min(pages, firstPager + (range * 2));
      // lastPager = Math.min(pages, currPage + range);
    } else if (currPage === 1) {
      lastPager = Math.min(pages, (range * 2) + 1);
    }
    console.warn(firstPager, lastPager);
    let domStr = `
    <nav aria-label="Page navigation example">
    <ul class="pagination">`;
    let active = '';
    domStr += `<li class="page-item">
      <a class="page-link" id="page--${1}--first" href="#"><<</a></li>`;
    const firstPagerTarget = Math.max(1, currPage - 1);
    domStr += `<li class="page-item">
      <a class="page-link" id="page--${firstPagerTarget}--previous" href="#">Previous</a></li>`;
    let pagePosition = '';
    const lastPagerTarget = Math.min(pages, currPage + 1);
    for (let i = firstPager; i <= lastPager; i += 1) {
      active = '';
      if (i === currPage) {
        active = 'active';
      }
      if (i === lastPager) {
        pagePosition = 'right-pager';
      }
      domStr += `
        <li class="page-item ${active}"><a class="page-link ${pagePosition}" id="page--${i}" href="#">${i}</a></li>`;
      if (i === lastPager) {
        domStr += `
        <li class="page-item"><a class="page-link" id="page--${lastPagerTarget}--next" href="#">Next</a></li>`;
      }
    }
    domStr += `<li class="page-item">
      <a class="page-link" id="page--${pages}--last" href="#">>></a></li>`;
    domStr += '</ul></nav>';
    document.querySelector(id).innerHTML = domStr;
  }
};

export default pagination;
