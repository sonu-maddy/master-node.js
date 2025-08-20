const mongoose = require("mongoose");
const express = require("express");

async function connectDB(url) {
    return mongoose.connect(url);
    
}

module.exports = connectDB;

