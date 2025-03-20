import './Button.css';
function Button(props) {
	console.log(props.data);
	return <button className="btn">{props.data}</button>;
}

export default Button;
