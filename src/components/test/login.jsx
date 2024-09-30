// Login.js
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally make an API call to your backend to verify credentials
    // For simplicity, we'll just mock a user object
    const mockUser = {
      email: email,
      profilePhoto: 'https://via.placeholder.com/50'
    };
    onLogin(mockUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
