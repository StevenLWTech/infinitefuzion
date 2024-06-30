import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Register from './components/RegistrationForm'; // Assuming you have a Register component
import Footer from './components/Footer.jsx';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
      </Routes>
        <Footer />
    </Router>
  );
};

export default App;
