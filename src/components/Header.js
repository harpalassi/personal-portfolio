import React from 'react';

const Header = () => {
  return (
    <section id="about">
      <div className="title">
        <h1>HARPAL ASSI</h1>
        <p>
          I'm Harpal! I'm a full-stack web developer, tech addict, and musician
          born in the UK and currently residing in Austin, TX.
        </p>
        <br />
        <p>
          After several years of touring, I found myself falling in love with
          programming and its infinite possibilities. I currently work in
          full-stack technologies such as React, JavaScript, CSS3, HTML5, MySQL,
          Node.js, Express, and MongoDB. I'm passionate about building apps that
          are clean, accessible, and efficient for both users and developers
          alike.
        </p>
        <br />
        <p>
          {' '}
          Feel free to check out my{' '}
          <a href="#projects" aria-label="projects">
            projects
          </a>{' '}
          and reach out to me if you'd like to chat.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/harpal-assi/"
            aria-label="linked-in"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:harpalassi@gmail.com" aria-label="email">
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
      </div>
    </section>
  );
};

export default Header;
