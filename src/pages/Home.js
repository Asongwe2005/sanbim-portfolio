// File name: Home.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React from 'react';
import { Link } from 'react-router-dom';

// Home Page Component
function Home() {
	return (
		<div className="page-container">
			<h1>Welcome to Sanbim Portfolio</h1>
			<p>Hello, I'm Paul Ngu. Explore my work and get in touch!</p>
			<h2>Mission Statement</h2>
			<p>To deliver innovative web solutions that drive business growth and user satisfaction.</p>
			<Link to="/about">
				<button>Learn More About Me</button>
			</Link>
		</div>
	);
}

export default Home;