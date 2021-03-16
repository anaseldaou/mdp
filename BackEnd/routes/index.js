var express = require('express');
var router = express.Router();


var nodemailer = require('nodemailer');

console.log('1');
/* GET home page. */
router.get('/', function(req, res, next) {
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

  res.render('index', { title: 'Express' });

});

module.exports = router;
