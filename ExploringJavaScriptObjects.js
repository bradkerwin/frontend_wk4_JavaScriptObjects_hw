let book1 = {
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    pages: 274,

    bookInfo: function() {
    console.log(`This book is titled ${this.title}. It has ${this.pages} pages and is written by ${this.author}.`);
    }
}

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

// prototype adds a new function to the constructor.
Book.prototype.bookInfo = function() {
    console.log(`This book is titled ${this.title}. It has ${this.pages} pages and is written by ${this.author}.`);
    }
 
let book2 = new Book("One Flew Over the Cuckoo's Nest", "Ken Kesey", 325);
let book3 = new Book("In Cold Blood", "Truman Capote", 343);

let bookArray = [book1, book2, book3];

let newBookArray = bookArray.map(book => mappedBooks(book)); // Calls a specified function for every element to create a new array without changing the original.
function mappedBooks(book) {
    Book.title = book.title
    Book.author = book.Author
}

let over100 = bookArray.filter(book => checkPages(book.pages)) // Creates a new array based on the rules of the declared function without changing the original array. Here we are accessing the pages property of each book to create our new function.
function checkPages(page) {
    return page > 100
}
console.log(over100);


function searchTitle() { 
    let titleInput = document.getElementById('search-book');
    let bookTitle = bookArray.find(Book => Book.title.toLowerCase() == titleInput.value.toLowerCase());

    if (bookTitle) {
        console.log(bookTitle);
    } else {
        console.log("Book not found");
    }
} // Checks to see if the title assigned to the temporary variable bookTitle is in the array of books we created.

function searchAuthor() {
    let findAuthor = document.getElementById('search-author');
    let bookAuthor = bookArray.find(Book => Book.author.toLowerCase() == findAuthor.value.toLowerCase());

    if (bookAuthor) {
        console.log(bookAuthor);
    } else {
        console.log("Author not found");
    }
}

let searchTitleBtn = document.getElementById('search-title'); // Returning the specified value (in this case the title) and assigning the result to the Btn value which controls how the button works on the web page.
let searchAuthorBtn = document.getElementById('search-book-author');

searchTitleBtn.addEventListener('click', searchTitle); // Adds an event handler to the given element (in this case, we are calling the searchTitle function when the button is clicked).
searchAuthorBtn.addEventListener('click', searchAuthor);