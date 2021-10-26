import { useState, useEffect } from 'react';
import nbaportugal from '/nba.json';
import slam from '/slam.json';
import realgm from '/realgm.json';
import ballislife from '/ballislife.json';

const SearchResult = ({ articles }) => {
	// console.log(import.meta, 'this is meta data');
	// const url_string = location.href;
	// var url = new URL(url_string);
	// var c = url.searchParams.get('search');
	// console.log(c);
	const [search, setSearch] = useState('');
	const art = [...articles, ...nbaportugal, ...slam, ...realgm, ...ballislife];
	const filtered = art.filter((article) =>
		article.title.match(new RegExp(search, 'i'))
	);
	useEffect(() => {
		setSearch(sessionStorage.getItem('SEARCH'));
	}, [search]);
	return (
		<div className=''>
			{search !== '' && filtered.length > 0 ? (
				<div className='search-list-all'>
					{filtered.map((article, i) => (
						<a key={i} className='article-item' href={article.url}>
							<div>
								<div className='img'>
									<img src={article.image} alt='' />
								</div>
								<div className='article-title' style={{ fontSize: '0.8em' }}>
									{article.title}
								</div>
								<div className='article-writer'> BY {article.author}</div>
							</div>
						</a>
					))}
				</div>
			) : (
				<div class='search-query'>
					Sorry, no results matching "{search}" were found.
				</div>
			)}
		</div>
	);
};

export default SearchResult;
