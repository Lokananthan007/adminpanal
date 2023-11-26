const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  category: {type:String,require:true,unique: true},
  subcategory: {type:String,require:true,unique: true}
});

module.exports = mongoose.model('Category', userSchema);