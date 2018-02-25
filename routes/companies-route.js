var express = require('express');
var router = express.Router();
var mysql= require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Cookie412',
  database : 'angusales'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

    connection.query('SELECT * from companies', function (err, result) {
      console.log(result);
      res.send(result);
  });
  
});


module.exports = router;