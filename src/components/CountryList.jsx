import React from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from "../components/CountryList.module.css";

const CountryList = () => {
    // const { country, dispatch} = useCities();
  const { cities } = useCities();
  console.log(cities)

  const getCountries = (countries) => {
    dispatch ({type: "GET_CITY", payload: countries})
  }

  // Get unique countries from the cities list
  const countries = [...new Set(cities.map((city) => city.country))];

const coumtries = cities.reduce((arr, city)=>{
    if (!arr.includes(city.country)) return [...arr, city.country];
    else return arr;
}, [])

  return (
    <div className={styles.countryList}>
        {/* <h1>SPAIN</h1> */}
      {countries.length === 0 ? (
        <p className={styles.message}>
                👋 Add your first city by clicking on a city on the map
              </p>
      ) : (
        countries.map((country, index) => (
          <span key={index}>{country}</span>
        ))
      )}
    </div>
  );
};

export default CountryList;
