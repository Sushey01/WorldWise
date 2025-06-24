import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCities } from '../contexts/CitiesContext';
import User from './User';


const LocationMarker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: async (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      setPosition([lat, lng]);

      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
      const data = await res.json();

      onLocationSelect(data); // 🔁 send to parent

    }
  });

  return position ? (
    <Marker position={position}>
      <Popup>You clicked here!</Popup>
    </Marker>
  ) : null;
};

const WorldMap = ({ onLocationSelect }) => (
  <MapContainer
    center={[30, 100]}
    zoom={4}
    scrollWheelZoom={true}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker onLocationSelect={onLocationSelect} />
  <div className="user"><User/></div>
  </MapContainer>
);


export default WorldMap;
