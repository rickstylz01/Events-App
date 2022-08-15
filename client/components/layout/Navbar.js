import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <Link
          to="/"
          className="col s5 brand-logo center black-text"
        >
          <i className="material-icons">code</i>
          MERN EVENT SITE
        </Link>
      </nav>
    </div>
  );
};
