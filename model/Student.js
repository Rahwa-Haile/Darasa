const mongoose = require(mongoose);

const StudentSchema = new mongoose.Schema({
  name: {
    Type: String,
    required: [true, "Please provide name"],
    minimumLength: 3,
    maxLength: 50,
  },
  email: {
    Type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    Type: String,
    required: [true, "Please provide password"],
    minimumLength: 3,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
