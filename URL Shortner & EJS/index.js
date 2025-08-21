const express = require("express");
const connectDB = require("./coneection");
const urlRoutes = require("./routes/url");
const URL = require("./model/url");

const app = express();
const port = 8001;

connectDB("mongodb://localhost:27017/urlShortener")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const urlData = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
            timestamp :  Date.now(),
        }
      },
    }
  );
  res.redirect(urlData.originalUrl);

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
