import React, { useState, useEffect} from "react";
import styles from "../components/Cities.module.css";
import Form from "./CityForm";
import WorldMap from "./Map";
import { useCities } from "../contexts/CitiesContext";
import Logo from "../assets/images/worldwise.png";

const Cities = () => {

  const {dispatch,cities} = useCities();

  useEffect(()=> {
    dispatch({type: "GET_CITY"});

  }, [dispatch])
console.log(cities,'cities');  

  const [activeTab, setActiveTab] = useState(null);
  const [locationData, setLocationData] = useState(null); // Shared state

  return (
    <section className={styles.section5}>
      <div className={styles.container}>
        <div className={styles.city}>
          <div className={styles.logo}>
            <img src={Logo} />
            <button onClick={() => dispatch({ type: "GET_CITY" })}>
  Check Cities (Console)
</button>
          </div>
          <div className={styles.councity}>
            <div className={styles.two}>
              <button className={`${styles.cities} ${activeTab === "cities" ? styles.active:""}`} onClick={()=> setActiveTab("cities")}>CITIES</button>
<button className={`${styles.countries} ${activeTab === "countries" ? styles.active:""}`} onClick={()=> setActiveTab("countries")}>COUNTRIES</button>            </div>
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
