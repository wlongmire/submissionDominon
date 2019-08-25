import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let NewBasics = () => {
  return (
    <div className="container">
      <h1>Basics</h1>
      <Link to={`/new/details`}>Details</Link>
    </div>
  );
}

export default NewBasics;