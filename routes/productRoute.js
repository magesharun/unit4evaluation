const express=require('express');

const router=express.Router();

const Product=require('../models/product');

//create product

router.post('/',async(req,res)=>{
    const product=await Product.create(req.body);
    res.json(product);
})


//get all products or by price >=100

router.get('/',async(req,res)=>{
    const filter={};
    if(req.query.minPrice)
    {
        filter.price={$gte:Number(req.query.minPrice)}
    }
    const products=await Product.find(filter);
    res.json(products);
})

router.get('/:id',async(req,res)=>{
    const product=await Product.findById(req.params.id)
    res.json(product)
})

router.patch('/:id',async(req,res)=>{
    const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(product);
})

router.delete('/:id',async(req,res)=>{
    const product=await Product.findByIdAndDelete(req.params.id)
    res.json({message:"Deleted"})
})

module.exports=router;