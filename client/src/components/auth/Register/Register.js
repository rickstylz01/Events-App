import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

const Register = () => {
  userRef() = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return(
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i>
            Back to home
          </Link>
          <div className="col s12 paddingLeft">
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account?
              <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={state.name}
                id="name"
                type="text"
              />
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={state.email}
                id="email"
                type="email"
              />
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={state.password}
                id="password"
                type="password"
              />
            </div>
            <div className="col s12 paddingLeft">
              <button
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 submit-button-style"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
