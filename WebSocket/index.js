const express = require("express")
const http = require("http")


const app = express();
const server = http.createServer(app);


app.use(express.static("public"));

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        // console.log("a new user connected", message);
        io.emit("message", message)
    });
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



server.listen(8000, () => {
  console.log("Server is running on port 8000");
});