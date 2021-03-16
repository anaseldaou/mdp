var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var passport = require('passport');
var authenticate = require('./authenticate');

var DeviceRouter = require('./routes/DevicesRouter');
var parameterRouter = require('./routes/ParametersRouter');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');

var config = require('./config');
const url = config.mongoUrl;
const connect = mongoose.connect(url);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(auth);
app.use('/Devices',DeviceRouter);
app.use('/parameter',parameterRouter);
app.use('/users', usersRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var nodemailer = require('nodemailer');


console.log('1');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mdpolife2021@gmail.com',
    pass: 'Mdp@olife2021'
  }
});
console.log('2');

var mailOptions = {
  from: 'mdpolife2021@gmail.com',
  to: 'anas.eldaou@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
console.log('3');

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

console.log('4');






/*
function auth (req, res, next) {
  console.log(req.headers);
  var authHeader = req.headers.authorization;
  if (!authHeader) {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      next(err);
      return;
  }

  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == 'admin' && pass == 'password') {
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}*/
module.exports = app;
