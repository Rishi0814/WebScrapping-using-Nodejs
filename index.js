const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 5000;
const url = "https://www.theguardian.com/uk";
const cors = require("cors");
app.use(cors());

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];
      $(".fc-item__title").each(function () {
        const title = $(this).text();
        const link = $(this).find("a").attr("href");
        articles.push({ title, link });
      });
      res.send(articles);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
