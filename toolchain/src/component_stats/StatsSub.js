import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let StatsSub = ({ id }) => {
  return (
    <div className="container">
      <h1>{`StatsSub ${id}`}</h1>
    </div>
  );
}

export default StatsSub;