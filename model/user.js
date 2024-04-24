const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minimumlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address",
    ],

    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minimumlength: 3,
  },
  userType: {
    type: String,
    required: [true, 'Please provide userType'],
    enum: ['Instructor', 'Student'],
    default: 'Student'  
  }
});

module.exports = mongoose.model("User", UserSchema);
