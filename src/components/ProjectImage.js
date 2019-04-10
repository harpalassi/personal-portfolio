import React from 'react';

const ProjectImage = props => {
  return (
    <img
      key={props.key}
      src={props.image}
      className="project__img"
      alt={props.title}
    />
  );
};

export default ProjectImage;
