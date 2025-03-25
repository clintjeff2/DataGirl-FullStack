import React from 'react';
import './picture-line.css';

function PictureLine(props) {
	return (
		<div className="picture-line">
			{props.pictures.map((el, index) => (
				<img src={el} alt="Picture" key={index} />
			))}
		</div>
	);
}

export default PictureLine;
