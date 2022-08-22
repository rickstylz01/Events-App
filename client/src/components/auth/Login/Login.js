// import React from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';
//
// const Login = () => {
//   return(
//     <div className="container">
//       <div className="row marginTop">
//         <div className="col s8 offset-s2">
//           <Link to="/" className="btn-flat waves-effect">
//             <i className="material-icons left">keyboard backspace</i>
//             Back to home
//           </Link>
//           <div className="col s12 paddingLeft-login-btn">
//             <h4>
//               <b>Login</b> below
//             </h4>
//             <p className="grey-text text-darken-1">
//               Don't have an account <Link to="/register">Register</Link>
//             </p>
//           </div>
//           <form noValidate onSubmit={handleSubmit}>
//             <div className="input-field col s12">
//               <input
//                 onChange={handleChange}
//                 value={state.email}
//                 id="email"
//                 type="email"
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={handleChange}
//                 value={state.password}
//                 id="password"
//                 type="password"
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//             <div className="col s12 paddingLeft-login-btn">
//               <button className="btn btn-large waves-effect waves-light hoverable blue accent-3">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Login;
