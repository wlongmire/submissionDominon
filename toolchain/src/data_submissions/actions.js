import uuidv from 'uuid/v1';

//action generators
export const addSub = ({ id = uuidv(), title, closeDate, submitURL, journalURL, description }) => ({
  type: "ADD_SUB",
  submission: {
    id, title, closeDate, submitURL, journalURL, description
  }
});

export const removeSub = (id) => ({
  type: "REMOVE_SUB",
  id
});