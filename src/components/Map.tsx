
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 37.7749, // San Francisco example
  lng: -122.4194
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
