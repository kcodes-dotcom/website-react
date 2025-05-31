import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import './Graph.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function Graph() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Visitors',
        data: [33, 53, 85, 41],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      }
    ]
  };

  return (
    <div className="graph">
      <Line data={data} />
    </div>
  );
}

export default Graph;
