import React, { useEffect, useState } from 'react';
import Collaps from './Collaps';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/about.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='about'>
      {data ? (
        <div className='about-collaps'>
          {data.map((item) => (
            <Collaps
              key={item.id}
              title={item.title}
              content={item.description}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;

