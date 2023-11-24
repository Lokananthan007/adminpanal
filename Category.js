// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcategory: { type: String },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
