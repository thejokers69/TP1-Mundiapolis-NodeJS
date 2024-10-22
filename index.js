/*  TP1_1/index.js */
const express = require("express");
const app = express();
const bookRouter = require("./routes/book.route");
const mongoose = require("mongoose");
//mongodb+srv://Cluster35308:<db_password>@cluster35308.gr2bx.mongodb.net/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send("My first express app");
});
// Etablir la connexion avec la base de donnees
// Et demarrer le serveur apres la connexion
mongoose
  .connect(
    "mongodb+srv://Cluster35308:vSqfEGyL7XdpIiKy@cluster35308.gr2bx.mongodb.net/db_catalog"
  )
  .then((result) => {
    // console.log("Connected to the database!");
    app.listen(9090,()=>console.log("Server is running on port 9090"));
  })
  .catch((err) => {
    console.log(err);
  });
