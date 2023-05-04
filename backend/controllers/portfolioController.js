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

module.exports = { getAllPortfolios, getOnePortfolio, getUserPortfolios };
