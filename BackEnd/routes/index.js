var express = require('express');
var router = express.Router();


var nodemailer = require('nodemailer');

console.log('parseInt(req.params.limit)');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('parseInt(req.params.limit)');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mdpolife202parseInt(req.params.limit)@gmail.com',
      pass: 'Mdp@olife202parseInt(req.params.limit)'
    }
  });
  console.log('2');
  
  var mailOptions = {
    from: 'mdpolife202parseInt(req.params.limit)@gmail.com',
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
