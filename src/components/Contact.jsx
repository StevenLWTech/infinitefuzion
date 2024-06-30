// src/components/About.js
import React from 'react';
import './styles/About.css';
import './styles/NavBarStyles.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="section-title">
          <h3>Contact Me</h3>
        </div>
        <div className="section-content">
          <p>
          Email: 12345@gmail.com
          </p>
          <p>
            Phone: (425)888-8888

          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
