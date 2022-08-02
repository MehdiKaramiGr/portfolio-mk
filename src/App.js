import "./App.scss";
import { useRef } from "react";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Section-Header/Header";
import Projects from "./components/Section-Projects/Projects";
import About from "./components/Section-About/About";
import Contact from "./components/Section-Contact/Contact";
import Footer from "./components/Section-Footer/Footer";

function App() {
	const headerRef = useRef();
	const ProjectsRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const footerRef = useRef();

	const navHeaderRefs = [
		{ section: "Home", ref: headerRef },
		{ section: "Projects", ref: ProjectsRef },
		{ section: "About", ref: aboutRef },
		{ section: "Contact", ref: contactRef },
		{ Selection: "footer", ref: footerRef },
	];

	return (
		<div className="App">
			<NavBar navHeaderRefs={navHeaderRefs} />
			<Header propRef={headerRef} />
			<About propRef={aboutRef} />
			<Projects propRef={ProjectsRef} />
			<Contact propRef={contactRef} />
			<Footer propRef={footerRef} />
		</div>
	);
}

export default App;
