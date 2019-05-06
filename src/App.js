import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

function App() {
  const [contactLinks, setContactLinks] = useState([
    {
      id: 1,
      link: `https://www.linkedin.com/in/harpal-assi/`,
      name: `linked-in`,
      icon: `fab fa-linkedin`
    },
    {
      id: 2,
      link: `mailto:harpalassi@gmail.com`,
      name: `email`,
      icon: `far fa-envelope`
    },
    {
      id: 3,
      link: `https://www.github.com/harpalassi`,
      name: `github`,
      icon: `fab fa-github-square`
    },
    {
      id: 4,
      link: `https://www.discogs.com/artist/2289768-Harpal-Assi`,
      name: `discogs`,
      icon: `fas fa-compact-disc`
    }
  ]);

  return (
    <div className="wrapper">
      <Navbar />
      <Header contactLinks={contactLinks} />
      <Projects />
      <Footer contactLinks={contactLinks} />
    </div>
  );
}

export default App;
