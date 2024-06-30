import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/NavBarStyles.css';
import logoImg from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
    } else {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <div className="Nav">
      <div className="Hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "HamburgerIcon open" : "HamburgerIcon"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Logo">
        <a href="/" onClick={closeMenu}>
          <img src={logoImg} alt="Logo" />
        </a>
      </div>
      <div className={isOpen ? 'Menu open' : 'Menu'}>
        <a href="#classes" onClick={(e) => handleNavigation(e, 'classes')}>Classes</a>
        <Link to="/register" onClick={closeMenu}>Register</Link>
        <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
