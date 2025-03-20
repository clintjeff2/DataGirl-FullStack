import { useState } from 'react';

function StateExample() {
	const [count, setCount] = useState(2000);
	const nameOfFunction = () => {
		setCount(800000);
	};
	const decreaseFunction = () => {
		setCount(500);
	};
	return (
		<div className="states">
			<button onClick={nameOfFunction}>Increase</button> <br />
			Counter is {count}
			<br />
			<button onClick={decreaseFunction}>Decrease</button>
		</div>
	);
}

export default StateExample;
