const fs = require('fs');

//CREATE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if(err) console.log(err);
    console.log("Added succesfully!");
});

//READ
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
});

//UPDATE
fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 3500}', 'utf-8', (err) => {
    if(err) throw err;
    console.log("Updated succesfully!!");
});

//DELETE
fs.unlink('employees.json', (err) => {
    if(err) throw err;
    console.log("Removed succesfully!");
});
