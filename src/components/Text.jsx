// import axios from 'axios';
// import { Cheerio } from 'cheerio';

const Text = () => {
	// const axios = require('axios');
	// const cheerio = require('cheerio');

	url = 'https://www.nbaportugal.com/category/artigos/';
	const list = [];
	const lists = async function getNba() {
		const response = await fetch(url);
		const html = await response.text();
		return Promise.resolve(html);
		// expected output: "resolved"
	};

	console.log(lists);
	// const $ = Cheerio.load(html);
	// const nbalist = [];
	// $('article', html).each(function () {
	// 	const title = $(this).find('a').attr('title');
	// 	const url = $(this).find('a').attr('href');
	// 	const image = $(this).find('a').children().attr('src');
	// 	nbalist.push({ title, url, image });
	// });
	// console.log(nbalist);
	return <div className='team-list'>test</div>;
};

export default Text;
