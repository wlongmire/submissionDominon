import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let ViewSub = ({ id }) => {
  return (<div className="container">
    <h1>{`Viewing Sub: ${id}`}</h1>
    <Link to={`/submissions/edit/${id}`}>Edit</Link><br />
    <Link to="/submissions/view">Back to all Subs</Link>
  </div>);
}

export default ViewSub;