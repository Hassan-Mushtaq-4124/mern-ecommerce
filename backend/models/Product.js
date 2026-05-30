const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,

  rating: {
    type: Number,
    default: 0,
  },

  numReviews: {
    type: Number,
    default: 0,
  },


  stock: {
    type: Number,
    required: true,
    default: 5,
  },
});

module.exports = mongoose.model("Product", productSchema);