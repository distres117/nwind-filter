var express = require('express'),
  app = express(),
  middleware = require('./config/middleware'),
  routes = require('./config/routes'),
  errorHandling = require('./config/errorHandling');

app.set('root', __dirname);

middleware(app); //attach middleware
routes(app);
errorHandling(app);

module.exports = app;
