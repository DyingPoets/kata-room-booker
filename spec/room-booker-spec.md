# Meeting Room Booker — Original Specification
**Version:** 1.0
**Date:** [6 weeks before session date]
**Status:** Approved

---

## Scope

A simple meeting room booking system for a single office (12 rooms).

## Functional Requirements

1. **Search:** User can search available rooms by date, time range, and capacity
2. **Booking:** User can book an available room for a specific time slot
3. **Conflict prevention:** System must prevent double-booking of the same room
4. **Confirmation:** User receives on-screen confirmation with booking reference
5. **Cancellation:** User can cancel their own bookings up to 30 minutes before start
6. **View bookings:** User can view their upcoming bookings

## Non-Functional Requirements

- Booking must complete in under 2 seconds
- Must work in Chrome, Firefox, Safari (latest 2 versions)
- No mobile support required (internal tool, desktop only)

## Out of Scope (explicitly)

- Recurring bookings
- Room equipment requirements (projector, whiteboard, etc.)
- Email notifications
- Admin management of rooms
- Catering requests
