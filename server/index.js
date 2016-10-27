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
