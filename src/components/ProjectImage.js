import React from 'react';

const ProjectImage = ({id, image, title}) => {
  return (
    <img
      key={id}
      src={image}
      className='project__img'
      alt={title}
    />
  );
};

export default ProjectImage;
