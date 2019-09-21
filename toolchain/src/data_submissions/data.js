import moment from 'moment';
import uuidv1 from 'uuid/v1';
import { createSubmission } from './../common/helper';

const randInt = (min, max) => (
  min + Math.floor(Math.random() * (max - min))
)

export default [
  createSubmission({ title: "Ploughshares", journalURL: "https://www.pshares.org/", submitURL: "https://www.pshares.org/submission-manager", status: "NOT_STARTED", tags: ["Poetry", "Contest", "Print Version", "High Volume"], closeDate: moment().add(1, 'days') }),
  createSubmission({ title: "The Operating System", journalURL: "http://www.theoperatingsystem.org/", submitURL: " https://theoperatingsystem.submittable.com/submit", status: "READY_TO_SUBMIT", tags: ["Poetry", "Prose", "Visual Poetry", "Experimential", "Manuscript"], closeDate: moment().add(3, 'days') }),
  createSubmission({ title: "Prolit", journalURL: "https://www.prolitmag.com", submitURL: "https://www.prolitmag.com/submit", status: "NOT_STARTED", tags: ["Poetry", "Art", "Labor", "Local"], closeDate: moment().add(2, "month"), submissionDate: moment().subtract(2, "week") }),
  createSubmission({ title: "The Watering Hole", journalURL: "https://twhpoetry.org/", submitURL: "https://twhpoetry.submittable.com/submit", status: "SUBMITTED", tags: ["Poetry", "Black Focus", "Retreat"], closeDate: moment().add(3, "week"), submissionDate: moment().subtract(1, "week") }),
  createSubmission({ title: "Gravitron", journalURL: "https://twhpoetry.org/", submitURL: "https://twhpoetry.submittable.com/submit", status: "SUBMITTED", tags: ["Poetry", "Sci Fi", "Retreat"], closeDate: moment().add(3, "week"), submissionDate: moment().subtract(3, "month") })
];