const Sitemap = ({ openSitemap }) => {
	return (
		<div class='menus'>
			<div class='nav'>
				<div class='menu' onClick={openSitemap}>
					<img src='./assets/Homepage/close.svg' alt='menu' />
				</div>
				<div class='logo-menu'>
					<img src='./assets/Homepage/Logo Hoopers.svg' alt='' />
				</div>
			</div>
			<div class='menus-list'>
				<ul>
					<li>ARTICLES</li>
					<li>ESPORTS</li>
					<li>COURTS</li>
					<li>SUMMER LEAGUE</li>
					<li>HOOPERS TV</li>
					<li>PODCAST</li>
					<li>NFT</li>
					<li>SHOP</li>
				</ul>
			</div>
		</div>
	);
};

export default Sitemap;
