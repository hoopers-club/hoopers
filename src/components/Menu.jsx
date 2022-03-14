import React, { useState, useEffect } from 'react';
import Sitemap from './Sitemap.jsx';
const Menu = ({ open, setOpen }) => {
	/* -------------------------------------------------------------------------- */
	/*                                    menu                                    */
	/* -------------------------------------------------------------------------- */
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
			const show = window.scrollY > 200;
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
				<img src='/assets/Homepage/menu.png' alt='menu' />
			</div>

			<div className='logo'>
				<a href='/'>
					<img src='/assets/Homepage/hoopers_club_logo.svg' alt='' />
				</a>
			</div>

			<div className='lang'>
				<a href='https://hoopers.store/' target='_blank'>
					<img src='/assets/Homepage/shop.png' alt='' />
				</a>
				{/* <div class='dropdown'>
					<button class='dropbtn'>LANG</button>
					<div class='dropdown-content'>
						<a
							href='#'
							onclick="doGTranslate('en|pt');return false;"
							title='Portuguese'
							class='glink nturl notranslate'>
							PT
						</a>
						<a
							href='#'
							onclick="doGTranslate('pt|en');return false;"
							title='english'
							class='glink nturl notranslate'>
							EN
						</a>
						<a
							href='#'
							onclick={() => {
								window[doGTranslate]('en|es');
								return false;
							}}
							title='Spanish'
							class='glink nturl notranslate'>
							ES
						</a>
					</div>
				</div> */}
				{/* <img src='/assets/Homepage/Botão Idioma.svg' alt='pt' /> */}
			</div>
			{openSite ? <Sitemap openSitemap={openSitemap} /> : ''}
		</div>
	);
};


export default Menu;
