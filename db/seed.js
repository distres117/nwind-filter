var db = require('./index.js'),
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  Product = require('./products'),
  Employee = require('./employees'),
  chalk = require('chalk');


var smalldata = {
  employees : [{name: 'Larry'}, {name: 'Moe'}, {name: 'Curly'}, {name: 'Shemp'}],
  products : [{name: 'foo'}, {name: 'bar'}, {name: 'bazz'}]
};


function seed(){
  return db().then(function(){
    return Promise.join(Employee.remove(), Product.remove());
  })
  .then(function(){
    if (process.env.SMALL){
      console.log(chalk.magenta('Seeding small...'));
      return Promise.join(Employee.insertMany(smalldata.employees), Product.insertMany(smalldata.products));
    }
    else {
      return Promise.resolve();
    }
  });
}

if(!process.env.TESTING){
  seed().then(function(){
    process.exit(0);
  });
}

module.exports = seed;
