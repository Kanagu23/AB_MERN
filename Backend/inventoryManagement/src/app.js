const express = require("express");
const productRoutes=require("./routes/productRoutes");
const customerRouters = require("./routes/customerRoutes");

const app =express()
app.use(express.json())
app.use("/api/products",productRoutes)
app.use("/api/customers",customerRouters)

module.exports=app