import { createStore, combineReducers } from 'redux';

import submissionReducer from './../data_submissions/reducer';
import infoReducer from './../data_information/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      submissions: submissionReducer,
      information: infoReducer
    })
  );

  store.subscribe(() => {
    console.log("current store: ", store.getState());
  });

  return store;
};