const router = require("express").Router();
const {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
} = require("../controllers/portfolioController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, getAllPortfolios);
router.get("/:id", authenticate, getOnePortfolio);
router.get("/user/:id", authenticate, getUserPortfolios);

module.exports = router;
