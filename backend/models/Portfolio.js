const Mongoose = require("mongoose");

const portfolioSchema = Mongoose.Schema(
  {
    fName: String,
    lName: String,
    bio: String,
    email: String,
    skills: Array,
    experiences: Array,
    user: String,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("portfolio", portfolioSchema);
