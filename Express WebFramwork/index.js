const http = require("http");
const express = require("express");

// ----- using express express web framework handle all method.-----
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Form Home Page");
});

// app.get("/about", (req, res) => {
//   return res.send("Hello Form About Page");
// });

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.get("/contact", (req, res) => {
  return res.send(
    "Hello Form Contact Page " +
      " Hey " +
      req.query.name +
      " you are " +
      req.query.age
  );
});

// ------same as manualy handler-----
function myHandaler(req, res) {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()} : ${req.method} ${req.url} New Req Received`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, dat) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
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
        if (req.method === "GET") {
          res.end("this is a signup from");
        } else if (req.method === "POST") {
          res.end("Success");
        }
      default:
        res.end("404 Not Found");
    }
  });
}

// const myServer = http.createServer(myHandaler);
// const myServer = http.createServer(app);
// myServer.listen(5000, () => console.log("Server Started"));


// advantage of express, are handle http modules for creating server handle internaly express.
app.listen(5000,() =>{
    console.log("Server Started");
})