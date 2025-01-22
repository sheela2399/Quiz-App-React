import React from 'react';
import logo from '../assets/techpaathshala_logo.png';
import avatar from '../assets/Avatar.png';

function Header() {
  const confirmLogout = () => {
    
  };

  const logout = () => {

  };

  const editPic = () => {
    document.getElementById('fileInput').click();
  };

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Display preview of the selected image
      console.log(URL.createObjectURL(file));
    }
  };

  return (
    <header>
      <nav className="quiz-start-nav dis-row-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="user-info">
          <span id="userName" className="user-name"></span>
          <img
            id="AvatarPic"
            className="Avatar"
            src={avatar}
            alt="Avatar"
            width="50"
            height="50"
            onClick={confirmLogout}
          />
          <br />
          <div id="confirmLogoutOptionDiv">
            <div className="confirm dis-col-center">
              <span id="userNameDisplay"></span>
              <span id="userEmailDisplay"></span>
              <button className="logout-button btn-primary" onClick={logout}>
                Logout
              </button>
              <button className="edit-button btn-primary" onClick={editPic}>
                Edit
              </button>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={previewImage}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
