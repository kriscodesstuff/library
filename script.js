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
}



newBookBtn.addEventListener('click', () => {

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput.value = 'read';

    newBookModal.showModal();
})


submitBtn.addEventListener('click', () => {

    addBooktoLibrary(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);

    const test = bookArr[bookArr.length - 1].title;

    let newDiv = document.createElement('div');
    newDiv.classList.add('card');
    container.appendChild(newDiv);

    let ul = document.createElement('ul');
    newDiv.appendChild(ul);

    let titleLi = document.createElement('li');
    titleLi.innerText = bookArr[bookArr.length - 1].title;
    ul.appendChild(titleLi);

    let authorLi = document.createElement('li');
    authorLi.innerText = bookArr[bookArr.length - 1].author;
    ul.appendChild(authorLi);

    let pagesLi = document.createElement('li');
    pagesLi.innerText = bookArr[bookArr.length - 1].pages;
    ul.appendChild(pagesLi);

    let statusLi = document.createElement('li');
    statusLi.innerText = bookArr[bookArr.length - 1].status;
    ul.appendChild(statusLi);

})





