var db = require('./index.js'),
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  Product = require('./products'),
  Employee = require('./employees'),
  chalk = require('chalk');


var smalldata = {
  employees : [{name: 'Lenny'}, {name: 'Moe'}, {name: 'Curly'}, {name: 'Shemp'}, {name: 'Larry'}, {name: 'Zeke'}],
  products : [{name: 'Foo'}, {name: 'Bar'}, {name: 'Bazz'}]
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
  return seed();
}

module.exports = seed;
