module.exports = function(app){
  app.use(function(req, res, next){
    var error = new Error('404 Page Not Found');
    error.status = 404;
    next(error);
  });

  app.use(function(err,req,res,next){
    console.log(err);
    res.status(err.status).send(err);
  });
};
