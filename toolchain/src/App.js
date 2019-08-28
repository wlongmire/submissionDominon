import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './common/Navbar';
import Home from './component_home/index.js';
import New from './component_new/index.js';
import Edit from './component_edit/index.js';
import View from './component_view/index.js';
import Stats from './component_stats/index.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/submissions/new" component={New} />
        <Route exact path="/submissions/edit" component={Edit} />
        <Route exact path="/submissions/edit/:id" component={Edit} />
        <Route exact path="/submissions/view" component={View} />
        <Route exact path="/submissions/view/:id" component={View} />
        <Route exact path="/submissions/stats" component={Stats} />
        <Route exact path="/submissions/stats/:id" component={Stats} />
      </Router>
    </div>

  );
}

export default App;