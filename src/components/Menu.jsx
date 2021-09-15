import { useState } from 'React';
import Sitemap from './Sitemap.jsx';
const Menu = () => {
	const [siteMap, setSiteMap] = useState(false);
	const openSitemap = () => {
		setSiteMap(!siteMap);
	};

	return (
		<div class='nav'>
			<div class='menu' onClick={openSitemap}>
				<img src='/assets/Homepage/Botão Novo Hamburguer.svg' alt='menu' />
			</div>
			<div class='logo'>
				<img src='/assets/Homepage/Logo Hoopers.svg' alt='' />
			</div>
			<div class='lang'>
				<img src='/assets/Homepage/Botão Carrinho.svg' alt='' />
				<img src='/assets/Homepage/Botão Idioma.svg' alt='pt' />
			</div>
			{siteMap ? <Sitemap openSitemap={openSitemap} /> : ''}
		</div>
	);
};

export default Menu;
