// File name: Services.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React from 'react';
import Service1 from '../assets/service1.jpg';
import Service2 from '../assets/service2.jpg';
import Service3 from '../assets/service3.jpg';

// Services Page Component
function Services() {
	return (
		<div className="page-container">
			<h1>Services I Offer</h1>
			<ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
				<li>
					<img src={Service1} alt="Web Development" style={{ width: '200px' }} />
					<p>Web Development</p>
				</li>
				<li>
					<img src={Service2} alt="Mobile Apps" style={{ width: '200px' }} />
					<p>Mobile App Development</p>
				</li>
				<li>
					<img src={Service3} alt="General Programming" style={{ width: '200px' }} />
					<p>General Programming</p>
				</li>
			</ul>
		</div>
	);
}

export default Services;