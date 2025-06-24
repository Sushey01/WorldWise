import React, { useState } from "react";
import styles from "../components/Cities.module.css";
import Form from "./CityForm";
import WorldMap from "./Map";
import { useCities } from "../contexts/CitiesContext";
import Logo from "../assets/images/worldwise.png";
import CityList from "./CityList";
import CountryList from "./CountryList";
import { Outlet, useNavigate } from "react-router-dom";

const Cities = () => {
  const { cities } = useCities();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(false);
  // const [locationData, setLocationData] = useState(null);
  // const [showForm, setShowForm] = useState(false);

  // When user clicks on map
  // const handleLocationSelect = (location) => {
  //   setLocationData(location);
  //   setShowForm(true);
  //   navigate('/app/form')
  // };

  // When form is closed (after adding or cancel/back)
  // const handleCloseForm = () => {
  //   setShowForm(false);
  //   setLocationData(null);
  // };

  return (
    <section className={styles.section5}>
      <div className={styles.container}>
        <div className={styles.city}>
          <div className={styles.logo}>
            <img src={Logo} alt="WorldWise Logo" />
          </div>

          <div className={styles.councity}>
            <div className={styles.two}>
              <div
                className={`${styles.cities} ${
                  activeTab === "cities" ? styles.active : ""
                }`}
                onClick={() => {setActiveTab("cities");
                  navigate('/app/cities');
                }}
              >
                CITIES
              </div>
              <div
                className={`${styles.countries} ${
                  activeTab === "countries" ? styles.active : ""
                }`}
                onClick={() => {setActiveTab("countries");
                navigate('/app/countries');
                }}
              >
                COUNTRIES
              </div>
            </div>
          </div>
<Outlet/>
       
        </div>

        <div className={styles.map}>
          <WorldMap />
        </div>
      </div>
    </section>
  );
};

export default Cities;
