import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Built with React and CSS Flexbox </p>
      <p>© 2019 Harpal Assi</p>
      <div className="bottom-icons">
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
    </footer>
  );
};

export default Footer;
