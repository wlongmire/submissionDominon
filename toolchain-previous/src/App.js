import React from 'react';

import './App.css';
import NavBar from './components/Navbar';
import UpcomingSubs from './components/UpcomingSubs';
import InfoSection from './components/InfoSection';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container">

        <div class="row">
          <UpcomingSubs />
          <InfoSection />
        </div>
      </div>
    </div>
  );
}

export default App;
