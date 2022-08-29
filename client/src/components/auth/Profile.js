import React from 'react';
import bboyImg from '../../assets/bboy.JPG';

const ProfileCard = () => {
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
        <button className="btn btn-large waves-effect waves-light hoverable blue accent-3">
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
