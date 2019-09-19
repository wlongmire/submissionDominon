import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let StatsSelect = ({ match }) => {
  const id = 1;
  return (
    <div>
      <h1>All Stats</h1>
      <h4>Pick a sub to edit</h4>
      <Link to={`/submissions/stats/${id}`}>Pick a sub's stats</Link>
    </div>
  );
}

export default StatsSelect;