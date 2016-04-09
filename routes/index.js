var router = require('express').Router(),
  mongoose = require('mongoose'),
  models = {products: require('../db/products'), employees: require('../db/employees')};

function startsWith(_startsWith, model){
    var re = new RegExp('^' + _startsWith);
    return model.find({name: re },null, {sort: {name: 1}});
}

function getAll(model){
  return model.find().then(function(instances){
    var hash = {};
    for(var i = 65; i < 91; i++ ){
      var char = String.fromCharCode(i);
      var filtered = instances.filter(it=>it.name[0]===char);
      if (filtered.length)
        hash[char] = filtered.sort((l,c)=> l.name.localeCompare(c.name));
    }
    return hash;
  });
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
    getAll(req.model).then(function(hash){
      res.json(hash);
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
