// src/components/Footer.js
import React from 'react';
import './styles/Footer.css'; // Ensure to create and link this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>© 2024 Infinite Fuzion Studio. All Rights Reserved</p>
      <a href="#top" className="back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
