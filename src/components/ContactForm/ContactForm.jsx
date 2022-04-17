import { React, useState, useEffect } from "react";

import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import CustomeButton from "../CustomeButton/CustomeButton";

import "./ContactForm.scss";
import FormInput from "../FormInput.jsx/FormInput";

const FORM_ENDPOINT = "";
export default function ContactForm() {
	const [formData, updateFormData] = useState({
		name: "",
		email: "",
		company: "",
		description: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { name, email, company, description } = formData;
			const docRef = await addDoc(collection(db, "submitForm"), {
				name: name,
				emailAddress: email,
				company: company,
				description: description,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		updateFormData((prevState) => ({ ...prevState, [name]: value }));

		if (e.target.value) {
			if (!e.target.className.includes("filled")) {
				e.target.className += " filled";
			}
			console.log(e.target.value);
		} else {
			e.target.className = e.target.className.replace("filled", "");
		}
	};

	return (
		<form action={FORM_ENDPOINT} onSubmit={handleSubmit}>
			<FormInput
				label="Name"
				type="text"
				value={formData.name}
				name="name"
				onChange={(e) => handleChange(e)}
				required
			/>

			<FormInput
				cName="email"
				type="email"
				value={formData.email}
				label="Email"
				name="email"
				onChange={(e) => handleChange(e)}
				required
			/>

			<FormInput
				type="text"
				value={formData.Company}
				label="company"
				onChange={(e) => handleChange(e)}
				name="company"
			/>

			<div className="form-input-container textarea">
				<textarea
				className="form-input"
					value={formData.description}
					name="description"
					onChange={(e) => handleChange(e)}
					required
				/>
				<label className="form-input-label" htmlFor="description">
					<span className="label-name">Tell Me All About It</span>
				</label>
			</div>

			<div>
				<CustomeButton cName="contained" type="submit">
					{" "}
					Send{" "}
				</CustomeButton>
			</div>
		</form>
	);
}
