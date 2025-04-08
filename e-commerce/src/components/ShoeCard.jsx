import React, { useContext } from 'react';
import { ProductContext } from '../App';

function ShoeCard(props) {
	const data = useContext(ProductContext);
	return (
		<div className="shoe-card">
			<img
				onClick={() => {
					data.selectShoe(props.shoeDetail.image);
					props.onOpenModal(true);
				}}
				src={`/images${props.shoeDetail.image}`}
				alt=""
				className="shoe-card-img"
			/>
			<div className="shoe-card-details">
				<div className="shoe-card-details-1">
					<span className="name">
						<span className="text">{props.shoeDetail.name}</span>
					</span>
					<span className="price">{props.shoeDetail.price} XAF</span>
				</div>
				<span className="description">{props.shoeDetail.description}</span>
				<div className="buttons">
					<button>Like</button>
					<button className="cart">Add to cart</button>
				</div>
			</div>
		</div>
	);
}

export default ShoeCard;
