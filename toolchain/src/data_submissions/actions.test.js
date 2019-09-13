import { addSub, removeSub } from './actions'
import moment from 'moment';

test('should correctly setup add submission action object', () => {
  const submission = {
    id: 1,
    title: "Test Title",
    closeDate: moment(),
    submitURL: "http://www.submit.org",
    journalURL: "http://www.journal.org",
    description: "Nulla dolor a primis adipiscing posuere a vestibulum."
  }
  const actionObj = addSub(submission);

  expect(actionObj).toEqual({
    type: "ADD_SUB",
    submission
  })
})

test('should correctly setup remove submission action object', () => {
  const actionObj = removeSub(1);

  expect(actionObj).toEqual({
    type: "REMOVE_SUB",
    id: 1
  })
})