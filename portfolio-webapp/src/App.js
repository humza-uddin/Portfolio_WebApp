import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "../src/new/New.js";
import About from "../src/about/About.js";
import Skills from "../src/skills/Skills.js";
import Projects from "../src/projects/Projects.js";
import Contact from "../src/contact/Contact.js";

const App = () => {
  return( 
    <Router>
      <New />
      <Routes>
        <Route path="/" element={About} />
        <Route path="/skills" element={Skills} />
        <Route path="/projects" element={Projects} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
