const BookModel = require("../models/Book");


async function getAllBooks(){
    return await BookModel.find();
    

}
async function getBookById(idB){
    return await BookModel.findById(idB);
    
}
async function addBook(){
    return await BookModel.create(books);
    
}
async function deleteBook(idB){
    return await BookModel.findByIdAndDelete(idb);
}
async function updateBook(idB,books){
    return await BookModel.findByIdAndUpdate(idb,books)
}
module.exports={getAllBooks, getBookById, addBook, deleteBook, updateBook};