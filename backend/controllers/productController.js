const Product = require("../models/Product");
const productsData = require("../data/products");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    let products = await Product.find();

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

// REDUCE STOCK
const reduceStock = async (req, res) => {
  try {
    const { qty = 1 } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Not found" });

    if (product.stock < qty)
      return res.status(400).json({ message: "Not enough stock" });

    product.stock -= qty;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// RESTORE STOCK
const restoreStock = async (req, res) => {
  try {
    const { qty = 1 } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Not found" });

    product.stock += qty;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ⭐ ADMIN: UPDATE STOCK DIRECTLY
const updateStock = async (req, res) => {
  try {
    const { stock } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    product.stock = stock;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, price, category, image, description, stock } = req.body;

    const product = new Product({
      name,
      price,
      category,
      image,
      description,
      stock: stock || 10,
    });

    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
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
  createProduct,
  deleteProduct,
  getCategories,
};