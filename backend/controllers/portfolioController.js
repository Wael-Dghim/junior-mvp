const Portfolio = require("../models/Portfolio");

const getAllPortfolios = async (req, res) => {
  res.json(await Portfolio.find());
};

const getOnePortfolio = async (req, res) => {
  res.json(await Portfolio.findById(req.params.id));
};

const getUserPortfolios = async (req, res) => {
  res.json(await Portfolio.find({ user: req.params.id }));
};

const addPortfolio = async (req, res) => {
  const { fName, lName, bio, email, experiences, skills } = req.body;
  try {
    const newPortfolio = new Portfolio({
      fName,
      lName,
      bio,
      email,
      experiences,
      skills,
    });
    await newPortfolio.save();
    res.status(200).send("Portfolio created successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
  addPortfolio,
};
