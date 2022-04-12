import { React, useRef, useState, useEffect } from "react";

import "./CustomeButton.scss";
export default function CustomeButton() {
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

	useEffect(() => {
		const handleClick = (e) => {
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
			let timer1 = setTimeout(() => setClicked(false), 600);
		};
		btnRef.current.addEventListener("click", (e) => {
            console.log("this")
			handleClick(e);
		});

		return () => {
			btnRef.current.removeEventListener("click", (e) => {
            console.log("removed")

				handleClick(e);
			});
		};
	}, [clicked, rippleStyle]);
	return (
		<button className="btn contained" ref={btnRef}>
			BUTTON
			{clicked ? <span className="ripple" style={rippleStyle}></span> : null}
		</button>
	);
}
