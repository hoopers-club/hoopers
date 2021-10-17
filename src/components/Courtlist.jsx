import Court from './Court';
import Menu from './Menu';
import { useState } from 'react';

const Courtlist = ({ allCourts }) => {
	const [open, setOpen] = useState(true);
	// console.log(allCourts);
	return (
		<div className=''>
			<Menu open={open} setOpen={setOpen} />
			{open && (
				<div
					className='courts-list'
					style={{ display: open ? 'flex !important' : 'none !important' }}>
					{allCourts.map((court) => (
						<Court
							key={court.name}
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
