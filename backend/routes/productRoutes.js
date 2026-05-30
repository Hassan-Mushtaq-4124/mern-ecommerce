const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  reduceStock,
  restoreStock,
  updateStock,
} = require("../controllers/productController");

// PUBLIC
router.get("/", getProducts);
router.get("/:id", getProductById);

// STOCK SYSTEM
router.put("/reduce/:id", reduceStock);
router.put("/restore/:id", restoreStock);

// ⭐ ADMIN STOCK UPDATE
router.put("/update-stock/:id", updateStock);

module.exports = router;