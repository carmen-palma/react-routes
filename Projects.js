import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      {projectsData.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.url}>Ver proyecto</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;