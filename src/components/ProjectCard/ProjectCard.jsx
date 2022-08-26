import React from "react";

import CustomeButton from "../CustomeButton/CustomeButton";

import GitLogo from "../../assets/git-logo";

import "./ProjectCard.scss";

export default function ProjectCard({
	title,
	ImgUrl,
	description,
	gitUrl,
	liveUrl = "",
	
}) {
	return (
		<div className="project-card">
			{ImgUrl ? <img loading="lazy" src={ImgUrl} alt="snapshot"></img> : null}
			

			<h4>{title}</h4>
			<p>{description}</p>
			<div className="redirectButtons">
				<CustomeButton cName="contained" url={gitUrl}>
					<GitLogo styleClass="startIcon" />
					GitHub
				</CustomeButton>

				<CustomeButton
					cName={`${liveUrl ? "outlined" : "disabled"}`}
					url={liveUrl}
				>
					Live Demo
				</CustomeButton>
			</div>
		</div>
	);
}
