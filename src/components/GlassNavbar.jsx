import React from "react";
import "./GlassNavbar.css";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const GlassNavbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const confirm = window.confirm('Are you sure you want to sign out?');
    if (!confirm) return;
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      alert(err?.message || 'Failed to sign out');
    }
  };
  return (
    <nav className="glass-navbar">
      <div className="navbar-left">
        <span className="site-name">Shopping Heist</span>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <a href="#about" className="nav-link">About</a>
        <a href="#products" className="nav-link">Products</a>
        <button className="nav-link" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default GlassNavbar; 