const OrderModel=require("../models/Order");
async function getAllOrders(){
    return await OrderModel.find();
}
async function addOrder(){
    return await OrderModel.create(orders);
}
module.exports={getAllOrders,addOrder};