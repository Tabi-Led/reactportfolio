import React from 'react';
import './Resume.css';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="resume-link" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Resume;
