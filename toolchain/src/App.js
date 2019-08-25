import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './common/Navbar';
import Home from './Home/index.js';
import New from './New/index.js';
import Edit from './Edit/index.js';
import Stats from './Stats/index.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit" component={Edit} />
        <Route path="/stats" component={Stats} />
      </Router>
    </div>

  );
}

export default App;