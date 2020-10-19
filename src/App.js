import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [signs, setSigns] = useState([]);

	useEffect(() => {
		fetch('http://sandipbgt.com/theastrologer/api/sunsigns/')
			.then((response) => response.json())
			.then(setSigns);
	}, []);

	return (
		<div className="App">
			<h1>The Horoscope App</h1>
			<h2>Please select a sign</h2>
			<div className="grid">
				{signs.map((sign) => (
					<button className="sign" key={sign}>
						{sign}
					</button>
				))}
			</div>
		</div>
	);
}

export default App;
