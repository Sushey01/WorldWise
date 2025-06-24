import React, { useState, useEffect } from "react";
import styles from "../components/CityForm.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = ({ onClose }) => {

  const navigate =useNavigate()
  const { dispatch } = useCities();
  const [country, setCountry] = useState("Unknown")
  const [isLoading ,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    date: "",
    notes: ""
  });
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {

  const fetchData = async()  => {
    setIsLoading(true);
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
      const data = await res.json();
      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.state ||
        "Unknown";


        setCountry(data.address.country || "Unknown")

         setFormData({
        city,
        date: new Date().toISOString().slice(0, 10),
        notes: ""
      });
      setIsLoading(false);
    }
  fetchData();
  },[lng,lat])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCity = () => {
    // const country = data?.address?.country|| "Unknown"

    dispatch({
      type: "ADD_CITY",
      payload: {
        id: Date.now(),
        country,
        cityName: formData.city,
        date: formData.date,
        notes: formData.notes
      }
    });

    navigate("/app/cities");
    

  };

  return (
    <>
   { isLoading ? <p>loading....</p>:(


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

        <p>When did you go to {formData.city || "..."}</p>
        <input
          name="date"
          type="text"
          className={styles.userInput}
          value={formData.date}
          onChange={handleChange}
        />

        <p>Notes about your trip to {formData.city || "..."}</p>
        <textarea
          name="notes"
          className={styles.userInput1}
          value={formData.notes}
          onChange={handleChange}
        />

        <div className={styles.buttons}>
          <button className={styles.add} onClick={handleAddCity}>
            ADD
          </button>
          <button className={styles.back} onClick={onClose}>
            BACK
          </button>
        </div>
      </div>
    </div>
   )}
    
    </>

  );
};

export default Form;
