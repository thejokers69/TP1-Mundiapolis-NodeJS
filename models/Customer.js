/*  TP1_1/models/Customer.js */
const mogoose = require("mongoose");
const customerSchema = new mogoose.Schema({
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
      type: mogoose.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const CustomerModel = mogoose.model("Customer", customerSchema);
module.exports = CustomerModel;
