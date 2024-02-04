const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories",
    },
    level:{
        type:Number,
        required:true
    }
});
const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;
