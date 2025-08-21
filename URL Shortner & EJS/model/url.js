const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: { 
         type: String,
          required: true,
          unique: true
         },
    shortUrl: {
         type: String, 
         required: true ,
         unique: true
        },     
    visitHistory : [{ Timestamp :{type: Number,} }],
    }, {timestamps: true});

const Url = mongoose.model("url", urlSchema);

module.exports = Url;