var app = require('./app'),
  db = require('./db');

var port = process.env.PORT || 3000;
db().then(function(){
  console.log('Db is connected');
  app.listen(port, function(){
    console.log("Server running on " + port);
  });
});
