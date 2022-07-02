import React, { useState } from 'react';

const Header = () => {
	
	const [setButtonPopup] = useState(false);
	
	return (
		<div className='header'>
			<h1>Messaging / Affinity Map</h1>
			<button
				onClick={() =>
					setButtonPopup(true)
				}
				className='save'
			>
				New note
			</button>
            <button className='headerBtn'>Group Highlights</button>
            <button className='headerBtn'>Dot Voting</button>
            <p>Filter by: </p><button className='headerBtn'>Select</button>
		</div>
	);
};

export default Header;