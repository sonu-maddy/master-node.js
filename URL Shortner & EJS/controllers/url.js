const shortid = require("shortid");
const Url = require("../model/url");


async function GenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.originalUrl) {
        return res.status(400).json({error : "Original URL is required"});
    }   

    const shortId = shortid.generate();
    await Url.create({
        originalUrl: body.originalUrl,
        shortUrl: shortId,
        visitHistory: []
    });

    return res.json({ message: "Short URL generated successfully", id: shortId });
}

module.exports = {
    GenerateShortUrl
};