import React, { useState } from "react";
import styles from "../components/Cities.module.css";
import Form from "./CityForm";
import WorldMap from "./Map";
import Logo from "../assets/images/worldwise.png";

const Cities = () => {
  const [locationData, setLocationData] = useState(null); // Shared state

  return (
    <section className={styles.section5}>
      <div className={styles.container}>
        <div className={styles.city}>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <div className={styles.councity}>
            <div className={styles.two}>
              <button className={styles.cities}>CITIES</button>
              <button className={styles.countries}>COUNTRIES</button>
            </div>
          </div>
          <div className={styles.form}>
          <Form locationData={locationData} />
            <div className={styles.footer}>
        <p>© Copyright 2025 by WorldWise Inc.</p>
      </div>
          </div>
        </div>
        <div className={styles.map}>
          <WorldMap onLocationSelect={setLocationData} />
        </div>
      </div>
    </section>
  );
};

export default Cities;
