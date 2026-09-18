const express = require("express");
const cors= require("cors")

const productRoutes=require("./routes/productRoutes");
const customerRouters = require("./routes/customerRoutes");

const app =express()
app.use(cors({origin:["http://localhost:5173","http://localhost:3000"]}))
app.use(express.json())
app.use("/api/products",productRoutes)
app.use("/api/customers",customerRouters)

module.exports=app