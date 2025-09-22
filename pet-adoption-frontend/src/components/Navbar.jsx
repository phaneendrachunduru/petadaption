import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pawPrint from "../assets/paw-print.png"; // adjust path as needed

function Navbar() {
  console.log('Navbar rendered');
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={pawPrint} alt="Paw Print" className="paw-icon" />
            <span className="logo-text">PetFinder</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/pets" className="navbar-link">Find Pets</Link>
          <Link to="/shelters" className="navbar-link">Shelters</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/admin" className="navbar-link">Admin</Link> {/* 👈 New link */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
