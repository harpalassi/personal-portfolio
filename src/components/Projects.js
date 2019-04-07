import React, { Component } from 'react';
import Game from '../images/game-it-up.gif';
class Projects extends Component {
  state = {};

  render() {
    const project = [
      {
        id: 1,
        title: 'All My Books',
        image:
          'https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/all-my-books.gif',
        description: `All My Books is a full-stack application that allows users to quickly search for, save, and discard books of interest. Books are clearly displayed with their respective titles, authors, description, and thumbnail via the Google Books API.`,
        subtext: `Building this app solidified my knowledge regarding passing state and props within React, and using conditional rendering to achieve the results I wanted. `,
        environment: `Environment: React, MongoDB, Express, Node.js, Flexbox, Mongoose`,
        codelink: `https://www.github.com/harpalassi/all-my-books`,
        demolink: `https://all-my-books.herokuapp.com`
      },
      {
        id: 2,
        title: 'Game It Up',
        image: `https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/game-it-up.gif`,
        description: `Game It Up is a full-stack application for creating and finding pick-up sports games in your area. Users can log in and either search for a game using Google Maps or create one so others may join.
        `,
        subtext: `Building this app solidified my knowledge regarding passing state and props within React, and using conditional rendering to achieve the results I wanted. `,
        environment: `Environment: Handlebars, MySQL, Express, Node.js, Sequelize.`,
        codelink: ``,
        demolink: ``
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
              <div className="project__buttons">
                <button>
                  <a
                    href={project.codelink}
                    target="_blank"
                    rel="noopener noreferrer">
                    View Code
                  </a>
                </button>
                <button>
                  <a
                    href={project.demolink}
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="project__description">
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
              <h4 className="subtext">{project.subtext}</h4>
              <h4 className="subtext">{project.environment}</h4>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Projects;
