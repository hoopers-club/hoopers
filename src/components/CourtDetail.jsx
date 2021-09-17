const CourtDetail = ({ handleDetail, court }) => {
	return (
		<div className='court-detail'>
			<div className='left'>
				<img src='https://unsplash.it/900' alt='' />
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
						className='detail history'
						dangerouslySetInnerHTML={{ __html: court?.astro.source }}></div>
				</div>
				<img src='/assets/courts/courtseparatordetail.svg' alt='' />
			</div>
		</div>
	);
};

export default CourtDetail;
