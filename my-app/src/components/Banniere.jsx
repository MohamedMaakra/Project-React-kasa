import React, { useState } from 'react';

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
      <button className="carousel-button" onClick={prevSlide}>
        Previous
      </button>
      <img src={pictures[currentIndex]} alt="Carousel Slide" className="carousel-image" />
      <button className="carousel-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
