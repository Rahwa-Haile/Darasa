const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Student", StudentSchema);
