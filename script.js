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

//Warning div for error
const warning = document.querySelector(".warning")

//Cancel button from warning form
const close = document.querySelector(".close")

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

    //Add a data value to the elements to keep track of them
    bookCard.setAttribute('data-value', (books.length - 1));

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


    //Make the delete buttons remove the card from the grid
    bookDelete.addEventListener('click', () => {
        const parentElement = bookDelete.parentNode;
        parentElement.remove();
        let data_value = parentElement.getAttribute('data-value');

        books.splice(data_value, 1);

        //Change the data-value of the books after a book is deleted
        //This will make the book-card data coincide to the value of the book object in the array        
        const bookCards = document.querySelectorAll(".book-card");
        bookCards.forEach((card, newIndex) => {
            if (newIndex >= data_value) {
                card.setAttribute('data-value', newIndex);
            }
        });
    });
};

//function that add them to the array
function addBooks() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author-name").value;
    const pages = document.getElementById("pages-number").value;
    const read = document.getElementById("read").checked;

    //create the book
    const newBook = new book(title, author, pages, read);

    //This function checks if there are any book duplicates
    function checkDuplicates() {
        //create a variable tht is going to hold the value
        let value = false;

        //Loop for every book in the array
        books.forEach(book => {

            /*This function will eliminate all the white space and any symbols that might be 
            in the title to make sure */
            function cleanString(string) {
                return string.replace(/[^a-zA-Z]/g, '');
            }

            //All the variables that hold the input title and author and the ones that hol the title and author for each book in the array
            let inputTitle = cleanString(book.title).toLowerCase();
            let bookTitle = cleanString(title).toLowerCase();
            let inputAuthor = cleanString(book.author).toLowerCase();
            let bookAuthor = cleanString(author).toLowerCase();

            //If the values match then the value variable is going to be updated and returned
            if (inputTitle === bookTitle && inputAuthor === bookAuthor) {
                value = true;
            }
        });
        return value;
    }

    //add the new book to the array if the inputs are correct
    if (!title || !author || !pages) {
        alert("Please fill all the inputs")
        warning.style.setProperty('display', 'none')
    }
    else if (books.length == 0) {
        books.push(newBook);
        displayBooks();
    }
    else if (checkDuplicates()) {
        //display a warning screen
        warning.style.setProperty('display', 'block')
        document.getElementById('form-document').reset();
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

//This function will alow to toggle between visible and invisible form screen
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

//make the form visible
form.addEventListener('click', visibility);

//close the warning screen
close.addEventListener('click', () => {
    warning.style.setProperty('display', 'none')
});