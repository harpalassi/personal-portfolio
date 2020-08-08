import React from 'react';
import Resume from '../resume/resume.pdf';
import NavItem from './NavItem';
import useActive from '../hooks/useActive';

const Navbar = () => {
  const {active, toggleActive} = useActive();
  
  const lineStyle = active ? 'line open' : 'line';
  
  return (
    <nav>
      <div className='hamburger' onClick={toggleActive}>
        <div className={lineStyle} />
        <div className={lineStyle} />
        <div className={lineStyle} />
      </div>
      
      <ul className={active ? 'nav-links closed' : 'nav-links'}>
        <NavItem href={'#about'}
                 aria-label={'about'}
                 onClick={toggleActive}
                 name={'About'} />
        <NavItem href={'#contact'}
                 aria-label={'contact'}
                 onClick={toggleActive}
                 name={'Contact'}
        />
        <NavItem href={'#projects'}
                 aria-label={'projects'}
                 onClick={toggleActive}
                 name={'Projects'}
        />
        <NavItem href={Resume}
                 target={'_blank'}
                 rel={'noopener noreferrer'}
                 aria-label={'resume'}
                 onClick={toggleActive}
                 name={'Résumé'}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
