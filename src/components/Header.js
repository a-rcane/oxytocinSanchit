
const Header = ({setButtonPopup}) => {
		
	return (
		<div className='header'>
			<h1>Messaging / Affinity Map</h1>
			<button
				onClick={() =>
					setButtonPopup(setButtonPopup)
				}
				className='save'
			>
				New note
			</button>
            <button className='headerBtn'>Group Highlights</button>
            <button className='headerBtn'>Dot Voting</button>
            Filter by:<button className='headerBtn'>Select</button>
		</div>
	);
};

export default Header;