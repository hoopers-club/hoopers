import CourtDetail from './CourtDetail.jsx';
import { useState } from 'react';

const Court = ({ first, court }) => {
	const [detailOpened, setDetailOpened] = useState(false);
	console.log(court);

	const handleDetail = () => {
		setDetailOpened(!detailOpened);
		console.log('worked');
	};

	const styles = {
		minHeight: first ? '85vh' : '30vh',
		paddingBottom: first ? '10%' : '',
	};
	return (
		<div
			id='#court'
			className='court'
			style={{ ...styles, background: `url(${court?.image})` }}
			onClick={handleDetail}>
			<img
				className='leftseparator left'
				src='/assets/courts/courtseparator.svg'
				alt=''
			/>
			<div className='titles' style={{ marginTop: 'auto' }}>
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
