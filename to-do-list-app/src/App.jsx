import './App.css';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './components/component-styles.css';
import Tasks from './components/Tasks';
import Actions from './components/Actions';
import { useState } from 'react';

function App() {
	const [allTasks, setAllTasks] = useState([]);

	const addTask = (task) => {
		setAllTasks((prev) => [...prev, task]);
	};
	const handleDeleteTask = (taskId) => {
		const myNewTasks = allTasks.filter((el) => el.id != taskId);

		setAllTasks(myNewTasks);
	};
	const handleCompleteAll = () => {
		const newTasks = allTasks.map((el) => {
			el.isComplete = true;
			return el;
		});

		setAllTasks(newTasks);
	};

	const handleClearAll = () => {
		setAllTasks([]);
	};
	return (
		<div className="my-app">
			<Header />
			<TaskForm onAddTask={addTask} />
			<Tasks onDeleteTask={handleDeleteTask} tasks={allTasks} />
			<Actions onClearAll={handleClearAll} onCompleteAll={handleCompleteAll} />
		</div>
	);
}

export default App;
