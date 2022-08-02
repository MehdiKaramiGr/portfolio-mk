import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import CustomeButton from "../CustomeButton/CustomeButton";

import "./Contact.scss";

export default function Contact({ propRef }) {
	return (
		<div id="Contact" ref={propRef}>
			<div className="contact-banner">
				<h2>Open to offers</h2>
				<p>
					Should you have any inquiries about my working condition or contracts
					you may contact me as follows:
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
