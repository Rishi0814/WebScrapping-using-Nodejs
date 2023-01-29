const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const route = express.Router();
const url = "http://adit.ac.in/";
route.get("/", (req, res) => {
    res.send("WEBSCRAPPER");
})
route.get("/results", (req, res) => {

    axios(url).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        console.log($)
        const articles = [];
        $(". section_text_middle_header",html).each(() => {
            const title = $(this).text();
            // const link = $(this).find("a").attr("href");
            articles.push({
                title,
                
            })
        })
        // console.log(articles);
        res.json(articles);

    }).catch((err) => {
        console.log(err);
        // res.send(err);
    })
})

module.exports = route;