const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userName:String,
    email:String,
    phone:Number,
    password:String,
   
    
})

module.exports = mongoose.model('user',userSchema);
