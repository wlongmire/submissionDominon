import { addSub, removeSub } from './actions'
import moment from 'moment';

describe("Submission Actions", () => {
  describe("AddSub", () => {
    test('should correctly setup add submission action object', () => {
      const submission = {
        title: "Test Title",
        closeDate: moment(),
        submitURL: "http://www.submit.org",
        journalURL: "http://www.journal.org",
        description: "Nulla dolor a primis adipiscing posuere a vestibulum."
      }
      const actionObj = addSub(submission);

      expect(actionObj).toEqual({
        type: "ADD_SUB",
        submission: {
          id: expect.any(String),
          ...submission
        }
      })
    })
  })

  describe("RemoveSub", () => {
    test('should correctly setup remove submission action object', () => {
      const actionObj = removeSub(1);

      expect(actionObj).toEqual({
        type: "REMOVE_SUB",
        id: 1
      })
    })
  })
})