import React from 'react';
import './profile.css';

function Profile(props) {
	return (
		<div className="profile">
			<div>
				<span>Firstname: {props.firstname} </span>
				<span>Lastname: {props.lastname}</span>
				<span>Background: {props.background}</span>
				<span>Abilities: {props.abilities}</span>
			</div>
			<div>
				<span>Technologies: {props.technologies}</span>
				<span>Aspirations: {props.aspirations}</span>
				<span>Project: {props.project}</span>
			</div>
		</div>
	);
}

export default Profile;
