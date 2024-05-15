import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', liveLink: '#', repoLink: '#' },
    { title: 'Project 2', image: 'project2.jpg', liveLink: '#', repoLink: '#' },
    // Add 4 more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live App</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
