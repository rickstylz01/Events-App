import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return(
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
            to="/"
            className="col s5 brand-logo center black-text nav-link"
          >
            <i className="material-icons">code</i>
            MERN EVENT SITE
          </Link>
        </div>
      </nav>
    </div>
  );
};
