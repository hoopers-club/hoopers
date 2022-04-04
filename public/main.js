// const express = require('express');
// const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const fs = require('fs');
url = 'https://www.nbaportugal.com/category/artigos/';
urlslam = 'https://www.slamonline.com/category/nba/';
ballurl = 'https://ballislife.com/news/';
bleachurl = 'https://bleacherreport.com/nba';
realgmurl = 'https://basketball.realgm.com/nba/news';
// const puppeteer = require('puppeteer');

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
// puppeteer.launch().then(async function (browser) {
// 	const page = await browser.newPage();
// 	await page.goto('https://www.nbaportugal.com/category/artigos/');

// 	// Targeting the DOM Nodes that contain the Digimon names
// 	const digimonNames = await page.$$eval(
// 		'#content .post .article-content .entry-title a',
// 		function (digimons) {
// 			// Mapping each Digimon name to an array
// 			return digimons.map(function (digimon) {
// 				return digimon.innerText;
// 			});
// 		}
// 	);

// 	// Log the array of Digimon names to the terminal
// 	console.log(digimonNames);

// 	// Closing the Puppeteer controlled headless browser
// 	await browser.close();
// });
const getNbaportugal = () => {
	axios(url)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			console.log("Nba Portugal's data: " + $);
			const articles = [];
			$('article', html).each(function () {
				const title = $(this).find('a').attr('title');
				const url = $(this).find('a').attr('href');
				const image = $(this).find('a').children().attr('src');
				const author = $(this).find('.byline a').text();
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync('public/nba.json', data);
		})
		.catch((err) => console.log(err));
};
const slam = () => {
	axios(urlslam)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$('.blog-post-vert', html).each(function () {
				const title = $(this).find('h3').text();
				const url = $(this).find('a').attr('href');
				// const regauthor=//
				const author = $(this)
					.find('.blog-meta')
					.text()
					.match(/(?<=[Bb]y.).+?(?=..\s\s)/)[0];

				const reg = /\(([^)]+)\)/;
				const image = reg.exec(String($(this).find('a').attr('data-bg')))[1];
				// const author = $(this).find('.byline a').text();
				articles.push({ url, image, title, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync('public/slam.json', data);
		})
		.catch((err) => console.log(err));
};
const ballislife = () => {
	axios(ballurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$('article', html).each(function () {
				const title = $(this).find('a').attr('title');
				const url = $(this).find('a').attr('href');
				const image = $(this).find('a').children().attr('src');
				const author = $(this).find('.author').text();
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync('public/ballislife.json', data);
		})
		.catch((err) => console.log(err));
};
const bleach = () => {
	axios(bleachurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$('.articleSummary', html).each(function () {
				const title = $(this).find('h3').text();
				const url = $(this).find('a').attr('href');
				const image = $(this).find('.articleMedia').children().html();
				const author = 'Bleacher Report';
				articles.push({ title, url, image, author });
			});
			// console.log(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync('public/bleach.json', data);
		})
		.catch((err) => console.log(err));
};
const realgm = () => {
	axios(realgmurl)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			$('.article', html).each(function () {
				const title = $(this).find('.article-title').text();
				const url =
					'https://basketball.realgm.com' + $(this).find('a').attr('href');
				const image = $(this).find('img').attr('src')
					? 'https://basketball.realgm.com' + $(this).find('img').attr('src')
					: 'https://basketball.realgm.com/images/basketball/5.0/template/basketball-icon.gif';
				const author = $(this)
					.find('.article-source')
					.text()
					.match(/(?<=\n).+?(?=\n)/g);
				articles.push({ title, url, image, author });
			});
			// console.table(articles);
			let data = JSON.stringify(articles);

			fs.writeFileSync('public/realgm.json', data);
		})
		.catch((err) => console.log(err));
};

// cron.schedule('0 */8 * * *', function () {
getNbaportugal();
slam();
ballislife();
// bleach();
realgm();
// });
// Making Express listen on port 7000
// app.listen(7000, function () {
// 	console.log('Running on port 7000.');
// });
