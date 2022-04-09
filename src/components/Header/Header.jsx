import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = (props) => {
	//states
	//navBar hidden toggle state
	const [navBarToggle, setNavBarToggle] = useState(false);
	//hidding logo state
	const [isVisible, setIsVisible] = useState(true);
	//highlight nav section
	const [visibleSection, setVisibleSection] = useState();
	
	const headerRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const { height: headerHeight } = getSectionPosition(headerRef.current);
			const scrollPosition =
				(document.body.scrollTop || document.documentElement.scrollTop) +
				headerHeight ;

			const selected = props.navHeaderRefs.find(({ section, ref }) => {
				const element = ref.current;
				if (element) {
					const { offsetBottom, offsetTop } = getSectionPosition(element);

					return scrollPosition > offsetTop && scrollPosition < offsetBottom;
				}
			});

			if (selected && selected.section !== visibleSection) {
				setVisibleSection(selected.section);
				console.log(selected.section);
			}
		};

		window.addEventListener("scroll", () => {
			listenToScroll();
			handleScroll();
		});
		return () =>
			window.removeEventListener("scroll", () => {
				listenToScroll();
				handleScroll();
			});
	}, []);

	const listenToScroll = () => {
		let heightToHideFrom = 200;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHideFrom) {
			isVisible && // to limit setting state only the first time
				setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	const getSectionPosition = (element) => {
		const { height } = element.getBoundingClientRect();
		const offsetTop = element.offsetTop;
		const offsetBottom = offsetTop + height;

		return { height, offsetTop, offsetBottom };
	};

	const handleClick = (e) => {
		setNavBarToggle(!navBarToggle);
	};

	//hidding styles
	const transformedStyle = { transform: "translateX(0%)" };
	const hiddenLogoStyle = { transform: "translateX(-200%)" };

	return (
		<header className="header" ref={headerRef}>
			<Logo style={isVisible ? null : hiddenLogoStyle} />
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
						<a href="#pastwork"className={`nav-link ${
								visibleSection === "PastWork" ? "active" : ""
							}`}>
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
};

export default Header;
