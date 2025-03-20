import { useState } from 'react';

function ButtonCounter() {
	const [count, setCount] = useState(0);
	const increaseCount = () => {
		setCount((val) => val + 1);
	};
	const decreaseCount = () => {
		if (count > 0) {
			setCount((val) => val - 1);
		}
	};
	return (
		<div className="states">
			<button
				onClick={() => {
					setCount((val) => val + 1);
				}}
			>
				Increase
			</button>{' '}
			<br />
			Counter is {count}
			<br />
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	);
}

export default ButtonCounter;
