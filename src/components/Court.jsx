import CourtDetail from './CourtDetail.jsx';
import React, { useState } from 'react';

const Court = ({ first, court }) => {
	const [detailOpened, setDetailOpened] = useState(false);

	const handleDetail = () => {
		setDetailOpened(!detailOpened);
	};

	const styles = {
		minHeight: first ? '85vh' : '45vh',
		paddingBottom: first ? '10%' : '',
	};
	return (
		<div
			// id='#court'
			className='court'
			style={{
				...styles,
				background: `url(${court?.image})`,
				backgroundPosition: `center`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			onClick={handleDetail}>
			<img
				className='leftseparator left'
				src='/assets/courts/courtseparator.svg'
				alt=''
			/>
			<div className='titles'>
				<div className='court-headline'>{court?.name}</div>
				<div className='court-subtext'>{court?.subname}</div>
			</div>
			<img className='right' src='/assets/courts/courtseparator.svg' alt='' />
			{detailOpened ? (
				<CourtDetail court={court} handleDetail={handleDetail} />
			) : (
				''
			)}
		</div>
	);
};

export default Court;
