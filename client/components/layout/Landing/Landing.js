import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="first-container container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Build</b> a login/auth app with the {" "}
            <span className="monospace-font">MERN</span> stack from scratch
          </h4>
          <p className="flow-tex grey-text text-darken-1">
            Create a (minimal) full-stack app with user authentication
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              className="btn btn-large waves-effect waves-light waves-light hoverable blue accent-3 button-style">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
