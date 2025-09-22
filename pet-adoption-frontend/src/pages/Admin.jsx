import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <p className="admin-subtitle">Manage shelters, pets, and users from one place.</p>

      <div className="admin-cards">
        <div className="admin-card">
          <h2>Manage Shelters</h2>
          <p>View, edit, or remove shelter data.</p>
          <button className="admin-button">Go to Shelters</button>
        </div>
        <div className="admin-card">
          <h2>Manage Pets</h2>
          <p>Update or add pet profiles.</p>
          <button className="admin-button">Go to Pets</button>
        </div>
        <div className="admin-card">
          <h2>Manage Users</h2>
          <p>Handle user accounts and permissions.</p>
          <button className="admin-button">Go to Users</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
