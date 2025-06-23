import React, { useState } from "react";
import styles from "../components/Cities.module.css";
import Form from "./CityForm";
import WorldMap from "./Map";
import { useCities } from "../contexts/CitiesContext";
import Logo from "../assets/images/worldwise.png";
import CityList from "./CityList";
import CountryList from "./CountryList";

const Cities = () => {
  const { cities } = useCities();
  const [activeTab, setActiveTab] = useState(false)
  const [locationData, setLocationData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // When user clicks on map
  const handleLocationSelect = (location) => {
    setLocationData(location);
    setShowForm(true);
  };

  // When form is closed (after adding or cancel/back)
  const handleCloseForm = () => {
    setShowForm(false);
    setLocationData(null);
  };

  return (
    <section className={styles.section5}>
      <div className={styles.container}>
        <div className={styles.city}>
          <div className={styles.logo}>
            <img src={Logo} alt="WorldWise Logo" />
          </div>

          <div className={styles.councity}>
            <div className={styles.two} >
              <div className={`${styles.cities} ${activeTab === "cities" ? styles.active:""}`}
              onClick={()=> setActiveTab("cities")}
              >CITIES</div>
              <div className={`${styles.countries} ${activeTab ==="countries" ? styles.active:""}`}
              onClick={()=> setActiveTab("countries")}
              >COUNTRIES</div>
            </div>
          </div>

          <div className={styles.form}>
  {showForm ? (
    <Form locationData={locationData} onClose={handleCloseForm} />
  ) : activeTab === "cities" ? (
    cities.length === 0 ? (
      <p className={styles.message}>
        👋 Add your first city by clicking on a city on the map
      </p>
    ) : (
      <CityList />
    )
  ) : (
    <CountryList />
  )}


            <div className={styles.footer}>
              <p>© Copyright 2025 by WorldWise Inc.</p>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <WorldMap onLocationSelect={handleLocationSelect} />
        </div>
      </div>
    </section>
  );
};

export default Cities;
