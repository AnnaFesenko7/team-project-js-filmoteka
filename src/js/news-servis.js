const API_KEY = 'e900ddd99edc3affd146f1905e638fd1'
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day'
   


export default class NewsApiService {
  constructor() {
    // this.searchQuery = '';
    this.activePage = 1;
  }
    
  onRequest() {
    
       const url = `${BASE_URL}?api_key=${API_KEY}&page=${this.activePage}`
        console.log(this)
      return fetch(url)
        .then(r => {
          if(!r.ok) {throw Error(r.statusText);
          }return r.json()})
         .then(data => {
           console.log ('new-servis',data)
           if(data.total_pages===0){throw Error(r.statusText)}
          
           return {data, page:this.activePage}
         });
  }
  

  
      
   

    get page() {
        return this.activePage;
    }

    set page(newPage) {
        this.activePage = newPage;
      }
      
    //  get query() {
    //     return this.searchQuery;
    // }
    // set query(newQuery) {
    //     this.searchQuery = newQuery;
    //   }
      


    
}