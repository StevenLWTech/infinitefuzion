// src/components/Hero.js
import React, { useRef } from 'react';

import logoImage from '../assets/images/home.png';  // Correct import statement


import About from './About';
import Classes from './Classes'; // Assuming you have other sections like Classes
import Contact from './Contact'; // Assuming you have a Contact section
import '../App.css'; // Adjust the path if needed

const Hero = () => {

  const aboutRef = useRef(null);
  const classesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <section className="landing" id="home">
        <div className="hero-img">
          <img src={logoImage} alt="woman jumping" />
        </div>
      </section>
      <section id="about" ref={aboutRef} className="about">
        <About />
      </section>
      <section id="classes" ref={classesRef} className="classes">
        <Classes />
      </section>
      <section id="contact" ref={contactRef} className="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Hero;
