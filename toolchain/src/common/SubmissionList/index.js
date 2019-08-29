import React from 'react';
import { Link } from 'react-router-dom';
import SubItem from './SubItem';
import { connect } from 'react-redux';

class SubmissionList extends React.Component {
  render() {
    let { submissions, title } = this.props;

    return (
      <div>
        <h4 className="border-bottom">Upcoming Submissions</h4>

        <div className="subItems">
          {
            submissions.map((item, idx) => (<SubItem key={idx} item={item} />))
          }
        </div>
      </div>
    );
  }
}

export default connect(({ submissions }) => {
  return {
    submissions
  }
})(SubmissionList);