import React, { useState } from 'react';
import './career.css';
import Profile from './Profile';

function CareerForm() {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [technologies, setTechnologies] = useState([]);
	const [aspirations, setAspirations] = useState('');
	const [abilities, setAbilities] = useState('');
	const [background, setBackground] = useState('');
	const [project, setProject] = useState('');
	return (
		<div>
			<form action="">
				<input
					type="text"
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
					placeholder="First Name"
				/>
				<input
					type="text"
					placeholder="Last Name"
					value={lastname}
					onChange={(e) => setLastname(e.target.value)}
				/>
				<input
					type="text"
					placeholder="List your different technologies(Seperated by commas)"
				/>
				<textarea
					name=""
					id=""
					value={aspirations}
					onChange={(e) => setAspirations(e.target.value)}
					placeholder="What are your aspirations?"
				></textarea>
				<textarea
					name=""
					value={abilities}
					onChange={(e) => setAbilities(e.target.value)}
					placeholder=" What Can you do right now?"
					id=""
				></textarea>

				<input
					type="text"
					value={background}
					onChange={(e) => setBackground(e.target.value)}
					placeholder="What is your background?"
				/>
				<textarea
					name=""
					value={project}
					onChange={(e) => setProject(e.target.value)}
					placeholder="What project are you working on?(Brief explanations)"
					id=""
				></textarea>
				<input type="submit" value="Submit" />
			</form>
			<Profile
				firstname={firstname}
				lastname={lastname}
				aspirations={aspirations}
				technologies={technologies}
				project={project}
				abilities={abilities}
				background={background}
			/>
		</div>
	);
}

export default CareerForm;
