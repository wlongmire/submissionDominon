
export default (submissions, { sortBy, text, tag, status, startDate, endData }) => {
  return submissions.filter((submission) => {
    const statusMatch = status ? submission.status === status : true
    return statusMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case ("SUBMISSION_SORT"):
        return a.submissionDate > b.submissionDate ? 1 : -1
      case ("RETURN_SORT"):
        return a.returnDate > b.returnDate ? 1 : -1
      case ("CLOSE_SORT"):
        return a.closeDate > b.closeDate ? 1 : -1
    }
    return a.title > b.title ? 1 : -1
  });
}