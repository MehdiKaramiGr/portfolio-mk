import React from "react";

import CustomeButton from "../CustomeButton/CustomeButton";

import GitLogo from "../../assets/git-logo";

import "./ProjectCard.scss";

export default function ProjectCard({ title ,ImgUrl , description , gitUrl , liveUrl=""}) {
	return (
		<div className="project-card">
			<img src={ImgUrl}></img>
			<h4>{title}</h4>
			<p>
				{description}
			</p>
			<div className="redirectButtons">
				<CustomeButton cName="contained">
					<GitLogo styleClass="startIcon" url={gitUrl} />
					GitHub
				</CustomeButton>

				<CustomeButton cName={`${liveUrl ? "outlined":"disabled"}`} >
					Live Demo
				</CustomeButton>
			</div>
		</div>
	);
}
