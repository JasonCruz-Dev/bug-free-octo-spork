import React from "react";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='App'>
      <Link to='/contact'>
        <h1>Contact</h1>
      </Link>
      <b>Elitr est rebum et et eos, nonumy et sed rebum.</b>

      <p>
        At diam stet nonumy sit ut stet stet sea clita diam. Eirmod invidunt sea lorem labore nonumy
        rebum et est. Gubergren sed diam dolor ipsum ea ipsum erat. Vero et.
      </p>
    </div>
  );
}

export default Contact;
