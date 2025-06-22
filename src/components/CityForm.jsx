import React, { useState, useEffect } from 'react';
import styles from "../components/CityForm.module.css";

const Form = ({ locationData }) => {
  // const [countryCode, setCountryCode] = useState("")
  const [formData, setFormData] = useState({
    city: '',
    date: '',
    notes: ''
  });

  useEffect(() => {
    if (locationData?.address) {
      const city =
        locationData.address.city ||
        locationData.address.town ||
        locationData.address.village ||
        locationData.address.state ||
        '';
//      const code = locationData.address.country_code?.toUpperCase() || '';
// setCountryCode(code);

setFormData(prev => ({
  ...prev,
  city,
  date: new Date().toISOString().slice(0, 10)
}));

    }
  }, [locationData]);


 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

        <p onChange={handleChange}>When did you go to {formData.city}?</p>
        <input
          name="date"
          type="text"
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
          <button className={styles.add}>ADD</button>
          <button className={styles.back}>BACK</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
