import React from 'react';

const ProjectImage = props => {
  return (
    <img
      key={props.id}
      src={props.image}
      className='project__img'
      alt={props.title}
    />
  );
};

export default ProjectImage;
