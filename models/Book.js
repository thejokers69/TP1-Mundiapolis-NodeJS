<<<<<<< HEAD
const {type} = require("express/lib/response");
const mogoose= require("mongoose")
const bookSchema=new mogoose.Schema({
    title:{type:String, required:true},
    price:{type:Number,default:0},
    date_publication:{type:Date,default:Date.now},
    author:{type:String,required:true}
});
const BookModel=mogoose.model("Book",bookSchema);
module.exports=BookModel;
=======
const { type } = require("express/lib/response");
const mogoose = require("mongoose");
const bookSchema = new mogoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, default: 0 },
  date_publication: { type: Date, default: Date.now },
  author: { type: String, required: true },
  orders: [
    {
      type: mogoose.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const BookModel = mogoose.model("Book", bookSchema);
module.exports = BookModel;
>>>>>>> 8a6836a (Updated)
