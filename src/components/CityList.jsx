import React from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from "../components/CityList.module.css";
import { useNavigate } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityList = () => {
  const { cities, dispatch } = useCities();

  if (!cities.length) return <p>👋 Add your first city by clicking on a city on the map</p>;


  // const addcity = (city) => {
  //   dispatch({type: "ADD_CITY", payload: city})
  // }

  const navigate = useNavigate("")

  const deleteCity = (id) => {
    dispatch({ type: "DELETE_CITY", payload: id });
  };

  function handleClick(id){
    navigate(`/app/cityshow/${id}`)
  }

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <div key={city.id} className={styles.cityCard} onClick={()=> handleClick(city.id)}>
          <span className={styles.cityName}>{city.cityName || "Unknown City"}</span>
          <span className={styles.date}>({formatDate(city.date)})</span>
          <button
            className={styles.removeButton}
            onClick={() => deleteCity(city.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
