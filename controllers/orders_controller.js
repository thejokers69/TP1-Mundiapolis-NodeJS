/*  TP1-MUNDIAPOLIS-NODEJS/controllers/orders_controller.js */
const orderService = require("../services/orders_services");

async function getAllOrders(req, res) {
  const orders = await orderService.getAllOrders();
  res.json(orders);
}
async function addOrder(req, res) {
  const orders = await orderService.addOrder(req.body);
  res.json(orders);
}
module.exports = { getAllOrders, addOrder };
 