import React from 'react';
import { contactLinks } from '../utils/data';

const Contact = () => {
  return contactLinks.map(contactLink => {
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
  });
};

export default Contact;
