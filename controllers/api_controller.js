// controllers/api_controller.js
const bookService = require("../services/books_services");
const orderService = require("../services/orders_services");
const customerService = require("../services/customers_services");

async function getAllData(req, res) {
  try {
    const books = await bookService.getAllBooks();
    const orders = await orderService.getAllOrders();
    const customers = await customerService.getAllCustomers();

    res.json({
      books,
      orders,
      customers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = { getAllData };
