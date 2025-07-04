import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import './DeviceDetails.css';

const DeviceDetails = () => {
  const { id } = useParams();

  const deviceData = {
    1: {
      name: 'Temp Sensor',
      chartData: {
        labels: ['10AM', '11AM', '12PM', '1PM'],
        datasets: [
          {
            label: 'Temperature (°C)',
            data: [22, 23, 24, 25],
            borderColor: 'orange',
            tension: 0.4,
          },
          {
            label: 'Humidity (%)',
            data: [60, 63, 62, 65],
            borderColor: 'blue',
            tension: 0.4,
          },
        ],
      },
    },
    2: {
      name: 'GPS Tracker',
      chartData: {
        labels: ['10AM', '11AM', '12PM', '1PM'],
        datasets: [
          {
            label: 'Latitude',
            data: [13.1, 13.12, 13.15, 13.2],
            borderColor: 'green',
            tension: 0.4,
          },
          {
            label: 'Longitude',
            data: [77.5, 77.52, 77.51, 77.53],
            borderColor: 'purple',
            tension: 0.4,
          },
        ],
      },
    },
  };

  const device = deviceData[Number(id)];

  if (!device) return <p>Device not found</p>;

  return (
    <div className="device-details">
      <h2>{device.name} Data</h2>
      <div className="chart-container">
        <Line data={device.chartData} />
      </div>
    </div>
  );
};

export default DeviceDetails;
