import { React, useState } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

import "./Projects.scss";

import PAST_WORKS_DATA from "./past-work.data";

export default function Projects(props) {
	const [collection, setCollection] = useState(PAST_WORKS_DATA);

	return (
		<div id="Projects" ref={props.propRef}>
			<div className="projects-banner">
			<h2>Apps I've build</h2>
			<p>Here are some of the previous works that I've showcased</p>

			</div>
			<div className="projects-card-container">
				{collection.map(({ id, ...otherCollectionProps }) => (
					<ProjectCard key={id} {...otherCollectionProps} />
				))}
			</div>
		</div>
	);
}
