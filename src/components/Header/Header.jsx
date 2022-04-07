import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";

import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<Logo className="logo" />
				<nav>
					<ul className="primary-navigation">
						<li className="active">
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
