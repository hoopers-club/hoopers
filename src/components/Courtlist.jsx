import Court from './Court';
import Menu from './Menu';
import { useState } from 'react';

const Courtlist = ({ allCourts }) => {
	const [detail, setDetail] = useState(false);
	const [open, setOpen] = useState(true);
	// console.log(allCourts);
	return (
		<div className=''>
			<Menu open={open} setOpen={setOpen} />
			{open && (
				<div
					className='courts-list'
					style={{ display: open ? 'flex !important' : 'none !important' }}>
					{allCourts.map((court, i) => (
						<Court
							detail={detail}
							setDetail={setDetail}
							key={i}
							court={court}
							first={court === allCourts[0] ? true : false}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Courtlist;
