// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Example credentials (you can replace this with Supabase or other backend logic)
    if (adminId === 'admin' && adminPassword === 'admin123') {
      localStorage.setItem('isAdmin', true);
      navigate('/admin');
    } else {
      alert('Invalid admin credentials!');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleAdminLogin} className="admin-login-form">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          required
        />
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
}

export default AdminLogin;
