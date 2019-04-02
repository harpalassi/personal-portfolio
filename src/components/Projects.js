import React from 'react';
import image from '../images/mockuper.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__layout">
        <h1>PROJECTS</h1>
        <img src={image} width="400px" />
      </div>
    </section>
  );
};

export default Projects;
