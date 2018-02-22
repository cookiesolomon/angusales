var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from customers', function (err, result) {
    res.send(data);
    console.log(data);
  });
  
});

module.exports = router;


  