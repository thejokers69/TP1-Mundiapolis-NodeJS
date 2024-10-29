// TP1-MUNDIAPOLIS-NODEJS/services/customers_services.js
const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");
const CustomerModel = require("../models/Customer");
const bcrypt = require("bcrypt");

async function getAllCustomers() {
  return await CustomerModel.find();
}

async function getCustomerById(id) {
  return await CustomerModel.findById(id);
}

// async function addCustomer(customer) {
//   return await CustomerModel.create(customer);
// }
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
  return await CustomerModel.findByIdAndUpdate(id, customerData, { new: true });
}

async function login(user){
  const customer=await CustomerModel.findOne({"email":user.email});
  if(customer){
    const resultat= await bcrypt.compare(user.password,customer.password);
    if (resultat ){
      return true;
    }
  }
  return false;
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  // addCustomer,
  addUser,
  deleteCustomerById,
  updateCustomerById,
  login
};
