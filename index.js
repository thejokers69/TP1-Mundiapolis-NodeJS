/*  TP1_1/index.js */
const express=require("express");
const app=express();
const bookRouter=require("./routes/book.route")

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",bookRouter );
app.get("/",(req,res)=>{
    res.send("My first express app");
});
app.listen(9090);