import React, { useState } from "react";
import "./contactform.scss";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div className="contact-form-container">
			{formSubmitted ? (
				<div className="thank-you-message">
					<h2>Thank you! We'll get back to you.</h2>
				</div>
			) : (
				<>
					<h2>Contact</h2>
					<form className="contact-form" onSubmit={handleSubmit}>
						<label>
							Name:
							<input type="text" name="name" value={formData.name} onChange={handleChange} />
						</label>
						<label>
							Email:
							<input type="email" name="email" value={formData.email} onChange={handleChange} />
						</label>
						<label>
							Message:
							<textarea name="message" value={formData.message} onChange={handleChange} />
						</label>
						<button type="submit">Submit</button>
					</form>
				</>
			)}
		</div>
	);
};

export default ContactForm;
