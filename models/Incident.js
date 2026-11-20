const mongoose = require('mongoose');

// Information for each incident
const incidentInfo = new mongoose.Schema({
  title: { // name of IT problem
    type: String,
    required: true,
  },

  description: { // explanation of the problem
    type: String,
    required: true,
  },

  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High']
  },

  status: {
    type: String,
    default: 'Open', // automatically displays as Open
    enum: ['Open', 'In Progress', 'Resolved']
  },

  createdAt: { // automatically records when the incident was created
    type: Date,
    default: Date.now
  }
});

// Route Access
module.exports = mongoose.model('Incident', incidentInfo);