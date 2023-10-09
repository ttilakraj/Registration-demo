import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister, registeredUsers }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    
    if (registeredUsers.some((user) => user.username === newUsername)) {
      alert('Username already exists! Please choose a different one!');
    } else {
     
      onRegister({ username: newUsername, password: newPassword });
      navigate('/dashboard'); 
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
