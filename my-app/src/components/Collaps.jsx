import React, { useState } from 'react';
import '../Styles/Collaps.css';
import ouvrir from '../assets/ouvrir.png';
import fermer from '../assets/fermer.png';

const Collaps = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collaps">
      <div className="collaps-header" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={isOpen ? ouvrir : fermer} alt="Toggle Icon" />
      </div>
      <div className={`collaps-content ${isOpen ? 'visible' : 'invisible'}`}>
        <div className="collaps-p">{content}</div>
      </div>
    </div>
  );
};

export default Collaps;
