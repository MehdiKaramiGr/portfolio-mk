import { React } from "react";

import "./Home.scss";

export default function HomePage(props) {
	return (
		<div className="home-page" id="Home" ref={props.passedRef} >
			HomePage
		</div>
	);
}
