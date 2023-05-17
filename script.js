//Get the elements for the form
//Elements to make the form appear
const form = document.querySelector(".display-form");
const formPage = document.querySelector(".form-container");

//Array where the created books are stored
const books = [];

//book constructor
function book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

//function that creates the books and add them to the array
function addBooks() {
    const title = document.getElementById("#book-title").value;
    const author = document.getElementById("#author-name").value;
    const pages = document.getElementById("#pages-number").value;
    const read = document.getElementById("#read").ariaChecked;
    
    //create the book
    const newBook = new book(title, author, pages, read);

    //add the new book to the array
    books.push(newBook);
}




//Make the form appear
let visible = false;

function visibility() {
    if (visible == false) {
        visible = true;
    }
    else if (visible == true) {
        visible = false;
    }
}

function formVisible() {
    visibility();
    if (visible == true) {
        formPage.style.setProperty('display', 'block')
    }
    else if (visible == false) {
        formPage.style.setProperty('display', 'none')
    }
}

form.addEventListener('click', formVisible)