import React, { useState } from 'react';
import './App.css';
import { SelectSign } from './components/SelectSign';
import { SelectTimeFrame } from './components/SelectTimeFrame';

function App() {
	const [selectedSign, setSelectedSign] = useState(null);
	const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

	const restart = () => {
		setSelectedSign(null);
		setSelectedTimeFrame(null);
	};

	return (
		<div className="App">
			<h1>The Horoscope App</h1>
			{selectedSign}
			{!selectedSign && <SelectSign onSignSelected={setSelectedSign} />}
			{selectedSign && <SelectTimeFrame onTimeFrameSelected={setSelectedTimeFrame} />}
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default App;
