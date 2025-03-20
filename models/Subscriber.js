//mongodb schema

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("subscribers", userSchema);

module.exports = User;