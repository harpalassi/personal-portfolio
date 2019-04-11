import React from 'react';

const Header = () => {
  return (
    <header id="about">
      <div className="row-wrap">
        <div className="about__image">
          <img
            src="https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/portfolio-profile.png"
            alt="Portait"
            className="about__picture"
          />
        </div>
        <div className="title">
          <h1>HARPAL ASSI</h1>
          <p>
            I'm Harpal! I'm a full-stack web developer, tech addict, and
            musician born in the UK and currently residing in Austin, TX.
          </p>
          <br />
          <p>
            After several years of touring, I found myself falling in love with
            programming and its infinite possibilities. I currently work in
            full-stack technologies such as React, JavaScript, CSS3, HTML5,
            MySQL, Node.js, Express, and MongoDB. I'm passionate about building
            apps that are clean, accessible, and efficient for both users and
            developers alike.
          </p>
          <br />
          <p>
            {' '}
            Feel free to check out my{' '}
            <a href="#projects" aria-label="projects">
              projects
            </a>{' '}
            and download my{' '}
            <a
              href="https://www.dropbox.com/s/ktfe4j3rpit2lnd/harpal-resume-web.pdf?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="resume">
              resumé
            </a>
            .{' '}
          </p>{' '}
          <br />
          <p>
            <div id="contact">
              Contact me below to chat about opportunities, programming,
              britcoms, horror films, or just to say hello.
            </div>
          </p>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/harpal-assi/"
          aria-label="linked-in"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="mailto:harpalassi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email">
          <i className="far fa-envelope" />
        </a>
        <a
          href="https://www.github.com/harpalassi"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer">
          <i className="fab fa-github-square" />
        </a>
      </div>
    </header>
  );
};

export default Header;
