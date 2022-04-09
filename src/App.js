import "./App.scss";
import { useRef } from "react";

import Header from "./components/Header/Header";
import HomePage from "./components/Home/Home";
import PastWork from "./components/PastWork/PastWork";


function App() {

	const homeRef = useRef();
	const pastWorkRef = useRef();

	const navHeaderRefs = [
		{ section: "Home", ref: homeRef},
		{ section: "PastWork", ref: pastWorkRef},
	];
	
	return (
		<div className="App">
			<Header navHeaderRefs={navHeaderRefs} />
			<HomePage passedRef={homeRef} />
			<PastWork passedRef={pastWorkRef} />
			<div className="testing">
				test ...
			</div>
		</div>
	);
}

export default App;
