/*  TP1-MUNDIAPOLIS-NODEJS/routes/api_routes.js */
const express=require("express");
const router= express.Router();
const apiController=require ("../controllers/api_controller");

router.get("/",apiController.getAllData);

module.exports=router; 