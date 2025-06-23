import React, { useState, useEffect } from 'react';
import styles from "../components/CityForm.module.css";
import { useCities } from '../contexts/CitiesContext';

const Form = ({ locationData }) => {
  // ✅ Get context values
  const { dispatch, cities } = useCities();

  // ✅ Form state
  const [formData, setFormData] = useState({
    city: '',
    date: '',
    notes: ''
  });

  // ✅ Load city from locationData when available
useEffect(() => {
  if (locationData?.address) {
    const city =
      locationData.address.city ||
      locationData.address.town ||
      locationData.address.village ||
      locationData.address.state ||
      '';
    
    setFormData(prev => ({
      ...prev,
      city,
      date: new Date().toISOString().slice(0, 10),
    }));
  }
}, [locationData]);


  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Handle add city
const handleAddCity = () => {
  dispatch({
    type: "ADD_CITY",
    payload: {
      id: Date.now(),
      cityName: formData.city,
      date: formData.date,
      notes: formData.notes,
    },
  });

  // reset form or keep as you want
  setFormData({ city: '', date: '', notes: '' });
};

  return (
    <div className={styles.form}>
      <div className={styles.city}>
        <p>City name</p>
        <input
          name="city"
          type="text"
          className={styles.userInput}
          value={formData.city}
          onChange={handleChange}
        />

        <p>When did you go to {formData.city}?</p>
        <input
          name="date"
          type="text" // date halda naramro dekhyo
          className={styles.userInput}
          value={formData.date}
          onChange={handleChange}
        />

        <p>Notes about your trip to {formData.city || '...'}</p>
        <textarea
          name="notes"
          className={styles.userInput1}
          value={formData.notes}
          onChange={handleChange}
        />

        <div className={styles.buttons}>
          <button className={styles.add} onClick={handleAddCity}>ADD</button>
          <button className={styles.back}>BACK</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
