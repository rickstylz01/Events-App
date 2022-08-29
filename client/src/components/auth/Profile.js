import React, {useContext} from 'react';
import bboyImg from '../../assets/bboy.JPG';
import AuthContext from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const ProfileCard = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate('/')
  }

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={bboyImg} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Card Title<i
          className="material-icons right">more_vert</i></span>
        {/*change a to link*/}
        <p><a href="#">Edit Profile</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Card Title<i
          className="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
        <button
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          onClick={logout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
