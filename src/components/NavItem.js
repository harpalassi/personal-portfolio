import React from 'react';

const NavItem = ({href, ariaLabel, onClick, name, target, rel}) => {
  
  return (
    <li>
     <a data-testid="NavItem" target={target} rel={rel} href={href} aria-label={ariaLabel} onClick={onClick} className='nav-link'>{name}</a>
    </li>
  );
}

export default NavItem;
