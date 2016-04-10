var db = require('./index.js'),
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  Product = require('./products'),
  Employee = require('./employees'),
  chalk = require('chalk'),
  faker = require('faker');


var smalldata = {
  employees : [{name: 'Lenny'}, {name: 'Moe'}, {name: 'Curly'}, {name: 'Shemp'}, {name: 'Larry'}, {name: 'Zeke'}],
  products : [{name: 'Foo'}, {name: 'Bar'}, {name: 'Bazz'}]
};

function seed(){
  return db().then(function(){
    return Promise.join(Employee.remove(), Product.remove());
  })
  .then(function(){
    var seedData;
    if (process.env.SMALL)
      seedData = smalldata;
    else {
      seedData = {
        employees: [],
        products: []
      };
      var i = 100;
      while(i--){
        seedData.employees.push({name: faker.name.findName()});
        seedData.products.push({name: faker.commerce.productName()});
      }
    }
    console.log(seedData);
    console.log(chalk.magenta('Seeding...'));
    return Promise.join(Employee.insertMany(seedData.employees), Product.insertMany(seedData.products));
  })
  .catch(function(err){
    console.log(err);
  });
}

if(!process.env.TESTING){
  seed().then(()=>process.exit(0));
}

module.exports = seed;
