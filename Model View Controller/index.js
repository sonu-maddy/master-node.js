const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const {} = require("./middileware")

const app = express();
const PORT = 3000;

const {connectDB} = require("./connections/conn");
connectDB("mongodb://localhost:27017/student")


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use(logReqRes("log.txt"));   


// routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});