import uuidv1 from 'uuid/v1';

//action generators
export const addSub = ({ title, closeDate, tags, submitURL, journalURL }) => ({
  type: "ADD_SUB",
  submission: {
    id: uuidv1(), title, closeDate, tags, submitURL, journalURL
  }
});

export const removeSub = (id) => ({
  type: "REMOVE_SUB",
  id
});