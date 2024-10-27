/*  TP1-MUNDIAPOLIS-NODEJS/routes/books_routes.js */
const express = require("express");
const bookController = require("../controllers/books_controller");

const router = express.Router();

router.route("/").get(bookController.getAllBooks).post(bookController.addBook);
router
  .route("/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById)
  .patch(bookController.updateBookById);

module.exports = router;
