const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const token = req.headers.Authorization;

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
