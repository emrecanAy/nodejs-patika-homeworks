const fs = require('fs'); //core module

// Dosya Okuma
// fs.readFile('password.txt', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log("Dosya okundu!");
// });


// Dosya Yazma
// fs.writeFile('example.json', '{"name": "Emrecan", "age": 6}', 'utf-8', (err) => {
//     if(err) console.log(err);
//     console.log("JSON dosya başarılı bir şekilde oluşturuldu!");
// });


// Veri Ekleme
// fs.appendFile('example.txt', '\nKODLUYORUZ 2', 'utf-8', (err) => {
//     if(err) console.log(err);
//     console.log("Yeni veri eklendi!");
// });


// Dosya Silme
// fs.unlink('example.json', (err) => {
//     if(err) console.log(err);
//     console.log("Dosya silindi!");
// });


// Klasörler Oluşturma
// fs.mkdir('uploads/img', { recursive: true }, (err) => {
//     if(err) console.log(err);
//     console.log("Klasörler oluşturuldu!");
// })
// /*
// tek seferde önce uploads klasörü, içine de img klasörü oluşturmak istedik.
// fakat oluştururken sanki uploads varmış, onun içine img ekliyormuş gibi yapıyor.
// henüz uploads klasörü de olmadığı için hata veriyor. O yüzden { recursive: true } ekleyerek ilk yolu da eklemesini sağladık.
// */


// Klasörler Silme
// fs.rmdir('uploads', {recursive: true}, (err) => {
//     if(err) console.log(err);
//     console.log("Klasörler silindi!"); 
// })

