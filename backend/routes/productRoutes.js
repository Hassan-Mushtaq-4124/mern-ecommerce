const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  reduceStock,
  restoreStock,
  updateStock, // ⭐ ADD THIS LINE
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);

router.put("/reduce/:id", reduceStock);
router.put("/restore/:id", restoreStock);

// ⭐ NEW STOCK CONTROL ROUTE
router.put("/update-stock/:id", updateStock);

module.exports = router;