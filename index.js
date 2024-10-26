/*  TP1-MUNDIAPOLIS-NODEJS/index.js */
const express = require("express");
const app = express();
<<<<<<< HEAD
const bookRouter = require("./routes/book.route");
const mongoose = require("mongoose");
//mongodb+srv://Cluster35308:<db_password>@cluster35308.gr2bx.mongodb.net/
=======
const bookRouter = require("./routes/books_routes");
const orderRouter = require("./routes/orders_routes");
const mongoose = require("mongoose");
require("dotenv").config();
//mongodb+srv://Cluster35308:vSqfEGyL7XdpIiKy@cluster35308.gr2bx.mongodb.net/
>>>>>>> 8a6836a (Updated)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/books", bookRouter);
<<<<<<< HEAD
=======
app.use("/api/orders", orderRouter);
>>>>>>> 8a6836a (Updated)

app.get("/", (req, res) => {
  res.send("My first express app");
});
// Etablir la connexion avec la base de donnees
// Et demarrer le serveur apres la connexion
mongoose
<<<<<<< HEAD
  .connect(
    "mongodb+srv://Cluster35308:vSqfEGyL7XdpIiKy@cluster35308.gr2bx.mongodb.net/db_catalog"
  )
  .then((result) => {
    // console.log("Connected to the database!");
    app.listen(9090,()=>console.log("Server is running on port 9090"));
=======
  .connect(process.env.MONGO_ULR)
  .then((result) => {
    // console.log("Connected to the database!");
    app.listen(process.env.PORT, () =>
      console.log("Server is running on port 9090")
    );
>>>>>>> 8a6836a (Updated)
  })
  .catch((err) => {
    console.log(err);
  });
