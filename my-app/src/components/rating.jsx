import React, { useState, useEffect } from 'react';
import grey_star from '../assets/grey-star.png';
import red_star from '../assets/red-star.png';

const StarRating = ({ rating }) => {
    const [stars, setStars] = useState([]);
  
    useEffect(() => {
      const newStars = Array(5).fill(null).map((_, index) => {
        const filledStar = <img key={`filled-${index}`} src={red_star} alt="étoile pleine" />;
        const emptyStar = <img key={`empty-${index}`} src={grey_star} alt="étoile vide" />;
  
        if (index < rating) {
          return filledStar;
        } else {
          return emptyStar;
        }
      });
      setStars(newStars);
    }, [rating]);
  
    return <div>{stars}</div>;
  };
  
  export default StarRating;
  