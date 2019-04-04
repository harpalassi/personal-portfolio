import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    active: false
  };

  toggleClass = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav>
        <div className="hamburger" onClick={this.toggleClass}>
          <div className={this.state.active ? 'line open' : 'line'} />
          <div className={this.state.active ? 'line open' : 'line'} />
          <div className={this.state.active ? 'line open' : 'line'} />
        </div>

        <ul className={this.state.active ? 'nav-links open' : 'nav-links'}>
          <li>
            <a
              href="#about"
              aria-label="about"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              aria-label="projects"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="contact"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="resume"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
