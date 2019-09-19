import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SubItem from './SubItem'


const SubmissionList = ({ submissions, buttonType }) => {
  return (
    <div>
      <div className="subItems">
        {
          submissions.map((item, idx) => (<SubItem buttonType={buttonType} key={idx} item={item} />))
        }
      </div>
    </div>
  );
}

export default connect(({ submissions }) => {
  return ({
    submissions
  })
})(SubmissionList);