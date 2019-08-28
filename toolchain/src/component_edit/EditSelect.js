import React from 'react';
import { Link } from 'react-router-dom';

let EditSelect = ({ match }) => {
  const id = 1;

  return (
    <div className="container">
      <h1>Edit</h1>
      <h4>Pick a sub to edit</h4>
      <Link to={`/submissions/edit/${id}`}>Pick a sub to edit</Link>
    </div>
  );
}

export default EditSelect;