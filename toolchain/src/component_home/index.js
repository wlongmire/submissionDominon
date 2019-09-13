import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CONSTANTS from './../common/constants'
import { filtering } from './../data_submissions/selectors'

import SubmissionList from './../common/SubmissionList'
import InfoSection from './InfoSection'

const MAX_CLOSING_SUBMISSIONS = 3;
const MAX_WAITING_SUBMISSIONS = 3;

class Home extends React.Component {
  render() {
    const { closingSubmissions, waitingSubmissions } = this.props;

    return (
      <div className="container fullscreen">
        <div className="row">

          <div className="col-sm-12 col-md-5 mt-2">
            <div>
              <h2>Closing This Month: {closingSubmissions.length} Sources</h2>
              <SubmissionList submissions={closingSubmissions.slice(0, MAX_CLOSING_SUBMISSIONS)} />
              {
                (closingSubmissions.length > MAX_CLOSING_SUBMISSIONS) && (
                  <div className="text-center">
                    <Link to="/submissions/view">See All Closing Submissions</Link>
                  </div>
                )
              }
            </div>

            <div>
              <h2>Waiting For a Response: {waitingSubmissions.length} Sources</h2>
              <SubmissionList submissions={waitingSubmissions.slice(0, MAX_WAITING_SUBMISSIONS)} />
              {
                (closingSubmissions.length > MAX_WAITING_SUBMISSIONS) && (
                  <div className="text-center">
                    <Link to="/submissions/view">See All Out Submissions</Link>
                  </div>
                )
              }
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

export default connect(({ submissions }) => {
  const closingSubmissions = filtering(submissions, {
    filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CLOSE,
    startDate: moment(),
    endDate: moment().add(1, "month"),
    status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT
  })

  const waitingSubmissions = filtering(submissions, {
    status: [CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED, CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT, CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED]
  })

  return {
    closingSubmissions,
    waitingSubmissions
  }
})(Home)