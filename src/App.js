import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import './styles/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/feed"
            element={isLoggedIn ? <Feed /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />

          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>

        {/* Footer is part of the global layout, so it's included here */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
