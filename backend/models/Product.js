const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,

  rating: {
    type: Number,
    default: 4,
  },

  numReviews: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model(
  "Product",
  productSchema
);