import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]); 

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleRegister = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
    setLoggedIn(true); 
    setUsername(newUser.username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={loggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} registeredUsers={registeredUsers} />} />
          <Route path="/register" element={loggedIn ? <Navigate to="/dashboard" /> : <Register onRegister={handleRegister} registeredUsers={registeredUsers} />} />
          <Route path="/dashboard" element={loggedIn ? <Dashboard username={username} onLogout={handleLogout} /> : <Navigate to="/login" />}/>
          <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
