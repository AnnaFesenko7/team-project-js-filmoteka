export default class SearchActivePage {
    constructor() {
        this.numPage = '';
        this.arrayItems = '';
        this.activePage = '';

    }

   activeDefaultItem(items) {
        
    items[0].classList.add('is-active');
     this.numPage = 1;
    
    }

     addEventListener() {
        console.log( 'listener', this.arrayItems)
        for (let item of this.arrayItems) {
       
            item.addEventListener('click', this.onItemClick)
               
            // console.log('activePage', activePage);
        }
    }
    
    onItemClick(e) {

    const active = document.querySelector('.is-active')
    
        if (active) {
            active.classList.remove('is-active');
        }
        let activePage = this.innerHTML;
       
        this.activePage = activePage
        console.log( this.activePage);
        // return activePage;
        }

    
    
   
    searchNumberPage() {
         if (this.activePage === '...') { return }
        
       
        if (this.activePage === '←') { this.decrementPage }
        
        if (this.activePage === '→') { this.incrementPage }
    
        else {
            // this.classList.add('is-active');
            this.numPage =  Number(this.activePage)
            console.log('54-this.numPage',this.numPage)
            return this.numPage
        }
    }


    addActiveClass() {
        console.log('addcl', this.arrayItems)
        for (let item of this.arrayItems) {
       console.log(item)
            if (item.innerHTML === this.numPage) {
                 item.classList.add('is-active');
            }
        }
    }
    
   
     incrementPage() {
    console.log('incr', this.numPage)
         this.numPage += 1;
         this.addActiveClass
     
}
     decrementPage() {
    
         this.numPage -= 1;
         this.addActiveClass()
    }
    
     get page() {
        return this.numPage;
    }
    set page(newPage) {
        this.numPage = newPage;
      }
      
}


