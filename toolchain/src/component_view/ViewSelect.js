import React from 'react';
import { Link } from 'react-router-dom';
import SubmissionList from './../common/SubmissionList';

let ViewSelect = ({ match }) => {
  return (
    <div className="container">
      <h1>View</h1>
      <SubmissionList title="viewSelection" />
      <Link to={`/submissions/view/1`} >View Submission 1</Link>
    </div>
  );
}

export default ViewSelect;