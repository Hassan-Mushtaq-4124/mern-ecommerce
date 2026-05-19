const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    res.status(201).json({
      message: "Order placed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };