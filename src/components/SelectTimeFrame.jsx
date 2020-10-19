import React from 'react';

export const SelectTimeFrame = ({ onTimeFrameSelected }) => {
	return (
		<>
			<h2>Please select a timeframe</h2>
			<div className="grid">
				{['yesterday', 'today', 'tomorrow'].map((timeframes) => (
					<button className="timeframe" key={timeframes} onClick={() => onTimeFrameSelected(timeframes)}>
						{timeframes}
					</button>
				))}
			</div>
		</>
	);
};
