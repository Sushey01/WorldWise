import React, { useEffect } from 'react';
import styles from "./CityShow.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';

const CityShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {getCity, currentCity, isLoading} = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <p>Loading ...</p>;
  if (!currentCity) return <p>City is not found!</p>;

  const { cityName, date } = currentCity;

  const handleButton = () => {
    navigate('/app');
  };

  return (
    <div className={styles.city}>

      <div className={styles.name}>
        <p>CITY NAME</p>
        <h3>{cityName}</h3>
      </div>
      <div className={styles.date}>
        <p>YOU WENT TO {cityName?.toUpperCase()} ON</p>
        <h3>{new Intl.DateTimeFormat('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          weekday: 'long',
        }).format(new Date(date))}</h3>
      </div>
      <div className={styles.more}>
        <p>LEARN MORE</p>
        <div className={styles.wiki}>
          <a href='#'>Check out on Wikipedia</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" color="#FFB545" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-move-right">
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
      </div>
      <button className={styles.click} onClick={handleButton}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" color='#ececec' height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
        
        <h3>BACK</h3>
      </button>
    </div>
  );
};

export default CityShow;
