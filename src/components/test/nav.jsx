// Navbar.js
import React from 'react';

function Navbar({ user }) {
  return (
    <nav>
      {user ? (
        <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
      ) : (
        <button>Sign In</button>
      )}
    </nav>
  );
}

export default Navbar;
