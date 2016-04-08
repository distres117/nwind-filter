var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true
  }
});

var Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
