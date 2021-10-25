import { useState } from 'react';

const CourtDetail = ({ handleDetail, court, setDetail }) => {
	const [courtImage, setcourtImage] = useState(court?.galleryImages[0]);

	const skip = (direction) => {
		let currentIndex = court.galleryImages.findIndex(
			(court) => court === courtImage
		);
		if (direction === 'forward') {
			setcourtImage(
				court.galleryImages[(currentIndex + 1) % court.galleryImages.length]
			);
			console.log(courtImage);
		}
		if (direction === 'back') {
			if ((currentIndex - 1) % court.galleryImages.length === -1) {
				setcourtImage(court.galleryImages[court.galleryImages.length - 1]);

				return;
			}
			setcourtImage(
				court.galleryImages[(currentIndex - 1) % court.galleryImages.length]
			);
		}
	};
	console.log(court);

	return (
		<div className='court-detail'>
			<div className='left'>
				<img
					src='/assets/courts/left.svg'
					alt=''
					className='changeleft'
					onClick={() => skip('back')}
				/>
				<img
					src='/assets/courts/right.svg'
					alt=''
					className='changeright'
					onClick={() => skip('forward')}
				/>
				{courtImage && <img src={courtImage} alt='' />}
				{/* {court.galleryImages.map((image, i) => (
					<div>
						<img src={image} alt='' />
						{console.log(i)}
					</div>
				))} */}
				<img
					className='close-btn'
					src='/assets/courts/Fechar Card.svg'
					alt=''
					onClick={handleDetail}
				/>
			</div>
			<div className='right'>
				<img src='/assets/courts/courtseparatordetail.svg' alt='' />
				<div className='court-detail-info'>
					<div className='title'>Location</div>
					<div className='detail'>{court?.location}</div>
				</div>
				<div className='court-detail-info'>
					<div className='title'>ARTIST</div>
					<div className='detail'>{court?.artist}</div>
				</div>
				<div className='court-detail-info'>
					<div className='title'>PARTNERS</div>
					<div className='detail'>
						{court?.partner.map((partner) => (
							<p>{partner}</p>
						))}
					</div>
				</div>
				<div className='court-detail-info'>
					<div className='title'>DURATION</div>
					<div className='detail'>{court?.duration}</div>
				</div>
				<div className='court-detail-info'>
					<div className='title'>WHAT WE DID</div>
					<div className='detail'>{court?.whaWeDid}</div>
				</div>
				<div className='court-detail-info'>
					<div className='title'>History</div>
					<div
						className='detail-history history'
						dangerouslySetInnerHTML={{ __html: court?.astro.html }}></div>
				</div>
				<img class='end' src='/assets/courts/courtseparatordetail.svg' alt='' />
			</div>
		</div>
	);
};

export default CourtDetail;
