import CONSTANTS from './../common/constants'

const isInDateRange = (submission, filterDateType, startDate, endDate) => {
  const keyDate = submission[
    CONSTANTS.SUB_LIST.DATE_RANGE_TYPE_TO_PROP[filterDateType]
  ]

  return startDate <= keyDate && keyDate <= endDate
}

const isStatus = (submission, status) => {
  if (typeof status == "string")
    return status === submission.status
  else if (Array.isArray(status))
    return status.indexOf(submission.status) !== -1
  else
    throw "Status Parameter is not of an approved type."
}

const filtering = (submissions, { sortBy, text, tags, status, startDate, endDate, filterDateType }) => {
  return submissions.filter((submission) => {

    const textMatch = text ? (submission.title.indexOf(text) !== -1 || submission.description.indexOf(text) !== -1) : true
    const tagMatch = tags ? (submission.tags.filter(tag => tags.includes(tag)).length > 0) : true
    const statusMatch = status ? isStatus(submission, status) : true
    const filterDate = filterDateType ? isInDateRange(submission, filterDateType, startDate, endDate) : true

    return statusMatch && filterDate && textMatch && tagMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case (CONSTANTS.SUB_LIST.SORTING.SUBMISSION):
        return a.submissionDate > b.submissionDate ? 1 : -1
      case (CONSTANTS.SUB_LIST.SORTING.RETURN):
        return a.returnDate > b.returnDate ? 1 : -1
      case (CONSTANTS.SUB_LIST.SORTING.CLOSE):
        return a.closeDate > b.closeDate ? 1 : -1
      case (CONSTANTS.SUB_LIST.SORTING.TITLE):
        return a.title > b.title ? 1 : -1
    }

    return a.createdAt > b.createdAt ? 1 : -1
  });
}

const getStats = ({ type, submissions, startDate, endDate }) => {
  console.log(submissions)
  return (null);
}

export {
  filtering,
  isInDateRange,
  isStatus,
  getStats
}