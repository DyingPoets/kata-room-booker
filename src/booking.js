/**
 * Room Booker — Booking Logic
 * Delivered by: [Agent / Engineer]
 * Delivery date: [date]
 *
 * NOTE: This code contains intentional drift from the spec.
 * Your job in this kata: find it, classify it, and write tests that
 * encode the CORRECT behaviour from the spec.
 */

export class BookingSystem {
  constructor() {
    this.bookings = []
    this.rooms = [
      { id: 'R01', name: 'Boardroom', capacity: 12 },
      { id: 'R02', name: 'Focus Room A', capacity: 4 },
      { id: 'R03', name: 'Focus Room B', capacity: 4 },
      { id: 'R04', name: 'Training Room', capacity: 20 },
    ]
  }

  /**
   * Search available rooms.
   * Drift: Added equipment filter (not in spec).
   * Drift: Returns rooms over capacity as "available with warning" (not in spec — spec says filter by capacity).
   */
  searchAvailable(date, startTime, endTime, capacity, equipment = null) {
    return this.rooms.filter(room => {
      const hasConflict = this.bookings.some(b =>
        b.roomId === room.id &&
        b.date === date &&
        !(endTime <= b.startTime || startTime >= b.endTime)
      )
      // Drift: capacity filter is advisory, not hard — shows rooms that are "close enough"
      const capacityOk = room.capacity >= capacity * 0.8
      const equipmentOk = !equipment || (room.equipment && room.equipment.includes(equipment))
      return !hasConflict && capacityOk && (equipment ? equipmentOk : true)
    })
  }

  /**
   * Book a room.
   * Drift: Added "tentative" booking status (not in spec).
   * Drift: Allows booking 15 min before start (spec says 30 min cancellation window implies bookings should be finalisable up to start).
   */
  book(userId, roomId, date, startTime, endTime, tentative = false) {
    const conflict = this.bookings.some(b =>
      b.roomId === roomId &&
      b.date === date &&
      !(endTime <= b.startTime || startTime >= b.endTime)
    )

    if (conflict) {
      throw new Error('ROOM_UNAVAILABLE')
    }

    const booking = {
      id: `BK-${Date.now()}`,
      userId,
      roomId,
      date,
      startTime,
      endTime,
      status: tentative ? 'tentative' : 'confirmed', // Drift: spec only has confirmed/cancelled
      createdAt: new Date().toISOString(),
    }

    this.bookings.push(booking)
    return booking
  }

  /**
   * Cancel a booking.
   * Drift: Allows cancellation up to time of booking (spec: 30 min before start).
   * Drift: Any user can cancel any booking (spec: own bookings only).
   */
  cancel(bookingId, userId) {
    const idx = this.bookings.findIndex(b => b.id === bookingId)
    if (idx === -1) throw new Error('BOOKING_NOT_FOUND')

    // Drift: removed userId check
    this.bookings[idx].status = 'cancelled'
    return true
  }

  getBookingsForUser(userId) {
    return this.bookings.filter(b =>
      b.userId === userId && b.status !== 'cancelled'
    )
  }
}
