import GallerySummer from "./Gallerysummer";

const Modal = ({ gallery, handleModal }) => {
	return (
		<div className="modal">
			<img
				className="close-btn"
				src="/assets/courts/Fechar Card.svg"
				alt=""
				onClick={() => handleModal()}
			/>
			<GallerySummer articles={gallery} />
		</div>
	);
};

export default Modal;
