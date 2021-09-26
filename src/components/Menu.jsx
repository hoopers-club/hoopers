import React, { useState } from 'react';
import Sitemap from './Sitemap.jsx';
const Menu = () => {
	const [openSite, setOpenSite] = useState(false);
	const openSitemap = () => {
		// console.log('worked');
		setOpenSite(!openSite);
	};

	return (
		<div className='nav'>
			<div className='menu' onClick={openSitemap}>
				<img src='/assets/Homepage/Botão Novo Hamburguer.svg' alt='menu' />
			</div>

			<div className='logo'>
				<a href='/'>
					<img src='/assets/Homepage/Logo Hoopers.svg' alt='' />
				</a>
			</div>

			<div className='lang'>
				<a href='https://hoopers.store/' target='_blank'>
					<img src='/assets/Homepage/Botão Carrinho.svg' alt='' />
				</a>
				{/* <img src='/assets/Homepage/Botão Idioma.svg' alt='pt' /> */}
			</div>
			{openSite ? <Sitemap openSitemap={openSitemap} /> : ''}
		</div>
	);
};

export default Menu;
