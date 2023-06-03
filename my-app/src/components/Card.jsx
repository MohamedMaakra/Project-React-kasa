import React, { useEffect, useState } from 'react';

const CardData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      <div className="annonce">
        {data.map(card => (
          <div className='card' key={card.id}>
            <figure>
              <img src={card.cover} alt={card.title} />
              <figcaption>
                {card.title}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
