const http = require("http");

// const myserver = http.createServer();

// const myserver = http.createServer((req, res) => {
//     // console.log("new Req recieve");
//     // console.log(req.headers);
//     // console.log(req);
//     res.end("hello from server");
// });


// const fs = require("fs");
// const myserver = http.createServer((req, resp) => {
//     const log = `${Date.now()}: New Req Received\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         resp.end("Hello from server again");
//     })
// })


const fs = require("fs");
const myserver = http.createServer((req, resp) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
       switch(req.url){
        case '/': resp.end("HomePage");
        break
        case '/about': resp.end("AboutPage")
        break
        default : resp.end("404 not found")
       }
    })
})

myserver.listen(8000, () => console.log("Server Stared"));
 