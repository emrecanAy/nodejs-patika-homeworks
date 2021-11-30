const books = [
    {name: "Book 1", author: "Author 1"},
    {name: "Book 2", author: "Author 2"},
    {name: "Book 3", author: "Author 3"}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
}

const addBook = (newBook, callback) =>  {
    books.push(newBook);
    callback();
}

addBook({name: "Book 4", author: "Author 4"}, listBooks);

