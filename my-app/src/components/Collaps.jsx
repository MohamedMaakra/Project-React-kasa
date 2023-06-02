import React, { useState } from 'react';
import '../Styles/Collaps.css'
import ouvrir from '../assets/ouvrir.png'
import fermer from '../assets/fermer.png'

const Collaps = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collaps">
      <div className="collaps-header" onClick={handleToggle}>
        <h1>{title}</h1>
        <img src={isOpen ? fermer : ouvrir}  />
      </div>
      {isOpen && (
        <div className="collaps-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collaps;
