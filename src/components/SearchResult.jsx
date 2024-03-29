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

	useEffect(() => {
		setSearch(sessionStorage.getItem('SEARCH'));
	}, [search]);
	const re = new RegExp(search, 'i');
	const filtered = art.filter(
		(article) => re.test(article?.title)
		// console.log(article.title.match(re))
	);
	// const filtered = art;
	return (
		<div className=''>
			{search !== '' && filtered?.length > 0 ? (
				<div className='search-list-all'>
					{filtered.map((article, i) => (
						<a
							key={i}
							className='article-item'
							href={article?.url}
							target='_blank'>
							<div>
							
								<div className='img'>
									<div 
										style={{
											background: `url(${article?.image})`,
											backgroundPosition: `center`,
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											width: '100%',
											height: '100%'
										}}
										
									></div>
								</div>
								<div className='article-title' style={{ fontSize: '0.8em' }}>
									{article?.title}
								</div>
								<div className='article-writer'> BY {article?.author}</div>
							</div>
						</a>
					))}
				</div>
			) : (
				<div className='search-query'>
					{search != ''
						? `Sorry, no results matching "${search}" were found.`
						: 'Searching'}
				</div>
			)}
		</div>
	);
};

export default SearchResult;
