const express = require("express");
const {GenerateShortUrl} = require("../controllers/url");
const router = express.Router();

router.post("/", GenerateShortUrl); 

module.exports = router;
