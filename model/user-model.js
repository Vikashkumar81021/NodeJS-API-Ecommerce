const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobileNo:{
        type:String
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address"
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment_Information"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
  
const User=mongoose.model("User",userSchema)
module.exports=User