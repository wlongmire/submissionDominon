import moment from 'moment'

const createSubmission = (submission) => {
  return ({
    id: 1,
    title: "Test Title",
    status: "NOT_STARTED",
    accepted: null,
    submissionDate: null,
    returnDate: null,
    closeDate: null,
    createdAt: moment(),
    tags: [],
    pieces: [],
    submitURL: "https://www.submitTest.com",
    journalURL: "https://www.journalTest.com",
    description: "description text",
    log: [],
    ...submission
  })
}

export {
  createSubmission
}