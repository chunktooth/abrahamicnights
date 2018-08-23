var express = require('express');
var path = require('path');
var app = express();

app.set('port');

app.use(express.compress());
app.use("/", express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './build/index.html'));
})

module.exports = app;