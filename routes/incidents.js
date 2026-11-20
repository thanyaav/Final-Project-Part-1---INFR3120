const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

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

router.get('/new', function(req, res) {
  res.render('new-incident');
});

// Save Incident to MongoDB
router.post('/', function(req, res) {
  const newIncident = new Incident({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority
  });

  newIncident.save()
    .then(function() {
      res.redirect('/incidents');
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Error saving incident');
    });
});

module.exports = router;