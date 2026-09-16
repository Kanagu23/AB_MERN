const Customers = require("../models/Customers");

exports.getCustomers = async (req, res) => {
  try {
    const products = await Customers.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({
        message:err.message
    })
  }
};
exports.createCustomer=async(req,res)=>{
    try {
        const customer=await Customers.create(req.body);
        res.status(201).json(customer)
    } catch (err) {
        res.status(500).json({
        message:err.message
    })
    }
}