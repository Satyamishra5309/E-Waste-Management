import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ♻️ CycleBit
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/marketplace" className="nav-link">Marketplace</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/recycling" className="nav-link">Recycling</Link>
          <Link to="/government" className="nav-link">Government</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        
        <div className="nav-auth">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;