import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SubItemWait from './SubItem/SubItemWait'
import SubItemClose from './SubItem/SubItemClose'

const getSubItem = function (type, idx, item) {
  const subItems = {
    'closeItem': <SubItemClose key={idx} item={item} />,
    'waitItem': <SubItemWait key={idx} item={item} />
  }

  return (subItems[type]);
}

const SubmissionList = ({ submissions, type }) => {
  return (
    <div>
      <div className="subItems">
        {
          submissions.map((item, idx) => (getSubItem(type, idx, item)))
        }
      </div>
    </div>
  );
}

export default SubmissionList;