const router = require("express").Router();
const {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
  addPortfolio,
} = require("../controllers/portfolioController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, getAllPortfolios);
router.get("/:id", authenticate, getOnePortfolio);
router.get("/user/:id", authenticate, getUserPortfolios);

router.post("/", authenticate, addPortfolio);

module.exports = router;
