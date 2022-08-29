import React from 'react';
import { useRef, useState, useEffect } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import './login.css';

const LOGIN_URL = '/login';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken});
      setEmail('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return(
    <section className="container">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="row marginTop">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i>
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
