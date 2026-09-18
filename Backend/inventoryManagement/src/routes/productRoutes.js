const express = require("express");
const {getProducts, createProduct}=require("../controllers/productControllers")
const productRouters =express.Router()
productRouters.get("/",getProducts);
productRouters.post("/",createProduct)
// productRouters.post("/addCategory",createProduct)

module.exports=productRouters