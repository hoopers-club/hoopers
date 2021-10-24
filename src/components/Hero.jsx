import { useState } from 'react';

const Hero = ({ articles }) => {
	const url = '/assets/Homepage/hero main.svg';
	const [courtImage, setcourtImage] = useState(articles[0]);

	const skip = (direction) => {
		let currentIndex = articles.findIndex((court) => court === courtImage);
		console.log(courtImage);
		if (direction === 'forward') {
			setcourtImage(articles[(currentIndex + 1) % articles.length]);
			console.log(courtImage);
		}
		if (direction === 'back') {
			if ((currentIndex - 1) % articles.length === -1) {
				setcourtImage(articles[articles.length - 1]);

				return;
			}
			setcourtImage(articles[(currentIndex - 1) % articles.length]);
		}
	};
	return (
		<div className='container'>
			<div
				className='top'
				style={{
					backgroundAttachment: 'fixed',
					backgroundPosition: 'center',
					backgroundSize: 'cover ',
					background: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("${courtImage?.image}") `,
				}}>
				{/* <img
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
				/> */}
				<div className='headline'>
					<a href={courtImage?.url}>{courtImage?.title}</a>
				</div>
				<div className='sub-headline'>{courtImage?.subname}</div>

				<div className='sub-text centered'>
					{courtImage?.publishDate} <br />
					{courtImage?.author}
				</div>
			</div>
		</div>
	);
};

export default Hero;
