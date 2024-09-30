import React, { useState } from "react";
import axios from "axios";
import "./LoginPopUp.css";

function LoginPopUp({ setShowLogin, onLoginSuccess }) {
  const [currState, setCurrState] = useState("Login");
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = formValues;

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      onLoginSuccess(response.data.user); // Send user data back to parent on success
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = formValues;

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username: name,
        email,
        password,
      });
      setCurrState("Login"); // Switch to login view
    } catch (err) {
      setError("Sign-up failed. Please try again.");
    }
  };

  const switchState = (state) => {
    setError(""); // Clear any previous error message
    setFormValues({ name: "", email: "", password: "" }); // Clear form values
    setCurrState(state); // Switch between login and sign-up
  };

  return (
    <div className="login-popup">
      <form
        className="Login-popup-container"
        onSubmit={currState === "Login" ? handleLogin : handleSignUp}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <i onClick={() => setShowLogin(false)} className="fa-solid fa-x"></i>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="Login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => switchState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => switchState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
