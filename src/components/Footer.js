import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer>
      <p>
        Built with{' '}
        <span role='img' aria-label='coffee'>
          ☕
        </span>{' '}
        and React
      </p>
      <p>© 2019-{new Date().getFullYear()} Harpal Assi</p>
      <div className='bottom-icons'>
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
