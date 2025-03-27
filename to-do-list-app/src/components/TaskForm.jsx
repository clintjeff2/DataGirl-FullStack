import React, { useState } from 'react';

function TaskForm(props) {
	const [task, setTask] = useState('');

	const handleAddTask = (e) => {
		e.preventDefault();
		if (task.length <= 10) {
			alert('Sorry!! Your task must be atleast 11 characters');
			return;
		}

		const toDo = {
			name: task,
			isComplete: false,
			isDeleted: false,
			id: Date.now(),
		};

		props.onAddTask(toDo);
		setTask('');
	};
	return (
		<form action="">
			<input
				type="text"
				placeholder="Enter new Task"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button type="submit" onClick={handleAddTask}>
				Add Task
			</button>
		</form>
	);
}

export default TaskForm;
