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
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={this.toggleClass}
              className={this.state.active ? 'fade' : ''}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className={this.state.active ? 'fade' : ''}>
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
