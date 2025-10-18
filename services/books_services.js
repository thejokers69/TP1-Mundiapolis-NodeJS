const BookModel = require("../models/Book");

async function getAllBooks() {
  return await BookModel.find();
}
async function getBookById(idB) {
  return await BookModel.findById(idB);
}
async function addBook(book) {
  return await BookModel.create(book);
}
async function deleteBookById(idB) {
  return await BookModel.findByIdAndDelete(idB);
}
async function updateBookById(idB, bookData) {
  return await BookModel.findByIdAndUpdate(idB, bookData, { new: true });
}
module.exports = { getAllBooks, getBookById, addBook, deleteBookById, updateBookById };
