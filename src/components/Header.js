import React from "react";
import Resume from "../resume/resume.pdf";

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
            I'm Harpal! I'm a full-stack web developer, musician, and tech addict born in the UK and
            currently residing in Austin, TX.
          </p>
          <br />
          <p>
            After several years of touring, I found myself falling in love with programming and its
            infinite possibilities to solve real-world problems. I enjoy working in full-stack
            technologies such as React, Node.js, Express, MongoDB, MySQL, JavaScript, CSS3, Sass,
            and HTML5.
          </p>
          <br />
          <p>
            {" "}
            Feel free to check out my{" "}
            <a href="#projects" aria-label="projects">
              projects
            </a>{" "}
            and download my{" "}
            <a href={Resume} target="_blank" rel="noopener noreferrer" aria-label="resume">
              resumé
            </a>
            .{" "}
          </p>{" "}
          <br />
          <p>
            <div id="contact">
              Contact me below to chat about full-time opportunities, programming, britcoms, horror
              films, records, or just to say hello.
            </div>
          </p>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/harpal-assi/"
          aria-label="linked-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="mailto:harpalassi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
        >
          <i className="far fa-envelope" />
        </a>
        <a
          href="https://www.github.com/harpalassi"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" />
        </a>
        <a
          href="https://www.discogs.com/artist/2289768-Harpal-Assi"
          target="_blank"
          aria-label="discogs"
          rel="noopener noreferrer"
        >
          <i class="fas fa-compact-disc" />
        </a>
      </div>
    </header>
  );
};

export default Header;
