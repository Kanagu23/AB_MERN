const mongoose =require("mongoose")
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/inventoryDB");
        console.log("Inventory DB Connected");

    } catch (error) {
        console.log("ERR:",error)
        process.exit("1")
    }
}

module.exports=connectDB