import { React, useState, useEffect } from "react";

import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import CustomeButton from "../CustomeButton/CustomeButton";
import FormInput from "../FormInput/FormInput";

import "./ContactForm.scss";

const FORM_ENDPOINT = "";
export default function ContactForm() {
	const [formData, updateFormData] = useState({
		name: "",
		email: "",
		company: "",
		description: "",
		location: {},
	});

	const [submit, updateSubmit] = useState({
		loading: false,
		result: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("https://ipapi.co/json");
		const location = await response.json();
		updateSubmit({
			loading: true,
			result: "",
		});
		try {
			const { name, email, company, description } = formData;
			const docRef = await addDoc(collection(db, "submitForm"), {
				name: name,
				emailAddress: email,
				company: company,
				description: description,
				location: location,
			});
			updateSubmit({
				loading: false,
				result: "success",
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			updateSubmit({
				loading: false,
				result: "error",
			});
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
				/>
				<label className="form-input-label" htmlFor="description">
					<span className="label-name">Tell Me All About It</span>
				</label>
			</div>

			<div>
				<CustomeButton cName="contained contact-form-submit" type="submit">
					{" "}
					Send{" "}
				</CustomeButton>
			</div>

			<div className="result">
				{submit.loading ? <div className="loader"></div> : null}
				{submit.result == "success" ? (
					<p>
						<span className="success">&#10004;</span> we received your message
						successfully.
					</p>
				) : null}

				{submit.result == "failed" ? (
					<p>
						<span className="error">&#9888;</span> sorry something happened so
						we couldn't receive your message, please try again
					</p>
				) : null}
			</div>
		</form>
	);
}
