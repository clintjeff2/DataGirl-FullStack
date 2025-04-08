import React from 'react';
import Button from './Button';

function Header() {
	return (
		<header className="header">
			<div className="landing-text">
				<h2>Complete your look with</h2>
				<h1>New Accessories</h1>
				<div className="text">
					<span>Nike, Channel, Vans, Addidas, Gucci & more...</span>
				</div>
				<Button text="Shop Now" />
			</div>
			<div className="image">
				<img src="/images/image19.png" alt="" />
			</div>
		</header>
	);
}

export default Header;
