import uuidv1 from 'uuid/v1';

//action generators
export const addSub = ({ title, closeDate, submitURL, journalURL, description }) => ({
  type: "ADD_SUB",
  submission: {
    id: uuidv1(), title, closeDate, submitURL, journalURL, description
  }
});

export const removeSub = (id) => ({
  type: "REMOVE_SUB",
  id
});