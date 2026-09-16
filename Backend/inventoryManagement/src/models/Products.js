const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"],
        trim:true,
        minLength:[2, "Product name must be at least 2 character"],
        maxLength:[100, "Product name cannot exceed 100 character"]
    },
    category:{
        type:String,
        required:[true,"Category is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[0,"Price cannot be negative"]
    },
    stock:{
        type:Number,
        required:true,
        min:[0,"Stock cannot be negative"],
        default:0
    },
   

}, {
    timestamps:true,
    versionKey:false
    })

module.exports=mongoose.model("Product",productSchema)