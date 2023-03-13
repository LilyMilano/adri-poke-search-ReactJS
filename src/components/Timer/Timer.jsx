import React, { useState, useEffect } from 'react';
import './timer.scss';

const Timer = () => {
	// State Hooks
	const [time, setTime] = useState(0);
	const [startTimer, setStartTimer] = useState(false);
	const [timerId, setTimerId] = useState(0);

	// useEffect Hooks
	useEffect(() => {
		let intervalId = null;
		if (startTimer) {
			intervalId = setInterval(() => {
				setTime((prev) => prev + 1);
			}, 1000);
			setTimerId(intervalId);
		} else {
			clearInterval(timerId);
		}
		//eslint-disable-next-line
	}, [startTimer]);

	const reset = () => {
		setTime(0);
	};

	return (
		<div className="div-container">
			<h1>Seconds:</h1>
			<h1> {time}</h1>
			<div className="div-button">
				<button onClick={() => setStartTimer(true)}>▶️</button>
				<button onClick={() => setStartTimer(false)}>⏹️</button>
				<button onClick={reset}>↩️</button>
			</div>
		</div>
	);
};

export default Timer;
