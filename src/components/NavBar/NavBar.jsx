import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import "./NavBar.scss";

const NavBar = (props) => {
	//states

	//navBarToggle state
	const [navBarToggle, setNavBarToggle] = useState(false);
	//Logo Visibility state
	const [logoVisibility, setLogoVisibility] = useState(true);
	//Visible Section state used for nav section highlight
	const [visibleSection, setVisibleSection] = useState("Home");

	//refrence for the header
	const navRef = useRef();

	const getSectionPosition = (element) => {
		const { height } = element.getBoundingClientRect();
		const offsetTop = element.offsetTop;
		const offsetBottom = offsetTop + height;

		return { height, offsetTop, offsetBottom };
	};

	useEffect(() => {
		const handleScroll = () => {
			const { height: headerHeight } = getSectionPosition(navRef.current);
			const scrollPosition =
				(document.body.scrollTop || document.documentElement.scrollTop) +
				headerHeight;

			const heightToHideLogo = headerHeight;

			const selected = props.navHeaderRefs.find(({ section, ref }) => {
				const element = ref.current;
				if (element) {
					const { offsetBottom, offsetTop } = getSectionPosition(element);

					return scrollPosition > offsetTop && scrollPosition < offsetBottom;
				}
			});

			if (selected && selected.section !== visibleSection) {
				setVisibleSection(selected.section);
			}
			/* use this only in case of breaking the function
			else if (!selected && visibleSection) {
				setVisibleSection(undefined);
			  }*/

			if (scrollPosition > heightToHideLogo) {
				logoVisibility && setLogoVisibility(false);
			} else {
				setLogoVisibility(true);
			}
		};

		window.addEventListener("scroll", () => {
			handleScroll();
		});
		return () =>
			window.removeEventListener("scroll", () => {
				handleScroll();
			});
	}, [visibleSection, logoVisibility]);

	const handleClick = (e) => {
		setNavBarToggle(!navBarToggle);
	};

	//hidding styles
	const transformedStyle = { transform: "translateX(0%)" };
	const hiddenLogoStyle = { transform: "translateX(-200%)" };

	return (
		<header className="NavBar" ref={navRef}>
			<Logo style={logoVisibility ? null : hiddenLogoStyle} />
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded={navBarToggle}
				onClick={handleClick}
			>
				<span className="sr-only">Menu</span>
			</button>
			<nav>
				<ul
					id="primary-navigation"
					data-visable={navBarToggle}
					style={navBarToggle ? transformedStyle : null}
				>
					<li>
						<a
							href="#Home"
							className={`nav-link ${
								visibleSection === "Home" ? "active" : ""
							}`}
						>
							<span aria-hidden="true">00</span>Home
						</a>
					</li>
					<li>
						<a
							href="#About"
							className={`nav-link ${
								visibleSection === "About" ? "active" : ""
							}`}
						>
							<span aria-hidden="true">01</span>About Me
						</a>
					</li>
					<li>
						<a
							href="#Projects"
							className={`nav-link ${
								visibleSection === "Projects" ? "active" : ""
							}`}
						>
							<span aria-hidden="true">02</span>Past Works
						</a>
					</li>
					<li>
						<a
							href="#Contact"
							className={`nav-link ${
								visibleSection === "Contact" ? "active" : ""
							}`}
						>
							<span aria-hidden="true">03</span>Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
