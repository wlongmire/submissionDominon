import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let EditSub = (props) => {
  const { id } = props;

  return (<div className="container">
    <h1>{`Editing Sub: ${id}`}</h1>
    <Link to="/submissions/edit">Back to all Subs</Link>
  </div>);
}

export default EditSub;