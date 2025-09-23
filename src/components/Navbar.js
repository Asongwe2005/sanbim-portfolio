// File name: Navbar.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';  // Or logo.png

// Main Navigation Component
function Navbar() {
	return (
		<nav style={{ backgroundColor: '#f8f9fa', padding: '10px', display: 'flex', alignItems: 'center' }}>
			<img src={Logo} alt="Sanbim Logo" style={{ width: '50px', marginRight: '20px' }} />
			<ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About Me</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li><Link to="/services">Services</Link></li>
				<li><Link to="/contact">Contact Me</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar;