import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => (
  <MapContainer
    center={[50, 0]} // Centered on the equator
    zoom={3}
    scrollWheelZoom={true}
    style={{ height: '100vh', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default WorldMap;
