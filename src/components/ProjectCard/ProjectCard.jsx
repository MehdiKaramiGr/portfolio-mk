import React from "react";

import CustomeButton from "../CustomeButton/CustomeButton";

import GitLogo from "../../assets/git-logo";

import "./ProjectCard.scss";

export default function ProjectCard(props) {
	return (
		<div className="project-card">
			<img src={props.ImgUrl}></img>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
				perferendis, fugiat non earum eius incidunt ipsam, minus nemo natus
				minima dolore? Perspiciatis laudantium nulla commodi quam, autem atque
				minima laboriosam?
			</p>
			<div className="redirectButtons">
				<CustomeButton cName="contained">
					<GitLogo styleClass="startIcon" />
					GitHub
				</CustomeButton>

				<CustomeButton cName="outlined">
					Live Demo
				</CustomeButton>
			</div>
		</div>
	);
}
