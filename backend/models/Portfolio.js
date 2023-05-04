const Mongoose = require("mongoose");

const portfolioSchema = Mongoose.Schema({
  fName: String,
  lName: String,
  bio: String,
  skills: Array,
  experiences: Array,
  user: Object,
});

module.exports = Mongoose.model("portfolio", portfolioSchema);
