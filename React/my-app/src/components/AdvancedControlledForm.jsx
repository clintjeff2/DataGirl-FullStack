import { useState } from 'react';

function AdvancedControlledForm() {
	const [data, setData] = useState({ email: '', tel: '', comments: '' });
	return (
		<form>
			<input
				type="email"
				onChange={(event) => {
					setData((prevValue) => {
						return { ...prevValue, email: event.target.value };
					});
				}}
				placeholder="Email"
				value={data.email}
			/>
			<input
				type="number"
				onChange={(event) => {
					setData((prevValue) => {
						return { ...prevValue, tel: event.target.value };
					});
				}}
				placeholder="Tel..."
				value={data.tel}
			/>
			<textarea
				onChange={(event) => {
					setData((prevValue) => {
						return { ...prevValue, comments: event.target.value };
					});
				}}
				placeholder="Enter a comments"
				value={data.comments}
			></textarea>
			<button type="submit">Send</button>

			<p>{data.comments}</p>
			<p>{data.email}</p>
			<p>{data.tel}</p>
		</form>
	);
}

export default AdvancedControlledForm;
