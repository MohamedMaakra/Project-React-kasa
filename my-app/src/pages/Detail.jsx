import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Collaps from '../components/Collaps';

const CardDetails = () => {
  const { id } = useParams();
  const [CardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch(`/data.json`); 
        const jsonData = await response.json();
        const card = jsonData.find((card) => card.id === id);
        setCardDetails(card);
        console.log(card);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };

    fetchCardDetails();
  }, [id]);

  if (undefined === CardDetails) {
    return <Navigate to='*' />;
  }

  const renderEquipmentsList = () => {
    return (
      <div>
        <ul className='equipement' >
          {CardDetails?.equipments && CardDetails.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    );
  };
  

  return (
    <div className="card-details">
      <h2>{CardDetails?.title}</h2>
      <Collaps title="Description" content={CardDetails?.description} />
      <Collaps title="Équipements" content={renderEquipmentsList()} />
    </div>
  );
};

export default CardDetails;
