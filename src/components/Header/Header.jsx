import { React } from "react";

import "./Header.scss";

export default function Header(props) {
	return (
		<header className="home-landing" id="Home" ref={props.propRef}>
			<div className="header-banner">
				<h1>I'm Mehdi Karami.</h1>
				<h3>
					I'm a React Developer and a Computer Scientist. I develop and design
					responsive and elegant websites for small businesses. While I'm based in
					Tehran, Iran, I help build websites for people from pole to pole.
				</h3>

			</div>
		</header>
	);
}
