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
 
let book2 = new Book("One Flew Over the Cuckoo's Nest", "Ken Kesey", 325);
let book3 = new Book("In Cold Blood", "Truman Capote", 343);

let bookArray = [book1, book2, book3];

let newBookArray = bookArray.map(mappedBooks); // Calls a specified function for every element to create a new array without changing the original.
function mappedBooks(addTitle, addAuthor) {
    Book.title == addTitle,
    Book.author == addAuthor
}

let searchTitleBtn = document.getElementById('search-title'); // Returning the specified value (in this case the title).
let searchAuthorBtn = document.getElementById('search-author');

let over100 = bookArray.filter(checkPages) // Creates a new array based on the rules of the declared function without changing the original array.
function checkPages(page) {
    return page > 100
}

// prototype adds a new function to the constructor.
Book.prototype.SearchBookTitle = function() { 
    let search = document.getElementById('search-book');
    let bookTitle = bookArray.find(Book => Book.title == search.value);

    if (bookTitle) {
        console.log(bookTitle);
    } else {
        console.log("Book not found");
    }
} // checks to see if the title assigned to the temporary variable is in the array of books we created.

Book.prototype.SearchAuthor = function() {
    let findAuthor = document.getElementById('search-author');
    let bookAuthor = bookArray.find(Book => Book.author == findAuthor.value);

    if (bookAuthor) {
        console.log(bookAuthor);
    } else {
        console.log("Author not found");
    }
}

searchTitleBtn.addEventListener('click', SearchBookTitle()); // Adds an event handler to the given element (in this case, we are calling the SearchBookTitle() function when the button is clicked).
searchAuthorBtn.addEventListener('click', SearchAuthor());