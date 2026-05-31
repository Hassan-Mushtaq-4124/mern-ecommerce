const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  reduceStock,
  restoreStock,
  updateStock,
  createProduct,
  deleteProduct,
  getCategories,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);

router.put("/reduce/:id", reduceStock);
router.put("/restore/:id", restoreStock);

router.put("/update-stock/:id", updateStock);

router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);

router.get("/categories/list", getCategories);

module.exports = router;