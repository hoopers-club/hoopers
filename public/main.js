// const express = require('express');
// const app = express();
//imports
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

//urls to scrape
url = "https://www.nbaportugal.com/category/artigos/";
urlslam = "https://www.slamonline.com/";
ballurl = "https://ballislife.com/news/";
bleachurl = "https://bleacherreport.com/nba";
realgmurl = "https://basketball.realgm.com/nba/news";

const getNbaportugal = () => {
	axios(url)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$("article", html).each(function () {
				const title = $(this).find("a").attr("title");
				const url = $(this).find("a").attr("href");
				const image = $(this).find("a").children().attr("src");
				const author = $(this).find(".byline a").text();
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync("nba.json", data);

			//console.log("Nba Portugal's data: " + data);
		})
		.catch((err) => console.log(err));
};

const slam = () => {
	axios(urlslam)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			console.log($.text());
			$(".h-bloglist-block", html).each(function () {
				const title = $(this).find("h3").text();
				const url = $(this).find("a").attr("href");
				// const regauthor=//
				const author = $(this)
					.find(".blog-meta")
					.text()
					.match(/(?<=[Bb]y.).+?(?=..\s\s)/)[0];

				const reg = /\(([^)]+)\)/;
				const image = reg.exec(String($(this).find("a").attr("data-bg")))[1];
				// const author = $(this).find('.byline a').text();
				articles.push({ url, image, title, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			console.log("Slam: " + data);

			fs.writeFileSync("slam.json", data);
		})
		.catch((err) => console.log(err));
};

const ballislife = () => {
	axios(ballurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$("article", html).each(function () {
				const title = $(this).find("a").attr("title");
				const url = $(this).find("a").attr("href");
				const image = $(this).find("a").children().attr("src");
				const author = $(this).find(".author").text();
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync("ballislife.json", data);
		})
		.catch((err) => console.log(err));
};

//TODO: fix it
const bleach = () => {
	axios(bleachurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$(".articleSummary", html).each(function () {
				const title = $(this).find("h3").text();
				const url = $(this).find("a").attr("href");
				const image = $(this).find(".articleMedia").children().html();
				const author = "Bleacher Report";
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync("bleach.json", data);
		})
		.catch((err) => console.log(err));
};

const realgm = () => {
	axios(realgmurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$(".article", html).each(function () {
				const title = $(this).find(".article-title").text();
				const url =
					"https://basketball.realgm.com" + $(this).find("a").attr("href");
				const image = $(this).find("img").attr("src")
					? "https://basketball.realgm.com" + $(this).find("img").attr("src")
					: "https://basketball.realgm.com/images/basketball/5.0/template/basketball-icon.gif";
				const author = $(this)
					.find(".article-source")
					.text()
					.match(/(?<=\n).+?(?=\n)/g);
				articles.push({ title, url, image, author });
			});
			// console.table(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync("realgm.json", data);
		})
		.catch((err) => console.log(err));
};

getNbaportugal();
slam();
ballislife();
// bleach();
realgm();
