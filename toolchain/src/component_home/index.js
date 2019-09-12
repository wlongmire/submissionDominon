import React from 'react';
import { Link } from 'react-router-dom';

import SubmissionList from './../common/SubmissionList';
import InfoSection from './InfoSection';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container fullscreen">
        <div className="row">

          <div className="col-sm-12 col-md-5 mt-2">
            <SubmissionList />
            <div className="text-center">
              <Link to="/submissions/view">See All Submissions</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 mt-2">
            <InfoSection />
          </div>
        </div>
      </div>
    );
  }
}