export default function renderListOfPages(activePage, total_pages, pagination) {
   
    console.log(pagination)
    console.log(total_pages)
    const markupFirstLi = `<li class="footer__item ">1</li>`;
    // let markupLi = `<li class="footer__item ">${i}</li>`;
    const markupLastLi = `<li class="footer__item ">${total_pages}</li>`;
    const markupDots = `<li class="footer__item ">...</li>`;
    const markupArrowLeft =
        `<li class="footer__item footer__arrow footer__arrow--left ">&#x02190</li>`
    const markupArrowRight =
        `<li class="footer__item footer__arrow ">&#x02192</li>`
    
    
    let markup = []
    if (total_pages <= 11) {
       
        for (let i = 1; i <= total_pages; i += 1) {
            let markupLi = `<li class="footer__item ">${i}</li>`;
            markup.push(markupLi);
           
        }
        pagination.insertAdjacentHTML('beforeend', markup.join(''));
    }

    
     
    if (activePage > 6 && activePage< total_pages-6) {
         markup.push(markupArrowLeft);
        markup.push(markupFirstLi);
       
        markup.push(markupDots);
    
    for (let i = activePage - 2; i <= activePage + 2; i += 1) {
        let markupLi = `<li class="footer__item ">${i}</li>`;
        markup.push(markupLi);
        }
        markup.push(markupDots);
        markup.push(markupLastLi);
        
        markup.push(markupArrowRight);
        console.log(markup);
    pagination.insertAdjacentHTML('beforeend', markup.join(''));
    }
    

    if (activePage <= 6) {
        
    
        for (let i = 1; i <= 8; i += 1) {
       
        let markupLi = `<li class="footer__item ">${i}</li>`;
        markup.push(markupLi);
        }
        markup.push(markupDots);
        markup.push(markupLastLi);
        
        markup.push(markupArrowRight);
        console.log(markup);
    pagination.insertAdjacentHTML('beforeend', markup.join(''));
    }

     if (activePage >= total_pages-6) {
         markup.push(markupArrowLeft);
        markup.push(markupFirstLi);
       
        markup.push(markupDots);
    
        for (let i = total_pages-6; i <= total_pages; i += 1) {
       
        let markupLi = `<li class="footer__item ">${i}</li>`;
        markup.push(markupLi);
        }
      
    pagination.insertAdjacentHTML('beforeend', markup.join(''));
    }
    
    
   return markup
  
}