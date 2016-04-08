var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});


var Product = mongoose.model('Product', productSchema);

module.exports = Product;
