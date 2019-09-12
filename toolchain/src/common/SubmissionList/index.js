import React from 'react';
import { Link } from 'react-router-dom'

import SubItem from './SubItem'


const SubmissionList = ({ submissions }) => {
  return (
    <div>
      <div className="subItems">
        {
          submissions.map((item, idx) => (<SubItem key={idx} item={item} />))
        }
      </div>
    </div>
  );
}

export default SubmissionList;