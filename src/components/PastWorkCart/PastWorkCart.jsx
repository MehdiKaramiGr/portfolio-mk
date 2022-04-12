import React from "react";

import CustomeButton from "../CustomeButton/CustomeButton";

import "./PastWorkCart.scss";

export default function PastWorkCart(props) {
	return (
		<div className="cards">
			<img src={props.ImgUrl}></img>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
				perferendis, fugiat non earum eius incidunt ipsam, minus nemo natus
				minima dolore? Perspiciatis laudantium nulla commodi quam, autem atque
				minima laboriosam?
			</p>
			<div className="redirectButtons">

			<CustomeButton url="pornHub" larg />
			<CustomeButton small />
			</div>
		</div>
	);
}
