/*  TP1-MUNDIAPOLIS-NODEJS/models/Book.js */
const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, default: 0 },
  date_publication: { type: Date, default: Date.now },
  author: { type: String, required: true },
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;
