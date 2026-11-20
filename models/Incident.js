const mongoose = require('mongoose');

// Information for each incident
const incidentInfo = new mongoose.Schema({
  title: { // name of IT problem
    type: String,
    required: true,
    maxlength: 100
  },

  description: { // explanation of the problem
    type: String,
    required: true,
    maxlength: 1000
  },

  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High']
  },

  status: {
    type: String,
    default: 'Open', // automatically displays as Open
  }

});

// Route Access: Server-side Validation
module.exports = mongoose.model('Incident', incidentInfo);