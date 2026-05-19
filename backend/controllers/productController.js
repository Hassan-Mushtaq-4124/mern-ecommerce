const Product = require("../models/Product");
const productsData = require("../data/products");

const getProducts = async (req, res) => {
  try {
    let products = await Product.find();

    if (products.length === 0) {
      await Product.insertMany(productsData);
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };