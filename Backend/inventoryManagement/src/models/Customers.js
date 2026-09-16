const mongoose=require("mongoose");
const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        minLength:[2, "Name must be at least 2 character"],
        maxLength:[100, "Name cannot exceed 100 character"]
    }, 
}, {
    timestamps:true,
    versionKey:false
    })

module.exports=mongoose.model("Customers",customerSchema)