const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// pulls incidents from MongoDB
router.get('/', function(req, res) {
  Incident.find().then(function(incidents) {
    // displays on incident dashboard
    if (incidents.length > 0) {
      res.render('view-incidents', {incidents: incidents});
    } else { // displays empty if none
      res.render('view-incidents', {incidents: []});
    }
  })
  .catch(function(err) { // error handler when loading incidents
    console.log(err);
    res.status(500).send('Error loading incidents');
  });
});

// opens form for new incidents
router.get('/new', function(req, res) {
  res.render('new-incident');
});

// saves incidents to MongoDB
router.post('/', function(req, res) {
  const newIncident = new Incident({
    title: req.body.title, // info submitted via form
    description: req.body.description,
    priority: req.body.priority
  });

  newIncident.save() // saves to database
    .then(function() {
      res.redirect('/incidents');
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('Error saving incident');
    });
});

module.exports = router; // for app.js to access