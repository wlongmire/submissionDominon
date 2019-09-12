import moment from 'moment';
import uuidv1 from 'uuid/v1';

const randInt = (min, max) => (
  min + Math.floor(Math.random() * (max - min))
)

export default [
  {
    id: uuidv1(),
    title: "Title A",
    status: "NOT_STARTED",
    accepted: null,
    submissionDate: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(1, 'days'),
    tags: ["Poetry", "Black"],
    pieces: [],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title B",
    status: "READY_TO_SUBMIT",
    accepted: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    closeDate: moment().add(3, 'days'),
    submissionDate: null,
    pieces: ["piece 1"],
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title C",
    status: "SUBMITTED",
    accepted: null,
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    submissionDate: moment().add(randInt(1, 5), 'days'),
    closeDate: moment().add(3, "week"),
    pieces: ["piece 3", "piece 4"],
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  },
  {
    id: uuidv1(),
    title: "Title D",
    status: "NOT_STARTED",
    accepted: true,
    pieces: ["piece 3", "piece 4"],
    returnDate: null,
    createdAt: moment().subtract(randInt(1, 5), "day"),
    submissionDate: moment().add(1, 'month'),
    closeDate: moment().add(1, "month"),
    tags: ["Poetry", "Black"],
    submitURL: "https://www.google.com",
    journalURL: "https://www.theverge.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: []
  }
];