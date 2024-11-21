import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
