const express= require("express");
const mongoose=require("mongoose");

const app=express();
app.use(express.json())

// MongoDB Connection


//mongoose.connect("mongodb://localhost:27017/products").then(()=>{
//     console.log("MongoDB Connected")
//     getCollection()
// }).catch((err)=>{
//     console.error("ERR:", err);
    
// })

// const init=async()=>{
//     try{
// const productDB=await mongoose.connect("mongodb://localhost:27017/products")
// const productCollection= mongoose.connection.db.collection("products")
// console.log(await productCollection.find({}).toArray())
//     }
//     catch(err){
//     console.error("ERR:", err);
    
// }
    

// }
const init=async()=>{
    try{
const productDB=await mongoose.createConnection("mongodb://localhost:27017/products").asPromise()
const testDB=await mongoose.createConnection("mongodb://localhost:27017/test").asPromise()
const productCollection= productDB.collection("products")
const orderCollection= productDB.collection("orders")
const usersCollection=testDB.collection("users")

console.log(await productCollection.find({ name: 'Sony WH-1000XM5'}).toArray())
    }
    catch(err){
    console.error("ERR:", err);
    
}
    

}
init()
const getCollection =async()=>{
const collections=await mongoose.connection.db.listCollections().toArray()
console.log(collections)
}



app.listen(3000,()=>{
    console.log("Server running on localhost:3000")
})