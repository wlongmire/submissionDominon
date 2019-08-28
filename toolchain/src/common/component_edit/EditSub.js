import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let EditSub = (props) => {
  let { id } = props.match.params;

  return (<div className="container">
    <h1>{`Editing Sub: ${id}`}</h1>
    <Link to="/edit">Back to all Subs</Link>
  </div>);
}

export default EditSub;