import React from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';

let NewDetails = () => {
  let newId = 2;

  return (
    <div className="container">
      <h1>Details</h1>
      <Link to={`/edit/${newId}`}>Edit</Link>
    </div>
  );
}

export default NewDetails;