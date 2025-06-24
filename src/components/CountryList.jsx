import React, { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from "../components/CountryList.module.css";

const CountryList = () => {
  // const { country, dispatch} = useCities();
  const { cities } = useCities();
  console.log(cities, "city");
  // const [selectedCountry, setSelectedCountry] = useState(null);
  //   console.log(cities)

  //   const getCountries = (countries) => {
  //     dispatch ({type: "GET_CITY", payload: countries})
  //   }

  // Get unique countries from the cities list
  const countries = [...new Set(cities.map((city) => city.country))];
  // console.log(countries)
  // Reduce Method used for extracting countries unique
  // const countries = cities.reduce((arr, city)=>{
  //     if (!arr.includes(city.country)) return [...arr, city.country];
  //     else return arr;
  // }, [])

  if (!cities.length)
    return (
      <p className={styles.message}>
        👋 Add your first city by clicking on a city on the map
      </p>
    );

  return (
    <div className={styles.countryList}>
      {countries.map((country, index) => (
        <div key={index} className={styles.countryCard}>
          <span className={styles.countryName}>
            {country || "Unknown Country"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
