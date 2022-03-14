const express = require('express');
const app = express();
port = 4000;
const cors = require('cors');
const puppeteer = require('puppeteer');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/* -------------------------------------------------------------------------- */
/*                                 new section                                */
/* -------------------------------------------------------------------------- */
let data = [];
const nbaget = async () => {
	try {
		const nbaurl = 'https://www.nbaportugal.com/category/artigos/';
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(nbaurl);

		// const [list] = await page.$x('//*[@id="post-32831"]/div[2]/header/h2/a');
		// const src = await (await list.getProperty('textContent')).jsonValue();
		// const articles = await page.$$('article');
		const nbaArticles = [];
		await new Promise((resolve, reject) => {
			articles.forEach(async (article, i) => {
				const image = await article.$eval('img', (el) =>
					el.getAttribute('src')
				);
				const title = await (
					await (await article.$('.entry-title')).getProperty('textContent')
				).jsonValue();
				const author = await (
					await (await article.$('.n')).getProperty('title')
				).jsonValue();

				const url = await (
					await (
						await (await article.$('.entry-title')).$('a')
					).getProperty('href')
				).jsonValue();

				nbaArticles.push({ i, image, title, author, url });
				console.log(nbaArticles);

				if (i === articles.length - 1) {
					resolve(nbaArticles);
				}
			});
		}).then((response) => response.json());
		// console.log(titles);
		browser.close();
		console.log(nbaArticles);
		// return nbaArticles;
		data = await [...nbaArticles];
	} catch (error) {}
};
// const data = await nbaget().then((response) => response.json());
app.get('/nba', (req, res) => {
	console.log(nbaget());
	res.send(data);
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});

// const nbaget = async () => {
// 	try {
// 		const nbaurl = 'https://www.nbaportugal.com/category/artigos/';
// 		const browser = await puppeteer.launch();
// 		const page = await browser.newPage();
// 		await page.goto(nbaurl);

// 		const [list] = await page.$x('//*[@id="post-32831"]/div[2]/header/h2/a');
// 		const src = await (await list.getProperty('textContent')).jsonValue();
// 		const articles = await page.$$('article');
// 		const nbaArticles = [];
// 		await new Promise((resolve, reject) => {
// 			articles.forEach(async (article, i) => {
// 				const image = await article.$eval('img', (el) =>
// 					el.getAttribute('src')
// 				);
// 				const title = await (
// 					await (await article.$('.entry-title')).getProperty('textContent')
// 				).jsonValue();
// 				const author = await (
// 					await (await article.$('.n')).getProperty('title')
// 				).jsonValue();

// 				const url = await (
// 					await (
// 						await (await article.$('.entry-title')).$('a')
// 					).getProperty('href')
// 				).jsonValue();

// 				nbaArticles.push({ i, image, title, author, url });

// 				if (i === articles.length - 1) {
// 					resolve();
// 				}
// 			});
// 		});
// 		// console.log(titles);
// 		browser.close();
// 		console.log(nbaArticles);
// 		return nbaArticles;
// 	} catch (error) {}
// };

// nbaget();
