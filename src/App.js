import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Projects from "./C/Projects";
import About from "./C/About";
import Contact from "./C/Contact";
import NavBar from "./C/NavBar";

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <div class='logo'>
          <span class='icon fa-gem'></span>
        </div>
        <div class='content'>
          <div class='inner'>
            <h1>Jason Cruz</h1>
            <p>Full Stack Engineer - Iot Enthusiast - Polyglot</p>
          </div>
        </div>
        <nav>
          <ul>
            <NavBar>
              <li>
                <Route path='/project' component={Projects} />
              </li>
              <li>
                <Route path='/about' component={About} />
              </li>
              <li>
                <Route path='/contact' component={Contact} />
              </li>
            </NavBar>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
