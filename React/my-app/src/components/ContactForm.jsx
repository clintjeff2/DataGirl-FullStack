import { useState } from 'react';

function ContactForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		// console.log(firstName + ' ' + lastName);
		alert(firstName.concat(' ', lastName));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					placeholder="First Name"
					value={firstName}
				/>
				<input
					type="text"
					onChange={(event) => {
						setLastName(event.target.value);
					}}
					placeholder="Last Name"
					value={lastName}
				/>
				<input type="email" placeholder="Email" />
				<input type="number" placeholder="Tel..." />
				<textarea placeholder="Enter a comments"></textarea>
				<button
					type="submit"
					// onClick={(event) => {
					// 	event.preventDefault();

					// 	// console.log(firstName + ' ' + lastName);
					// 	alert(firstName.concat(' ', lastName));
					// }}
				>
					Submit
				</button>
				<p>{firstName}</p>
				<p>{lastName}</p>
			</form>
		</div>
	);
}

export default ContactForm;
