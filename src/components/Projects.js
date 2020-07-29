import React, { useState, lazy, Suspense } from 'react';
const ProjectImage = lazy(() => import('./ProjectImage'));

function Projects() {
  // eslint-disable-next-line
  const [project, setProject] = useState([
    {
      id: 2,
      title: 'Car Mate',
      image:
        'https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/car-mate.jpg',
      description: ` A full-stack app where individuals can keep track of their vehicle's maintenance and preventative measures. Users can check which services are available on the landing page, then log in to their account to view and save their vehicle's service details. Data is obtained from CarMD and saved into a MongoDB database. `,
      challenges: ` This app was built with a team of three others in which my role was to build our API to make calls to the CarMD server, save them to our database, and render them to the user. This proved challenging to start as I ran into CORS issues client-side, and ultimately built it server-side. I then organized making several API requests at once, ensured that the data was parsed correctly to save to the database, and sent it back to the client for rendering within a component's state. `,
      environment: ` React, React Router, Axios, Material UI, MongoDB, Express, Node.js, Passport, Mongoose`,
      codelink: `https://www.github.com/harpalassi/car-mate`,
      demolink: `http://carmateinfo.herokuapp.com`,
    },
    {
      id: 3,
      title: 'All My Books',
      image:
        'https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/allmybooks.jpg',
      description: ` A full-stack app that allows users to quickly search for, save, and discard books of interest. Books are dynamically displayed with their respective titles, authors, description, and thumbnail via the Google Books API, and saved to a MongoDB database.`,
      challenges: ` I wanted to make my components reusable as possible which involved solving issues injecting different functions into the same components' onClick call. Building this app helped solidify my knowledge regarding passing state and props within React and using conditional rendering to achieve the results I wanted. I was also able to create this as a single-page application via React Router.`,
      environment: ` React, React Router, MongoDB, Express, Node.js, Flexbox, Mongoose`,
      codelink: `https://www.github.com/harpalassi/all-my-books`,
      demolink: `https://all-my-books.herokuapp.com`,
    },
    {
      id: 4,
      title: 'Mixmag News Scraper',
      image: `https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/mixmag-scraper.jpg`,
      description: ` A full-stack app which scrapes the latest news from mixmag.net, stores them in a database, and presents them in a clean layout. Users may also add and delete comments on each article via a pop-up modal. The total number of comments are shown on each article.`,
      challenges: ` This app presented several challenges ranging from how to use templating with server side rendering, traversing the DOM to scrape data, and utilizing CRUD within MongoDB. These issues had me debugging for several hours, but I was able to solve them after breaking the code down into smaller chunks.`,
      environment: ` JavaScript, Node.js, jQuery, MongoDB, Mongoose, Express, Axios, Cheerio, Materialize, Handlebars`,
      codelink: `https://github.com/harpalassi/mixmag-news-scraper`,
      demolink: `https://mixmag-news-scraper.herokuapp.com`,
    },
    {
      id: 6,
      title: 'Twitter Data Analyser',
      image: `https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/twitter-analyser.jpg`,
      description: ` A web app which analyses and displays Donald Trump's tweets into a word bubble and a bar graph. These show his most frequently used words and the time of day they were posted. His tweets are juxtaposed by the latest headlines from Fox News.`,
      challenges: ` This app was a group effort in which my role was to retrieve data from a news API, display the feed on the front-end, and help customize the layout as whole. My biggest challenge was getting comfortable using Git with a team of developers. Working with others helped strengthen my foundation for creating branches, pull requests, resolving conflicts, and merging files.`,
      environment: ` JavaScript, jQuery, Materialize, Firebase, jQCloud, Chart.js`,
      codelink: `https://github.com/harpalassi/twitter-data-analyser`,
      demolink: `https://harpalassi.github.io/twitter-data-analyser`,
    },
  ]);

  return (
    <main>
      <section id='projects'>
        <h2> SELECTED PROJECTS</h2>

        {project.map((project) => {
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
                  <h3 key={id}>{title}</h3>
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
}

export default Projects;
