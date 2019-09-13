import CONSTANTS from './../common/constants'

const isInDateRange = (submission, filterDateType, startDate, endDate) => {
  const keyDate = submission[
    CONSTANTS.SUB_LIST.DATE_RANGE_TYPE_TO_PROP[filterDateType]
  ]

  return startDate <= keyDate && keyDate <= endDate
}

const isStatus = (submission, status) => {
  if (String.isString(submission.status))
    return submission.status.find(status)
  else if (Array.isArray(submission.status))
    return submission.status === status
  else
    throw "Status Parameter is not of an approved type."
}

const filtering = (submissions, { sortBy, text, tag, status, startDate, endDate, filterDateType }) => {
  return submissions.filter((submission) => {
    const statusMatch = status ? isStatus : true
    const filterDate = filterDateType ? isInDateRange(submission, filterDateType, startDate, endDate) : true

    return statusMatch && filterDate
  }).sort((a, b) => {
    switch (sortBy) {
      case (CONSTANTS.SUB_LIST.SORTING.SUBMISSION):
        return a.submissionDate > b.submissionDate ? 1 : -1
      case (CONSTANTS.SUB_LIST.SORTING.RETURN):
        return a.returnDate > b.returnDate ? 1 : -1
      case (CONSTANTS.SUB_LIST.SORTING.CLOSE):
        return a.closeDate > b.closeDate ? 1 : -1
    }
    return a.title > b.title ? 1 : -1
  });
}

export default {
  filtering,
  isInDateRange,
  isStatus
}