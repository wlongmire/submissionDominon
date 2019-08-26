import moment from 'moment';
import uuidv1 from 'uuid/v1';

export default [
  {
    id: uuidv1(),
    title: "Title 1",
    closeDate: moment().add(1, 'days'),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com"
  },
  {
    id: uuidv1(),
    title: "Title 2",
    closeDate: moment().add(2, 'days'),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com"
  },
  {
    id: uuidv1(),
    title: "Title 3",
    closeDate: moment().add(3, 'days'),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com"
  }
];