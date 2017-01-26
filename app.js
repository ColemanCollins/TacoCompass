var express = require('express');
var https = require('https');
var http = require('http');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  res.sendFile('' + __dirname + '/index.html');
});

app.get('/tacos', function(req, res) {
  console.log('getting tacos');
  var latitude = req.query.latitude
  var longitude = req.query.longitude
  request({
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search?term=taqueria&latitude=' + latitude + '&longitude=' + longitude + '&limit=1&open_now=true&sort_by=distance', 
    }, function(error,response,body) {
      if (!error && response.statusCode == 200) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send(body);
        console.log(body);
      } else {
        res.status(502).send('yelp is mad at you')
        console.log(error);
        console.log(response.statusCode);
      }
    })
    .auth(false, false, true, process.env.YELP_BEARER_TOKEN)
});

app.listen(process.env.PORT || 5000)