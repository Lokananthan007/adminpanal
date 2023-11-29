const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  category: {type:String,require:true},
  subcategory: {type:String,require:true}
});

module.exports = mongoose.model('Category', userSchema);