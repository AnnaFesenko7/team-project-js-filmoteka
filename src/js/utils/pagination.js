import renderListOfPages from './renderListOfPages';
import createMoviesMarkup from './createMoviesMarkup';
import GetURLFunction from '../api/getURLFunction';
import { getURLFunction } from '../main';
import showMovies from './showMovies';
// import attachOpenModalEvent from './utils/movieModal';
import { startSearch } from '../../index';
import * as moviesCache from './moviesCache';

import { apiService } from '../main';
export default class Pagination {
  constructor() {}

  onClickPagination(page, totalPages, getUrlFunction) {
    document.addEventListener('click', e => {
      const classes = e.target.classList;
      const dataAtrrPage = e.target.dataset?.page;

      if (dataAtrrPage === 'next') {
        Number((page += 1));
      } else if (dataAtrrPage === 'prev') {
        page -= 1;
      } else {
        page = Number(dataAtrrPage);
      }

      const isPagination = classes.contains('footer__item');

      const shouldRender = isPagination && !classes.contains('active') && page;

      if (!shouldRender) {
        return true;
      }

      //   apiService.getStartURL(page);
      //   this.methodUseCallback();

      apiService.getData(GetURLFunction.getStartURL(page)).then(data => {
        // startSearch.addMoviesToCache(data.results);
        const markup = createMoviesMarkup(data.results);
        showMovies(markup.join(''));
        apiService.url = '';
      });
      renderListOfPages(page, totalPages);
    });
  }
  //   methodUseCallback(callback) {
  //     callback();
  //   }
}
