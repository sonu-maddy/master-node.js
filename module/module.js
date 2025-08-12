const math = require('buffer'); // built in packege..

const module2 = require("../module2");
const {addfun, subsub} = require("../module2");  // 2 wayss

console.log(module2); // empty obj ------ after exporting module2 it fix.
console.log(add(2,5));