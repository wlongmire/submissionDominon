import moment from 'moment';
import submissions from './data';

export default (state = submissions, action) => {
  switch (action.type) {
    case ("ADD_SUB"):
      return [...state, {
        ...action.submission,
        status: "NOT_STARTED",
        accepted: null,
        submissionDate: null,
        returnDate: null,
        createdAt: moment(),
        tags: [],
        pieces: [],
      }];
    case ("REMOVE_SUB"):
      return state.filter(({ id }) => (id !== action.id));
    default:
      return state
  }
}