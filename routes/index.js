var router = require('express').Router(),
  mongoose = require('mongoose'),
  models = {products: require('../db/products'), employees: require('../db/employees')};

function startsWith(startsWith, model){
    var re = new RegExp('^' + startsWith);
    return model.find({name: re });
}

router.param('type',function(req,res,next,type){
  if (models[type]){
    req.model = models[type];
    next();
  }
  else {
    var error = new Error("404 page not found");
    error.status = 404;
    next(error);
  }

});

router.route('/:type')
  .get(function(req,res,next){
    req.model.find().then(function(instances){
      res.json(instances);
    }, next);
  });

router.route('/:type/:firstLetter')
  .get(function(req,res,next){
    startsWith(req.params.firstLetter, req.model).then(function(instances){
      res.json(instances);
    }, next);
  });

module.exports = function(app){
  app.use('/api',router);
};
