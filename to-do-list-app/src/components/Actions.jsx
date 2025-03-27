import React from 'react';

function Actions(props) {
	return (
		<div className="actions">
			<button className="done" onClick={props.onCompleteAll}>
				Complete All
			</button>
			<button className="delete" onClick={props.onClearAll}>
				Clear All
			</button>
		</div>
	);
}

export default Actions;
