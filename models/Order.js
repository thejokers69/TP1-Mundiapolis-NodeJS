/*  TP1-MUNDIAPOLIS-NODEJS/models/Order.js */
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
  },
  books: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Book",
    },
  ],
});
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
