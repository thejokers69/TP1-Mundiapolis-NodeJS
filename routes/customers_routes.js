const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers_controller");
router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.addCustomer);
router.route("/:id")
  .get(customerController.getCustomerById)
  .delete(customerController.deleteCustomerById)
  .patch(customerController.updateCustomerById);

router.route("/login").post(customerController.login);
module.exports = router;