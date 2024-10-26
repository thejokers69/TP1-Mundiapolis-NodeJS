/*  TP1_1/routes/books_routes.js */
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books_controller");

router.route("/").get(bookController.getAllBooks).post(bookController.addBook);
router
  .route("/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById)
  .patch(bookController.updateBookById);

module.exports = router;
