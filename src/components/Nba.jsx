// import { nbaget } from '../api';
import { useState, useEffect } from 'react';

const Nba = () => {
	const handleUrl = (url) => {
		console.log(location.href);
	};

	const [nba, setNba] = useState([]);
	useEffect(() => {}, []);
	return (
		<div className='articles-list-all'>
			{nba.map((article, i) => (
				<a key={i} href={article?.url}>
					<div className='article-item' onClick={handleUrl(article?.url)}>
						<div className='img'>
							<img src={article?.image} alt='' />
						</div>
						<div
							className='article-title'
							style={article?.title.length > 16 ? { fontSize: '0.8em' } : ''}
							// style={{article?.title.length > 16 ? 'font-size:0.8em' : ''}}
						>
							{article?.title}
						</div>
						<div className='article-writer'> BY {article?.author}</div>
					</div>
				</a>
			))}
		</div>
	);
};

export default Nba;
