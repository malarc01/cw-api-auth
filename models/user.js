const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Schema
const userSchema = new Schema({
   email:String,
   password:String
})

// Create Model
const User = mongoose.model('user',userSchema)





// Export the model
module.exports = User
