import { isInDateRange, isStatus, filtering } from './selectors'

import CONSTANTS from './../common/constants'
import moment from 'moment'

describe("Submission Selector", () => {
  describe("isInDateRange", () => {
    test("should return true if CREATED_AT is between two dates", () => {

    })

    test("should return true if CLOSE is at the start date", () => {

    })

    test("should return true if SUBMISSION is at the end date", () => {

    })

    test("should return false if RETURNED is out of range", () => {

    })
  })

  describe("isStatus", () => {
    test("should return true if status matches single submission", () => {

    })

    test("should return true if status matches submission within a list", () => {

    })

    test("should return false if status does not match a single submission", () => {

    })

    test("should return false if status does not match submission within a list", () => {

    })

    test("should throw error if a Numerical data type is passed in for status", () => {

    })
  })

  describe("filtering", () => {
    test("should filter by text against title and description", () => {

    })

    test("should filter by tag given a list of potential tags", () => {

    })

    test("should filter by status", () => {

    })

    test("should filter by date for closing", () => {

    })

    test("should filter by date for submission", () => {

    })

    test("should filter by date for returning", () => {

    })

    test("should sort a list of submissions by closing date", () => {

    })

    test("should sort a list of submissions by return date", () => {

    })

    test("should correct sort a list of submissions by closing date", () => {

    })
  })
})