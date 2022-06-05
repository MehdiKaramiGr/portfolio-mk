import { React, useRef, useState } from "react";

import "./CustomeButton.scss";
export default function CustomeButton({
	url,
	children,
	propHandleClick,
	cName = "",
	...otherButtonProps
}) {
	const btnRef = useRef();
	const [clicked, setClicked] = useState(false);
	const [rippleStyle, setRippleStyle] = useState();

	const createRippleDim = (element, event) => {
		const { height, width, top, left } = element.getBoundingClientRect();
		const diameter = Math.max(height, width);
		const radius = diameter / 2;
		const rippleTop = event.clientY - (top + radius);
		const rippleLeft = event.clientX - (left + radius);

		return { diameter, rippleTop, rippleLeft };
	};

	const handleClick = (e) => {
		if (!e.target.className.includes("disabled")) {
			const { diameter, rippleTop, rippleLeft } = createRippleDim(
				btnRef.current,
				e
			);
			setRippleStyle({
				width: `${diameter}px`,
				height: `${diameter}px`,
				left: `${rippleLeft}px`,
				top: `${rippleTop}px`,
			});

			setClicked(true);
			let timer1 = setTimeout(() => {
				setClicked(false);
				clearInterval(timer1);
			}, 605);
		}
		if (url) {
			window.open(url, "_blank");
		}
	};

	//useEffect(() => {}, [rippleStyle]);

	return (
		<button
			className={`btn ${cName}`}
			ref={btnRef}
			onClick={(e) => handleClick(e)}
		>
			{children}

			{clicked ? <span className="ripple" style={rippleStyle}></span> : null}
		</button>
	);
}
