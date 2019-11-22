import React, { useState } from 'react';
import Resume from '../resume/resume.pdf';

function Navbar() {
  const [active, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className='hamburger' onClick={toggleClass}>
        <div className={active ? 'line open' : 'line'} />
        <div className={active ? 'line open' : 'line'} />
        <div className={active ? 'line open' : 'line'} />
      </div>

      <ul className={active ? 'nav-links closed' : 'nav-links'}>
        <li>
          <a
            href='#about'
            aria-label='about'
            onClick={toggleClass}
            className='nav-link'
          >
            About
          </a>
        </li>

        <li>
          <a
            href='#contact'
            aria-label='contact'
            onClick={toggleClass}
            className='nav-link'
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href='#projects'
            aria-label='projects'
            onClick={toggleClass}
            className='nav-link'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href={Resume}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='resume'
            onClick={toggleClass}
            className='nav-link'
          >
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
