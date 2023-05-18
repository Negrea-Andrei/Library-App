//Get the elements for the form
//Elements to make the form appear
const form = document.querySelector(".display-form");
const formPage = document.querySelector(".form-container");

//Get the submit button
const submit = document.querySelector(".submit")

//Link the grid to a variable
const grid = document.querySelector(".right")

//Array where the created books are stored
const books = [];

//book constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//book display function
function displayBooks() {
    //get the index of the book for the delete button
    let index = books.length - 1;

    //prepare the book card with all the information about the book
    let bookCard = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let bookRead = document.createElement('input');

    //Delete button
    let bookDelete = document.createElement('button');
    bookDelete.innerHTML = "Delete"

    bookTitle.innerHTML = books[index].title;
    bookAuthor.innerHTML = `Author: ${books[index].author}`;
    bookPages.innerHTML = `Pages: ${books[index].pages}`;

    // Set the checked property of bookRead based on the value of read checkbox
    bookRead.type = 'checkbox';
    bookRead.checked = books[index].read;

    //Append the parts of the book to the book card
    bookCard.appendChild(bookTitle).className = "title-card";
    bookCard.appendChild(bookAuthor).className = "author-card";
    bookCard.appendChild(bookPages).className = "pages-card";
    bookCard.appendChild(bookRead).className = "checked-card";
    bookCard.appendChild(bookDelete).className = "delete";

    //Append the book-card to the grid
    grid.appendChild(bookCard).className = "book-card";

    //Delete function
    function deleteBook() {
        books.splice(index, 1)
    }

    function test() {
        deleteBook();
        displayBooks();
    }

    const deleteButton = document.querySelector(".delete");
    deleteButton.addEventListener('click', test)
}

//function that add them to the array
function addBooks() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author-name").value;
    const pages = document.getElementById("pages-number").value;
    const read = document.getElementById("read").checked;

    //create the book
    const newBook = new book(title, author, pages, read);

    //add the new book to the array if the inputs are correct
    if (!title || !author || !pages) {
        alert("Please fill all the inputs")
    }
    else {
        books.push(newBook);
        displayBooks();
    }
}

submit.addEventListener("click", event => {
    event.preventDefault()
    addBooks()
    document.getElementById('form-document').reset();
});

//Make the form appear
let visible = false;

function visibility() {
    if (visible == false) {
        visible = true;
        formPage.style.setProperty('display', 'block')
    }
    else if (visible == true) {
        visible = false;
        formPage.style.setProperty('display', 'none')
    };
}


form.addEventListener('click', visibility)