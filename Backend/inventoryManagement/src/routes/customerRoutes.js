const express = require("express");
const { getCustomers, createCustomer } = require("../controllers/customersControllers");
const customerRouters =express.Router()
customerRouters.get("/",getCustomers);
customerRouters.post("/",createCustomer)
module.exports=customerRouters