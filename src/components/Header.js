
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
		</div>
	);
};

export default Header;