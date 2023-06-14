import React, { useState } from 'react';
import '../Styles/Banniere.css'
import prev from '../assets/prev.png';
import next from '../assets/next.png'

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button fleche-prev" onClick={prevSlide}>
      <img className='fleche' src={prev} alt="prev"  />
      </button>
      <img src={pictures[currentIndex]} alt="Carousel Slide" className="carousel-image" />
      <button className="carousel-button fleche-next" onClick={nextSlide}>
       <img className='fleche' src={next} alt="next"  />
      </button>
    </div>
  );
};

export default Carousel;
