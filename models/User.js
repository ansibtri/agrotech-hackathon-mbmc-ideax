const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
      firstName:{
            type:String,
            require:true,
            min:3
      },
      lastName:{
            type:String,
            require:true,
            min:3
      },
      email:{
            type:String,
            required:true,
      },
      password:{
            type:String,
            required:true
      },
      contact:{
            type:String,
            required:true
      }
},{
      timestamps:true
})

module.exports = mongoose.model('User',UserSchema)