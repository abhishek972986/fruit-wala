import React, { useState } from 'react';
import Home from './Home';
import Login from './components/Login';
import './index.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-300 via-pink-300 to-blue-300">
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;