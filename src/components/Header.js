import React from "react";
import Resume from "../resume/resume.pdf";

const Header = props => {
  return (
    <header id="about">
      <div className="row-wrap">
        <div className="about__image">
          <img
            src="https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/profile.jpg"
            alt="Portait"
            className="about__picture"
          />
        </div>
        <div className="title">
          <h1>HARPAL ASSI</h1>
          <p className="header_paragraph">
            I'm Harpal! I'm a full-stack web developer, musician, and tech addict born in the UK and
            currently residing in Austin, TX.
          </p>
          <p className="header_paragraph">
            After several years of touring, I found myself falling in love with programming and its
            infinite possibilities to solve real-world problems. I enjoy creating responsive
            websites using full-stack technologies such as React, Node.js, Express, MongoDB, MySQL,
            JavaScript, CSS3, Sass, and HTML5. Lately, I've been digging into Gatsby and GraphQL and
            focusing on accessbility and web performance.
          </p>
          <p className="header_paragraph">
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
          <p className="header_paragraph">
            <div id="contact">
              Contact me below to chat about full-time opportunities, programming, britcoms, horror
              films, records, or just to say hello.
            </div>
          </p>
        </div>
      </div>

      <div className="icons">
        {props.contactLinks.map(contactLink => {
          const { id, link, name, icon } = contactLink;
          return (
            <a key={id} href={link} aria-label={name} target="_blank" rel="noopener noreferrer">
              <i className={icon} />
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
