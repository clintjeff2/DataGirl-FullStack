import React from 'react';

function TaskItem(props) {
	return (
		<li>
			<span>{props.task.name}</span>
			{props.task.isComplete && <span className="done">Done</span>}
			<button onClick={() => props.onDeleteTask(props.task.id)}>Delete</button>
		</li>
	);
}

export default TaskItem;
