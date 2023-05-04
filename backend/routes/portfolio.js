const router = require("express").Router();
const {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
  addPortfolio,
  updatePortfolio,
} = require("../controllers/portfolioController");
const { authenticate } = require("../middleware/auth");

router.get("/", getAllPortfolios);
router.get("/:id", getOnePortfolio);
router.get("/user/:id", getUserPortfolios);

router.post("/", addPortfolio);

router.put("/:id", updatePortfolio);

module.exports = router;
