var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');

var app = express();

app.get('/', function (req, res) {
  res.send('root')
})

app.use(express.static(path.join(__dirname, 'build')));

module.exports = app;
