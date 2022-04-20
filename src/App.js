import "./App.scss";
import { useRef } from "react";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Hire from "./components/Hire/Hire";
import Footer from "./components/Footer/Footer";

function App() {
	const headerRef = useRef();
	const ProjectsRef = useRef();
	const aboutRef = useRef();
	const hireRef = useRef()
	const footerRef = useRef()

	const navHeaderRefs = [
		{ section: "Home", ref: headerRef },
		{ section: "Projects", ref: ProjectsRef },
		{ section: "About", ref: aboutRef },
		{ section: "Hire", ref: hireRef },
		{Selection:"footer" , ref: footerRef}
	];

	return (
		<div className="App">
			<NavBar navHeaderRefs={navHeaderRefs} />
			<Header propRef={headerRef} />
			<About propRef={aboutRef} />
			<Projects propRef={ProjectsRef} />
			<Hire propRef={hireRef} />
			<Footer propRef={footerRef}/>
		</div>
	);
}

export default App;
