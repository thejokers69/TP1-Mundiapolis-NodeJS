// services/customers_services.js
const CustomerModel = require("../models/Customer");

async function getAllCustomers() {
  return await CustomerModel.find();
}

async function getCustomerById(id) {
  return await CustomerModel.findById(id);
}

async function addCustomer(customer) {
  return await CustomerModel.create(customer);
}

async function deleteCustomerById(id) {
  return await CustomerModel.findByIdAndDelete(id);
}

async function updateCustomerById(id, customerData) {
  return await CustomerModel.findByIdAndUpdate(id, customerData, { new: true });
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomerById,
  updateCustomerById,
};
