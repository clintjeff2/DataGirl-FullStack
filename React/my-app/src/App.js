import Button from './Button';
import PrimaryButton from './ButtonPrimary';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button data="Login" />
				<p>save to reload.</p>
				<PrimaryButton />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Button data="Logout" />

		</div>
	);

}

export default App;
