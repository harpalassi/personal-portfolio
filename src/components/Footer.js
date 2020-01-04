import React from 'react';

const Footer = props => {
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
        {props.contactLinks.map(contactLink => {
          const { id, link, name, icon } = contactLink;
          return (
            <a
              key={id}
              href={link}
              aria-label={name}
              target='_blank'
              rel='noopener noreferrer'
              title={name}
            >
              <i className={icon} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
