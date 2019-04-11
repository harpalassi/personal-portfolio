import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Header />

        <Projects />

        <Footer />
      </div>
    );
  }
}

export default App;
