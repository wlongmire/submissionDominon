//SUBMISSION FILTERING SORTING CONSTANTS
export default {
  HOME: {
    MAX_CLOSING_SUBMISSIONS: 3,
    MAX_WAITING_SUBMISSIONS: 3
  },
  SUB_LIST: {
    TITLE_MAX_WIDTH: 30,
    MAX_TAGS: 2,
    STATS: {
      ACCEPTED: "ACCEPTED",
      REJECTED: "REJECTED",
      WAITING: "WAITING",
      READY: "READY",
    },
    STATUS_FILTER: {
      NOT_STARTED: "NOT_STARTED",
      READY_TO_SUBMIT: "READY_TO_SUBMIT",
      SUBMITTED: "SUBMITTED",
      RETURNED: "RETURNED",
      ACCEPTED: "ACCEPTED",
      REJECTED: "REJECTED"
    },
    SORTING: {
      SUBMISSION: "SUBMISSION_SORT",
      RETURN: "RETURN_SORT",
      CLOSE: "CLOSE_SORT",
      TITLE: "TITLE_SORT",
    },
    DATE_RANGE_TYPE: {
      CREATED_AT: 'CREATED_AT',
      CLOSE: 'CLOSE',
      SUBMISSION: 'SUBMISSION',
      RETURNED: 'RETURNED'
    },
    DATE_RANGE_TYPE_TO_PROP: {
      CREATED_AT: 'createdAt',
      CLOSE: 'closeDate',
      SUBMISSION: 'submissionDate',
      RETURNED: 'returnDate'
    }
  }
}