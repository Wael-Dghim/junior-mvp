const router = require("express").Router();
const {
  getAllPortfolios,
  getOnePortfolio,
} = require("../controllers/portfolioController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, getAllPortfolios);
router.get("/:id", authenticate, getOnePortfolio);

module.exports = router;
