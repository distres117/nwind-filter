module.exports = function(app){
  app.all('/*', function(req, res) {
   res.sendfile(app.get('root') + '/public/index.html');
 });
  // app.use(function(req, res, next){
  //   var error = new Error('404 Page Not Found');
  //   error.status = 404;
  //   next(error);
  // });

  app.use(function(err,req,res,next){
    console.log(err);
    res.status(err.status).send(err);
  });
};
