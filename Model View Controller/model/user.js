const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
  },
});

// Model
const User = mongoose.model("info", userSchema);

module.exports = User;
 