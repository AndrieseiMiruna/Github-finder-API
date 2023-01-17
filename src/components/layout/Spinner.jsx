import React from 'react';
import spinnerGif from './assets/spinner.gif';

function Spinner() {
	return (
		<div className="x-100 mt-20">
			<img width={50} className="text-center mx-auto" src={spinnerGif} alt="Loading..." />
		</div>
	);
}

export default Spinner;
