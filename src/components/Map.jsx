import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import styles from "../components/UserPosition.module.css";

// Component for navigating to form on map click
const LocationClickHandler = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: async (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      // You may still fetch reverse geocoding if needed
      await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );

      navigate(`/app/form?lat=${lat}&lng=${lng}`);
    },
  });

  return null;
};

// Component to fly to user position on map
const FlyToUserPosition = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 6, { duration: 2 }); // zoom level 6 is country-level
    }
  }, [position, map]);

  return null;
};

const WorldMap = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUsePosition = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserPosition([lat, lng]);
        setLoading(false);
      },
      () => {
        alert("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      {!userPosition && (
        <div className={styles.position}>
          <button onClick={handleUsePosition} disabled={loading}>
            {loading ? "Loading..." : "USE YOUR POSITION"}
          </button>
        </div>
      )}

      <MapContainer
        center={[30, 100]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {userPosition && <FlyToUserPosition position={userPosition} />}

        <LocationClickHandler />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
