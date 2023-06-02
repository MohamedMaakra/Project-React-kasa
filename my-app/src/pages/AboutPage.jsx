import React from 'react';
import About from '../components/About';
import '../Styles/About.css'
import montagne from '../assets/montagne.png';

export const AboutPage = () => {
  return (
    <div>
      <div className="banniere">
        <img src={montagne} alt='montagne' />
        </div>
      <About />
    </div>
  );
};



