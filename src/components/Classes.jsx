import React from 'react';
import './styles/Classes.css';
import hipHopImage from '../assets/images/hiphop.png';
import bhangraImage from '../assets/images/bhangra.png';
import kpopImage from '../assets/images/kpop.png';
import bollywoodImage from '../assets/images/bollywood.png';

function Classes() {
  return (
    <section className="classes">
      <div className="container">
        <div className="class-card">
          <h2 className="class-title" data-initial="H" data-image={hipHopImage}>
            ip-Hop
          </h2>
          <p className="class-description">
            Our Hip-Hop classes are suitable for all levels of experience and provide an energetic and fun way to stay fit and improve your dance skills.
          </p>
        </div>
        <div className="class-card">
          <h2 className="class-title" data-initial="K" data-image={kpopImage}>
            -Pop
          </h2>
          <p className="class-description">
            K-Pop classes bring the latest Korean pop dance moves to life, offering a unique and exciting dance experience.
          </p>
        </div>
        <div className="class-card">
          <h2 className="class-title" data-initial="B" data-image={bhangraImage}>
            hangra
          </h2>
          <p className="class-description">
            Experience the vibrant and energetic dance style of Bhangra, perfect for those looking to celebrate Punjabi culture through dance.
          </p>
        </div>
        <div className="class-card">
          <h2 className="class-title" data-initial="B" data-image={bollywoodImage}>
            ollywood
          </h2>
          <p className="class-description">
            Dive into the colorful and dynamic world of Bollywood dance, suitable for all ages and skill levels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Classes;
