const container = document.querySelector('#container');
const newBookBtn = document.querySelector('#new-book');
const newBookModal = document.querySelector('#new-book-modal');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const statusInput = document.querySelector('#status-input');
const submitBtn = document.querySelector('#submit-btn');



function Book(title,author,pages,status){

    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages,${status}`;
    }

}

const bookArr = [];

function addBooktoLibrary(title,author,pages,status) {
    bookArr.push(new Book(title,author,pages,status));
   console.log(bookArr);
}


newBookBtn.addEventListener('click', () => {
    newBookModal.showModal();
})


submitBtn.addEventListener('click', () => {
    
    addBooktoLibrary(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);

    bookArr.forEach((book) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        container.appendChild(newDiv);
    
        let ul = document.createElement('ul');
        newDiv.appendChild(ul);
    
        let titleLi = document.createElement('li');
        titleLi.innerText = book.title;
        ul.appendChild(titleLi);
    
        let authorLi = document.createElement('li');
        authorLi.innerText = book.author;
        ul.appendChild(authorLi);
    
        let pagesLi = document.createElement('li');
        pagesLi.innerText = book.pages;
        ul.appendChild(pagesLi);
    
        let statusLi = document.createElement('li');
        statusLi.innerText = book.status;
        ul.appendChild(statusLi);
    
    })
})





