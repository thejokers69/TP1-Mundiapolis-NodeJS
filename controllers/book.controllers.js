/*  TP1_1/controllers/book.controllers.js */
const books = [
  { id: 1, title: "ExpressJS programming", price: 20 },
  { id: 2, title: "NodeJS programming", price: 30 },
  { id: 3, title: "AngularJS programming", price: 40 },
];

function getAllBooks(req, res) {
  if (req.query.q) {
    const booksCopy = books.filter((b) =>
      b.title.toLowerCase().includes(req.query.q.toLowerCase())
    );
    res.json(booksCopy);
  } else {
    res.json({ books });
  }
}

function getBookById(req, res) {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.json(book);
}

function addBook(req, res) {
  const book = req.body;
  book.id = books[books.length - 1].id + 1;
  books.push(book);
  res.send("The book is added.");
}

function deleteBookById(req, res) {
  const index = books.findIndex((b) => b.id == req.params.id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }
  books.splice(index, 1);
  res.send(`The book with id: ${req.params.id} has been deleted.`);
}

function updateBookById(req, res) {
  const index = books.findIndex((b) => b.id == req.params.id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }

  books[index].title = req.body.title || books[index].title;
  books[index].price = req.body.price || books[index].price;

  res.send(`The book with id: ${req.params.id} has been updated.`);
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
