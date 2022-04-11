import "./App.scss";
import { useRef } from "react";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import PastWork from "./components/PastWork/PastWork";

function App() {
	const headerRef = useRef();
	const pastWorkRef = useRef();

	const navHeaderRefs = [
		{ section: "Home", ref: headerRef },
		{ section: "PastWork", ref: pastWorkRef },
	];

	return (
		<div className="App">
			<NavBar navHeaderRefs={navHeaderRefs} />
			<Header propRef={headerRef} />
			<PastWork propRef={pastWorkRef} />
			<div className="testing">test ...</div>
		</div>
	);
}

export default App;
