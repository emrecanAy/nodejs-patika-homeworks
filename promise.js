// const promise1 = new Promise((resolve, reject) => {
//     resolve("VERİLER ALINDI!");
//     reject("BAĞLANTI HATASI!");
// });

// console.log(promise1);

// promise1.then(value => {
//     console.log(value);
// })

// promise1
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.log(err);
//     });

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

const addBook = (newBook) =>  {

    const promise1= new Promise((resolve , reject) => {
        books.push(newBook);
        resolve(books);
        //reject("Bir hata oluştu!");
    });
    
    return promise1;
}

addBook({name: "Book 10", author: "Author 10"})
    .then(()=>{
        console.log("Yeni Liste");
        listBooks();
    }).catch((error)=>{
        console.log(error);
    })
