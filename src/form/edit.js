import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";
import "./style.scss";

import { useState } from "@wordpress/element";

export default function Edit() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="form-block" style={{backgroundColor: "dodgerblue", padding: "20px", borderRadius: "5px"}}>
			<input
				type="text"
				name="name"
				placeholder="Your Name"
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
			/>
			<input
				type="passwrod"
				name="passwrod"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
			/>
			<textarea
				name="message"
				placeholder="Message"
				value={formData.message}
				onChange={handleChange}
			/>
			<button type="submit">Send</button>
		</div>
	);
}
