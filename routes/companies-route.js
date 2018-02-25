var express = require('express');
var router = express.Router();

/* GET companies page. */
router.get('/', function(req, res, next) {
  res.send('companies');
});

module.exports = router;