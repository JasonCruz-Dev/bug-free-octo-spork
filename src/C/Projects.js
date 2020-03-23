import React from "react";

import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className='App'>
      <Link to='/projects'>
        <h1>Projects</h1>
      </Link>
      <b>information goes here</b>

      <p>
        Ut elitr accusam amet no rebum sadipscing elitr no, lorem erat amet et amet ipsum sanctus
        no, eos eos amet.
      </p>
    </div>
  );
}

export default Projects;
