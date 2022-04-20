import React from "react";

import "./FormInput.scss";

export default function FormInput({ name, label, cName, ...otherProps }) {
	return (
		<div className="form-input-container">
			<input
				className={`form-input ${cName ? cName : null}`}
				name={name}
				{...otherProps}
			/>
			<label className="form-input-label" htmlFor={name}>
				<span className="label-name">{label}</span>
			</label>
		</div>
	);
}
