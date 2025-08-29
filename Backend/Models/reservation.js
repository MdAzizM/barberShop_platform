const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  haircut: { type: String, required: true, trim: true },
  phone: { type: String, required: false, trim: true },
  ticketId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  notes: { type: String, trim: true },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  },
});

module.exports = mongoose.model('Reservation', ReservationSchema);