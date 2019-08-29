import moment from 'moment';
import uuidv1 from 'uuid/v1';

const randInt = (min, max) => (
  min + Math.floor(Math.random() * (max - min))
)

export default [
  {
    id: uuidv1(),
    title: "Title 1",
    status: "NOT_STARTED",
    accepted: null,
    submissionDate: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(randInt(1, 5), 'days'),
    tags: ["Poetry", "Black"],
    pieces: [],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title 2",
    status: "READY_TO_SUBMIT",
    accepted: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(randInt(1, 5), 'days'),
    submissionDate: null,
    pieces: ["title 1", "title 2", "title 3"],
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title 3",
    status: "SUBMITTED",
    accepted: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(randInt(1, 5), 'days'),
    submissionDate: moment().subtract(2, "week"),
    pieces: ["title 3", "title 4"],
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title 4",
    status: "RETURNED",
    accepted: true,
    pieces: ["title 3", "title 4"],
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(randInt(1, 5), 'days'),
    submissionDate: moment().subtract(2, "week"),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title 5",
    status: "RETURNED",
    accepted: false,
    pieces: ["title 3", "title 4"],
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(randInt(1, 5), 'days'),
    submissionDate: moment().subtract(2, "week"),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  }
];