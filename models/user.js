const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Schema
const userSchema = new Schema({
   email:{
       type:String,
       required:true,
       unique:true,
       lowercase:true
   },
   password:{
    type:String,
    required:true
    }
});

// Create Model
const User = mongoose.model('user',userSchema)





// Export the model
module.exports = User
