const mongoose = require('mongoose');

productSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  title:String,
 thumbnail:String,
 author:String,
  price:Number,
 
  
})

module.exports = mongoose.model('product',productSchema);
