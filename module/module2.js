function add(a,b){
    return a+b;
}

// module.exports = "sonu";
module.exports = add;

function sub(a,b){
    return a-b;
}
module.exports = sub; // override add function

module.exports = {
    // add, 
    // sub

    // 2 wayss
    addfun : add,
    subfun : sub
}



// same thing we can declere this is anonymous function.

// exports.add1 = (a,b) => a+b;
// exports.sub2 = (a,b) => a-b;