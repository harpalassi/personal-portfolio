import React, { Component, lazy, Suspense } from 'react';
const ProjectImage = lazy(() => import('./ProjectImage'));

class Projects extends Component {
  state = {};

  render() {
    const project = [
      {
        id: 1,
        title: 'All My Books',
        image:
          'https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/all-my-books.gif',
        description: ` A full MERN stack app that allows users to quickly search for, save, and discard books of interest. Books are clearly displayed with their respective titles, authors, description, and thumbnail via the Google Books API.`,
        challenges: ` I wanted to make my components reusable as possible which involved solving issues injecting different functions into the same components' onClick call. Building this app helped solidify my knowledge regarding passing state and props within React and using conditional rendering to achieve the results I wanted. I was also able to create this as a single-page application via React Router.`,
        environment: ` React, React Router, MongoDB, Express, Node.js, Flexbox, Mongoose`,
        codelink: `https://www.github.com/harpalassi/all-my-books`,
        demolink: `https://all-my-books.herokuapp.com`
      },
      {
        id: 2,
        title: 'Game It Up',
        image: `https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/gameit-up.gif`,
        description: ` A full-stack app for creating and finding pick-up sports games in your area. Users may log in and either create a game using Google Maps, or search for a previous one. Additionally, users have the ability to update and delete their events.
        `,
        challenges: ` This app was created with a group of developers and my main task was to implement authentication. This was a challenge as I had never attempted this in the past, but I persevered using Passport.js and Google OAuth 2.0. By using Express middleware, the routes to create and find games are protected and cannot be accessed if the user is not logged in. I also converted our front-end into Handlebars for dynamic rendering per user account.`,
        environment: ` Handlebars, Passport.js, MySQL, Express, Node.js, Sequelize, jQuery, Google Maps API`,
        codelink: `https://github.com/harpalassi/game-it-up`,
        demolink: `https://gameitup.herokuapp.com`
      },
      {
        id: 3,
        title: 'Mixmag News Scraper',
        image: `https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/mixmag-scraper.png`,
        description: ` A full-stack app which scrapes the latest news from mixmag.net. Users may also add and delete comments on each article via a modal pop-up. The total number of comments are shown on each article. It utilizes Node.js, Cheerio, and Axios for data scraping then displays the front-end using the MVC pattern with Mongoose, Handlebars, and Express. `,
        challenges: ` This app presented several challenges ranging from how to use templating with server side rendering, traversing the DOM to scrape data, and utilizing CRUD within MongoDB. I ran into a few issues that had me debugging for several hours, but I was able to find solutions after breaking the code down into smaller chunks.`,
        environment: ` JavaScript, Node.js, jQuery, MongoDB, Mongoose, Express, Axios, Cheerio, Materialize, Handlebars`,
        codelink: `https://github.com/harpalassi/mixmag-news-scraper`,
        demolink: `https://mixmag-news-scraper.herokuapp.com`
      },
      {
        id: 4,
        title: 'Twitter Data Analyser',
        image: `https://raw.githubusercontent.com/harpalassi/portfolio-2019/master/src/images/twitter-data-analyser.png`,
        description: ` A web app which analyses and displays Donald Trump's tweets into a word bubble and a bar graph. These show his most used words and the time of day they were posted.`,
        challenges: ` This app was a group effort in which my main tasks were to get data from a news API, display the feed on the front-end, and help customize the layout as whole. My biggest challenge was getting comfortable using Git with a team of developers. Working with others helped strengthen my foundation for creating branches, pull requests, resolving conflicts, and merging files.`,
        environment: ` JavaScript, jQuery, Materialize, Firebase, jQCloud, Chart.js`,
        codelink: `https://github.com/harpalassi/twitter-data-analyser`,
        demolink: `https://harpalassi.github.io/twitter-data-analyser`
      }
    ];
    return (
      <section id="projects">
        <h2>PROJECTS</h2>

        {project.map(project => (
          <div className="projects__layout">
            <div className="img__container">
              <Suspense fallback={<div>Loading..</div>}>
                <ProjectImage
                  key={project.id}
                  image={project.image}
                  title={project.title}
                />
              </Suspense>
              <div className="project__buttons">
                <button>
                  <a
                    href={project.codelink}
                    target="_blank"
                    rel="noopener noreferrer">
                    View Code
                  </a>
                </button>
                <button>
                  <a
                    href={project.demolink}
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="project__description">
              <div className="project__title">
                <h3>{project.title}</h3>
              </div>
              <h4>
                <span className="sections">Description</span>:
                {project.description}
              </h4>
              <h4 className="subtext">
                <span className="sections">Challenges</span>:
                {project.challenges}
              </h4>
              <h4 className="subtext">
                <span className="sections">Environment</span>:
                {project.environment}
              </h4>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Projects;
