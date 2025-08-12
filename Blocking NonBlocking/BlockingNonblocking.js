const file = require('fs');

// console.log("1");
// // blocking
// const result = file.readFileSync("./FileHandling/Contact.txt", "utf-8");
// console.log(result);
// console.log("2");

// output-
// 1 
// hey there 
// 2


// console.log("1");
// //  Non-blocking
// const result = file.readFileSync("./FileHandling/Contact.txt", "utf-8", (err, result) => {
//  console.log(result);
// });

// console.log("2")
// console.log("3")

// output
// 1 
// 2
// 3
// hey there




// request --- Event Queue --- Event loop ---- blocking operation ---- non blocking operation

// blocking operation --- i need a thred/ worker ----- assign a worker and make him work -----return the thred to the ----- Thread Pool....
// by default thread pool size - 4
// max? - 8 core  cpu -- 8 thread max 

const os = require("os");
console.log(os.cpus().length);

