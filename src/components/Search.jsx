// import fs from 'node:fs';
// import fm from 'front-matter';
import { useState } from 'react';

const Search = () => {
	// fs.readdir(dirPath, (err, files) => {
	// 	if (err) {
	// 		console.log('failed to list content ' + err);
	// 	}
	const [search, setSearch] = useState('');
	const handlekey = (e) => {
		if (e.key === 'Enter') {
			console.log('do validate' + search);
			URLSearchParams.set('search', search);
			localStorage.setItem('search', 'search');
		}
	};
	const onkeychange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};
	const storage = () => {
		sessionStorage.setItem('SEARCH', search);
	};

	return (
		<div className='search'>
			<form
				className='form-search'
				onSubmit={storage}
				action='/search/'
				method='POST'>
				<input
					onKeyDown={handlekey}
					type='search'
					name='search'
					value={search}
					onChange={onkeychange}
					placeholder='WHAT ARE YOU SEARCHING FOR, HOOPER?'
				/>
			</form>
		</div>
	);
};

export default Search;
