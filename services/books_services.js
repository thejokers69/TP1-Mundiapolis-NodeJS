const BookModel = require("../models/Book");
const mongoose = require("mongoose");

// Input validation helper
function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

// Book data validation
function validateBookData(bookData) {
  const allowedFields = ['title', 'price', 'date_publication', 'author'];
  const validatedData = {};

  for (const field of allowedFields) {
    if (bookData[field] !== undefined) {
      // Type validation
      switch (field) {
        case 'title':
        case 'author':
          if (typeof bookData[field] === 'string' && bookData[field].trim().length > 0) {
            validatedData[field] = bookData[field].trim();
          }
          break;
        case 'price': {
          const price = parseFloat(bookData[field]);
          if (!isNaN(price) && price >= 0) {
            validatedData[field] = price;
          }
          break;
        }
        case 'date_publication': {
          const date = new Date(bookData[field]);
          if (!isNaN(date.getTime())) {
            validatedData[field] = date;
          }
          break;
        }
      }
    }
  }

  return validatedData;
}

async function getAllBooks() {
  return await BookModel.find();
}

async function getBookById(idB) {
  if (!isValidObjectId(idB)) {
    throw new Error("Invalid book ID format");
  }
  return await BookModel.findById(idB);
}

async function addBook(book) {
  const validatedBook = validateBookData(book);
  if (Object.keys(validatedBook).length === 0) {
    throw new Error("No valid book data provided");
  }
  return await BookModel.create(validatedBook);
}

async function deleteBookById(idB) {
  if (!isValidObjectId(idB)) {
    throw new Error("Invalid book ID format");
  }
  return await BookModel.findByIdAndDelete(idB);
}

async function updateBookById(idB, bookData) {
  if (!isValidObjectId(idB)) {
    throw new Error("Invalid book ID format");
  }

  const validatedData = validateBookData(bookData);
  if (Object.keys(validatedData).length === 0) {
    throw new Error("No valid update data provided");
  }

  return await BookModel.findByIdAndUpdate(idB, { $set: validatedData }, { new: true });
}
module.exports = { getAllBooks, getBookById, addBook, deleteBookById, updateBookById };
