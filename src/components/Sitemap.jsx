import React, { useState } from 'react';

const Sitemap = ({ openSitemap }) => {
	const [expanded, setExpanded] = useState(false);
	const submenu = () => {
		setExpanded(!expanded);
	};

	return (
		<div class='menus'>
			<div class='nav'>
				<div class='menu' onClick={openSitemap}>
					<img src='/assets/Homepage/close.svg' alt='menu' />
				</div>
				<div class='logo-menu'>
					<img src='/assets/Homepage/Logo Hoopers.svg' alt='' />
				</div>
			</div>
			<div class='menus-list'>
				<ul>
					<li>
						<a href='/articles'>ARTICLES</a>
					</li>
					<li>ESPORTS</li>
					<li onClick={submenu}>COURTS</li>
					{expanded ? (
						<span className='sub-courts'>
							<li>
								<a href='/courts'>OUR COURTS</a>
							</li>
							<li>MAP</li>
						</span>
					) : (
						''
					)}
					<li>SUMMER LEAGUE</li>
					<li>
						<a
							href='https://www.youtube.com/channel/UC9majUuTNcytG0nmt_B8Ubg'
							target='_blank'>
							HOOPERS TV
						</a>
					</li>
					<li>
						<a
							href='https://open.spotify.com/show/0hhUbVNzpsyUT7dIlFxL1a?si=ZI7Mk6ebRv6uz0LfLQbnYA'
							target='_blank'>
							PODCAST
						</a>
					</li>
					<li>NFT</li>
					<li>
						<a href='https://hoopers.store/' target='_blank'>
							SHOP
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sitemap;
