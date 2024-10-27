// controllers/customers_controller.js
const customerService = require("../services/customers_services");

async function getAllCustomers(req, res) {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCustomerById(req, res) {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addCustomer(req, res) {
  try {
    const customer = await customerService.addCustomer(req.body);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteCustomerById(req, res) {
  try {
    const customer = await customerService.deleteCustomerById(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateCustomerById(req, res) {
  try {
    const customer = await customerService.updateCustomerById(
      req.params.id,
      req.body
    );
    if (!customer) return res.status(404).send("Customer not found");
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomerById,
  updateCustomerById,
};
