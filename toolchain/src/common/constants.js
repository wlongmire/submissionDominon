//SUBMISSION FILTERING SORTING CONSTANTS
export default {
  SUB_LIST: {
    STATUS_FILTER: {
      NOT_STARTED: "NOT_STARTED",
      READY_TO_SUBMIT: "READY_TO_SUBMIT",
      SUBMITTED: "SUBMITTED",
      RETURNED: "RETURNED"
    },
    SORTING: {
      SUBMISSION: "SUBMISSION_SORT",
      RETURN: "RETURN_SORT",
      CLOSE: "CLOSE_SORT",
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