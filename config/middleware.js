var morgan = require('morgan'),
  express = require('express'),
  bodyParser = require('body-parser');

module.exports = function(app){
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../public'));
  app.use(morgan('dev'));
  //add serve favicon
};
