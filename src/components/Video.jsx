const Video = () => {
	return (
		<div className='video'>
			<video autoplay muted loop id='myVideo'>
				<source src='rain.mp4' type='video/mp4' />
			</video>
		</div>
	);
};

export default Video;
