import React from 'react';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pwd);
    setEmail('');
    setPwd('');
  };

  return(
    <section className="container">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="row marginTop">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard backspace</i>
            Back to home
          </Link>
          <div className="col s12 paddingLeft-login-btn">
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="input-field col s12">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="col s12 paddingLeft-login-btn">
              <button className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
