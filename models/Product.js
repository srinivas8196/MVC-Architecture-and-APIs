// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  totalQuantity: Number,
  category: String,
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);