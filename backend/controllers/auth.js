const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { fName, lName, username, password, email } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.send("Username/Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fName,
      lName,
      username,
      password: hashedPassword,
      email,
    });
    await newUser.save();
    const user = await User.findOne({ username });
    const token = jwt.sign({ id: user._id }, process.env.TOKEN);
    res.header({ authorization: token });
    res.json({ id: user._id, fName, lName, username, email });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { creds, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: creds }, { username: creds }],
    });
    if (!user) {
      return res.status(400).send("Incorrect username or email");
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.send("Incorrect password");
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN);
    res.set("authorization", token);
    return res.json({
      id: user._id,
      fName: user.fName,
      lName: user.lName,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { signup, login };
