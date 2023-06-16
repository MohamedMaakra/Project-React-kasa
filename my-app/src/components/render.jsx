export const renderEquipmentsList = (CardDetails) => {
    return (
      <div>
        <ul className='equipement'>
          {CardDetails?.equipments && CardDetails.equipments.map((equipment, index) => (
            <li key={`equipment-${index}`}>{equipment}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export const renderTagsList = (CardDetails) => {
    return (
      <div className="tag">
        <ul className='tags'>
          {CardDetails?.tags && CardDetails.tags.map((tag, index) => (
            <li key={`tag-${index}`}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  };
  