const express = require("express");
const Book = require("./models/Book");
const Customer = require("./models/Customer");
const Order = require("./models/Order");

const bookRouter = require("./routes/books_routes");
const orderRouter = require("./routes/orders_routes");
const customerRoute = require("./routes/customers_routes");
const apiRouter = require("./routes/api_routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routers
app.use("/api/books", bookRouter);
app.use("/api/orders", orderRouter);
app.use("/api/customers", customerRoute);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("My first express app");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(process.env.PORT || 9090, () =>
      console.log(`Server is running on port ${process.env.PORT || 9090}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
