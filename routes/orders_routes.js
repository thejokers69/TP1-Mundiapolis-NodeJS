const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders_controller");
router
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.addOrder);

module.exports = router;
