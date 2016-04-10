var morgan = require('morgan'),
  express = require('express'),
  bodyParser = require('body-parser');

module.exports = function(app){
  var publicFolder = __dirname + '/../public';
  app.use(bodyParser.json());
  app.use(express.static(publicFolder));
  app.use(morgan('dev'));
  app.use(require('serve-favicon')(publicFolder + '/favicon.ico'));
};
