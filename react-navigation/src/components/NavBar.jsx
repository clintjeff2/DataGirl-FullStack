import { Link } from 'react-router-dom';
import './nav.css';
function NavBar() {
	return (
		<div className="links">
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/pricing">Pricing</Link>
			<Link to="/contact-us">Contact</Link>
		</div>
	);
}

export default NavBar;
