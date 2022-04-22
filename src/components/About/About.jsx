import React from "react";

import photoshot from '../../assets/IMG_80293.JPG'

import Card from "../Card/Card";
import CustomeButton from "../CustomeButton/CustomeButton";

import "./About.scss";

export default function About({ propRef }) {
	return (
		<div id="About" ref={propRef}>
			<div className="about-banner">
				<h2>About Me</h2>



				<div className="bio-banner">

					<p className="bio">
						I'm a React developer interested in building and designing elegant
						and responsive web pages I'm also familiar with PHP, WordPress, and
						fundamentals of databases despite that, I'm experienced with vanilla
						JS and some of its libraries like bootstrap and jQuery, HTML, CSS,
						and sass but I'm especially founded and interest in React and enjoy
						working with it. additionally as a computer Scientist I'm familiar
						with the C language, OpenGL, Matlab, and experienced with Python,
						fundamentals of designing efficient algorithms. I'm always
						passionate about learning top of the line technologies. I'm also an
						amateur photographer as well, I have a good taste in art which helps
						me to design tasteful user interfaces and as a cherry on top and a
						must-have skill for a web developer, I'm skillful with adobe
						photoshop, illustrator and xd
					</p>
					<img loading="lazy" src={photoshot} id="photoshot" />
				</div>

				<p>You can also download my resume from the link below</p>
				<CustomeButton cName="outlined">Resume</CustomeButton>
			</div>
				<h4>A short listed breif of my skills and education</h4>

			<div className="skills-card-container">
				<Card>
					<h3>Primary Skills</h3>
					<ul>
						<li>Html</li>
						<li>Css</li>
						<li>JavaScript + ES6</li>
						<li>JSX</li>
						<li>React</li>
						<li>Git</li>
						<li>NPM</li>
						<li>Python</li>
					</ul>
				</Card>
				<Card>
					<h3>Libraries & Tools</h3>
					<ul>
						<li>Redux</li>
						<li>Sass</li>
						<li>React-Router V6</li>
						<li>FireBase</li>
						<li>Bootstrap</li>
						<li>Material-UI</li>
					</ul>
				</Card>

				<Card>
					<h3>Education</h3>
					<ul>
						<li>
							Computer Science Bachelor Degree
							<div className="subtitle">
								graduated in 2021 from Razi University
							</div>
						</li>
					</ul>
				</Card>
			</div>
		</div>
	);
}
