import "./App.scss";
import { useRef } from "react";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Hire from "./components/Hire/Hire";

function App() {
	const headerRef = useRef();
	const ProjectsRef = useRef();
	const skillsRef = useRef();
	const hireRef = useRef()
	const footerRef = useRef

	const navHeaderRefs = [
		{ section: "Home", ref: headerRef },
		{ section: "Projects", ref: ProjectsRef },
		{ section: "Skills", ref: skillsRef },
		{ section: "Hire", ref: hireRef },
		{Selection:"footer" , ref: footerRef}
	];

	return (
		<div className="App">
			<NavBar navHeaderRefs={navHeaderRefs} />
			<Header propRef={headerRef} />
			<Projects propRef={ProjectsRef} />
			<Skills propRef={skillsRef} />
			<Hire propRef={hireRef} />
		</div>
	);
}

export default App;
