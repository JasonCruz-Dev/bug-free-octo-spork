import React from "react";

import { Link } from "react-router-dom";

function About() {
  return (
    <div className='App'>
      <Link to='/about'>
        <h1>About</h1>
      </Link>
      <b>Invidunt consetetur aliquyam labore justo eos at, aliquyam dolor est.</b>

      <p>
        Eos sanctus no invidunt et et tempor elitr. Duo gubergren consetetur magna erat duo et et
        elitr. Kasd tempor at ipsum sea no, ut est sit duo eos nonumy. Dolore.
      </p>
    </div>
  );
}

export default About;
