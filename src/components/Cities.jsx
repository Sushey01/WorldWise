import React, { useState } from 'react';
import styles from '../components/Cities.module.css';
import Form from './CityForm';
import WorldMap from './Map';

const Cities = () => {
  const [locationData, setLocationData] = useState(null); // Shared state

  return (
    <div className={styles.container}>
      <div className={styles.city}>
        <Form locationData={locationData} />
      </div>
      <div className={styles.map}>
        <WorldMap onLocationSelect={setLocationData} />
      </div>
    </div>
  );
};

export default Cities;
