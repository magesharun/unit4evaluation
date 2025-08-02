const mongoose =require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    categoryId:Number,
    stock:Number,
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Product',productSchema);