/*  TP1-MUNDIAPOLIS-NODEJS/models/Order.js */
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
  },
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const CustomerModel = mongoose.model("Customer", customerSchema);
module.exports = CustomerModel;
