// File name: Contact.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Contact Page Component
function Contact() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		contactNumber: '',
		email: '',
		message: ''
	});

	const navigate = useNavigate();

	// Handle Input Changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle Form Submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data Submitted:', formData);  // Simulate capture (view in console)
		navigate('/');  // Redirect to Home
	};

	return (
		<div className="page-container">
			<h1>Contact Me</h1>
			<div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
				<p>email: npaulaso@my.centennialcollege.ca</p>
				<p>Phone: (123) 456-7890</p>
				<p>Address: Toronto, ON</p>
			</div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
				<input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
				<input type="tel" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
				<input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
				<textarea name="message" placeholder="Message" onChange={handleChange} required />
				<button type="submit">Send Message</button>
			</form>
		</div>
	);
}

export default Contact;