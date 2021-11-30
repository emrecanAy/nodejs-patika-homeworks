function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor...");

        if (data) {
            resolve("Veriler alındı!");
        } else {
            reject("Veriler alınamadı!")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor...");

        if (receivedData) {
            resolve("Veriler düzenlendi!");
        } else {
            reject("Veriler düzenlenemedi!");
        }
    })
}


// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(false)
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })

// Async - Await

// async function processData(){
//     try{
//         const receivedData = await getData(true); //aşağıdaki işlemlere devam edebilmen için getDatayı bekle ve tamamla. Peki getdatayı tamamlayacağını nereden biliyor - func başındaki async ifadesiyle.
//         console.log(receivedData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData);
//     } catch(error){
//         console.log(error);
//     }
// }

// processData();

/*
Async - Await yapısının Promise yapısından daha avantajlı olma sebebi;
Yazımı kolay ve sıralı olarak yapılması gereken işlemleri yazıyor. Asenkron işlemi sanki senkronmuş gibi takip edebiliyoruz.
Hata yakalama işlemini try-catch ile sağlarız.
*/

/*
Paralel olan işlemlerde genellikle promise kullanılır.
Bir işlemden sonra başka bir işlem tarzında kesin sıralı işlemlerde async-await kullanılır.
*/

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

// addBook({name: "Book 10", author: "Author 10"})
//     .then(()=>{
//         console.log("Yeni Liste");
//         listBooks();
//     }).catch((error)=>{
//         console.log(error);
//     })

async function showBooks(){

    try {
        await addBook({name: "Book 11", author: "Author 11"});
        listBooks();
    } catch (error) {
        console.log(error);
    }

}

showBooks();