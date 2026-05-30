const Product = require("../models/Product");
const productsData = require("../data/products");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    let products = await Product.find();

    // seed only once
    if (products.length === 0) {
      await Product.insertMany(productsData);
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REDUCE STOCK (ADD TO CART)
const reduceStock = async (req, res) => {
  try {
    const { qty = 1 } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock < qty) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    product.stock -= qty;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// RESTORE STOCK (REMOVE FROM CART)
const restoreStock = async (req, res) => {
  try {
    const { qty = 1 } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.stock += qty;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStock = async (req, res) => {
  try {
    const { change } = req.body; // +1 or -1
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    product.stock += change;

    if (product.stock < 0) product.stock = 0;

    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  reduceStock,
  restoreStock,
  updateStock, 
};