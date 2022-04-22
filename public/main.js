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
eurohoops = "https://www.eurohoops.net/latest-news/?lang=en";

// storing images url to use randomly on bleacher report scraper
const bleacherImgsFolder = "./public/assets/bleacher-img/";
const bleacherImages = fs.readdirSync(bleacherImgsFolder);

//function to extract content from Eurohoops's platform
const getEuro = () => {
	axios(eurohoops)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$("article", html).each(function () {
				const title = $(this)
					.find("h2")
					.find("a")
					.text()
					.replace(/\n/g, "")
					.replace("          ", "")
					.replace("        ", "");
				//console.log(title);
				const url = $(this).find("h2").find("a").attr("href");
				const image = $(this).find("figure").find("img").attr("src");
				const author = "Eurohoops Staff";
				articles.push({ title, url, image, author });
			});
			let data = JSON.stringify(articles);

			fs.writeFileSync("euro.json", data);
		})
		.catch((err) => console.log(err));
};

//function to extract content from NBA Portugal's platform
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

//function to extract content from Slam Online's platform
const slam = () => {
	axios(urlslam)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];

			$(".h-bloglist-block", html).each(function () {
				const title = $(this).find("h3").text();
				const url = $(this).find("a").attr("href");
				// const regauthor=//
				const author = $(this)
					.find(".blog-meta")
					.text()
					.match(/(?<=[Bb]y.).+?(?=..\s\s)/)[0];

				const reg = /\(([^)]+)\)/;
				const image = reg.exec(String($(this).find("a").attr("data-bg")))?.[1];
				// const author = $(this).find('.byline a').text();
				articles.push({ url, image, title, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync("slam.json", data);
		})
		.catch((err) => console.log(err));
};

//function to extract content from Ball is Life's platform
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

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//TODO: fix it
const bleacher = async () => {
	await axios(bleachurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			let previousImageIndex = null;
			const numberOfImages = bleacherImages.length;
			$(".articleSummary", html).each(function () {
				const title = $(this).find(".commentary").find("h3").text();
				const url = $(this).find("a").attr("href");
				//				const image = $(this).find(".lazyImage").find("img").attr("src");
				// gets a random index to pick from array of images
				let randomIndex = randomIntFromInterval(0, numberOfImages - 1);
				// if its not the first image index to pick
				if (previousImageIndex != null) {
					// then get into this loop until picking a different image from the one used before
					while (randomIndex === previousImageIndex) {
						randomIndex = randomIntFromInterval(0, numberOfImages - 1);
					}
				}
				// set this picked image as the previous image for the next image pick... see what I did there? ;)
				previousImageIndex = randomIndex;

				const image = "/assets/bleacher-img/" + bleacherImages[randomIndex];
				const author = $(this).find(".authorInfo").find("span").text();
				articles.push({ title, url, image, author });
			});
			let data = JSON.stringify(articles);
			//console.log(articles);
			fs.writeFileSync("bleach.json", data);
		})
		.catch((err) => console.log(err));
};

//function to extract content from Real GM's platform
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
bleacher();
realgm();
getEuro();
