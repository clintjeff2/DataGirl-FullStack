import React from 'react';

function ShoeCardDetails(props) {
	return (
		<div className="card-detail">
			<img src={`/images${props.shoeDetail.image}`} alt="A shoe" />
			<div className="name-price">
				<span>{props.shoeDetail.name}</span>
				<span>{props.shoeDetail.price} XAF</span>
			</div>
			<p>{props.shoeDetail.description}</p>
			<p className="size-gender">
				<span>Sizes: {props.shoeDetail.size.join(', ')}</span>
				<span>Gender: {props.shoeDetail.gender}</span>
			</p>
		</div>
	);
}

export default ShoeCardDetails;
