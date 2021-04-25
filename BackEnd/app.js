var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var passport = require('passport');
//var authenticate = require('./authenticate');


var parameterRouter = require('./routes/ParametersRouter');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');



var config = require('./config');
const url = config.mongoUrl;


/*
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
var Parameter;
var User;
async function run() {
  try {
    await client.connect();
    const database = client.db('MDP');
    Parameter = database.collection('Parameters');
    User = database.collection('Users');
    var i = Parameter.aggregate([
      { $group : { 
      _id : { year: { $year : "$timestamp" },
              month: { $month : "$timestamp" },
              week:{$week : "$timestamp"},
              day: { $dayOfMonth : "$timestamp" },
              hour: {$hour : "$timestamp"}},
               
      avg : {$avg:"$Temperature"},
      sum : {$sum:"$Temperature"}, //equivalent Pluie_cumulee par Heure
      min: {$min:"$Temperature"},
      max : {$max:"$Temperature"}},

  },
  {$limit:24},
  {$sort : {_id:1}}
   //day: { $dayOfMonth : "$timestamp" }  ,
   //hour: {$hour : "$timestamp"}  }}
  ]);

  console.log(i);
  
  }finally {}
} 
run()

const connect = mongoose.connect(url);
*/

const connectionParams={
  useNewUrlParser: true
}
const connect = mongoose.connect(url,connectionParams
).then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


var app = express();
// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(auth);
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/parameter',parameterRouter);
app.use('/users', usersRouter);




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
/*
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

console.log('4');


module.exports =app;
