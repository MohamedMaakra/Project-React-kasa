import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const goToPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="grid-container">
      <div className="annonce">
        {data.map((card) => (
          <div className="card" onClick={() => goToPage(card.id)} key={card.id}>
            <figure>
              <img src={card.cover} alt={card.title} />
              <figcaption>{card.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
