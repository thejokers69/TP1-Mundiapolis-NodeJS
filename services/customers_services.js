const CustomerModel = require("../models/Customer");
const bcrypt = require("bcrypt");

async function getAllCustomers() {
  return await CustomerModel.find();
}

async function getCustomerById(id) {
  return await CustomerModel.findById(id);
}

async function addUser(user) {
  if (!user.password) {
    throw new Error("Password is required");
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  return await CustomerModel.create(user);
}

async function deleteCustomerById(id) {
  return await CustomerModel.findByIdAndDelete(id);
}

async function updateCustomerById(id, customerData) {
  const allowedFields = ['fName', 'lName', 'email', 'adress'];
  const updateData = {};
  for (const key of allowedFields) {
    if (customerData[key] !== undefined) {
      updateData[key] = customerData[key];
    }
  }
  return await CustomerModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });
}

async function login(user) {
  const customer = await CustomerModel.findOne({ email: user.email });
  if (customer) {
    const isValidPassword = await bcrypt.compare(user.password, customer.password);
    if (isValidPassword) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  addUser,
  deleteCustomerById,
  updateCustomerById,
  login
};
