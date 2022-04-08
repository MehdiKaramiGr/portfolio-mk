import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";


export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			navBarToggle: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = (e) => {
		this.setState(
			{ navBarToggle: !this.state.navBarToggle },
			console.log(this.state.navBarToggle)
		);
	};
	render() {
		console.log(this.state.navBarToggle);
		const transformedStyle = { transform: "translateX(0%)" };

		return (
			<header className="header">
				<Logo />
				<button
					className="mobile-nav-toggle"

					aria-controls="primary-navigation"
					aria-expanded={this.state.navBarToggle}
					onClick={this.handleClick}
				>
					<span className="sr-only">Menu</span>
				</button>
				<nav>
					<ul
						id="primary-navigation"
						data-visable={this.state.navBarToggle}
						style={this.state.navBarToggle ? transformedStyle : null}
					>
						<li className="active">
							<a href="#">
								<span aria-hidden="true">00</span>Home
							</a>
						</li>
						<li className="active">
							<a href="#">
								<span aria-hidden="true">01</span>Past Work
							</a>
						</li>
						<li>
							<a href="#">
								<span aria-hidden="true">02</span>Skills
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
