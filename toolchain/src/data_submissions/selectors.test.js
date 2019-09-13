import { isInDateRange, isStatus, filtering } from './selectors'

import CONSTANTS from './../common/constants'
import moment from 'moment'

const STATUSES = CONSTANTS.SUB_LIST.STATUS_FILTER;

const createSubmission = (submission) => {
  return ({
    id: 1,
    title: "Test Title",
    status: "NOT_STARTED",
    accepted: null,
    submissionDate: null,
    returnDate: null,
    createdAt: null,
    closeDate: null,
    tags: [],
    pieces: [],
    submitURL: "https://www.submitTest.com",
    journalURL: "https://www.journalTest.com",
    description: "Phasellus ullamcorper elementum dis adipiscing vestibulum torquent praesent varius placerat fames scelerisque condimentum ante tristique morbi ipsum natoque vestibulum porta donec parturient augue lacinia nascetur faucibus cum feugiat in.",
    log: [],
    ...submission
  })
}

describe("Submission Selector", () => {
  describe("isInDateRange", () => {
    test("should return true if CREATED_AT is between two dates", () => {
      const result = isInDateRange({
        createdAt: moment()
      },
        CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CREATED_AT,
        moment().subtract(1, 'week'),
        moment().add(1, 'week')
      )

      expect(result).toBe(true)
    });

    test("should return true if CLOSE is at the start date", () => {
      const result = isInDateRange(
        { closeDate: moment() },
        CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CLOSE,
        moment().subtract(1, 'week'),
        moment().add(1, 'week')
      )

      expect(result).toBe(true)
    });

    test("should return true if SUBMISSION is at the end date", () => {
      const result = isInDateRange({
        submissionDate: moment()
      },
        CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.SUBMISSION,
        moment().subtract(1, 'week'),
        moment()
      )

      expect(result).toBe(true)
    });

    test("should return false if RETURNED is out of range", () => {
      const result = isInDateRange({
        submission: moment()
      },
        CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.SUBMISSION,
        moment().add(1, 'week'),
        moment().add(2, 'week')
      )

      expect(result).toBe(false)
    })

  })


  describe("isStatus", () => {
    beforeAll(() => {
      const STATUSES = CONSTANTS.SUB_LIST.STATUS_FILTER;
    })

    test("should return true if status matches single submission", () => {
      const result = isStatus({
        status: STATUSES.NOT_STARTED
      },
        STATUSES.NOT_STARTED
      )

      expect(result).toBe(true);
    })

    test("should return true if status matches submission within a list", () => {
      const result = isStatus({
        status: STATUSES.NOT_STARTED
      },
        [STATUSES.NOT_STARTED, STATUSES.SUBMITTED]
      )

      expect(result).toBe(true);
    })

    test("should return false if status does not match a single submission", () => {
      const result = isStatus({
        status: STATUSES.READY_TO_SUBMIT
      },
        STATUSES.NOT_STARTED
      )

      expect(result).toBe(false);
    })

    test("should return false if status does not match submission within a list", () => {
      const result = isStatus({
        status: STATUSES.NOT_STARTED
      },
        [STATUSES.SUBMITTED, STATUSES.READY_TO_SUBMIT]
      )
      expect(result).toBe(false);
    })
  })

  describe("filtering", () => {
    test("should filter by text against title and description", () => {
      const submissions = [
        createSubmission({ title: "key 1" }),
        createSubmission({ title: "no match" }),
        createSubmission({ title: "some key 2" }),
        createSubmission({ description: "some key 2" }),
        createSubmission({ description: "no match" })
      ];

      const result = filtering(submissions, { text: 'key' });
      expect(result.length).toBe(3);
    })

    test("should filter by tag given a list of potential tags", () => {
      const submissions = [
        createSubmission({ tags: ['tag1'] }),
        createSubmission({ tags: ['tag1', 'tag2'] }),
        createSubmission({ tags: ['tag3', 'tag2'] }),
        createSubmission({ tags: ['tag2'] }),
        createSubmission({ tags: ['tag3'] })
      ];


      const result = filtering(submissions, { tags: ['tag1'] });
      expect(result.length).toBe(2);
    })

    //   test("should filter by status", () => {

    //   })

    //   test("should filter by date for closing", () => {

    //   })

    //   test("should filter by date for submission", () => {

    //   })

    //   test("should filter by date for returning", () => {

    //   })

    //   test("should sort a list of submissions by closing date", () => {

    //   })

    //   test("should sort a list of submissions by return date", () => {

    //   })

    //   test("should correct sort a list of submissions by closing date", () => {

    //   })
  })
})
