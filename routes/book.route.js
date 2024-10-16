/*  TP1_1/routes/book.route.js */
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controllers");

router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.addBook);
router
  .route("/book/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById)
  .patch(bookController.updateBookById);

  module.exports=router