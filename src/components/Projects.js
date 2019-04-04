import React, { Component } from 'react';
import image from '../images/mockuper.png';

class Projects extends Component {
  state = {};

  render() {
    const project = [{ title: 'All My Books', image: '' }];
    return (
      <section id="projects">
        <div className="projects__layout">
          <h2>PROJECTS</h2>
          {/* <img src={image} width="325px" /> */}
        </div>
      </section>
    );
  }
}

export default Projects;
