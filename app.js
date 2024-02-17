import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [updateDetails, setUpdateDetails] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = (username, password) => {
    // Perform validation logic here, for simplicity, let's consider a basic check
    if (username === 'user123' && password === 'password123') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleUpdate = () => {
    // Perform update logic here, for simplicity, just updating the state
    setUpdateDetails({ name, address });
  };

  return (
    <div className="container">
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome, User!</h2>
          <div>
            <h3>Update Details</h3>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Address:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <button onClick={handleUpdate}>Submit Update</button>
          </div>
          {Object.keys(updateDetails).length > 0 && (
            <div className="updated-details">
              <h3>Updated Details</h3>
              <p>Name: {updateDetails.name}</p>
              <p>Address: {updateDetails.address}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;