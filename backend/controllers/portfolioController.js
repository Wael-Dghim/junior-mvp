const Portfolio = require("../models/Portfolio");

const getAllPortfolios = async (req, res) => {
  res.json(await Portfolio.find());
};

const getOnePortfolio = async (req, res) => {
  res.json(await Portfolio.findById(req.params.id));
};

const getUserPortfolios = async (req, res) => {
  console.log(req.params.id);
  res.json(await Portfolio.find({ user: req.params.id }));
};

const addPortfolio = async (req, res) => {
  const { fName, lName, bio, email, experiences, skills, user } = req.body;
  try {
    const newPortfolio = new Portfolio({
      fName,
      lName,
      bio,
      user,
      email,
      experiences,
      skills,
    });
    await newPortfolio.save();
    res.status(200).json({ message: "Portfolio created successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePortfolio = async (req, res) => {
  const { fName, lName, bio, email, experiences, skills, user } = req.body;
  const { id } = req.params;
  try {
    await Portfolio.updateOne(
      { _id: id },
      {
        $set: {
          fName,
          lName,
          bio,
          user,
          email,
          experiences,
          skills,
        },
      }
    );
    res.send("Portfolio updated successfully");
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
  addPortfolio,
  updatePortfolio,
};
