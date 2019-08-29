import React from 'react';
import { Link } from 'react-router-dom';

import SubmissionList from './../common/SubmissionList';

let EditSelect = ({ match }) => {
  const id = 1;

  return (
    <div className="container">
      <h1>Edit</h1>
      <SubmissionList />
      <Link to={`/submissions/edit/${id}`}>Pick a sub to edit</Link>
    </div>
  );
}

export default EditSelect;