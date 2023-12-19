var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose=require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./src/routes'));

app.use(function(req, res, next) {
  next(createError(404));
});


mongoose.connect('mongodb+srv://leeinearth817:cnttvietnhatk17@cluster0.pjk9ees.mongodb.net/project_news')
//var app = express();    

var db = mongoose.connection;
db.on('error', function (error) {
  console.log('Connection error:', error);
});

db.once('open', function () {
  console.log('Connected to the database');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;