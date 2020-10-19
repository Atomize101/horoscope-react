import React, { useState } from 'react';
import './App.css';
import { SelectSign } from './components/SelectSign';

function App() {
	const [selectedSign, setSelectedSign] = useState(null);

	return (
		<div className="App">
			<h1>The Horoscope App</h1>
			{selectedSign}
			<SelectSign onSignSelected={setSelectedSign} />
		</div>
	);
}

export default App;
