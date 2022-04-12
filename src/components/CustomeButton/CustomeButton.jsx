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

	const handleClick = (e) => {
		if(btnRef.current.className.includes("clicked")){
            console.log("this2")
		     setClicked(false)
		 }
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

	useEffect(() => {
		console.log("render");
	}, [rippleStyle]);

	// useEffect(() => {
	// 	btnRef.current.addEventListener("click", (e) => {
	//         console.log("this")
	// 		handleClick(e);
	// 	});

	// 	return () => {
	// 		btnRef.current.removeEventListener("click", (e) => {
	//         console.log("removed")

	// 			handleClick(e);
	// 		});
	// 	};
	// }, [clicked, rippleStyle]);
	return (
		<button
			className={`btn contained ${clicked ? "clicked" : ""}`}
			ref={btnRef}
			onClick={(e) => handleClick(e)}
		>
			BUTTON
			{clicked ? <span className="ripple" style={rippleStyle}></span> : null}
		</button>
	);
}
