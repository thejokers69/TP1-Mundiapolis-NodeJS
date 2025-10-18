const orderService = require("../services/orders_services");

async function getAllOrders(req, res) {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addOrder(req, res) {
  try {
    const order = await orderService.addOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = { getAllOrders, addOrder };
 