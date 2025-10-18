const bookService = require("../services/books_services");

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getBookById(req, res) {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addBook(req, res) {
  const { title, author, price } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  try {
    const book = await bookService.addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteBookById(req, res) {
  try {
    const book = await bookService.deleteBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: `The book with id: ${req.params.id} has been deleted.`, book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateBookById(req, res) {
  try {
    const book = await bookService.updateBookById(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
