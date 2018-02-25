var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mysql= require('mysql');
var customers = require('./routes/customers-route.js');
var companies = require('./routes/companies-route');
var app = express();

  

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));



app.use('/api/companies', companies);
app.use('/api/customers', customers);
//  app.use('/api/customers/:id', customers);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
 });

//  app.delete('/api/customers/:id', function (req, res){
// console.log(req.body);
// connection.query('DELETE FROM customers WHERE id=?', [req.params.id], function (error, results, fields) {
//   if (error) throw error;
//   res.send('Record has been deleted!');
// });

 //);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500);
});

// app.get('/', function(req, res){
//   res.send(rows)
// });



module.exports = app;