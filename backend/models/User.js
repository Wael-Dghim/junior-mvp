const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  fName: String,
  lName: String,
  username: String,
  password: String,
  email: String,
  portfolios: Array,
});

module.exports = Mongoose.model("user", userSchema);
