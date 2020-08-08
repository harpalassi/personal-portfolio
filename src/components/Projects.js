import React, { lazy, Suspense } from 'react';
import { projects } from '../utils/data';

const ProjectImage = lazy(() => import('./ProjectImage'));

const Projects = () => {
  return (
    <main>
      <section id='projects'>
        <h2>SELECTED PROJECTS</h2>
        {projects.map((project) => {
          const {
            id,
            title,
            image,
            description,
            challenges,
            environment,
            codelink,
            demolink,
          } = project;
          return (
            <div key={id} id={id} className='projects__layout'>
              <div className='img__container'>
                <Suspense fallback={<div>Loading..</div>}>
                  <ProjectImage key={id} id={id} image={image} title={title} />
                </Suspense>
                <div className='project__buttons'>
                  <button className='project__button' tabIndex='-1'>
                    <a
                      key={id}
                      href={codelink}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={title ? ' link to code for ' + title : ''}
                    >
                      View Code
                    </a>
                  </button>
                  <button className='project__button' tabIndex='-1'>
                    <a
                      key={id}
                      href={demolink}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={title ? 'link to demo for ' + title : ''}
                    >
                      View Demo
                    </a>
                  </button>
                </div>
              </div>
              <div className='project__description'>
                <div className='project__title'>
                  <h3 key={id} data-testid='ProjectTitle'>{title}</h3>
                </div>
                <h4>
                  <span key={id} className='sections'>
                    Description
                  </span>
                  :{description}
                </h4>
                <h4 className='subtext'>
                  <span key={id} className='sections'>
                    Challenges
                  </span>
                  :{challenges}
                </h4>
                <h4 className='subtext'>
                  <span key={id} className='sections'>
                    Technologies Used
                  </span>
                  :{environment}
                </h4>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
