import { Link } from 'react-router-dom';
import './DeviceList.css';

const devices = [
  { id: 1, name: 'Temp Sensor', type: 'Temperature/Humidity' },
  { id: 2, name: 'GPS Tracker', type: 'GPS Location' },
];

const DeviceList = () => {
  return (
    <div className="device-list">
      <h2>Available Devices</h2>
      <div className="device-grid">
        {devices.map((device) => (
          <Link key={device.id} to={`/device/${device.id}`} className="device-card">
            <h3>{device.name}</h3>
            <p>{device.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
