import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useNavigate } from 'react-router-dom';



const LocationMarker = () => {
  const [position, setPosition] = useState(null);
const navigate = useNavigate();
  useMapEvents({
    click: async (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      setPosition([lat, lng]);

      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
      const data = await res.json();
      navigate(`/app/form?lat=${lat}&lng=${lng}`)

    }
  });

  return position ? (
    <Marker position={position}>
      <Popup>You clicked here!</Popup>
    </Marker>
  ) : null;
};

const WorldMap = () => (
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
    <LocationMarker/>
  </MapContainer>
);


export default WorldMap;
