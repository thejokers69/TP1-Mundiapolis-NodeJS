const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers_controller");
const rateLimit = require("express-rate-limit");

// Rate limiter: maximum of 5 requests per minute
const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts from this IP, please try again after a minute"
});
router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.addCustomer);
router.route("/:id")
  .get(customerController.getCustomerById)
  .delete(customerController.deleteCustomerById)
  .patch(customerController.updateCustomerById);

router.route("/login").post(loginLimiter, customerController.login);
module.exports = router;