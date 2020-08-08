import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
