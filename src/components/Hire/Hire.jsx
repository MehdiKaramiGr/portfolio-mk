import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import CustomeButton from "../CustomeButton/CustomeButton";

import "./Hire.scss";

export default function Hire({ propRef }) {
	return (
		<div id="Hire" ref={propRef}>
			<div className="hire-banner">
				<h2>Hire Me</h2>
				<p>
					If I'm a good fit for your business or company, you can contact me
					from one of the options below or fill up the below form, and I'll
					contact you as soon as possible{" "}
				</p>
				<div className="contact-info">
					<CustomeButton cName="hover">
						<a href="mailto:mehdi.karami.dev@outlook.com">
							mehdi.karami.dev@outlook.com
						</a>
					</CustomeButton>
					<CustomeButton cName="hover">
						<a href="tel:+989371607551">+98 937 160 7551</a>
					</CustomeButton>
				</div>
			</div>
			<ContactForm />
		</div>
	);
}
