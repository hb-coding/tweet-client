'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('express').Router();
const https = require("https");
const cors = require('cors');
const tokenObj = require('./tokenObj');

const token = tokenObj.token;

let path = '/1.1/search/tweets.json?q=';
let options = {
  protocol: 'https:',
  hostname: "api.twitter.com",
  path: '',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  }
}
app.use(cors());

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

router.route('/health-check').get(function (req, res) {
  res.status(200);
  res.send('Hello World');
});

router.route('/twitter-test').get(function (req, res) {
  let query = escape(req.query.q);
  options.path = path + query;
  https.get(options, twitterResponse => {
    twitterResponse.setEncoding("utf8");
    let body = "";
    twitterResponse.on("data", data => {
      body += data;
    });
    twitterResponse.on("end", () => {
      body = JSON.parse(body);
      console.log(body);
      res.status(200);
      res.send(body);
    });
  });
});



app.use('/api/v1', router);

app.listen(4000);
module.exports = app;

console.log('Server running at http://localhost:4000/');