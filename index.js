'use strict';

const
  bodyParser = require('body-parser'),
  config = require('config'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/send', function(req, res) {

  let url = config.get('url')
  let username = config.get('username')
  let password = config.get('password')
  let mobile = '0909999999'
  let message = 'message'
  let payload = `username=${username}&password=${password}&msisdn=${mobile}&message=${otpRandom}&sender=SMS&force=standard`

  console.log(payload);

  request({
    method: 'POST',
    url: url,
    headers: {
      'Content-type': ' application/x-www-form-urlencoded'
    },
    body: payload
  }, (error, response, body) => {

    if (error) console.error(error)

    console.log(body)

    res.json({status: true})

  })

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
