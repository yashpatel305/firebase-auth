import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-copy">&copy; {new Date().getFullYear()} Shopping Heist. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 