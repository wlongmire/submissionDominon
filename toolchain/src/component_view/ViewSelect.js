import React from 'react';
import { Link } from 'react-router-dom';

let ViewSelect = ({ match }) => {
  return (
    <div className="container">
      <h1>View</h1>
      <h4>Pick a sub to view</h4>
      <Link to={`/submissions/view/1`} >View Submission 1</Link>
    </div>
  );
}

export default ViewSelect;