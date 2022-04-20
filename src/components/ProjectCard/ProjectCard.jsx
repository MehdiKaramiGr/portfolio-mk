import React from "react";

import CustomeButton from "../CustomeButton/CustomeButton";

import GitLogo from "../../assets/git-logo";

import "./ProjectCard.scss";

export default function ProjectCard({ title ,ImgUrl , description}) {
	return (
		<div className="project-card">
			<img src={ImgUrl}></img>
			<h4>{title}</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus sequi assumenda nihil voluptates. Neque, maxime eum! Iure, nam nesciunt.
				{description}
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
