import CourtDetail from './CourtDetail.jsx';
import { useState, useEffect } from 'react';

const Court = ({ first, court, detail, setDetail }) => {
	const [detailOpened, setDetailOpened] = useState(false);

	const handleDetail = () => {
		setDetailOpened(!detailOpened);
		setDetail(!detail);
	};

	const styles = {
		minHeight: first ? '85vh' : '45vh',
		paddingBottom: first ? '10%' : '',
	};
	useEffect(() => {}, [detail]);
	return (
		<div>
			{!detail && (
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
					<img
						className='right'
						src='/assets/courts/courtseparator.svg'
						alt=''
					/>
				</div>
			)}
			{detailOpened ? (
				<CourtDetail
					setdetail={setDetail}
					key={court.name}
					court={court}
					handleDetail={handleDetail}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default Court;
