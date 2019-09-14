import moment from 'moment';
import { createSubmission } from './../common/helper'
import submissions from './data';

export default (state = submissions, action) => {
  switch (action.type) {
    case ("ADD_SUB"):
      return [...state, createSubmission(action.submission)]
    case ("REMOVE_SUB"):
      return state.filter(({ id }) => (id !== action.id));
    default:
      return state
  }
}