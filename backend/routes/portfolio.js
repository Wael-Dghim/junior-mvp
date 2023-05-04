const router = require("express").Router();
const {
  getAllPortfolios,
  getOnePortfolio,
  getUserPortfolios,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");
const { authenticate } = require("../middleware/auth");

router.get("/", getAllPortfolios);
router.get("/:id", getOnePortfolio);
router.get("/user/:id", getUserPortfolios);

router.post("/", addPortfolio);

router.put("/:id", updatePortfolio);

router.delete("/:id", deletePortfolio);

module.exports = router;
