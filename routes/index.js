var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET route for displaying the incident creation form
router.get('/incidents/new', function(req, res, next) {
  res.render('new-incident');
});
module.exports = router;
