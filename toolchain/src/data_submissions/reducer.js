import moment from 'moment';
import submissions from './data';
import uuidv1 from 'uuid/v1';

export default (state = submissions, action) => {
  switch (action.type) {
    case ("ADD_SUB"):
      return [...state, action.submission];
    case ("REMOVE_SUB"):
      return state.filter(({ id }) => (id !== action.id));
    default:
      return state
  }
}