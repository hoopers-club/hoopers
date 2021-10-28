import React, { useState, useEffect } from 'react';
import Sitemap from './Sitemap.jsx';
const Menu = ({ open, setOpen }) => {
	const [openSite, setOpenSite] = useState(false);
	const openSitemap = () => {
		// console.log('worked');
		setOpenSite(!openSite);
		setOpen(!open);
		console.log(open);
		console.log(openSite);
	};
	const [navBackground, setNavBackground] = useState('appbar-transparent');
	const navRef = React.useRef();
	navRef.current = navBackground;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 300;
			if (show) {
				setNavBackground('appbar-solid');
			} else {
				setNavBackground('appbar-transparent');
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`nav ${navRef.current} `}>
			<div className='menu' onClick={openSitemap}>
				<img src='/assets/Homepage/Botão Novo Hamburguer.svg' alt='menu' />
			</div>

			<div className='logo'>
				<a href='/'>
					<img src='/assets/Homepage/logo_hoopers_beta.svg' alt='' />
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
