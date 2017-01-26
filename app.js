var express = require('express');
var https = require('https');
var http = require('http');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  res.sendFile('index.html');
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
    .auth(false, false, true, process.env.bfYhWezjH9V14BS1OyPqGKt_h-ofi9bc_PH4PMPCSH1nwSr_AlW583nJuPGNPhq2wQoHpWqbsR7HrSM1iihyuh57XUKzTFqH0w6Dg_eSlDpRYxBph79Z8e8QEJVEWHYx)
});

app.listen(process.env.PORT || 5000)