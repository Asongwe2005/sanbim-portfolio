// File name: About.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React from 'react';
import ProfileImg from '../assets/profile.jpg';
import Resume from '../assets/resume.pdf';  // Place your resume PDF here

// About Me Page Component
function About() {
	return (
		<div className="page-container">
			<h1>About Me</h1>
			<img src={ProfileImg} alt="Paul Ngu" style={{ width: '200px', borderRadius: '50%' }} />
			<p>Legal Name: Paul Ngu</p>
			<p>I am a passionate web developer with experience in React and full-stack technologies. Currently studying at Centennial College, I focus on creating user-friendly applications.</p>
			<a href={Resume} download="Paul_Ngu_Resume.pdf">
				<button>Download Resume (PDF)</button>
			</a>
		</div>
	);
}

export default About;