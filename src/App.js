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
			{signs.map((sign) => (
				<button key={sign}>{sign}</button>
			))}
		</div>
	);
}

export default App;
