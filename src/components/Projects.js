import React, { Component } from 'react';

class Projects extends Component {
  state = {};

  render() {
    const project = [
      {
        id: 1,
        title: 'All My Books',
        image:
          'https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/all-my-books.png',
        description:
          'All My Books is a full-stack application that searches, saves, and deletes books of interest using the Google Books API. The app is built with React, MongoDB, Express and Node.js.'
      }
    ];
    return (
      <section id="projects">
        <h2>PROJECTS</h2>

        {project.map(project => (
          <div className="projects__layout">
            <div className="img__container">
              <img
                key={project.id}
                src={project.image}
                className="project__img"
                alt={project.title}
              />
            </div>
            <div className="project__description">
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Projects;
