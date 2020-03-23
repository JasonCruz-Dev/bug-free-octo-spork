import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import NavBar from "./C/NavBar";
import About from "./C/About";
import Projects from "./C/Projects";
import Contact from "./C/Contact";

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <div className='logo'>
          <span className='icon fa-gem'></span>
        </div>
        <div className='content'>
          <div className='inner'>
            <h1>Jason Cruz</h1>
            <p>Full Stack Engineer - Iot Enthusiast - Polyglot</p>
          </div>
        </div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </header>
    </div>
  );
}

export default App;
