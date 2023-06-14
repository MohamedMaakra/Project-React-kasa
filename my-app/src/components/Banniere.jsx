import React, { useState } from 'react';
import '../Styles/Banniere.css';
import prev from '../assets/prev.png';
import next from '../assets/next.png';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPictures - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPictures - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      {totalPictures > 1 && (
        <button className="carousel-button fleche-prev" onClick={prevSlide}>
          <img className='fleche' src={prev} alt="prev"  />
        </button>
      )}
      <img src={pictures[currentIndex]} alt="Carousel Slide" className="carousel-image" />
      {totalPictures > 1 && (
        <button className="carousel-button fleche-next" onClick={nextSlide}>
          <img className='fleche' src={next} alt="next"  />
        </button>
      )}
      {totalPictures > 1 && (
        <div className="carousel-counter">{currentIndex + 1}/{totalPictures}</div>
      )}
    </div>
  );
};

export default Carousel;
