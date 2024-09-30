// Profile.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css";

function Profile({ user, profilePicture, setProfilePicture, onSignOut }) {
  const fileInputRef = useRef(null);

  const handlePhotoInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSrc = reader.result;
        setProfilePicture(imageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-picture">
          <img src={profilePicture} alt="" />
        </div>
        <div className="profile-camera">
          <label className='handle-icon' onClick={handleCameraIconClick}>
            <div className="camera-icon">
              <i className="fa-solid fa-camera"></i>
            </div>
          </label>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handlePhotoInputChange}
          />
        </div>
        <div className="profile-title">
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
        <div className="profile-activities">
          <p className="profile-question">Uploaded Questions</p>
          <p className="number-color">32</p>
        </div>
        <div className="profile-activities">
          <p className="profile-question">Uploaded Books</p>
          <p className="number-color2">30</p>
        </div>
        <div className="profile-activities">
          <p className="profile-question">Credentials</p>
          <p className="number-color3">30</p>
        </div>
        <Link className='remove-underline' to="/home">
         <div className='sign-out'>
          <button onClick={onSignOut}>Sign Out</button>
        </div>
        </Link>
       
      </div>
      <div className="profile-right">
        <h2>Account Settings</h2>
        <div className='line'></div>
        <div className="upload-popup-condition1">
          <div>NewsLetter:</div>
          <div className="radio-group">
            <label htmlFor="fall"><input type="radio" id="fall" name="trimester" value="fall" required /> All</label>
            <label htmlFor="summer"><input type="radio" id="summer" name="trimester" value="summer" /> Essential</label>
          </div>
        </div>
        <div className="upload-popup-condition2">
          <div>Forums/Clubs:</div>
          <div className="radio-group">
            <label htmlFor="fall"><input type="checkbox" id="fall" name="trimester" value="fall" required /> App</label>
            <label htmlFor="summer"><input type="checkbox" id="summer" name="trimester" value="summer" /> Robotics</label>
            <label htmlFor="summer"><input type="checkbox" id="summer" name="trimester" value="summer" /> Web Development</label>
          </div>
        </div>
        <div className='line2'></div>
        <div className='profile-update'>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
