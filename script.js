const container = document.querySelector('#container');
const newBookBtn = document.querySelector('#new-book');
const newBookModal = document.querySelector('#new-book-modal');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const statusInput = document.querySelector('#status-input');
const submitBtn = document.querySelector('#submit-btn');
let deleteButtons = document.querySelectorAll('.delete-btn');





class Book {

    bookLibrary = new Array();

    constructor() {}

    addBooktoLibrary(title,author,pages,status) {
        this.bookLibrary.push({title,author,pages,status});
    }

    getBooks() {
        return this.bookLibrary;
    }
    
    
}



newBookBtn.addEventListener('click', () => {

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput.value = 'read';

    newBookModal.showModal();
})



function displayBook(){

        
            const newDiv = document.createElement('div');
            newDiv.classList.add('card');
            container.appendChild(newDiv);
            
            const bookList = document.createElement('ul');
            newDiv.appendChild(bookList);

            const bookTitle = document.createElement('li');
            bookTitle.innerText = `${newBook.getBooks()[newBook.getBooks().length - 1].title}`;
            bookList.appendChild(bookTitle);

            const bookAuthor = document.createElement('li');
            bookAuthor.innerText = `${newBook.getBooks()[newBook.getBooks().length - 1].author}`;
            bookList.appendChild(bookAuthor);

            const bookPages = document.createElement('li');
            bookPages.innerText = `${newBook.getBooks()[newBook.getBooks().length - 1].pages}`;
            bookList.appendChild(bookPages);

            const bookStatus = document.createElement('li');
            bookStatus.innerText = `${newBook.getBooks()[newBook.getBooks().length - 1].status}`;
            bookList.appendChild(bookStatus);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            bookList.appendChild(deleteBtn);
    
            deleteBtn.addEventListener('click', () => {
                const currentDiv = deleteBtn.parentNode;
                currentDiv.remove();
            })
            

    };

let newBook = new Book();

submitBtn.addEventListener('click', () => {
    newBook.addBooktoLibrary(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);
    displayBook();
});

// deleteButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button);
//     })
// })









