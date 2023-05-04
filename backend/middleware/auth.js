const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { authenticate };
