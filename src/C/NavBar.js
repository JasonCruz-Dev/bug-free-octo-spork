import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/projects'>
        <li>Projects</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/contact'>
        <li>Contact</li>
      </Link>
    </nav>
  );
}

export default NavBar;
