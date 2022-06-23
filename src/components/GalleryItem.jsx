import Modal from "./Modal";
import { useState, useEffect } from "react";

const GalleryItem = ({ gallery }) => {
	const [openModal, setOpenModal] = useState(false);
	const [closeModal, setCloseModal] = useState(true);
	const close = () => {};

	const handleModal = () => {
		// state ? setOpenModal(true) : setOpenModal(false);
		setOpenModal(!openModal);
	};

	useEffect(() => {
		return () => {};
	}, [openModal]);

	return (
		<div className="articles-item blacked">
			<div
				onClick={() => handleModal()}
				className="articles-item gallery-width "
				// 		style={{
				//     // background:linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url(https://unsplash.it/400);
				//     backgroundRepeat: 'no-repeat',
				//     backgroundSize: 'cover',
				//         // backgroundColor: 'hsla(0%, 0%, 0%, 0.5)',
				//     background-position:'center'}
				// }
				style={{
					backgroundColor: "hsla(0%, 0%, 0%, 0.5)",
					background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url(${gallery?.cover})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<div
					className="esportgalleryfont"
					style={{ fontSize: "6vw !important" }}
				>
					{gallery?.title}
				</div>
				<div className="article-underline"></div>
				<img
					className="esportlogomedium"
					src="/assets/esports/Asset 1.svg"
					alt=""
				/>
			</div>
			{openModal ? (
				<Modal
					gallery={gallery?.galleryImages}
					handleModal={handleModal}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default GalleryItem;
