const test = () => {
	const alerted = (params) => {
		alert(' test');
	};

	return (
		<div className='' onClick={alerted}>
			this is a test
		</div>
	);
};

export default test;
