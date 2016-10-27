var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodeOverride = require('method-override');
var _ = require('lodash');

//create the application
var app = express();

//Add Middleware. Necessary for REST API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodeOverride('X-HTTP-Method-Override'));

//CORS support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/first_MEAN_app');
mongoose.connection.once('open', function(){
  console.log('Listening on port 3000...');
  app.listen(3000);
});
