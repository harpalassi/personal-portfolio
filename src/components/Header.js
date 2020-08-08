import React from 'react';
import Resume from '../resume/resume.pdf';
import Contact from './Contact';

const Header = () => {
  return (
    <header id='about'>
      <div className='row-wrap'>
        <div className='about__image'>
          <img
            src='https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/profile.jpg'
            alt='Portait'
            className='about__picture'
          />
        </div>
        <div className='title'>
          <h1>HARPAL ASSI</h1>
          <div className='biography'>
            <p className='header_paragraph'>
              I'm Harpal! I'm a{' '}
              <span className='bold'>software engineer</span>,
              musician, and tech addict born in the UK and currently residing in
              Austin, TX.
            </p>
            <p className='header_paragraph'>
              I enjoy building full-stack applications and contributing to open-source software using technologies such as JavaScript, React, React Native, Node.js, GraphQL, Express, MongoDB, SQL, and CSS.
            </p>
            <p className='header_paragraph'>
              {' '}
              Feel free to check out a selection of my{' '}
              <a href='#projects' aria-label='projects'>
                personal projects
              </a>{' '}
              and download my{' '}
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='resume'
              >
                résumé
              </a>
              .{' '}
            </p>{' '}
            <div className='header_paragraph'>
              <div id='contact'>
                Contact me below to chat about opportunities, programming,
                britcoms, raspberry pi, records, or just to say hello.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='icons'>
       <Contact/>
      </div>
    </header>
  );
};

export default Header;
