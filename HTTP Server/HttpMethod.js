const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()} : ${req.method} ${req.url} New Req Received`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, dat) => {
        switch(myUrl.pathname){
            case "/":
                if(req.method === "GET") res.end("HomePage");       
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = url.query.search_query;
                res.end("Here are your result for " + search);
                break;
            case "/signup":
                if(req.method === "GET"){
                    res.end("this is a signup from");
                }else if (req.method === "POST"){
                    res.end("Success");
                }
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));