const container = document.querySelector('#container');

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

addBooktoLibrary('bora','bts',235,'read');
addBooktoLibrary('hello','me',293,'not read');

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

