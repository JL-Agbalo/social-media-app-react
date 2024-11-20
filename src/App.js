import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
