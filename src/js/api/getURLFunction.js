const API_KEY = 'e900ddd99edc3affd146f1905e638fd1';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class GetURLFunction {
  constructor() {}

  static getStartURL(activePage) {
    return `${BASE_URL}/trending/all/day?sort_by=popularity.desc&api_key=${API_KEY}&page=${activePage}`;
  }

  static getGenreURL() {
    return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  }

  static getsearchURL(activePage, query) {
    return `${BASE_URL}/search/movie?&api_key=${API_KEY}&page=${activePage}&query=${query}`;
  }

}
