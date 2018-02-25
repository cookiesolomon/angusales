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
    connection.query('SELECT * from customers', function (err, result) {
      res.send(result);
  });
  
});

router.delete('/:id', function(req, res, next){
  connection.query('DELETE from customers WHERE id = ?', [req.params.id], function (error, result, fields){
   if (error) throw error;
    res.send({});
  });
});









module.exports = router;