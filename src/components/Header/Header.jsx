import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";


export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<Logo className="logo" />
				<nav>
					<ul className="primary-navigation">
						<li className="active">
							<a to="/home">Home</a>
						</li>
						<li>
							<a to="/about">About</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
