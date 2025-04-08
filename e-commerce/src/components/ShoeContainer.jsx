import React, { useContext } from 'react';
import ShoeCard from './ShoeCard';
import { ProductContext } from '../App';

function ShoeContainer(props) {
	const shoes = useContext(ProductContext);
	console.log(shoes);
	return (
		<div className="shoe-container">
			{shoes.product.map((el) => (
				<ShoeCard onOpenModal={props.setIsModalOpen} shoeDetail={el} />
			))}
		</div>
	);
}

export default ShoeContainer;
