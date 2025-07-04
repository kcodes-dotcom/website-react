import './App.css';
import Graph from './components/Graph';
import Map from './components/Map';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';

function App() {
  return (
    <Router>
      <div className="dashboard">
        <aside className="sidebar">
          Menu <br /> section
        </aside>

        <main className="main-content">
          {/* Section 1: Existing Dashboard Content */}
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

          {/* Section 2: Device Pages Render Here */}
          <Routes>
            <Route path="/" element={<DeviceList />} />
            <Route path="/device/:id" element={<DeviceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
