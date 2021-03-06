import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';

import CONSTANTS from './../common/constants'
import { filtering } from './../data_submissions/selectors'

import SubmissionList from './../common/SubmissionList';

let EditSelect = ({ submissions }) => {
  const id = 1;

  return (
    <div>
      <h1>Edit</h1>
      <SubmissionList submissions={submissions} />
      <Link to={`/submissions/edit/${id}`}>Pick a sub to edit</Link>
    </div>
  )
}

export default connect(({ submissions }) => {
  const filteredSubs = filtering(submissions, {})

  return {
    submissions: filteredSubs
  }
})(EditSelect)