// File name: Projects.js
// Student’s Name: Paul Ngu
// StudentID: 300665839
// Date: September 23, 2025

import React from 'react';
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

// Projects Page Component
function Projects() {
	return (
		<div className="page-container">
			<h1>My Projects</h1>
			<div style={{ display: 'flex', gap: '20px' }}>
				<div>
					<img src={Project1} alt="Project 1" style={{ width: '300px' }} />
					<h3>Project 1: E-commerce Site</h3>
					<p>Role: Lead Developer. Outcome: Launched a fully functional online store using React and Node.js.</p>
				</div>
				<div>
					<img src={Project2} alt="Project 2" style={{ width: '300px' }} />
					<h3>Project 2: Mobile App</h3>
					<p>Role: UI Designer. Outcome: Developed a cross-platform app with React Native.</p>
				</div>
				<div>
					<img src={Project3} alt="Project 3" style={{ width: '300px' }} />
					<h3>Project 3: Portfolio Site</h3>
					<p>Role: Full Stack. Outcome: This site you're viewing!</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;