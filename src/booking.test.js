/**
 * Room Booker — Unit Tests (STUBS)
 *
 * Write tests that encode the CORRECT behaviour from the spec.
 * Test names should read like requirements.
 * Each test: one assertion, clear failure message.
 *
 * Run with: npx jest booking.test.js
 */

import { BookingSystem } from './booking.js'

describe('BookingSystem', () => {

  let system

  beforeEach(() => {
    system = new BookingSystem()
  })

  // Happy path
  it('returns confirmed booking reference when room is available', () => {
    // TODO
  })

  // Double-booking prevention
  it('prevents booking a room that is already booked for the same time slot', () => {
    // TODO
  })

  // Capacity filter
  it('does not return rooms below the requested capacity', () => {
    // TODO
  })

  // Cancellation window
  it('allows cancellation more than 30 minutes before start', () => {
    // TODO
  })

  it('prevents cancellation within 30 minutes of start time', () => {
    // TODO
  })

  // Own bookings only
  it('prevents a user from cancelling another user\'s booking', () => {
    // TODO
  })

  // Time zone edge case — add your own based on the drift you find
  it('', () => {
    // TODO
  })
})
