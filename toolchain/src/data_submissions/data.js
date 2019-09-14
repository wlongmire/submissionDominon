import moment from 'moment';
import uuidv1 from 'uuid/v1';
import { createSubmission } from './../common/helper';

const randInt = (min, max) => (
  min + Math.floor(Math.random() * (max - min))
)

export default [
  createSubmission({ title: "Title A", status: "NOT_STARTED", closeDate: moment().add(1, 'days') }),
  createSubmission({ title: "Title B", status: "READY_TO_SUBMIT", closeDate: moment().add(3, 'days') }),
  createSubmission({ title: "Title C", status: "SUBMITTED", closeDate: moment().add(3, "week") }),
  createSubmission({ title: "Title D", status: "NOT_STARTED", closeDate: moment().add(1, "month") })
];