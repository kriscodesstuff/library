const container = document.querySelector('#container');
const newBookBtn = document.querySelector('#new-book');
const newBookModal = document.querySelector('#new-book-modal');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const statusInput = document.querySelector('#status-input');
const submitBtn = document.querySelector('#submit-btn');
let deleteButtons = document.querySelectorAll('.delete-btn');



// function Book(title,author,pages,status){

//     this.title = title; 
//     this.author = author;
//     this.pages = pages;
//     this.status = status;

//     this.info = function(){
//         return `${title} by ${author}, ${pages} pages,${status}`;
//     }

// }

class Book {
    constructor(title,author,pages,status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}


newBookBtn.addEventListener('click', () => {

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput.value = 'read';

    newBookModal.showModal();
})

let bookArr = [];


function addBooktoLibrary(title,author,pages,status) {
        bookArr.push(new Book(title,author,pages,status));  
}

function displayBook(){

        
            const newDiv = document.createElement('div');
            newDiv.classList.add('card');
            container.appendChild(newDiv);
            
            const bookList = document.createElement('ul');
            newDiv.appendChild(bookList);

            const bookTitle = document.createElement('li');
            bookTitle.innerText = `${bookArr[bookArr.length - 1].title}`;
            bookList.appendChild(bookTitle);

            const bookAuthor = document.createElement('li');
            bookAuthor.innerText = `${bookArr[bookArr.length - 1].author}`;
            bookList.appendChild(bookAuthor);

            const bookPages = document.createElement('li');
            bookPages.innerText = `${bookArr[bookArr.length - 1].pages}`;
            bookList.appendChild(bookPages);

            const bookStatus = document.createElement('li');
            bookStatus.innerText = `${bookArr[bookArr.length - 1].status}`;
            bookList.appendChild(bookStatus);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            bookList.appendChild(deleteBtn);
    
            deleteBtn.addEventListener('click', () => {
                const currentDiv = deleteBtn.parentNode;
                currentDiv.remove();
            })
            

    };


submitBtn.addEventListener('click', () => {

    addBooktoLibrary(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);

    displayBook();
    

});

deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button);
    })
})









