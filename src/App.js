import React, { Component, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import Projects from './components/Projects.js';
const Projects = lazy(() => import('./components/Projects'));

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Header />
        <Suspense fallback={<div>Loading..</div>}>
          <Projects />
        </Suspense>
      </div>
    );
  }
}

export default App;
