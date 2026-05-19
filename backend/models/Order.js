const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  items: Array,
  totalPrice: Number,
});

module.exports = mongoose.model("Order", orderSchema);