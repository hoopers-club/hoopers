import { useState } from "react";

const GallerySummer = ({ articles }) => {
	const url = "/assets/Homepage/hero main.svg";
	const [courtImage, setcourtImage] = useState(articles[0]?.image);
	const [i, setI] = useState(articles[0]);

	const skip = (direction) => {
		let currentIndex = articles.findIndex(
			(court) => court?.image === courtImage
		);

		if (direction === "forward") {
			setcourtImage(
				articles[(currentIndex + 1) % articles.length]?.image
			);
			setI(articles[(currentIndex + 1) % articles.length]);
		}
		if (direction === "back") {
			if ((currentIndex - 1) % articles.length === -1) {
				setcourtImage(articles[articles.length - 1]?.image);
				setI(articles[articles.length - 1]);

				return;
			}
			setcourtImage(
				articles[(currentIndex - 1) % articles.length]?.image
			);
			setI(articles[(currentIndex - 1) % articles.length]);
		}
	};
	return (
		<div className="gallery">
			<div
				className="left"
				style={{ position: "relative", width: "100%" }}
			>
				<img
					src="/assets/courts/left.svg"
					alt=""
					className="changeleft"
					onClick={() => skip("back")}
				/>
				<img
					src="/assets/courts/right.svg"
					alt=""
					className="changeright"
					onClick={() => skip("forward")}
				/>
				{courtImage && (
					<img src={courtImage} alt="" className="gallery-item-img" />
				)}
				{/* {court.galleryImages.map((image, i) => (
					<div>
						<img src={image} alt='' />
						{console.log(i)}
					</div>
				))} */}
			</div>
			<div className="modal-description">
				<p>{i?.description}</p>
				<strong>Créditos: {i?.credito}</strong>
			</div>
		</div>
	);
};

export default GallerySummer;
