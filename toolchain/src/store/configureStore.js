import { createStore, combineReducers } from 'redux';

import submissionReducer from './../data_submissions/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      submissions: submissionReducer
    })
  );

  store.subscribe(() => {

  });

  return store;
};