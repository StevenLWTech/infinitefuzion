import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="wrapper">
        <div className="section-title">About Me</div>
        <div className="section-content">
          <p>
            Ajooni Dhanoa has been dancing from the age of 2½. She grew up in a Punjabi household where she learned to read, speak, and write Punjabi. She was drawn immediately to bhangra and Punjabi music. Now 15 years old, she has been learning bhangra for 12 years and feels the happiest when dancing.
          </p>
          <p>
            Experienced in tutoring children, she is patient, caring, and persevering. Ajooni wants to share her passion for dance with others by creating a safe environment for students to learn different styles while also having fun.
          </p>
        </div>
        <div className="section-quote">- Founder & Co-Founder Ajooni Dhanoa</div>
      </div>
    </section>
  );
}

export default About;
