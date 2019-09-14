import reducer from './reducer';
import CONSTANTS from './../common/constants';
import submissions from './data';
import { createSubmission } from '../common/helper';

describe("Submission Selector", () => {
  test('should return default submission values', () => {
    const result = reducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(submissions)
  })

  describe("ADD_SUB Action", () => {
    test('should add a submission with default values when a ADD_SUB action is called', () => {
      const submission = createSubmission();

      const result = reducer([], { type: 'ADD_SUB', submission });
      expect(result).toEqual([submission])
    })

    test('should add a submission with passed values when a ADD_SUB action is called', () => {
      const submission = createSubmission({ title: "Journal X", status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED });
      const result = reducer([], { type: 'ADD_SUB', submission });
      expect(result).toEqual([submission])
    })
  });

  describe("REMOVE_SUB Action", () => {
    test('should remove a submission when a REMOVE_SUB action is called with matching id', () => {
      const submissions = [
        createSubmission({ id: "1" })
      ];

      const result = reducer(submissions, { type: 'REMOVE_SUB', id: "1" });
      expect(result).toEqual([])
    })

    test('should remove nothing when a REMOVE_SUB action is called with a non-matching id', () => {
      const submissions = [
        createSubmission({ id: "1" })
      ];

      const result = reducer(submissions, { type: 'REMOVE_SUB', id: "2" });
      expect(result).toEqual(submissions)
    })
  });
})