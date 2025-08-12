const file = require('fs');

// sync...bloking request
// file.writeFileSync('./text.txt', 'hey, there');

// Async.... non-blocking request
// always imp to callback back function 
// file.writeFile("./text.txt", "hello world Async", (err) => {})



// const result = file.readFileSync('./Contact.txt', 'utf-8') // encoding using utf-8
// console.log(result);


// not return value becouse type is void....we can use arrow function 
// file.readFile('./Contact.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// }); 


// file.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

// file.appendFileSync("./text.txt", `hey, there\n`);
// file.appendFileSync("./text.txt", `${Date.now()}hey, there\n`);

// file.cpSync("./text.txt", "./copy.txt");
// file.cpSync("./text.txt", "./copy2.txt");

// delete file
// file.unlinkSync("./copy2.txt");


// console.log(file.statSync("./text.txt"));
// console.log(file.statSync("./text.txt").isFile());


// make folder
// file.mkdirSync("my-docs/")

// make recursively folder 
file.mkdirSync("my-docs/a/b", {recursive:true});