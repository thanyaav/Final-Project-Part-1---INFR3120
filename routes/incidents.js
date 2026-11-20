const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Form to create a new incident
router.get('/new', function(req, res) {
  res.render('create-incident');
});

// Show all incidents
router.get('/', function(req, res) {
  Incident.find().then(function(incidents) {
    if (incidents.length > 0) {
      res.render('view-incidents', {incidents: incidents});
    } else {
      res.render('view-incidents', {incidents: []});
    }
  })
  .catch(function(err) { // Error handling
    console.log(err);
    res.status(500).send('Error loading incidents');
  });
});

module.exports = router;