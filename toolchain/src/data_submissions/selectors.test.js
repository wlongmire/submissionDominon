import { isInDateRange, isStatus, filtering, getStats } from './selectors'

import CONSTANTS from './../common/constants'
import { createSubmission } from './../common/helper'
import moment from 'moment'

const STATUSES = CONSTANTS.SUB_LIST.STATUS_FILTER;


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

    test("should filter for a single status ", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED })
      ];

      const result = filtering(submissions, { status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED });
      expect(result.length).toBe(2);
    })

    test("should filter for a list of statuses", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED })
      ];

      const result = filtering(submissions, { status: [CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED, CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT] });
      expect(result.length).toBe(3);
    })

    test("should filter by date for closing", () => {
      const submissions = [
        createSubmission({ closeDate: moment('2016-01-01') }),
        createSubmission({ closeDate: moment('2016-01-01') }),
        createSubmission({ closeDate: moment('2016-01-01').add(1, 'week') }),
        createSubmission({ closeDate: moment('2016-01-01').add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CLOSE,
        startDate: moment('2016-01-01'),
        endDate: moment('2016-01-01').add(1, 'day')
      });

      expect(result.length).toBe(2);
    })

    test("should filter by date for submission", () => {
      const submissions = [
        createSubmission({ submissionDate: moment('2016-01-01') }),
        createSubmission({ submissionDate: moment('2016-01-01') }),
        createSubmission({ submissionDate: moment('2016-01-01').add(1, 'week') }),
        createSubmission({ submissionDate: moment('2016-01-01').add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.SUBMISSION,
        startDate: moment('2016-01-01'),
        endDate: moment('2016-01-01').add(1, 'day')
      });

      expect(result.length).toBe(2);
    })

    test("should filter by date for returning", () => {
      const submissions = [
        createSubmission({ returnDate: moment('2016-01-01') }),
        createSubmission({ returnDate: moment('2016-01-01') }),
        createSubmission({ returnDate: moment('2016-01-01').add(1, 'week') }),
        createSubmission({ returnDate: moment('2016-01-01').add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.RETURNED,
        startDate: moment('2016-01-01'),
        endDate: moment('2016-01-01').add(1, 'day')
      });

      expect(result.length).toBe(2);
    })

    test("should sort a list of submissions by closing date", () => {
      const submissions = [
        createSubmission({ closeDate: moment('2016-01-01') }),
        createSubmission({ closeDate: moment('2016-01-01') }),
        createSubmission({ closeDate: moment('2016-01-01').add(1, 'week') }),
        createSubmission({ closeDate: moment('2016-01-01').add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        filterDateType: CONSTANTS.SUB_LIST.DATE_RANGE_TYPE.CLOSE,
        startDate: moment('2016-01-01'),
        endDate: moment('2016-01-01').add(1, 'day')
      });

      expect(result.length).toBe(2);
    })

    test("should sort a list of submissions by return date", () => {
      const submissions = [
        createSubmission({ title: "A", returnDate: moment().add(1, 'day') }),
        createSubmission({ title: "B", returnDate: moment() }),
        createSubmission({ title: "C", returnDate: moment().add(3, 'week') }),
        createSubmission({ title: "D", returnDate: moment().add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        sortBy: CONSTANTS.SUB_LIST.SORTING.RETURN
      });

      expect(result.map(r => r.title)).toEqual(["B", "A", "D", "C"])
    })

    test("should sort a list of submissions by closing date", () => {
      const submissions = [
        createSubmission({ title: "A", closeDate: moment().add(1, 'day') }),
        createSubmission({ title: "B", closeDate: moment() }),
        createSubmission({ title: "C", closeDate: moment().add(3, 'week') }),
        createSubmission({ title: "D", closeDate: moment().add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        sortBy: CONSTANTS.SUB_LIST.SORTING.CLOSE
      });

      expect(result.map(r => r.title)).toEqual(["B", "A", "D", "C"])
    })

    test("should sort a list of submissions by submission date", () => {
      const submissions = [
        createSubmission({ title: "A", submissionDate: moment().add(1, 'day') }),
        createSubmission({ title: "B", submissionDate: moment() }),
        createSubmission({ title: "C", submissionDate: moment().add(3, 'week') }),
        createSubmission({ title: "D", submissionDate: moment().add(2, 'week') }),
      ];

      const result = filtering(submissions, {
        sortBy: CONSTANTS.SUB_LIST.SORTING.SUBMISSION
      });

      expect(result.map(r => r.title)).toEqual(["B", "A", "D", "C"])
    })

    test("should sort a list of submissions by title", () => {
      const submissions = [
        createSubmission({ title: "D" }),
        createSubmission({ title: "C" }),
        createSubmission({ title: "A" }),
        createSubmission({ title: "B" }),
      ];

      const result = filtering(submissions, {
        sortBy: CONSTANTS.SUB_LIST.SORTING.TITLE
      });

      expect(result.map(r => r.title)).toEqual(["A", "B", "C", "D"])
    })

    test("should not sort / list by createdAt by default", () => {
      const submissions = [
        createSubmission({ title: "D" }),
        createSubmission({ title: "C" }),
        createSubmission({ title: "A" }),
        createSubmission({ title: "B" }),
      ];

      const result = filtering(submissions, {});
      expect(result.map(r => r.title)).toEqual(["D", "C", "A", "B"])
    })
  })

  describe("getStats", () => {
    test("should get total acceptances", () => {
      const submissions = [
        createSubmission({ accepted: true }),
        createSubmission({ accepted: true }),
        createSubmission({ accepted: false }),
        createSubmission({ accepted: false }),
        createSubmission({ accepted: true })
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.ACCEPTED,
        submissions
      });
      expect(result).toBe(3);
    })

    test("should get total acceptances between two dates", () => {
      const submissions = [
        createSubmission({ accepted: true, returnDate: moment().add(1, 'day') }),
        createSubmission({ accepted: true, returnDate: moment().add(2, 'month') }),
        createSubmission({ accepted: false, returnDate: moment() }),
        createSubmission({ accepted: false, returnDate: moment() }),
        createSubmission({ accepted: true, returnDate: moment().add(2, 'week') })
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.ACCEPTED,
        submissions,
        startDate: moment(),
        endDate: moment().add(1, 'month')
      });
      expect(result).toBe(2);
    })

    test("should get total rejections", () => {
      const submissions = [
        createSubmission({ accepted: true }),
        createSubmission({ accepted: true }),
        createSubmission({ accepted: false }),
        createSubmission({ accepted: false }),
        createSubmission({ accepted: true })
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.REJECTED,
        submissions
      });
      expect(result).toBe(2);
    })

    test("should get total rejections between two dates", () => {
      const submissions = [
        createSubmission({ accepted: true }),
        createSubmission({ accepted: false, returnDate: moment().add(1, 'day') }),
        createSubmission({ accepted: false, returnDate: moment().add(1, 'week') }),
        createSubmission({ accepted: false, returnDate: moment().add(2, 'month') }),
        createSubmission({ accepted: true })
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.REJECTED,
        submissions,
        startDate: moment(),
        endDate: moment().add(1, 'month')
      });
      expect(result).toBe(2);
    })

    test("should get total waiting", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.WAITING,
        submissions
      });
      expect(result).toBe(2);
    })

    test("should get total waiting between two dates", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED, submissionDate: moment(1, 'day') }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED, submissionDate: moment() }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED, submissionDate: moment() }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED, submissionDate: moment(2, 'weeks') }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.SUBMITTED, submissionDate: moment(2, 'months') }),
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.WAITING,
        submissions,
        startDate: moment(),
        endDate: moment(1, 'month')
      });
      expect(result).toBe(2);
    })

    test("should get total ready to submit", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.READY,
        submissions
      });

      expect(result).toBe(2);
    })

    test("should get total ready to submit between two dates", () => {
      const submissions = [
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT, closeDate: moment(1, 'day') }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.NOT_STARTED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT, closeDate: moment(1, 'week') }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.READY_TO_SUBMIT, closeDate: moment(2, 'month') }),
        createSubmission({ status: CONSTANTS.SUB_LIST.STATUS_FILTER.RETURNED }),
      ];

      const result = getStats({
        type: CONSTANTS.SUB_LIST.STATS.READY,
        submissions,
        startDate: moment(),
        endDate: moment(1, 'month')
      });
      expect(result).toBe(2);
    })
  })
})
