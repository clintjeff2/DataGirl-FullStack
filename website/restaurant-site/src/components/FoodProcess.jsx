import React from 'react';
import img1 from './../assets/baking.jpg';
import img2 from './../assets/burger__cut.png';
import './food-process.css';

function FoodProcess() {
	return (
		<div className="process">
			<div className="pics">
				<img className='img1' src={img1} alt="" />
				<img  className='img2' src={img2} alt="" />
			</div>
			<div className="process-food">
				<h2>Food Making Process</h2>
				<p>
					Mixing Flour, water, yeast, salt, and olive oil are combined in a
					mixer. Kneading The dough is kneaded to develop gluten, resulting in a
					smooth and elastic texture. Proofing The dough is allowed to rise in a
					warm, controlled environment, allowing the yeast to work its magic
					Simmering Fresh tomatoes, herbs, and spices are simmered together to
					create a flavorful sauce.
				</p>
				<button className="btn-process">Learn More</button>
			</div>
		</div>
	);
}

export default FoodProcess;
