import React, { useState } from 'react';
import './App.css';
import { SelectSign } from './components/SelectSign';
import { SelectTimeFrame } from './components/SelectTimeFrame';

function App() {
	const [selectedSign, setSelectedSign] = useState(null);
	const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

	return (
		<div className="App">
			<h1>The Horoscope App</h1>
			{selectedSign}
			<SelectSign onSignSelected={setSelectedSign} />
			<SelectTimeFrame onTimeFrameSelected={setSelectedTimeFrame} />
		</div>
	);
}

export default App;
