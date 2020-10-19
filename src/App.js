import React, { useEffect, useState } from 'react';
import './App.css';
import { getSigns } from './service/api';

function App() {
	const [signs, setSigns] = useState([]);
	const [selectedSign, setSelectedSign] = useState(null);

	useEffect(() => {
		getSigns().then(setSigns);
	}, []);

	return (
		<div className="App">
			<h1>The Horoscope App</h1>
			<h2>Please select a sign</h2>
			{selectedSign}
			<div className="grid">
				{signs.map((sign) => (
					<button className="sign" key={sign} onClick={() => setSelectedSign(sign)}>
						{sign}
					</button>
				))}
			</div>
		</div>
	);
}

export default App;
