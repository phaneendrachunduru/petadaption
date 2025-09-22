import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Shelters from './pages/Shelters';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import UserProfile from './pages/UserProfile'; // 👈 Added
import Navbar from './components/Navbar';

// Protected Route for Admin
const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin');
  return isAdmin === 'true' ? children : <Navigate to="/admin-login" />;
};

// Protected Route for Logged-In User
const ProtectedUserRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Parse the user data
  return user ? children : <Navigate to="/login" />;
};

function App() {

  useEffect(() => {
    // Optionally, clear localStorage on logout or on initial load if needed.
    // localStorage.removeItem('isAdmin');
    // localStorage.removeItem('user');
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedUserRoute>
              <UserProfile />
            </ProtectedUserRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
