import React from "react";

import photoshot from "../../assets/IMG_80293.JPG";

import Card from "../SkillCard/SkillCard";
import CustomeButton from "../CustomeButton/CustomeButton";

import cv from "../../assets/mehdi-karami-cv.pdf";

import "./About.scss";

export default function About({ propRef }) {
	return (
		<div id="About" ref={propRef}>
			<div className="about-banner">
				<h2>About Me</h2>

				<div className="bio-banner">
					<p className="bio">
					I am a React developer. I have been learning programming for +4 years. Since 2019 I have been developing and testing web apps in the hope of finding the right area of expertise that suits my taste and skills. After this deep dive of learning the depth of various languages and technologies, I concluded that the front side of web development, especially JavaScript and its libraries is the most suitable area for me. I write clean codes and leverage my knowledge about JavaScript, HTML, and CSS and work closely with testers, designers, web designers, and project managers to create robust and effective applications. I Build solutions that can adhere to a larger audience, increasing scalability.
					</p>
					<img loading="lazy" src={photoshot} id="photoshot" alt="" />
				</div>

				<p>You can also download my resume from the link below</p>
				<CustomeButton cName="outlined">
					<a download href={cv}>
						Curriculum Vitae
					</a>
				</CustomeButton>
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
