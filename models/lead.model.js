const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  companyName: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED'], default: 'PENDING' },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Lead', LeadSchema);
