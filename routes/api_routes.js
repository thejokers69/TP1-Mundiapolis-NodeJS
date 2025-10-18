const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api_controller");

router.get("/", apiController.getAllData);

module.exports = router; 