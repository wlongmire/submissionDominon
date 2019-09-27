
import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CONSTANTS from './../common/constants'
import { filtering, getStats } from './../data_submissions/selectors'

import SubmissionList from './../common/SubmissionList'
import InfoSection from './InfoSection'

import './style.css'

const Home = function ({ closingSubmissions, waitingSubmissions, information }) {
  return (
    <div className="row">

      <div id="submissionViews" className="col-sm-12 col-md-5 mt-2">
        <div className="view">
          <h2>Closing Soon</h2>
          <SubmissionList type="closeItem" submissions={closingSubmissions.slice(0, CONSTANTS.HOME.MAX_CLOSING_SUBMISSIONS)} />
          {
            (closingSubmissions.length > CONSTANTS.HOME.MAX_CLOSING_SUBMISSIONS) && (
              <div className="text-center">
                <Link to="/submissions/view">See All Closing Submissions</Link>
              </div>
            )
          }
        </div>

        <div className="view">
          <h2>Waiting For a Response</h2>
          <SubmissionList type="waitItem" submissions={waitingSubmissions.slice(0, CONSTANTS.HOME.MAX_WAITING_SUBMISSIONS)} />
          {
            (closingSubmissions.length > CONSTANTS.HOME.MAX_WAITING_SUBMISSIONS) && (
              <div className="text-center">
                <Link to="/submissions/view">See All Out Submissions</Link>
              </div>
            )
          }
        </div>

      </div>

      <div id="informationViews" className="col-sm-12 col-md-7 mt-2">
        <div className="view">
          <h2>Stats and Information</h2>
          <InfoSection information={information} />
        </div>
      </div>
    </div>
  );
}


export default connect(({ submissions }) => {
  const closingSubmissions = filtering(submissions, {
    filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CLOSE,
    startDate: moment(),
    endDate: moment().add(1, "month"),
    status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT,
    sortBy: CONSTANTS.SUB_LIST.SORTING.CLOSE
  })

  const waitingSubmissions = filtering(submissions, {
    status: [CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED],
    sortBy: CONSTANTS.SUB_LIST.SORTING.SUBMISSION
  })

  const information = [
    {
      title: "accepted",
      amount: getStats(submissions, { type: CONSTANTS.SUB_LIST.STATS.ACCEPTED })
    },
    {
      title: "rejected",
      amount: getStats(submissions, { type: CONSTANTS.SUB_LIST.STATS.REJECTED })
    },
    {
      title: "waiting",
      amount: getStats(submissions, { type: CONSTANTS.SUB_LIST.STATS.WAITING })
    },
    {
      title: "ready",
      amount: getStats(submissions, { type: CONSTANTS.SUB_LIST.STATS.READY })
    }
  ]

  return {
    closingSubmissions,
    waitingSubmissions,
    information
  }
})(Home)