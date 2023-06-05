import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collaps from '../components/Collaps';

const CardDetails = () => {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch(`/data.json`); 
        const jsonData = await response.json();
        const card = jsonData.find((card) => card.id === id);
        setCardDetails(card);
        console.log(card)
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchCardDetails();
  }, [id]);

  if (!cardDetails) {
    return <div>Loading...</div>;
  }

  const { title, description, equipments } = cardDetails;

  return (
    <div className="card-details">
      <h2>{title}</h2>
      <Collaps title= 'Description' content={description} />
      <Collaps title="Équipements" content={equipments.join(', ')} />
    </div>
  );
};

export default CardDetails;
