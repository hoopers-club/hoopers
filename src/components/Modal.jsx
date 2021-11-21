import Gallery from './Gallerysummer';
const Modal = () => {
	return (
		<div className='modal'>
			<Gallery
				articles={['https://unsplash.it/500', 'https://unsplash.it/700']}
			/>
		</div>
	);
};

export default Modal;
