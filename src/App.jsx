import React from "react";
import './App.css';
import Graph from './components/Graph';
import Map from './components/Map';

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        Menu <br /> section
      </aside>

      <main className="main-content">
        <div className="card">
          <h2>Today's Updates</h2>
          <p>✅ Updates</p>
          <p>✅ Updates</p>
          <p>👥 New Customers</p>
        </div>

        <div className="card">
          <Graph />
        </div>

        <div className="card map-container">
          <Map />
        </div>
      </main>
    </div>
  );
}

export default App;
