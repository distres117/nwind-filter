var express = require('express'),
  app = express(),
  middleware = require('./config/middleware'),
  routes = require('./routes'),
  errorHandling = require('./config/errorHandling');

middleware(app); //attach middleware
routes(app);
errorHandling(app);

module.exports = app;
