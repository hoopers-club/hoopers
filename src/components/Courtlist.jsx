import Court from './Court';

const Courtlist = ({ allCourts }) => {
	// console.log(allCourts);
	return (
		<div className='courts-list'>
			{allCourts.map((court) => (
				<Court
					key={court.name}
					court={court}
					first={court === allCourts[0] ? true : false}
				/>
			))}
		</div>
	);
};

export default Courtlist;
