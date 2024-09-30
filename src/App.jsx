// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homes/home.jsx";
import Library from "./pages/Librarys/Library.jsx";
import Navbar from "./components/Navbars/navbar.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import QuestionBank from "./pages/Question Bank/questionBank.jsx";
import EventPage from "./pages/EventsPage/eventsPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState("public/images/avatars/user2.png");

  const handleLoginSuccess = (userInfo) => {
    setUser(userInfo);
    setShowLogin(false); // Hide the login popup after successful login
  };

  const handleSignOut = () => {
    setUser(null);
    setProfilePicture("public/images/avatars/user2.png"); // or set to default/empty image
  };

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} onLoginSuccess={handleLoginSuccess} />}

      <BrowserRouter>
        <Navbar setShowLogin={setShowLogin} user={user} profilePicture={profilePicture} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/question" element={<QuestionBank />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/profile" element={<ProfilePage user={user} profilePicture={profilePicture} setProfilePicture={setProfilePicture} onSignOut={handleSignOut} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
