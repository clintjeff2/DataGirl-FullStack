import React from 'react';
import TaskItem from './TaskItem';

function Tasks(props) {
	return (
		<ul>
			{props.tasks.map((el) => (
				<TaskItem onDeleteTask={props.onDeleteTask} task={el} />
			))}
		</ul>
	);
}

export default Tasks;
