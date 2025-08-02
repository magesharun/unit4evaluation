const express=require('express');

const router=express.Router();

const Order=require('../models/order');

const Product=require('../models/product');


router.post('/',async(req,res)=>{
    const order=await Order.create(req.body);
    res.json(order);
})

router.get('/',async(req,res)=>{
    let filter={};
    if(req.query.after)
    {
        filter.createdAt={$gt:new Date(req.query.after)}
    }
    const orders=await Order.find(filter).populate('products.productId');
    res.json(orders)
})

router.get('byCategory',async(req,res)=>{
    const orders=await Order.find().populate('products.productId')
    const filtered=orders.filter(order=>order.products.some(p=>p.productId.categoryId>=1 && p.productId.categoryId<=20))
    res.json(filtered)
})

router.delete('/:id',async(req,res)=>{
    await Order.findByIdAndDelete(req.params.id)
    res.json({message:'Order Deleted'})
})

module.exports=router;